var http = require('http');
var uc = require('lower-case')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(uc('Hello Welcome to World of Node.js!'));
}).listen(8080);