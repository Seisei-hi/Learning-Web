const http = require('http');
const fs = require('fs');
const url = require('url');

var app = http.createServer(function (request, response) {
    var murl = request.url;
    var queryData = url.parse(murl, true).query;
    if (murl == '/') {
        murl = '/index.html';
    }
    else if (murl == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + murl));
});
app.listen(3000);