var express = require('express');
var router = express.Router();
var {operate} = require('../data/records');

router.get('/serv', function(req, res, next) {
    var ip = req.ip;
    operate(ip);
    res.send("serv ok");
});

module.exports = router;