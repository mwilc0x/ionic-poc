module.exports = function (mongoose) {
  'use strict';
  var db,
    config = {
      'USER': process.env.USER || '',
      'PASS': process.env.PASS || '',
      'HOST': process.env.HOST,
      'PORT': process.env.PORT,
      'DATABASE': process.env.DB
    },
    dbPath = ['mongodb://', config.USER, ':',
              config.PASS, '@', config.HOST,
              ':', config.PORT, '/',
              config.DATABASE].join(''),
    greets = 'Welcome to ionic app db';

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
};
