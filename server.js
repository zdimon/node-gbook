console.log('Start server');
var express = require('express');
var fs = require("fs");
var mustacheExpress = require('mustache-express');

var app = express();

// change extention

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

var path = __dirname + '/database.json';


if (fs.existsSync(path)==false){
    console.log('File does not exist sync!!!');
    
    fs.writeFileSync(path,JSON.stringify(
    
    {
        'messages': [
            {'user': 'Vova', 'message': 'Hello from Vova '},
            {'user': 'Dima', 'message': 'Hello from Dima'}, 
            {'user': 'Piter', 'message': 'Hello from Piter'}   
        ]
    }        
    
    )); 
    
}

var db = fs.readFileSync(path)
db = JSON.parse(db)


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
    

app.get('/', function (req, res) {
   res.render('index.html', db)
})


app.post('/guest', function (req, res) {
   //console.log(req.body);
   db['messages'].push(
            {
                'user': req.body.user,
                'message': req.body.message
            }
   );
   res.render('index.html', db);
})



var server = app.listen(8888, function () {
   console.log("I am running on 8888 port!")
   })
