var express = require('express');
var router = express.Router();
import {sequelize,getColumnNamesFromTabel} from '../entity/db.js';
import Sequelize from 'sequelize';


// get the js
router.route('/js/:id')
      .get(function(req,res) {
        let table_name = req.params.id;
        console.log("table_name: "+table_name);
        getColumnNamesFromTabel(table_name,function(results) {
          results = results.filter((e) => (e.data_type!='datetime'));
          console.log(results);         
          // console.log(results.table_name);
          let table_name_single = table_name.slice(0,-1);
          let table_name_upper = table_name.substring(0,1).toUpperCase()+table_name.substring(1);
          let table_name_single_upper = table_name_single.substring(0,1).toUpperCase()+table_name_single.substring(1);
          let context ={table_name: table_name, table_name_single: table_name_single, table_name_upper: table_name_upper, table_name_single_upper: table_name_single_upper, column_info:results}
          console.log(context);
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
          console.log(results);         
          // console.log(results.table_name);
          let table_name_single = table_name.slice(0,-1);
          let table_name_upper = table_name.substring(0,1).toUpperCase()+table_name.substring(1);
          let table_name_single_upper = table_name_single.substring(0,1).toUpperCase()+table_name_single.substring(1);
          let context ={table_name: table_name, table_name_single: table_name_single, table_name_upper: table_name_upper, table_name_single_upper: table_name_single_upper, column_info:results}
          console.log(context);
          res.render('generator.hbs',context);
        });
      });

// get the html

router.route('/html/:id')
      .get(function(req,res) {
        let table_name = req.params.id;
        console.log("table_name: "+table_name);
        getColumnNamesFromTabel(table_name,function(results) {
          results = results.filter((e) => (e.data_type!='datetime'));
          console.log(results);         
          // console.log(results.table_name);
          let table_name_single = table_name.slice(0,-1);
          let table_name_upper = table_name.substring(0,1).toUpperCase()+table_name.substring(1);
          let table_name_single_upper = table_name_single.substring(0,1).toUpperCase()+table_name_single.substring(1);
          let context ={table_name: table_name, table_name_single: table_name_single, table_name_upper: table_name_upper, table_name_single_upper: table_name_single_upper, column_info:results}
          console.log(context);
          res.render('generator_html.hbs',context);
        });
      });



// get the _page.js
router.route('/pagejs/:id')
                .get(function(req,res) {
                  let table_name = req.params.id;
                  console.log("table_name: "+table_name);
                  getColumnNamesFromTabel(table_name,function(results) {
                    results = results.filter((e) => (e.data_type!='datetime'));
                    console.log(results);         
                    // console.log(results.table_name);
                    let table_name_single = table_name.slice(0,-1);
                    let table_name_upper = table_name.substring(0,1).toUpperCase()+table_name.substring(1);
                    let table_name_single_upper = table_name_single.substring(0,1).toUpperCase()+table_name_single.substring(1);
                    let context ={table_name: table_name, table_name_single: table_name_single, table_name_upper: table_name_upper, table_name_single_upper: table_name_single_upper, column_info:results}
                    console.log(context);
                    res.render('generator_page.hbs',context);
                  });
                });




module.exports = router;
