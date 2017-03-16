var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res){
  res.sendfile("./index.html");
});

app.post('/', function(req, res){
  var name = req.body.txt;
  // res.sendfile("./index.html");
  res.send('What is up ' + name + '!');
});

app.listen(80);
console.log("Now listening on port 80");