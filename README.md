# GraphSense
Create beautiful graphs with your micro-controller sensor data!

Created by Emily Anne Moses

**Objective:** Create easy to read graphs from micro-controller sensor data

## Sensor Graph Overview
This application has the following REST endpoints:
  * `GET /api/graphs` to READ all graphs
  * `POST /api/graphs` to CREATE a new graph
  * `GET /api/graphs/:id` to READ one graph
  * `PUT /api/graphs/:id` to UPDATE one graph
  * `DELETE /api/graphs/:id` to DELETE one graph
  * A persistent database that stores graphs with time stamp information
  * Client-side templating using Handlebars (and AJAX)
  * Bootstrap
  * Materialize

## Technologies used
  * MEAN Stack
  * Materialize
  * C++
  * JavaScript
  * etc...

## Initial Setup
1. Create a user with your email.
2. Copy and paste the appropriate C++ code for your sensor into your micro-controller console.
3. Go to your user profile page to see the data being collected in graph form
4. Download or print your graphs in multiple formats
