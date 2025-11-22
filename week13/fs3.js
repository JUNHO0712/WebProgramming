let fs = require('fs');

// read file - 비동기식 I/O
let data = fs.readFile('../week9/13-12-1.html', 'utf8', function(err,data) {
    if (err == null) {
        console.log(data);
    }else {
        console.log('error !!!');
    }
});

console.log('비동기식 파일 읽기 요청 완료');