module.exports = function (app) {
  'use strict';
  app.get('/user/:id', function(req, res) {
    res.send('got ye user! ar! lookin like ye searchin\' fer ' + req.params.id);
  });
};
