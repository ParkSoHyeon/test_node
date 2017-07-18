const path = require("path");
const fs = require("fs");

//현재 실행파일의 상위 폴더
var dir_name = __dirname;
console.log(dir_name);

//파일 경로를 찾아온다.
var file_path = path.join(dir_name, "filetest/file.txt");
console.log(file_path);

//파일 경로를 찾아서 파일을 읽어온다.
fs.readFile(file_path, 'utf8' ,(err, data) => {
  if(err)
    throw err;
  console.log(data);
});
