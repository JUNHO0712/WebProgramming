const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(`
        <h1>Express 서버에서 응답한 결과입니다.</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>
    `);
});

app.listen(3000, () => {
    console.log('Express 서버가 3000번 포트에서 시작되었습니다.');
});

// app7.js와 동일한 기능을 구현
// body-parser 모듈 대신 Express 내장 미들웨어 사용