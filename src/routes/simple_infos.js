var express = require('express');
var router = express.Router();
import Simple_info from '../entity/simple_info';
import Customer from '../entity/customer';
import  multer from 'multer';
let upload = multer({ dest: 'public/uploads/' });
import path from 'path';
import fs from 'fs';

function isEmpty(str) {
  return (!str || 0 === str.length);
}

const web_context = path.resolve(path.join(__dirname, '../../', 'public'));

/* copy temp file to destination and add file path to object */
function save_file_and_add_prop(file,obj,cust_name) {
  let {filename,originalname,fieldname} = file;
  let image_name = "/"+cust_name+"/images/"+originalname;
  let dest = web_context + image_name;
  fs.renameSync(web_context+'/uploads/'+filename, dest);
  console.log(dest);
  // 将上传的图片的路径增加到将要保存到对象里面 add prop to obj needed to save
  obj[fieldname] = image_name;
}
router.route('/simple_infos')
    .post(upload.any(),function(req, res, next) {
      let simple_infos = req.body;
      let customer_id = simple_infos.customer_id;
      console.log(customer_id);
      Customer.findOne({where:{id:customer_id}})
              .then(function (cust) {
                let files = req.files;
                files.map(function(file) {
                  console.log(file);
                  save_file_and_add_prop(file, simple_infos, cust.name);
                });
                Simple_info.create(simple_infos)
                           .then(function(){
                             res.json({message: "Successfully created"});
                           });
              });
    }).get(function(req, res) {
      let cond={};
      for(let propt in req.query){
        let val =  req.query[propt];
        if(!isEmpty(val)){
          cond[propt]={$like:"%"+val+"%"};
        }
      }
      Simple_info.findAll({
        where: cond,
        include: [Customer]
      }).then(function(simple_infos){
        res.json(simple_infos);
      });

    });

//users/1  //user
router.route('/simple_infos/:id')
  // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
         .get(function(req, res) {
           // search for known ids
           Simple_info.findById(req.params.id).then(function(simple_info) {
             res.json(simple_info);
           });
         })

  // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
      .put(upload.any(),function(req, res) {
        let simple_info = req.body;
        let files = req.files;
        Customer.findOne({where:{id:simple_info.customer_id}}).then(({name})=>{
          files.map(function(file) {
            save_file_and_add_prop(file, simple_info,name);
          });
          Simple_info.update(simple_info,{where:{id:req.params.id}})
                     .then(function(){
                       res.json({message: "Successfully created"});
                     });
        });
      })

  // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
         .delete(function(req, res) {
           Simple_info.destroy({
             where: {
               id: req.params.id
             }
           }).then(function(){
             res.json({ message: 'Successfully deleted' });
           });
         });




module.exports = router;
