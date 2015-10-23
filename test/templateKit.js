var fs = require('fs');
var Handlebars = require('handlebars');
module.exports= function(temPath,descPath,data){
    var source = fs.readFileSync(temPath,"utf8" );
    fs.writeFile(descPath,Handlebars.compile(source)(data));
};
