'use strict';

function timestampHandler() {
    var moment = require('moment');
    this.getTimestamp = function(req, res) {
        var returnObj = {
            unix: null,
            natural: null
        };
        
        var unixTime = Number(req.params.timestamp);
        var date = isNaN(unixTime) ? moment(req.params.timestamp) : moment(unixTime);

        if (date.isValid()){
            returnObj.unix = date.format('x')
            returnObj.natural = date.format('MMMM DD, YYYY', date);
        }
        
        res.writeHead(200, {'content-type':'application/json'});
        res.end(JSON.stringify(returnObj));
    };
}

module.exports = timestampHandler;