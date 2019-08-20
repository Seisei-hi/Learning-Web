var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var app = http.createServer(function (request, response) {
  if (request.url == '/') {
    request.url = '/index.html';
  }
  if (request.url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + request.url));
});
app.listen(3000);
//node main.js


