const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();
const BJH_handeler = (req, res) => {
    console.log('/process/login/ :name 처리함.');
    
    const paramName = req.params.name;
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;
    
    res.status(200).send(`
        <h1>Express 서버에서 응답한 결과입니다.</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>
    `);
};
router.route('/process/login/:name').post(BJH_handeler);
    
router.route('/process/login/:name').get((req, res) => {
    console.log('/process/login/:name 처리함.');
    
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

// :name 형태의 라우팅 매개변수 사용
// http://localhost:3000/process/login/홍길동
// POST 방식: 아이디와 패스워드를 입력 후 전송 버튼 클릭
// qurery 방식 또는 body 방식 모두 처리 가능