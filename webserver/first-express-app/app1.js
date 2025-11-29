const express = require('express');
const http = require('http');

const app = express(); // app이라는 이름의 express 객체 생성
app.set('port', process.env.PORT || 3000); // 포트 설정

// 미들웨어 설정
// next 함수를 사용하여 다음 미들웨어로 제어를 넘길 수 있음
// 만약 next 함수를 호출하지 않으면 요청이 여기서 종료됨 -> 첫번째 미들웨어가 끝
app.use((req, res, next) => {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    // 클라이언트에 응답 전송
    res.status(200).send('<h1>Express 서버에서 응답한 결과입니다.</h1>');
});

// 서버 시작
http.createServer(app).listen(app.get('port'), () => {
    console.log(`start express server at ${app.get('port')}`);
});


