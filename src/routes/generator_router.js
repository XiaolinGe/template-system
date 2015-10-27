var express = require('express');

var router = express.Router();
import {sequelize,getColumnNamesFromTabel} from '../entity/db.js';
import Sequelize from 'sequelize';
import {generate, create_context}from '../common/templateKit';
import path from 'path';

// 代码生成器的route

//模板根路径
const template_folder = path.join(__dirname, '../../views');

//workflow
//1，在server中配置好路径
//2，在route中配置好增删该差功能


router.route('/all/:table_name').get(function(req,res) {
  let {table_name} = req.params;
  
  console.log(table_name);
  getColumnNamesFromTabel(table_name,function(results) {
    results = results.filter((e) => (e.data_type!='datetime'))
                     .filter((e) => (e.column_name!='id'));

    let context = create_context(table_name,results);
    let {table_name_single} = context;

    let temp_to_src=[{
      temp:"/generators.hbs",target: `./src/routes/${table_name}.js`
    },{
      temp:"/generator.hbs",target:`./src/entity/${table_name_single}.js`
    },{
      temp:"/generator_html.hbs",target:`./public/admin/${table_name}.html`
    },{
      temp:"/generator_page.hbs",target:`./public/admin/js/${table_name}_page.js`
    }];
    
    temp_to_src.map(({temp,target})=>generate(`${template_folder}${temp}`,target,context)
    );
  
    res.send("Files generated successfully");

  });
});



// get the js
router.route('/js/:id')
      .get(function(req,res) {
        let table_name = req.params.id;
        console.log("table_name: "+table_name);
        getColumnNamesFromTabel(table_name,function(results) {
          results = results.filter((e) => (e.data_type!='datetime'));        
          
          // 根据模版和数据生成文件到目标路径，
          //generate a file on target location based on template and data
          generate(`${template_folder}/generators.hbs`,"1.js",create_context(table_name,results));

          res.render('generators.hbs',context);
        });
      });


// get the entity
router.route('/entity/:id')
      .get(function(req,res) {
        let table_name = req.params.id;
        console.log("table_name: "+table_name);
        getColumnNamesFromTabel(table_name,function(results) {
          results = results.filter((e) => (e.data_type!='datetime'));        
          
          res.render('generator.hbs',create_context(table_name,results));
        });
      });

// get the html

router.route('/html/:id')
      .get(function(req,res) {
        let table_name = req.params.id;
        console.log("table_name: "+table_name);
        getColumnNamesFromTabel(table_name,function(results) {
          results = results.filter((e) => (e.data_type!='datetime'));

          res.render('generator_html.hbs',create_context(table_name,results));
        });
      });



// get the _page.js
router.route('/pagejs/:id')
                .get(function(req,res) {
                  let table_name = req.params.id;
                  console.log("table_name: "+table_name);
                  getColumnNamesFromTabel(table_name,function(results) {
                    results = results.filter((e) => (e.data_type!='datetime'));
                    
                    res.render('generator_page.hbs',create_context(table_name,results));
                  });
                });




module.exports = router;
