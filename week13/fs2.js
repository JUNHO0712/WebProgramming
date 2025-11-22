let fs = require('fs');

// write file - 비동기식 I/O
fs.writeFile('../week9/13-12-1.html', 'Hello World!', 'utf8', function(err,data) {
    if (err == null) {
        console.log(data);
    }else {
        console.log('error !!!');
    }
});

console.log('비동기식 파일 쓰기 요청 완료');