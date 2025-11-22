let fs = require('fs');

// read file - 동기식 i/O
let data = fs.readFileSync('../week9/12-1.html', 'utf8');
console.log(data);
console.log('동기식 파일 읽기 완료');