# GraphSense
Create beautiful graphs with your micro-controller sensor data!

Created by Emily Anne Moses

**Objective:** Create easy to read and download graphs from micro-controller sensor data

Link to Heroku: https://graph-sense.herokuapp.com/

## Sensor Graph Overview
This application has the following REST endpoints:
  * `/api/login` log into your account
  * `/api/signup` sign up for new account
  * `GET /api/profile` to READ and UPDATE profile information
  * `GET /api/graphs` to READ all graphs
  * `POST /api/graphs` to READ and search all new graph
  * A database that stores graphs with time stamp information
  * Client-side templating
  * Bootstrap
  * PubNub (https://pubnub.com)

## Technologies used
  * MEAN Stack
    * Node.js
    * MongoDB
    * Express
    * Angular
  * Bootstrap
  * C++
  * JavaScript
  * jQuery
  * Arduino MKR 1000
  * Heroku
  * HTML5
  * CSS3
  * bcrypt

## Existing Features
1. Create a user with your email.
2. Copy and paste the appropriate C++ code for your sensor into your micro-controller console.
3. Go to your user profile page to see the data being collected in graph form
4. Download or print your graphs in multiple formats
5. View and download other users graphs
6. Search all graphs by sensor type name

Screenshot:
![Graph Sense Screenshot](public/images/graphSenseOne.png?raw=true "GraphSense")

![Graph Sense Screenshot](public/images/graphSenseTwo.png?raw=true "GraphSense")

![Graph Sense Screenshot](public/images/graphSenseThree.png?raw=true "GraphSense")

Github Link: https://github.com/eamoses/GraphSense
