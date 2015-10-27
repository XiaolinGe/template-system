import sequelize from './db.js';
import Sequelize from 'sequelize';
let Template =  sequelize.define('templates', {


  name:{
  type: Sequelize.STRING
  },

  template_folder:{
  type: Sequelize.STRING
  }

}, {
underscored: true
});



export default Template;
