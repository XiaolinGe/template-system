import sequelize from './db.js';
import Sequelize from 'sequelize';
import context from '../routes/generator_router.js';

let  column_info = context.get(column_info);

let {{table_name_single_upper}} =  sequelize.define('{{table_name}}', {
  for(let item in column_info) {
    console.log(item);
    var item = item.column_name;
    return item: {
      type: Sequelize.STRING
    }
  }

}, {
  underscored: true
});


//User.belongsTo(Role);


export default {{table_name_single_upper}};
