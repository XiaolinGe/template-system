var templateKit = require('./templateKit');
var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
templateKit('./template.hbs','./result.txt',data);
