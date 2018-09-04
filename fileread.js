var http = require('http')
var fs = require('fs')
http.createServer(function (req,res){
	fs.readFile('demo.html', function(err,data){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write(data);
	fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
 	 if (err) throw err;
 	 console.log('Saved!');
	});
	res.end();
	});
}).listen(8080);