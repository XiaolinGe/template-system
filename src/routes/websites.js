var express = require('express');
var router = express.Router();
var path = require('path');

router.route('/')
    .get(function(req, res) {
        let domain = req.headers.host.replace(/:.*$/,"");
        console.log(domain);
        if(domain=="localhost"){
            req.url="/demo1/index.html";
        }else if(domain=="127.0.0.1"){
            req.url="/demo2/index.html";
        }
      console.log(req.url);
       req.query.id=1;
        res.sendFile(req.url, { root : path.join(__dirname, '../../public')});

    });

router.route('/info/:id')
      .get(function(req, res) {
      let id =  req.params.id;
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          multipleStatements: true,
          host     : '127.0.0.1',
          user     : 'root',
          password : 'root',
          database : 'jibble'
        });

        connection.connect();
        let queryBaseinfo = `select * from customers_info where id=${id}`;
        let galleryInfo = `select * from gallery g where g.customer_id=${id}`;
        let sql3 = `select * from layout l where l.customer_id=${id}`;
        let sql4 = `select * from workingHours w where w.customer_id=${id}`;


        let sqls=[
          `select * from simple_infos  where id=${id}`,
          `select * from gallerys g where g.customer_id=${id}`,
          `select * from menus l where l.customer_id=${id}`,
          `select * from working_hours w where w.customer_id=${id}`]
                                          .join(";");

        connection.query(sqls, function(err,rows) {
          console.log(rows);
          let [[base_info],gallery,layout,workinghours] = rows;

          let result= {
            gallery: gallery,
            home: {
              src:base_info.google_map_src
            },
            layout: layout,
            map: {
              address: base_info.map_address,
              destination: base_info.map_destination,
              start: base_info.map_start
            },
            phone:{
              phone_about:{
                content: base_info.phone_about_content,
                hoveredIcon: base_info.phone_about_hoveredIcon,
                icon: base_info.phone_about_icon,
                img: base_info.phone_about_img,
                title: base_info.phone_about_title
              },
              phone_contact:{
                content:{
                  address: base_info.address,
                  phone_en: base_info.phone_en,
                  phone_cn: base_info.phone_cn,
                  email: base_info.email
                },
                hoveredIcon: base_info.phone_time_hoveredIcon,
                icon: base_info.phone_time_icon,
                img: base_info.phone_time_img,
                title: base_info.phone_time_title
              },
              phone_time:{
                hoveredIcon: base_info.phone_contact_hoveredIcon,
                icon: base_info.phone_contact_icon,
                img: base_info.phone_contact_img,
                title: base_info.phone_contact_title,
                workingHours: workinghours
              }
            }
          };

          res.json(result); //在这个地方调用res,是因为只有拿到数据后才能res,而function（err,rows）这个函数是query这个拿数据的函数的回调函数；
        });
   connection.end();



      });


module.exports = router;
