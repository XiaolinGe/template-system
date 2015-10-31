var express = require('express');
var router = express.Router();
import fs from 'fs-extra';
import User from '../entity/user';
router.route('/login')
    .post(function(req, res) {
        let body =req.body;
        console.log(body);
        User.findAll({
            where: body
        }).then(function(users){
          console.log(users);
            if(users.length==0){
               res.redirect("/admin/login.html");
            }else{
                req.session.user=users[0];
                res.redirect("/admin/index.html");
            }

        });
    });

router.route('/logout')
    .get(function(req, res) {
        res.redirect("/admin/login.html");
        req.session.user=null;
    });


module.exports = router;
