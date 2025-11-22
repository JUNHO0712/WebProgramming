// 비동기 함수 호출 예제
function run1(){
    console.log("Excute after 1 second");
}
function run2(){
    console.log("Excute after 2 seconds");
}

console.log("Start");

setTimeout(run1, 1000);
setTimeout(run2, 2000);

console.log("End");

// 1. start 출력
// 2. end 출력
// 3. 2초 후 "Execute after 2 seconds" 출력

// setTimeout은 백그라운드로 갔다가 2초 후에 테스크 큐로 보냄

// 실행 순서
// 1. 이벤트 → 콜백 함수 실행 과정(태스크 큐 → 호출 스택)
// 2. 콜백 함수는 “태스크 큐(Task Queue)“로 이동
// 3. 호출 스택(Call Stack)이 비어 있어야 실행 가능
//   - 호출 스택: 현재 실행 중인 함수들이 쌓이는 곳
//   - 태스크 큐: 비동기 함수의 콜백 함수들이 대기하는 곳
//   - 이벤트 루프: 호출 스택이 비어 있는지 지속적으로 확인
//   - 자바스크립트는 싱글 스레드이기 때문에 한 번에 하나의 작업만 처리 가능
// 4. 호출 스택이 비어지면 태스크 큐에서 콜백 함수를 꺼내 호출 스택에 넣음
// 5. 호출 스택에서 콜백 함수 실행