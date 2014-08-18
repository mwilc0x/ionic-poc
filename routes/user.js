module.exports = function (app) {
  'use strict';
  var User = require('../db/models/user')();

  app.get('/user/:id', function(req, res) {
    res.send('got ye user! ar! looks like ye searchin\' fer ' + req.params.id);
  });
};
