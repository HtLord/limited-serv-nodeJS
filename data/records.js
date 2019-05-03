var records = [];

/*
    以此JavaScript來模擬DB。
    Array<Object>來記錄，Object包括ip、計數器、下一次刷新限制時間
    Array是為了可以利用map以及filter
 */

createRecord = (ip)=>{
    var d = new Date();
    if(records){
        records.push({IP: ip, Count: 1, Limit: createLimit(d)});
    }else{
        records = [];
        records.push({IP: ip, Count: 1, Limit: createLimit(d)});
    }
};

operate = (ip)=>{
    var d = new Date();
    if(records && records.length>0){
        var r = records.filter((r) => r.IP==ip);
        if(r && r[0]){
            if(isLimit(r[0], d)){
                r[0].Count++;
            }else{
                reset(r[0], d);
            }
        }else{
            createRecord(ip);
        }
    }else{
        createRecord(ip);
    }
};

isLimit = (r, d)=>{
    return r.Limit > d;
};

reset = (r, d)=>{
    if(r.Limit < d){
        r.Count = 0;
        r.Limit = createLimit(d);
    }
};

flushRecord = (d)=>{
    records.map((r)=>{
        reset(r, d)
    });
};

createLimit = (d)=>{
    var newMin = d.getMinutes()+1; //if the result is 61 min it will auto curry to hour
    d.setMinutes(newMin);
    return d;
};

dump = (r)=>{
    var d = new Date();
    flushRecord(d);
    if(r.Count<60){
        return r.Count+", "+r.IP+"<br/>";
    }else{
        return "Error, "+r.IP+"<br/>";
    }
};

module.exports = {records, operate, dump};