var express = require('express');
var router = express.Router();
var request = require('request');
var path = require('path');
router.route('/')
    .get(function(req, res) {
        let domain = req.headers.host.replace(/:.*$/,"");
        console.log(domain);
        if(domain=="localhost"){
            req.url="/demo1/index.html";
        }else if(domain=="127.0.0.1"){
            req.url="/demo2/index.html";
        }
        console.log(req.url);
        res.sendFile(req.url, { root : path.join(__dirname, '../../public')});

    });


module.exports = router;
