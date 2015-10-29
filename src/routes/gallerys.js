var express = require('express');
var router = express.Router();
import Gallery from '../entity/gallery';
import Customer from '../entity/customer';
import fs from 'fs';
import path from "path";
import  multer from 'multer'
let  upload = multer({ dest: 'public/uploads/' });

function isEmpty(str) {
  return (!str || 0 === str.length);
}


router.route('/gallerys').post(upload.single('image'),function(req, res) {
            //文件上传功能
  let file = req.file;
  console.log(file);
            let {filename,originalname} = file;
            let web_context = path.resolve(path.join(__dirname, '../../', 'public'));
            console.log(web_context);
            fs.renameSync(web_context+'/uploads/'+filename,web_context+'/uploads/'+originalname);

            // 将上传的图片的路径增加到将要保存到对象里面 add prop to obj needed to save
            let gallery = req.body;
            gallery.image = originalname;
            Gallery.create(gallery)
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
              where: cond,
              include: [Customer]
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
