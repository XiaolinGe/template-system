var express = require('express');
var router = express.Router();
import Gallery from '../entity/gallery';
import Customer from '../entity/customer';
import Template from '../entity/template';
import sequelize from '../entity/db';
import fs from 'fs';
import path from "path";
import  multer from 'multer';
let upload  = multer({ dest: 'public/uploads/' });

function isEmpty(str) {
  return (!str || 0 === str.length);
}

const web_context = path.resolve(path.join(__dirname, '../../', 'public'));


/* copy temp file to destination and add file path to object */
function save_file_and_add_prop(file,obj,cust_name) {
    let {filename,originalname,fieldname} = file;
    let image_name = "/"+cust_name+"/images/"+originalname;
    let dest = web_context + image_name;
    console.log(dest);
    fs.renameSync(web_context+'/uploads/'+filename, dest);
    // 将上传的图片的路径增加到将要保存的对象里面 add prop to obj needed to save
    obj[fieldname] = image_name;
}


router.route('/gallerys')
    .post(upload.any(),function(req, res) {
        //文件上传功能
        let gallery = req.body;
        let customer_id = gallery.customer_id;
        Customer.findOne({where:{id:customer_id}})
            .then(function (cust) {
                let files = req.files;
                files.map(function(file) {
                    console.log(file);
                    save_file_and_add_prop(file, gallery, cust.name);
                });
                Gallery.create(gallery)
                    .then(function() {
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
      .put(upload.any(),function(req, res) {
        //upload.any()是用 enctype="multipart/form-data"对http的协议中的body进行解码 ，解码出的文件放在req.files， 解码出的健值对放在req.body, 对应http的client中body的编码的代码是：<form id="fm" method="post"  enctype="multipart/form-data">即用 enctype="multipart/form-data"把form表单中的数据进行编码
        let gallery = req.body;
        let files = req.files;
        Customer.findOne({where:{id:gallery.customer_id}}).then(({name})=> {
          files.map(function(file) {
            save_file_and_add_prop(file, gallery,name);
          });
          Gallery.update(gallery,{where:{id:req.params.id}})
                     .then(function(){
                       res.json({message: "Successfully created"});
                     });
        });

/* 
        Gallery.update(req.body,{where:{id:req.params.id}})
            .then(function() {
                res.json({message: "Successfully created"});
            });
*/        
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
