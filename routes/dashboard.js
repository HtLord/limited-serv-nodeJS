var express = require('express');
var router = express.Router();
var {records, dump} = require('../data/records');

/* GET home page. */
router.get('/', function(req, res, next) {
    var s = "";
    records.map((r)=>{
        s = s.concat(dump(r));
    });
    res.send(s);
});

module.exports = router;