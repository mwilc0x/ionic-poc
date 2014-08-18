(function(){
  'use strict';

  var http = require('http'),
      mongoose = require('mongoose'),
      express = require('express'),
      app = express(),
      server = http.createServer(app),
      config = require('./db/config')();

  mongoose.connect(config.path);
  mongoose.connection;

  require('./routes/main')(app);
  require('./routes/user')(app);

  app.use(function(err, req, res, next) {
    if(req.xhr) {
      res.send(500, 'Something went wrong');
    } else {
      next(err);
    }
  });

  app.listen(8080);
  console.log('Server listening...');
})();
