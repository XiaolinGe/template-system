import sequelize from './db.js';
import Sequelize from 'sequelize';
let Customer =  sequelize.define('customers', {
  name: {
    type: Sequelize.STRING
  },
  domain: {
    type: Sequelize.STRING
  },
  ip: {
    type: Sequelize.STRING
  }
}, {
  underscored: true
});


//Customer.belongsTo(Role);


export default Customer;
