module.exports = function () {
  'use strict';

  var config = {
      'USER': process.env.USER || '',
      'PASS': process.env.PASS || '',
      'HOST': process.env.HOST,
      'PORT': process.env.PORT,
      'DATABASE': process.env.DB
    },
    dbPath = ['mongodb://', config.USER, ':',
              config.PASS, '@', config.HOST,
              ':', config.PORT, '/',
              config.DATABASE].join('');

    return {
      path: dbPath
    }
};
