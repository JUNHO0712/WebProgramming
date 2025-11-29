const express = require('express');
const app = express(); // app이라는 이름의 express 객체 생성

app.use(function(req, res, next) {
    const userAgent = req.headers['user-agent'];
    const paramId = req.query.id;
    const paramName = req.query.name;

    res.status(200).send(`
        <h1>Request Information</h1>
        <div><p>User-Agent: ${userAgent}</p></div>
        <div><p>ID Parameter: ${paramId}</p></div>
        <div><p>Name Parameter: ${paramName}</p></div>
    `);
});

app.listen(3000);

// 헤더 및 쿼리 문자열 정보 응답 예시
// http://localhost:3000/?id=백준호&name=Jun%20Ho 