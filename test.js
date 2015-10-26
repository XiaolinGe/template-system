let arrs=[1,2,3];
console.log(arrs);
var mysql      = require('mysql');
var connection = mysql.createConnection({
  multipleStatements: true,
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'jibble'
});
 
connection.connect();
let id=1;
let queryBaseinfo = `select * from customers_info where id=${id}`;
let galleryInfo = `select * from gallery g where g.customer_id=${id}`;
let sql3 = `select * from layout l where l.customer_id=${id}`;
let sql4 = `select * from workingHours w where w.customer_id=${id}`;


let sqls=[
    `select * from customers_info where id=${id}`,
    `select * from gallery g where g.customer_id=${id}`,
    `select * from layout l where l.customer_id=${id}`,
    `select * from workingHours w where w.customer_id=${id}`]
    .join(";");

connection.query(sqls, function(err,rows) { 
    let [[base_info],gallery,layout,workinghours] = rows;
    
    let result= {
        gallery: gallery,    
        home: base_info.google_map_src,
        layout: layout,
        map: {
            address: base_info.map_address,
            destination: base_info.map_destination,
            start: base_info.map_start
        },
        phone:{
            phone_about:{
                content: base_info.phone_about_content,
                hoveredIcon: base_info.phone_about_hoveredIcon,
                icon: base_info.phone_about_icon,
                img: base_info.phone_about_img,
                title: base_info.phone_about_title
            },
            phone_time:{
                content:{
                    address: base_info.address,
                    phone_en: base_info.phone_en,
                    phone_cn: base_info.phone_cn,
                    email: base_info.email
                },
                hoveredIcon: base_info.phone_time_hoveredIcon,
                icon: base_info.phone_time_icon,
                img: base_info.phone_time_img,
                title: base_info.phone_time_title
            },
            phone_contact:{
                hoveredIcon: base_info.phone_contact_hoveredIcon,
                icon: base_info.phone_contact_icon,
                img: base_info.phone_contact_img,
                title: base_info.phone_contact_title,
                workingHours: workinghours
            }
        }
    }; 
    console.log(result);
});

 
connection.end();
