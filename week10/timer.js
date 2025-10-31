let count = 1;
let timerID = null;

// 메인 스크립트로부터 메시지를 받음
onmessage = function(e) {
  if (e.data == "start") {
    // 이미 작동 중이면 무시
    if (timerID != null) return;

    // 1초마다 myCallback() 호출
    timerID = setInterval(myCallback, 1000);
  } 
  else if (e.data == "stop") {
    // 타이머가 없으면 무시
    if (timerID == null) return;

    // 타이머 중지 및 워커 종료
    clearInterval(timerID);
    close(); // 워커 종료
  }
};

// 타이머 콜백 함수
function myCallback() {
  // count 값을 메인 스크립트로 전송
  postMessage(count);
  count++; // 1초마다 증가
}