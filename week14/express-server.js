const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-info', (req, res) => {
    const { name, studentId, track } = req.body;
    res.send(`
        <h1>${name}님의 정보</h1>
        <p>학번: ${studentId}</p>
        <p>트랙: ${track}</p>
        <a href="/">로그인 페이지로 돌아가기</a>
    `);
});

// 이 부분이 폼 제출 시 4번 화면을 생성합니다.
app.get('/login', (req, res) => {
    const { userId, password } = req.query;

    const fixedName = "BJH";
    const fixedStudentCode = "2071245";
    const fixedTrack = "WebEngineering";

    if (userId === fixedName) {
        res.send(`
            <h1>${fixedName}님의 정보</h1>
            <p>학번: ${fixedStudentCode}</p>
            <p>트랙: ${fixedTrack}</p>
            <a href="/login.html">로그인 페이지로 돌아가기</a>
        `);
    } else {
        res.send('로그인 실패 또는 잘못된 접근입니다. <a href="/login.html">돌아가기</a>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`조건 1 테스트: http://localhost:${PORT}/index.html 로 접속하세요.`);
    console.log(`조건 2 테스트: http://localhost:${PORT}/login.html?name=BJH&student_code=2071246&track_name=WebEngineering 로 접속하세요.`);
});
