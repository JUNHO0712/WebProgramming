const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();
const BJH_handeler = (req, res) => {
    console.log('/process/login POST request 처리함.');
    
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;
    
    res.status(200).send(`
        <h1>Express 서버에서 응답한 결과입니다.</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>
    `);
};
router.route('/process/login').post(BJH_handeler);
    

router.route('/process/login').get((req, res) => {
    console.log('/process/login GET request 처리함.');
    
    const paramId = req.query.id;
    const paramPassword = req.query.password;
    
    res.status(200).send(`
        <h1>Express 서버에서 응답한 결과입니다.</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>
    `);
});
app.use('/', router);

app.listen(3000, () => {
    console.log('Express 서버가 3000번 포트에서 시작되었습니다.');
});

// http://localhost:3000/process/login
// 라우터를 이용한 로그인 처리
// POST 방식: 아이디와 패스워드를 입력 후 전송 버튼 클릭
// GET 방식: http://localhost:3000/process/login?id=hong&password=1234
// qurery 방식은 
// query 방식 또는 body 방식 모두 처리 가능

// http://localhost:3000/login2.html
// login2.html 페이지에서 아이디, 패스워드 전송 후 
// http://localhost:3000/process/loginhttp://localhost:3000/process/login