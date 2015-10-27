import sequelize from './db.js';
import Sequelize from 'sequelize';
let Simple_info =  sequelize.define('simple_infos', {


  google_map_src:{
  type: Sequelize.STRING
  },

  phone_about_content:{
  type: Sequelize.STRING
  },

  phone_about_hoveredIcon:{
  type: Sequelize.STRING
  },

  phone_about_icon:{
  type: Sequelize.STRING
  },

  phone_about_img:{
  type: Sequelize.STRING
  },

  phone_about_title:{
  type: Sequelize.STRING
  },

  phone_time_hoveredIcon:{
  type: Sequelize.STRING
  },

  phone_time_icon:{
  type: Sequelize.STRING
  },

  phone_time_img:{
  type: Sequelize.STRING
  },

  phone_time_title:{
  type: Sequelize.STRING
  },

  phone_contact_hoveredIcon:{
  type: Sequelize.STRING
  },

  phone_contact_icon:{
  type: Sequelize.STRING
  },

  phone_contact_img:{
  type: Sequelize.STRING
  },

  phone_contact_title:{
  type: Sequelize.STRING
  },

  address:{
  type: Sequelize.STRING
  },

  phone_en:{
  type: Sequelize.STRING
  },

  phone_cn:{
  type: Sequelize.STRING
  },

  email:{
  type: Sequelize.STRING
  },

  map_address:{
  type: Sequelize.STRING
  },

  map_destination:{
  type: Sequelize.STRING
  },

  map_start:{
  type: Sequelize.STRING
  },

  name:{
  type: Sequelize.STRING
  },

  type:{
  type: Sequelize.STRING
  },

  introduction:{
  type: Sequelize.STRING
  },

  logo_img:{
  type: Sequelize.STRING
  },

  title_map:{
  type: Sequelize.STRING
  },

  title_gallery:{
  type: Sequelize.STRING
  },

  title_about:{
  type: Sequelize.STRING
  }

}, {
underscored: true
});



export default Simple_info;
