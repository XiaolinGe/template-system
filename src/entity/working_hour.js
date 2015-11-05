import sequelize from './db.js';
import Sequelize from 'sequelize';
import Customer from './customer';
let Working_hour =  sequelize.define('working_hours', {


  days:{
  type: Sequelize.STRING
  },

  from_times:{
  type: Sequelize.STRING
  },

  to_times:{
    type: Sequelize.STRING
  },

  customer_id:{
  type: Sequelize.STRING
  }

}, {
  underscored: true
});

Working_hour.belongsTo(Customer);



export default Working_hour;
