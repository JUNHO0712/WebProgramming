const express = require('express');
const http = require('http');

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    req.user = '백준호 ';
    next(); // 다음 미들웨어로 제어를 넘김
});
app.use(function(req, res, next) {
    console.log('두 번째 미들웨어에서 요청을 처리함.');
    res.status(200).send(`<h1>${req.user}두 번째 미들웨어에서 응답한 결과입니다.</h1>`);
});
app.listen(3000, () => {
    console.log('Express 서버가 3000번 포트에서 시작됨.');
});

