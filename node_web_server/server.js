//모듈 추출
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

//포트 설정
const port = process.env.PORT || 3000;

//웹서버 생성
var app = express();

//엔질 set
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

//로그 파일
app.use((req, res, next) =>{
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;

  console.log(log);

  fs.appendFile('server.log', log + '\n', (err) =>{
    if(err)
      console.log('Unable to append to server.log');
  });

  next();
});

//환영 인사 출력
//hbs.resisterHelper('printWelcome')

//현재 시간 출력
hbs.registerHelper('getCurrentDate', () => {
  var date = new Date();
  var year = date.getFullYear();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var min = date.getMinutes();
  return year + '년 ' + mon + '월 ' + day + '일 ' + hour + '시 ' + min + '분';
});

//home
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle : 'Home',
    WelcomeMsg : 'Welcome to my website'
  });
});

//JavaScript
app.get('/javascript', (req, res) => {
  res.render('javascript.hbs', {
    pageTitle : 'JavaScript'
  });
});

//Spring Boot
app.get('/springboot', (req, res) => {
  res.render('springboot.hbs', {
    pageTitle : 'Spring Boot'
  });
});

//Node.js
app.get('/nodejs', (req, res) => {
  res.render('nodejs', {
    pageTitle : 'Node.js'
  });
});

//오류
app.get('/bad', (req, res) => {
  res.send({
    errerMsg : 'Unable to handle request'
  });
});

//웹 서버 연결
app.listen(port, () =>{
  console.log(`Server is up on port : ${port}`);
})
