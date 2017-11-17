// write your code here
//require the dependency(the http module from Node)
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World');
})
.listen(8080, '127.0.0.1');
console.log('Server running at Http://127.0.0.1:8080');