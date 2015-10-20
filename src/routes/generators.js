var express = require('express');
var router = express.Router();

import context from './generator_router.js';
import { mapify } from 'es6-mapify';

function isEmpty(str) {
  return (!str || 0 === str.length);
}

var obj = {age:1,name:1}
for(var prop in obj){
  console.log(prop);
  console.log(obj[prop])
}

router.route('/{{table_name}}')
// create a user (accessed at POST http://localhost:8080/api/users)
         .post(function(req, res) {
           console.log("start action method");
           User.create(req.body)
               .then(function(){
                 res.json({message: "Successfully created"});
               });
         })
  // get all the {{table_name}} by conditions (accessed at GET http://localhost:8080/api/users)
         .get(function(req, res) {
           let cond={};
           for(let propt in req.query){
             let val =  req.query[propt];
             if(!isEmpty(val)){
               cond[propt]={$like:"%"+val+"%"};
             }
           }
           User.findAll({
             where: cond
           }).then(function({{table_name}}){
             res.json({{table_name}});
           });

    });

//users/1  //user
router.route('/{{table_name}}/:id')
// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        // search for known ids
        User.findById(req.params.id).then(function({{table_name_single}}) {
          res.json({{table_name_single}});
        });
    })

// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function(req, res) {
        {{table_name_single_upper}}.update(req.body,{where:{id:req.params.id}})
            .then(function(){
                res.json({message: "Successfully created"});
            });
    })

// delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function(req, res) {
      {{table_name_single_upper}}.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.json({ message: 'Successfully deleted' });
        });
    });




module.exports = router;
