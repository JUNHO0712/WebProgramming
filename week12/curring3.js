const coffeeMachine = liquid => espresso => `${liquid} + ${espresso}`;
const ameriaconMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const ameriacno = ameriaconMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log('americano = ',ameriacno);
console.log('latte =', latte);

// 커링 함수 만들기
// 중첩된 함수 형태로 인자를 하나씩 받는 함수
// 커링(Currying): 여러 개의 인자를 받는 함수 -> 하나의 인자를 받는 함수들의 집합으로 변환하는 기법