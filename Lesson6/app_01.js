const http = require('http');

//Localhost:3500
//request, response
http.createServer(function(req, res){
    console.log('server work');
    res.end('111');
    
}).listen(3500);

