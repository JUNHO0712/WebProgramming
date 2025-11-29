const express = require('express');
const app = express(); // app이라는 이름의 express 객체 생성

app.use(function(req, res, next) {
    res.send({name: '백준호', age: 30});
});

app.listen(3000);

// 객체 응답 예시