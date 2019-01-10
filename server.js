console.log('Start server');
var express = require('express');
var fs = require("fs");
var mustacheExpress = require('mustache-express');

var app = express(); // приложение...


var server = app.listen(8888, function () {
   console.log("I am running on 8888 port!")
   })
