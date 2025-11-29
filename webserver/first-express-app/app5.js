const express = require('express');
const  app = express(); 

app.use(function(req, res, next) {
    res.redirect('https://www.naver.com');
});

app.listen(3000);

// 리다이렉트 응답 예시
// 클라이언트를 다른 URL로 이동시키는 응답