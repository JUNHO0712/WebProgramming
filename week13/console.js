let result = 0;
console.time('duration1');
for(let i =0; i<=1000; i++){
    result += i;
}
console.timeEnd('duration1');
console.log('1~1000 합:', result);

let shcool = { name : 'Hansuug', district: 'Seongbuk' };
console.log('dir = ');
console.dir(shcool);
console.log('log = ', shcool);

// console.time과 console.timeEnd는 특정 코드 블록의 실행 시간을 측정할 때 사용합니다.
// console.dir는 객체의 속성과 값을 출력할 때 사용합니다.