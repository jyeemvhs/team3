
var express = require('express');

//go to below website to understand purpose of body-parser
//https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
//in order to read HTTP POST data , we have to use "body-parser" 
//node module. body-parser is a piece of express middleware that 
//reads a form's input and stores it as a javascript object 
//accessible through req.body

var bodyParser = require('body-parser');   //new

var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));  //new
app.use(bodyParser.json());                          //new

//don't do this   app.use('/', express.static('./'));
app.use('/', express.static('./public'));
app.use('/js', express.static('./public/js'));
app.use(routes);

var port = process.env.PORT || 3003;
app.listen(port);