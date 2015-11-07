var express = require('express');
var router = express.Router();
import Template from '../entity/template';
import fs from 'fs';
import path from "path";
import  multer from 'multer';
import unzip from 'unzip';
let upload  = multer({ dest: 'public/uploads/' });

function isEmpty(str) {
  return (!str || 0 === str.length);
}


//UI 输入模板名字（Google+ )并上传模板打包之后的zip包  (done)
//route/action  在template表根据接受的参数新增一条数据  (done)
//追加template_folder字段并更新该记录 （folder命名策略：demo+当前纪录id）
//解析http request body得到上传的zip包
//解压zip包中所有文件到template_folder字段指向的路径

/*
{ fieldname: 'template_folder',
  originalname: 'template.zip',
  encoding: '7bit',
  mimetype: 'application/zip',
  destination: 'public/uploads/',
  filename: '238baaa73f2a747d9ba19df5c743b75f',
  path: 'public/uploads/238baaa73f2a747d9ba19df5c743b75f',
  size: 57895253 }
*/



const web_context = path.resolve(path.join(__dirname, '../../', 'public'));



router.route('/templates')
// create a user (accessed at POST http://localhost:8080/api/users)
    .post(upload.single("template_folder"),function(req, res) {
        console.log("start action method");

        Template.create(req.body)
            .then(function(result) {
                
                let template_folder = "demo"+result.id;

                Template.update({template_folder: template_folder}, { where: {id: result.id}})
                    .then(function() {
                        let file = req.file;
                        console.log(file);
                        let {filename,originalname} = file;
                        console.log(web_context+"/uploads/"+filename);
                        //fs.createReadStream('path/to/archive.zip').pipe(unzip.Extract({ path: 'output/path' }))
                        fs.createReadStream(web_context+"/uploads/"+filename).pipe(unzip.Extract({ path: "/"+web_context}));
                        //fs.renameSync(oldPath, newPath)
                        fs.renameSync("/"+web_context+"/"+originalname.slice(0,-4), "/"+web_context+"/"+template_folder); //
                        res.json({message: "Successfully created"});                    
                    });
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
