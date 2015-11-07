import sequelize from './db.js';
import Sequelize from 'sequelize';
let Admin_menu =  sequelize.define('admin_menus', {

  menuname:{
    type: Sequelize.STRING
  },

  icon:{
    type: Sequelize.STRING
  },

  url:{
    type: Sequelize.STRING
  }

}, {
  underscored: true
});


export default Admin_menu;
