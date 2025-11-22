const { set } = require("lodash");

function longRunningTask(){
    console.log("end");
}

console.log("start");
setTimeout(longRunningTask, 0);
console.log("next job");

// 1. start 출력
// 2. next job 출력
// 3. end 출력

// setTimeout은 백그라운드로 갔다가 0초 후에 테스크 큐로 보냄
// non-blocking 방식임
// non-blocking 방식은 긴 작업이 있을 때 다른 작업이 동시에 실행될 수 있도록 함
// node.js는 non-blocking 방식을 주로 사용함