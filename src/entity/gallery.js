import sequelize from './db.js';
import Sequelize from 'sequelize';
import Customer from './customer';
let Gallery =  sequelize.define('gallerys', {


  image:{
  type: Sequelize.STRING
  },
  title:{
  type: Sequelize.STRING
  },
  customer_id:{
  type: Sequelize.STRING
  }

}, {
underscored: true
});

Gallery.belongsTo(Customer);

export default Gallery;
