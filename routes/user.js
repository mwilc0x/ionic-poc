module.exports = function (app) {
  'use strict';
  app.get('/user', function(req, res) {
    res.send('got ye user! ar!');
  });
};
