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

//path 모듈 - 파일 및 디렉터리 경로 작업을 위한 유틸리티 제공, 기본 내장 모듈
// 이 코드에서는 __dirname과 결합하여 정적 파일(public 폴더) 제공을 위한 경로를 설정하는 데 사용
//__dirname - 현재 실행 중인 스크립트(js)의 디렉터리 경로를 나타내는 전역 변수(app7.js을 의미)
//join(__dirname, 'public') 
// app7.js파일이 위치한 public 폴더를 가리키는 경로를 생성

// join(__dirname, '.') -> 현재 디렉터리 경로
// join(__dirname, '..') -> 상위 디렉터리 경로 
// join(__dirname, 'folder', 'subfolder', 'file.txt') -> 하위 폴더 및 파일 경로 생성

//body-parser 모듈 - Express 애플리케이션에서 요청 본문을 구문 분석하는 미들웨어 제공
// 이 코드에서는 URL 인코딩된 데이터와 JSON 데이터를 구문 분석하는 데 사용
//serve-static 모듈 - 정적 파일 제공을 위한 미들웨어 제공
// 이 코드에서는 'public' 디렉터리에 있는 정적 파일(HTML, CSS, JS 등)을 제공하는 데 사용