var express = require('express');
var router = express.Router();
import Template from '../entity/template.js';
import { mapify } from 'es6-mapify';

function isEmpty(str) {
  return (!str || 0 === str.length);
}


router.route('/templates')
// create a user (accessed at POST http://localhost:8080/api/users)
         .post(function(req, res) {
           console.log("start action method");
            Template.create(req.body)
               .then(function(){
                 res.json({message: "Successfully created"});
               });
         })
  // get all the templates by conditions (accessed at GET http://localhost:8080/api/users)
         .get(function(req, res) {
           let cond={};
           for(let propt in req.query){
             let val =  req.query[propt];
             if(!isEmpty(val)){
               cond[propt]={$like:"%"+val+"%"};
             }
           }
            Template.findAll({
             where: cond
           }).then(function(templates){
             res.json(templates);
           });

    });

//users/1  //user
router.route('/templates/:id')
// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        // search for known ids
         Template.findById(req.params.id).then(function(template) {
          res.json(template);
        });
    })

// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function(req, res) {
        Template.update(req.body,{where:{id:req.params.id}})
            .then(function(){
                res.json({message: "Successfully created"});
            });
    })

// delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function(req, res) {
      Template.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.json({ message: 'Successfully deleted' });
        });
    });




module.exports = router;
