var express = require('express');
var router = express.Router();
import Customer from '../entity/customer.js';
import Template from '../entity/template';
import mkdirp from 'mkdirp';
import mv from 'mv';
import path from 'path';
const web_context = path.resolve(path.join(__dirname, '../../', 'public')); //public 根目录
import fs from 'fs';

function isEmpty(str) {
    return (!str || 0 === str.length);
}


router.route('/customers')
// create a user (accessed at POST http://localhost:8080/api/users)
    .post(function(req, res) {
        console.log("start action method");
        Customer.create(req.body)
            .then(function(result) {
                mkdirp(web_context+"/"+result.name+"/images/", function (err) { //在新创建customer的时候，在public根目录下面创建一个同名的文件夹，同时在此文件夹下面建立一个images的文件夹，用来放要上传的图片
                    console.log(err);
                    res.json({message: "Successfully created"});
                });
            });
    })
// get all the customers by conditions (accessed at GET http://localhost:8080/api/users)
    .get(function(req, res) {
        let cond={};
        for(let propt in req.query){
            let val =  req.query[propt];
            if(!isEmpty(val)){
                cond[propt]={$like:"%"+val+"%"};
            }
        }
        Customer.findAll({
            where: cond,
            include:[Template]
        }).then(function(customers){
            res.json(customers);
        });

    });

//users/1  //user
router.route('/customers/:id')
// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        // search for known ids
        Customer.findById(req.params.id).then(function(customer) {
            res.json(customer);
        });
    })

// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function(req, res) {
        Customer.findById(req.params.id).then(function(customer) {
            console.log(customer.name);
            Customer.update(req.body,{where:{id:req.params.id}})
                .then(function() {
                    mv(web_context+"/"+customer.name, web_context+"/"+req.body.name+"/images/", {mkdirp: true}, function(err) {//当要剪辑修改customer的名字的时候，此时需要将public根目录下面的与原customer同名的文件夹改名为新的名字（即与新的customer同名）；
                        res.json({message: "Successfully created"});
                    });

                });
        });
    })

// delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function(req, res) {
        Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.json({ message: 'Successfully deleted' });
        });
    });



module.exports = router;
