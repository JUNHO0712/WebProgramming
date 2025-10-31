onmessage = function(e) {
  let sum = 0;
  let from = parseInt(e.data.from);
  let to = parseInt(e.data.to);
    // JavaScript의 내장 함수 parseInt()로,
    //문자열(string) 형태의 값을 정수(integer)로 변환할 때 사용하는 함수

  for (let i = from; i <= to; i++) {
    sum += i;
  }

  // 결과를 메인 스크립트로 보냄
  postMessage(sum);
}; 