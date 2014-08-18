(function(){
  'use strict';
  var mongoose = require('mongoose');

  var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    dob: Date
  });

  var User = mongoose.model('User', UserSchema);

  module.exports = {
    User: User
  }
})();
