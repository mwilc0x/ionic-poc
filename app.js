var http = require('http'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express(),
    server = http.createServer(app),
    io = require('socket.io'),
    io = io.listen(server),
    db,
    config = {
      'USER': '',
      'PASS': '',
      'HOST': 'ec2-54-164-3-135.compute-1.amazonaws.com',
      'PORT': '27017',
      'DATABASE': 'test'
    },
    dbPath = ['mongodb://', config.USER, ':',
              config.PASS, '@', config.HOST,
              ':', config.PORT, '/',
              config.DATABASE].join(''),
    greets = 'Welcome to ionic app db';

require('./sockets/base')(io);


    var GreetingSchema = mongoose.Schema({
      sentence: String
    });
    var Greeting = mongoose.model('GreetingSchema', GreetingSchema);

    mongoose.connect(dbPath);

    db = mongoose.connection;

    db.once('open', function(){
      var greeting;
      Greeting.find(function(err, greetings) {
        if(!greetings) {
          greeting = new Greeting({ sentence: greets });
          greeting.save();
        }
      }, function(err) {
           console.log(err);
      });
    });

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
