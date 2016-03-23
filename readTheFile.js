module.exports = function(pathToFile){

  var fs = require("fs");
var file = fs.readFileSync(pathToFile, 'utf8');
file =file.split("\n");
file.pop();
//console.log(file);
return file;
};
