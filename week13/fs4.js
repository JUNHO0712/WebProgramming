const fs = require("fs");
const http = require("http");
const server = http.createServer().listen(3000);

server.on('request', function (req, res) {
    const filename = '../week9/index.html';
    fs.readFile(filename, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
});