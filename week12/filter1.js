const ages = [11,12,13,14,15,16,17,18,19,20,31];

const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age < 13);
const between12And21 = ages.filter(age => age >12 && age <21);

console.log('upper16:', upper16);
console.log('under13:', under13);
console.log('between12And21:', between12And21);

// filter 메서드
// 배열의 각 요소에 대해 주어진 함수를 실행하고
// 그 결과가 true인 요소들로 새로운 배열을 반환
