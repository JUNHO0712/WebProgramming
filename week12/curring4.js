const fs = require('fs'); 
// openFilePrint 함수는 "파일 경로(path)"를 받아서,
// 다시 "파일 이름(fileName)"을 받는 함수를 리턴하는 커링(curry) 함수
// fs.readFile : 파일을 읽는 Node.js 함수
const openFilePrint = path => fileName => fs.readFile(path + fileName, 'utf8', (err, data) => {
    if (err) {
        console.log(data.toString());
    }});
// 현재 디렉토리(./)에서 파일을 읽는 함수 만들기
const thisDirOpenPrint = openFilePrint('./');

// 부모 디렉토리(../)에서 파일을 읽는 함수 만들기
const parentDirOpenPrint = openFilePrint('../');

// 현재 폴더 기준으로 week12/curring3.js 읽기
thisDirOpenPrint('week12/curring3.js');

// 부모 폴더 기준으로 week10/add1to10.js 읽기
parentDirOpenPrint('week10/add1to10.js');