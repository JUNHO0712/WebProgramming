onmessage = function(e) {
  let from = parseInt(e.data.from);
  let to = parseInt(e.data.to);
  let ans = from * to;       // 곱셈 수행
  this.postMessage(ans);     // 결과를 HTML 쪽으로 전송
}