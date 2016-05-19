var express = require ('express');
var fresh = require('../routers/fresh');

var app = express();

app.use('/', fresh);

app.listen(9000, function () {
  console.log('okcool listening on port 9000');
};
