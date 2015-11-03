import fs from 'fs';
import handlebars from 'handlebars';


export let generate = function(temPath,descPath,data) {
  let source = fs.readFileSync(temPath,"utf8");
  let template = handlebars.compile(source);
  let result = template(data);
  fs.writeFile(descPath,result);
};

// todo：此处可以封装一个首字母大写的功能
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}


export let create_context=function(table_name,column_info){

  let table_name_single = table_name.slice(0,-1);
  let table_name_upper = table_name.substring(0,1).toUpperCase()+table_name.substring(1);
  let table_name_single_upper = table_name_single.substring(0,1).toUpperCase()+table_name_single.substring(1);
  return {
    table_name: table_name,
    table_name_single: table_name_single,
    table_name_upper: table_name_upper,
    table_name_single_upper: table_name_single_upper,
    column_info:column_info
  };


}
