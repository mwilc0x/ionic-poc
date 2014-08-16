'use strict';

var http = require('http'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io'),
    io = io.listen(server);

require('./sockets/base')(io);
require('./db/config')(mongoose);

app.get('/', function(req, res) {
  Greeting.findOne(function(err, greeting) {
    res.send('oy');
  });
});

app.use(function(err, req, res, next) {
  if(req.xhr) {
    res.send(500, 'Something went wrong');
  } else {
    next(err);
  }
});

console.log('Starting node server');
server.listen(3000);
app.listen(8080);
console.log('Webserver listening on port 8080');
