var express = require('express');
var router = express.Router();
import Working_hour from '../entity/working_hour.js';
import { mapify } from 'es6-mapify';

function isEmpty(str) {
  return (!str || 0 === str.length);
}


router.route('/working_hours')
// create a user (accessed at POST http://localhost:8080/api/users)
         .post(function(req, res) {
           console.log("start action method");
            Working_hour.create(req.body)
               .then(function(){
                 res.json({message: "Successfully created"});
               });
         })
  // get all the working_hours by conditions (accessed at GET http://localhost:8080/api/users)
         .get(function(req, res) {
           let cond={};
           for(let propt in req.query){
             let val =  req.query[propt];
             if(!isEmpty(val)){
               cond[propt]={$like:"%"+val+"%"};
             }
           }
            Working_hour.findAll({
             where: cond
           }).then(function(working_hours){
             res.json(working_hours);
           });

    });

//users/1  //user
router.route('/working_hours/:id')
// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        // search for known ids
         Working_hour.findById(req.params.id).then(function(working_hour) {
          res.json(working_hour);
        });
    })

// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function(req, res) {
        Working_hour.update(req.body,{where:{id:req.params.id}})
            .then(function(){
                res.json({message: "Successfully created"});
            });
    })

// delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function(req, res) {
      Working_hour.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.json({ message: 'Successfully deleted' });
        });
    });




module.exports = router;
