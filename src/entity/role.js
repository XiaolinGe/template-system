import sequelize from './db.js';
import Sequelize from 'sequelize';

let Role =  sequelize.define('roles', {
  name:{
    type: Sequelize.STRING
  }
}, {
  underscored: true
});


export default Role;
