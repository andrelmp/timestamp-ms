'use strict';

var TimestampHandler = require('../../app/controllers/timestampHandler.js');

module.exports = function (app) {
   var timestampHandler = new TimestampHandler();

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });
      
   app.route('/:timestamp').get(timestampHandler.getTimestamp);
};
