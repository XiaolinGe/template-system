import sequelize from './db.js';
import Sequelize from 'sequelize';

let User =  sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    underscored: true
});


//User.belongsTo(Role);


export default User;
