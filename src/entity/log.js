import sequelize from './db.js';
import Sequelize from 'sequelize';
let Log =  sequelize.define('logs', {


  operator:{
  type: Sequelize.STRING
  },

  action:{
  type: Sequelize.STRING
  }

}, {
underscored: true
});



export default Log;
