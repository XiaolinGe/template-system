import sequelize from './db.js';
import Sequelize from 'sequelize';
import Role from './role';

let User =  sequelize.define('users', {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  role_id:{
    type: Sequelize.STRING
  }

}, {
  underscored: true
});

User.belongsTo(Role);


export default User;
