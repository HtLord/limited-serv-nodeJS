var express = require('express');
var router = express.Router();
var {operate} = require('../data/records');

const ips = ["1.1.1.1", "1.1.1.2", "1.1.1.3", "1.1.1.4", "1.1.1.5"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

router.get('/fake', function(req, res, next) {
    ip="1.1.1.1";
    operate(ip);
    res.send("fake ["+ip+" times 1] ok");
    // res.send(data);
});

router.get('/fake/:ip', function(req, res, next) {
    ip = req.params.ip;
    operate(ip);
    res.send("fake ["+ip+" times 1] ok");
    // res.send(data);
});

router.get('/fake/:ip/loop/:times', function(req, res, next) {
    ip = req.params.ip;
    times = req.params.times;
    for(var i=0; i<times; i++){
        operate(ip);
    }
    res.send("fake ["+ip+" times "+times+"] ok");
    // res.send(data);
});

router.get('/fake/random/:times', function(req, res, next) {
    for(var i=0; i<req.params.times; i++){
        var ipsIndex = getRandomInt(ips.length);
        var reqTimes = getRandomInt(5);
        for(var j=0; j<reqTimes; j++){
            operate(ips[ipsIndex]);
        }
    }
    res.send("fake random range ok");
});


module.exports = router;