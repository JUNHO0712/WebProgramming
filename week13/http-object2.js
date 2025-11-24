let http = require('http');

const server = http.createServer(function(err, res) {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write(' <head>');
    res.write(' <title>응답 페이지</title>');
    res.write(' </head>');
    res.write(' <body>');
    res.write(' <h1>Node.js server respond</h1>');
    res.write(' </body>');
    res.write('</html>');
    res.end();
}).listen(3000);