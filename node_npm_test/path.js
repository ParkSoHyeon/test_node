const path = require("path");

var dirName = __dirname;
var file_name = __filename;

var up_dir_name = path.dirname(dirName);

console.log(up_dir_name);
console.log(file_name);
