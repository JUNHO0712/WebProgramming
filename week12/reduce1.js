const scores = [10, 20, 30, 40, 50];

const sum = scores.reduce((a, b) => (a + b), 0);
const sumWithInitValue = scores.reduce((a, b) => a + b, 10);

console.log('sum:', sum); // 150
console.log('sum with init value:', sumWithInitValue); // 160
// reduce 메서드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환함
// 누적값(accumulator)과 현재값(current value)을 인자로 받음
// 초기값을 제공하지 않으면 배열의 첫 번째 요소가 초기 누적값이 됨
// 초기값을 제공하면 그 값이 누적값의 초기값이 됨