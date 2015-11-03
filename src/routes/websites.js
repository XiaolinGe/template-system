var express = require('express');
var router = express.Router();
var path = require('path');
import Customer from '../entity/customer';
import Template from '../entity/template';


router.route('/info')
    .get(function(req, res) {
        let domain = req.headers.host.replace(/:.*$/,"");
        let url = req.url;
        let cond = {};
        if(domain=="skysee.co.nz"||domain=="www.skysee.co.nz"){ //如果是本站域名,用/后的用户名 skysee.co.nz/cafe
            let referer = req.header("referer");
            let name = referer.substring(referer.lastIndexOf("/")+1);
            cond.name=name;
        }else{         //不是本站用域名 leonzhou.xyz
            cond.domain=domain;
        }
        console.log(cond);
        Customer.findOne({
            where: cond
        }).then((e)=>{
            let {id, template_id} =  e;
            console.log(template_id+"--"+id);
            var mysql      = require('mysql');
            var connection = mysql.createConnection({
                multipleStatements: true,
                host     : '127.0.0.1',
                user     : 'root',
                password : 'root',
                database : 'jibble'
            });

            connection.connect();
            let sqls=[
                `select * from simple_infos where customer_id=${id}`,
                `select * from gallerys g where g.customer_id=${id}`,
                `select * from menus l where l.customer_id=${id}`,
                `select * from working_hours w where w.customer_id=${id}`]
                .join(";");
            connection.query(sqls, function(err,rows) {
                console.log(rows);
                res.json(rows);
                //在这个地方调用res,是因为只有拿到数据后才能res,而function（err,rows）这个函数是query这个拿数据的函数的回调函数；


            });
            connection.end();
        });

    });


router.route('/map')
    .get(function(req, res) {
        let domain = req.headers.host.replace(/:.*$/,"");
        let url = req.url;
        let cond = {};
        if(domain=="skysee.co.nz"||domain=="www.skysee.co.nz"){ //如果是本站域名,用/后的用户名 skysee.co.nz/cafe
            let referer = req.header("referer");
            let name = referer.substring(referer.lastIndexOf("/")+1);
            cond.name=name;
        }else{         //不是本站用域名 leonzhou.xyz
            cond.domain=domain;
        }
        console.log(cond);
        Customer.findOne({
            where: cond
        }).then((e)=>{
            let {id, template_id} =  e;
            console.log(template_id+"--"+id);
            var mysql      = require('mysql');
            var connection = mysql.createConnection({
                multipleStatements: true,
                host     : '127.0.0.1',
                user     : 'root',
                password : 'root',
                database : 'jibble'
            });

            connection.connect();
            let sqls=[
                `select address from simple_infos where customer_id=${id}`]
                .join(";");
            connection.query(sqls, function(err,rows) {
                console.log(rows);
                res.json(rows[0]);


            });
            connection.end();
        });

    });



router.route('/:cust')
    .get(function(req, res, next) {
        let domain = req.headers.host.replace(/:.*$/,"");
        console.log(domain);
        console.log(req.url);
        if(domain=="skysee.co.nz"||domain=="www.skysee.co.nz"){ //如果是本站域名,访问官网首页skysee/index.html
            let customer_name = req.url.substring(1);
            Customer.findOne({
                where: {name: customer_name}
            }).then(function (customer) {
                req.url="/demo"+customer.template_id +"/index.html";
                res.sendFile(req.url, { root : path.join(__dirname, '../../public')});
            });
        }
    });



router.route('/')
    .get(function(req, res) {
        let domain = req.headers.host.replace(/:.*$/,"");
        if(domain=="skysee.co.nz"||domain=="www.skysee.co.nz"){ //如果是本站域名,访问官网首页skysee/index.html
            req.url="/skysee/index.html";
            res.sendFile(req.url, { root : path.join(__dirname, '../../public')});
        }else{         //不是本站用域名 用/后的名字作为customer的name查找用户模板路径
            let customer_name = req.url.substring(0);
            Customer.findOne({
                where: {domain: domain},include: [Template]
            }).then(function (customer) {
                console.log(customer);
                req.url="/demo"+customer.template_id +"/index.html";
                res.sendFile(req.url, { root : path.join(__dirname, '../../public')});
            });
        }
    });

module.exports = router;
