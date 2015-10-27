import sequelize from './db.js';
import Sequelize from 'sequelize';
let Customer =  sequelize.define('customers', {


  name:{
  type: Sequelize.STRING
  },

  domain:{
  type: Sequelize.STRING
  },

  template_id:{
  type: Sequelize.STRING
  }

}, {
underscored: true
});



export default Customer;
