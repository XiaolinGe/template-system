var express = require('express');
var router = express.Router();

import Customer from '../entity/customer.js';

router.route('/customers')
  // create a customer (accessed at POST http://localhost:8080/api/customers)
      .post(function(req, res) {
        console.log(req.body);
        Customer.create(req.body)
            .then(function(){
              res.json({message: "Successfully created"});
            });
      })
  // get all the customers (accessed at GET http://localhost:8080/api/customers)
      .get(function(req, res) {
        Customer.findAll().then(function (customers) {
          res.json(customers);
        });
      });


router.route('/customers/:id')
  // get the customer with that id (accessed at GET http://localhost:8080/api/customer/:customer_id)
      .get(function(req, res) {
        // search for known ids
        Customer.findById(req.params.id).then(function(customers) {
          res.json(customer);
        });
      })

  // update the customer with this id (accessed at PUT http://localhost:8080/api/customer/:customer_id)
      .put(function(req, res) {
        Customer.update(req.body,{where:{id:req.params.id}})
            .then(function(){
              res.json({message: "Successfully created"});
            });
      })

  // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
      .delete(function(req, res) {
        Customer.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(){
          res.json({ message: 'Successfully deleted' });
        });
      });


module.exports = router;
