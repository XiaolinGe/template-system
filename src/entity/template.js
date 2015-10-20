import sequelize from './db.js';
import Sequelize from 'sequelize';
let Template =  sequelize.define('template', {
  name: {
    type: Sequelize.STRING
  },
  template_folder: {
    type: Sequelize.STRING
  }
}, {
  underscored: true
});


//User.belongsTo(Role);


export default Template;
