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
  var html = 'Hello: ' + name + '<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

app.listen(80);
console.log("Now listening on port 80");