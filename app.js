(function(){
  'use strict';

  var http = require('http'),
      mongoose = require('mongoose'),
      express = require('express'),
      app = express(),
      router = express.Router(),
      server = http.createServer(app),
      io = require('socket.io'),
      io = io.listen(server);

  require('./sockets/base')(io);
  require('./db/config')(mongoose);
  require('./routes/main')(app);
  require('./routes/user')(app);

  app.use(function(err, req, res, next) {
    if(req.xhr) {
      res.send(500, 'Something went wrong');
    } else {
      next(err);
    }
  });

  console.log('Starting server');
  server.listen(3000);
  app.listen(8080);
  console.log('Webserver listening on port 8080');
})();
