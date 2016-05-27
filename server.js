// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),

    //  NEW ADDITIONS
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// middleware for auth
app.use(cookieParser());
app.use(session({
  secret: 'supersecretkey', // change this!
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// require Graph model
var db = require('./models'),
    Graph = db.Graph;
    User = db.User;

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// HOMEPAGE ROUTE
app.get('/', function (req, res) {
    res.render('index', {user: JSON.stringify(req.user) + " || null"});
});

// API ROUTES

// show signup view
app.get('/signup', function (req, res) {
  res.render('signup'); // you can also use res.sendFile
});

// sign up new user, then log them in
// hashes and salts password, saves new user to db
app.post('/signup', function (req, res) {
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
});

// show login view
app.get('/login', function (req, res) {
  res.render('login'); // you can also use res.sendFile
});

// log in user
app.post('/login', passport.authenticate('local'), function (req, res) {
  console.log(req.user);
  res.redirect('/'); // preferred!
});

// log out user
app.get('/logout', function (req, res) {
  console.log("BEFORE logout", JSON.stringify(req.user));
  req.logout();
  console.log("AFTER logout", JSON.stringify(req.user));
  res.redirect('/');
});

// get all graphs
app.get('/api/graphs', function (req, res) {
  // find all graphs in db
  Graph.find(function (err, allGraphs) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ graphs: allGraphs });
    }
  });
});

// create new graph
app.post('/api/graphs', function (req, res) {
  // create new graph with form data (`req.body`)
  var newGraph = new Graph(req.body);

  // save new graph in db
  newGraph.save(function (err, savedGraph) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(savedGraph);
    }
  });
});

// get one graph
app.get('/api/graphs/:id', function (req, res) {
  // get graph id from url params (`req.params`)
  var graphId = req.params.id;

  // find graph in db by id
  Graph.findOne({ _id: graphId }, function (err, foundGraph) {
    if (err) {
      if (err.name === "CastError") {
        res.status(404).json({ error: "Nothing found by this ID." });
      } else {
        res.status(500).json({ error: err.message });
      }
    } else {
      res.json(foundGraph);
    }
  });
});

// update graph
app.put('/api/graphs/:id', function (req, res) {
  // get graph id from url params (`req.params`)
  var graphId = req.params.id;

  // find graph in db by id
  Graph.findOne({ _id: graphId }, function (err, foundGraph) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // update the gaphs's attributes
      foundGraph.title = req.body.title;
      foundGraph.description = req.body.description;

      // save updated graph in db
      foundGraph.save(function (err, savedGraph) {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(savedGraph);
        }
      });
    }
  });
});

// delete graph
app.delete('/api/graphs/:id', function (req, res) {
  // get graph id from url params (`req.params`)
  var graphId = req.params.id;

  // find graph in db by id and remove
  Graph.findOneAndRemove({ _id: graphId }, function (err, deletedGraph) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(deletedGraph);
    }
  });
});


// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});
