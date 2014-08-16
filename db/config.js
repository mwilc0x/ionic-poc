module.exports = function (mongoose) {
  'use strict';
  var db,
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

    var GreetingSchema = mongoose.Schema({
      sentence: String
    });
    var Greeting = mongoose.model('GreetingSchema', GreetingSchema);

    mongoose.connect(dbPath);

    db = mongoose.connection;

    db.once('open', function(){
      var greeting;
      Greeting.find(function(err, greetings) {
        console.log('inside greetings');
        if(!greetings) {
          greeting = new Greeting({ sentence: greets });
          greeting.save();
        }
      }, function(err) {
           console.log(err);
      });
    });
};
