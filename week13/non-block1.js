function longRunningTask(){
    console.log("end");
}

console.log("start");
longRunningTask();
console.log("next");

// 1. start 출력
// 2. end 출력
// 3. next 출력

// non-blocking 방식이 아님