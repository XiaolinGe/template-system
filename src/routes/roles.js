var express = require('express');
var router = express.Router();
import Role from '../entity/role';

function isEmpty(str) {
  return (!str || 0 === str.length);
}


router.route('/roles')
  // get all the admin_menus by conditions (accessed at GET http://localhost:8080/api/admin_menus)
                           .get(function(req, res) {
                             let cond={};
                             for(let propt in req.query){
                               let val =  req.query[propt];
                               if(!isEmpty(val)){
                                 cond[propt]={$like:"%"+val+"%"};
                               }
                             }
                             Role.findAll({
                               where: cond,
                             }).then(function(roles){
                               res.json(roles);
                             });

                           });



module.exports = router;
