const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello, World!</h1>\n');
});
// html 태그를 사용하여 응답 내용을 작성
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

