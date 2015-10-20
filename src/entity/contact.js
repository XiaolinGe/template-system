import sequelize from './db.js';
import Sequelize from 'sequelize';
let Contact =  sequelize.define('contacts', {
  address: {
    type: Sequelize.STRING
  },
  phoneCn: {
    type: Sequelize.STRING
  },
  phoneEn: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
}, {
  underscored: true
});


//User.belongsTo(Role);


export default Contact;
