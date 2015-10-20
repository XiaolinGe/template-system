var express = require('express');
var router = express.Router();
import Contact from '../entity/contact.js';


router.route('/')
// create a user (accessed at POST http://localhost:8080/api/users)
      .get(function(req, res) {
        let name ="Hello World!";
      res.send("<p style='color:pink'>"+name+"</p>");
     });

router.route('/hbs').get(function(req,res) {

  var data = { "name": "Alan", "hometown": "Somewhere, TX",
               "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
    res.render('test.hbs',data);
});


//http://localhost:3000/test/contact/1
//req.params 是指所从url中匹配的query parameter 组成的map(由‘：’来匹配， 比如'/:id')
//

/*
router.route('/contact/:id').get(function(req,res) {
  let id = req.params.id;
  let result = service(id);
  service(id).then(res.send(result));
  

})

  function service(id){
    let c = Contact.findById(id);
    let s = User.findALl();
    let meta = Db.query("select * from infomation_schema");
    c.filer();
    
    rertun users;;
  }
*/

//http://localhost:3000/test/contact/1
//req.params 是指所从url中匹配的query parameter 组成的map(由‘：’来匹配， 比如'/:id')
//
router.route('/contact/:id').get(function(req,res) {
    let id = req.params.id;

    Contact.findById(1).then(function(contact) {
        console.log(contact.dataValues);
        res.render('contact.hbs',contact.dataValues)
    });
})


//http://localhost:3000/test/contact?id=1&name=2
//req.query 是指所有query parameter 组成的map, {id:1, name:2}
//
router.route('/contact').get(function(req,res) {
    Contact.findById(req.query.id).then(function(contact) {
        res.render('contact.hbs',contact.dataValues)
    });
})



  //
  router.route('/contact/:tableName').get(function(req,res) {
    Contact.findById(req.query.id).then(function(contact) {
      let context = {tableName:"xxx",fileds:["name","age","address"]}
      res.render('basicCRUD.hbd',context);
    });
  })



module.exports = router;
