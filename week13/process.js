console.log('argv # of parameters :', process.argv.length);
console.log(process.argv);

process.argv.forEach((item, index) => {
    console.log(index + ':', item);
});

console.dir(process.env);

// process 객체는 Node.js 프로세스에 대한 정보를 제공하는 전역 객체입니다.
// process 객체를 통해 명령줄 인수, 환경 변수, 현재 작업 디렉토리 등의 정보를 얻을 수 있습니다.