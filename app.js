var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();
var port = 5000;

app.use(morgan('tiny'));
 
app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(req, res){
    res.send('Hello from my Book Library App!');
});

app.get('/books', function(req, res){
    res.send('Hello Books');
});

app.listen(port, function(err){
    debug(`Server running on localhost: ${chalk.green(port)}`);
});