var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');


var app = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      request.url = '/index.html';
      break;
    case "/favicon.ico":
      return response.writeHead(404);
    case "/post/upload":
      var formData = [];
      request.on('data', function (data) {
        formData.push(data);
      }).on('end', function () {
        formData = Buffer.concat(formData).toString();
        console.log(formData);
        fs.writeFileSync(`12345.png`, formData,"binary");
        console.log(fs.readFileSync(__dirname + "/12345.png"));
        console.log(fs.readFileSync(__dirname + "/nrmaldaisy1.png"));
        response.end(formData);
      });
  }
  response.writeHead(200);
  if (request.url != "/post/upload") {
    response.end(fs.readFileSync(__dirname + request.url));
  }
});
app.listen(3000);
console.log("http://localhost:3000/");
//node main.js


