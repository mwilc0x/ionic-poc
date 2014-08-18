module.exports = function (app) {
  'use strict';

  app.get('/register/:name', function(req, res) {
    res.send('got ye user! ar! looks like ye searchin\' fer ' + req.params.id);
  });
};
