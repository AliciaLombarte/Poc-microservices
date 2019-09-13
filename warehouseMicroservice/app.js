var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Inventory = require('./api/models/inventory'), //created model loading here
  bodyParser = require('body-parser');
var consumer = require('./kafka-node/consumer');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/warehousedb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/warehouse'); //importing route
routes(app); //register the route


app.listen(port);

consumer.doGet('orderEvent');

console.log('todo list RESTful API server started on: ' + port);

