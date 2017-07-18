const  http = require("http");
const  express = require("express");

const app = express();

app.use(function(request, response){
  response.send("hello world");
})

http.createServer(app).listen(3000, function(){
  console.log("success");
})
