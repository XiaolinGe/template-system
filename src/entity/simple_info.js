import sequelize from './db.js';
import Sequelize from 'sequelize';
let Simple_info =  sequelize.define('simple_infos', {


  google_src:{
  type: Sequelize.STRING
  },

 introduction:{
  type: Sequelize.STRING
  },

  about_hoveredIcon:{
  type: Sequelize.STRING
  },

  about_icon:{
  type: Sequelize.STRING
  },

  about_img:{
  type: Sequelize.STRING
  },

  about_title:{
  type: Sequelize.STRING
  },

  time_hoveredIcon:{
  type: Sequelize.STRING
  },

  time_icon:{
  type: Sequelize.STRING
  },

  time_img:{
  type: Sequelize.STRING
  },

  time_title:{
  type: Sequelize.STRING
  },

  contact_hoveredIcon:{
  type: Sequelize.STRING
  },

  contact_icon:{
  type: Sequelize.STRING
  },

  contact_img:{
  type: Sequelize.STRING
  },

  contact_title:{
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

  summary:{
  type: Sequelize.STRING
  },

  logo:{
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
  },

  title_contact:{
    type: Sequelize.STRING
  }

}, {
underscored: true
});



export default Simple_info;
