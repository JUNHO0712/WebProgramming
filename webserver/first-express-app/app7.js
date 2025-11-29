const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', static(path.join(__dirname, 'public')));

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

// http://localhost:3000/login1.html
// 아이디와 패스워드 모두 전송 가능
// GET 방식: http://localhost:3000/?id=hong&password=1234 - app6.js
// POST 방식: 아이디와 패스워드를 입력 후 전송 버튼 클릭 - app7.js