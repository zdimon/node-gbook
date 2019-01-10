console.log('Start server');
var express = require('express');
var fs = require("fs");
var mustacheExpress = require('mustache-express');

var app = express();

// change extention

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');



app.get('/', function (req, res) {
   res.render('index.html', {'name': 'Dima',
   
    'messages': [ 
           {'name': 'Dima', 
            'message': 'Hello everyone!'
           },
           {'name': 'Vova', 
            'message': 'Hello everyone from Vova!'
           }
     ]
   
   })
})

var server = app.listen(8888, function () {
   console.log("I am running on 8888 port!")
   })
