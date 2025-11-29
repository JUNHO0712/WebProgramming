const express = require('express');
const app = express(); // app이라는 이름의 express 객체 생성

app.get('/', (req, res) => {
    res.send('<h1>Express 서버에서 응답한 결과입니다.</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About 페이지입니다.</h1>');
});
app.listen(3000);