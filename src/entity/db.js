//import Sequelize from 'sequelize';
var Sequelize = require('sequelize');

let  sequelize = new Sequelize('mysql://root:root@localhost:3306/jibble');
export default  sequelize;



export function getColumnNamesFromTabel(table_name,callback) {
  let sql="SELECT column_name , data_type FROM `INFORMATION_SCHEMA`.`COLUMNS`  WHERE `TABLE_SCHEMA`='jibble' AND `TABLE_NAME`='"+table_name+"';";
  sequelize.query(sql, {type: sequelize.QueryTypes.SELECT})
           .then(callback)}
