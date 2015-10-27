import sequelize from './db.js';
import Sequelize from 'sequelize';
let Gallery =  sequelize.define('gallerys', {


  image:{
  type: Sequelize.STRING
  },

  thumb:{
  type: Sequelize.STRING
  },

  title:{
  type: Sequelize.STRING
  },

  url:{
  type: Sequelize.STRING
  },

  customer_id:{
  type: Sequelize.STRING
  }

}, {
underscored: true
});



export default Gallery;
