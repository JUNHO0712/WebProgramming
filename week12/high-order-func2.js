const birthYear = [1990, 1985, 2000, 1975];
const ages = [];
for(let i =0; i< birthYear.length; i++){
    let age = 2024 - birthYear[i];
    age.push(age);
}
console.log(age);

const ages2 = birthYear.map(y => 2024 - y);
console.log(ages2);

// 고차함수: 함수를 매개변수로 받는 함수
// 배열의 각 요소에 대해 주어진 함수를 실행하고 그 결과로 새로운 배열을 반환
// map 메서드 사용
// birthYear의 각 요소에 대해 2024에서 빼는 함수를 전달
// 화살표 함수 사용
// birthYear의 각 요소를 받아서 2024에서 뺀 값을 반환
// 이 함수를 map 메서드에 전달
// map 메서드는 birthYear의 각 요소에 대해 전달된 함수를 실행하고
// 그 결과로 새로운 배열 ages2를 생성