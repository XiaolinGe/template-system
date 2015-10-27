var express = require('express');
var router = express.Router();
import Gallery from '../entity/gallery.js';
import { mapify } from 'es6-mapify';

function isEmpty(str) {
  return (!str || 0 === str.length);
}


router.route('/gallerys')
// create a user (accessed at POST http://localhost:8080/api/users)
         .post(function(req, res) {
           console.log("start action method");
            Gallery.create(req.body)
               .then(function(){
                 res.json({message: "Successfully created"});
               });
         })
  // get all the gallerys by conditions (accessed at GET http://localhost:8080/api/users)
         .get(function(req, res) {
           let cond={};
           for(let propt in req.query){
             let val =  req.query[propt];
             if(!isEmpty(val)){
               cond[propt]={$like:"%"+val+"%"};
             }
           }
            Gallery.findAll({
             where: cond
           }).then(function(gallerys){
             res.json(gallerys);
           });

    });

//users/1  //user
router.route('/gallerys/:id')
// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        // search for known ids
         Gallery.findById(req.params.id).then(function(gallery) {
          res.json(gallery);
        });
    })

// update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function(req, res) {
        Gallery.update(req.body,{where:{id:req.params.id}})
            .then(function(){
                res.json({message: "Successfully created"});
            });
    })

// delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function(req, res) {
      Gallery.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.json({ message: 'Successfully deleted' });
        });
    });




module.exports = router;
