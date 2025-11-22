const http = require('http');
const port = 1000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Simple Web Server 2!\n');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// 이 코드는 간단한 웹 서버를 생성합니다.
// 서버는 포트 1000에서 요청을 수신 대기하며, 요청이 들어오면 "Hello, Simple Web Server 2!"라는 응답을 반환합니다.
// http 모듈은 Node.js에서 HTTP 서버와 클라이언트를 생성하는 데 사용됩니다.
// 호스트 주소를 콘솔에서 직접 localhost로 지정했습니다. 
// 콘텐트 타입 text/html는 이건 HTML 문서라고 브라우저에게 알려주는것 
// 브라우저가 HTML 태그를 해석함

// text/plain는 단순 텍스트 문서라고 브라우저에게 알려주는 것