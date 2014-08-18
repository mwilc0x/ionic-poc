module.exports = function (app) {
  'use strict';
  var User = require('../db/models/user');

  app.get('/user/:id', function(req, res) {
    res.send('got ye user! ar! looks like ye searchin\' fer ' + req.params.id);
    var user = new User({ firstName: req.params.id });
    console.log('User ' + user );

    // MongoDB will create the _id when inserted
    user.save(function (err) {
      if (err) return handleError(err);
      User.findById(user, function (err, doc) {
        if (err) return handleError(err);
        console.log(doc); // { name: 'mongodb.org', _id: '50341373e894ad16347efe12' }
      })
    })
  });
};
