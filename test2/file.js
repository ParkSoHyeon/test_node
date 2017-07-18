//node.js 모듈 등록
const path = require("path");
const fs = require("fs");
var appRootDir = require('app-root-dir').get();
//console.log(appRootDir);

//현재 실행파일의 최상위 폴더(test_source)를 찾는다.(__dirname == 상수)
var dir_name = __dirname;
console.log(dir_name);

//파일 경로를 찾아온다.(path.join : 경로들을 join 시켜줌)
var file_path = path.join(appRootDir, "filetest/file.txt");
console.log(file_path);

//파일 경로를 찾아서 파일을 읽어온다.
//fs.readFile : 파일을 읽음
fs.readFile(file_path, 'utf8' ,(err, data) => {
  if(err)
    throw err;
  console.log(data);
});
