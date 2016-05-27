// wait for DOM to load before running JS
$(function() {

  // base API route
  var baseUrl = '/api/graphs';

  // array to hold graph data from API
  var allGraphs = [];

  // element to display list of graphs
  var $graphsList = $('#graphs-list');

  // form to create new graph
  var $creategraph = $('#create-graph');

  // compile handlebars template
  var source = $('#graphs-template').html();
  var template = Handlebars.compile(source);

  // helper function to render all graphs to view
  // note: we empty and re-render the collection each time our graph data changes
  var render = function() {
    // empty existing graphs from view
    $graphsList.empty();

    // pass `allGraphs` into the template function
    var graphsHtml = template({ graphs: allGraphs });

    // append html to the view
    $graphsList.append(graphsHtml);
  };

  // GET all graphs on page load
  $.get(baseUrl, function (data) {
    console.log(data);

    // set `allGraphs` to graph data from API
    allGraphs = data.graphs;

    // render all graphs to view
    render();
  });

  // listen for submit even on form
  $creategraph.on('submit', function (event) {
    event.preventDefault();

    // serialze form data
    var newgraph = $(this).serialize();

    // POST request to create new graph
    $.post(baseUrl, newgraph, function (data) {
      console.log(data);

      // add new graph to `allGraphs`
      allGraphs.push(data);

      // render all graphs to view
      render();
    });

    // reset the form
    $creategraph[0].reset();
    $creategraph.find('input').first().focus();
  });

  // add event-handlers to graphs for updating/deleting
  $graphsList

    // for update: submit event on `.update-graph` form
    .on('submit', '.update-graph', function (event) {
      event.preventDefault();

      // find the graph's id (stored in HTML as `data-id`)
      var graphId = $(this).closest('.graph').attr('data-id');

      // find the graph to update by its id
      var graphToUpdate = allGraphs.filter(function (graph) {
        return graph._id == graphId;
      })[0];

      // serialze form data
      var updatedgraph = $(this).serialize();

      // PUT request to update graph
      $.ajax({
        type: 'PUT',
        url: baseUrl + '/' + graphId,
        data: updatedgraph,
        success: function(data) {
          // replace graph to update with newly updated version (data)
          allGraphs.splice(allGraphs.indexOf(graphToUpdate), 1, data);

          // render all graphs to view
          render();
        }
      });
    })

    // for delete: click event on `.delete-graph` button
    .on('click', '.delete-graph', function (event) {
      event.preventDefault();

      // find the graph's id (stored in HTML as `data-id`)
      var graphId = $(this).closest('.graph').attr('data-id');

      // find the graph to delete by its id
      var graphToDelete = allGraphs.filter(function (graph) {
        return graph._id == graphId;
      })[0];

      // DELETE request to delete graph
      $.ajax({
        type: 'DELETE',
        url: baseUrl + '/' + graphId,
        success: function(data) {
          // remove deleted graph from all graphs
          allGraphs.splice(allGraphs.indexOf(graphToDelete), 1);

          // render all graphs to view
          render();
        }
      });
    });

});
