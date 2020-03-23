#!/usr/bin/nodejs

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express');
var app = express();

var hbs = require('hbs');
var path = require('path');
var https = require('https');

var routes = require('./routes');

// var routes = require('./routes');

// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

app.set('port', process.env.PORT || 12063 );
app.use(express.static(path.join(__dirname, 'static')));


app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


routes.do_setup(app);

// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});