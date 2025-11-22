let path = require('path');

let directory = ['users','mike','documents'];
let docsDirectory = directory.join(path.sep);

console.log(docsDirectory);

let curPath = path.join('/users/mike', 'nodepad.exe');
console.log('File Path',curPath);

const filename ='C:\\users\\mike\\notepad.exe';
const dirname = path.dirname(filename);
const basename = path.basename(filename);
const extname = path.extname(filename);

console.log('Directory:', dirname);
console.log('File Name:', basename);
console.log('Extension:', extname);

// path.join 함수는 여러 경로 조각을 하나의 경로로 결합합니다.
// 운영체제에 맞는 경로 구분자를 사용합니다.
// path 모듈은 파일 및 디렉토리 경로 작업을 위한 유틸리티 함수를 제공합니다.
// 파일 이름을 추출하거나 경로를 결합하는 등의 작업에 유용합니다.
