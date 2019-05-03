var express = require('express');
var router = express.Router();
var {records, dump} = require('../data/records');

/* GET home page. */
router.get('/', function(req, res, next) {
    var s = "";
    if(records.length!=0){
        records.map((r)=>{
            s = s.concat(dump(r));
        });
        res.send(s);
    }else{
        res.send("Im dashboard. No request inside.");
    }
});

module.exports = router;