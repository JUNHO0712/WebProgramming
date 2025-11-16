function plus(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

let p = plus;
console.log("10 + 20 =%d",p(10,20));

// 함수를 parameter로 받는 함수
function calculate(a,b,func){
    return func(a,b);
}
// 함수를 넘겨서 계산함
console.log("10 + 20 =%d",calculate(10,20,plus));
console.log("10 - 20 =%d",calculate(10,20,minus));

// callback function
// 어떤 함수가 끝난 후에 실행되는 함수
// 예:  서버에서 데이터를 받아온 후에 실행되는 함수
// 함수를 전달해서 상황에 따라 적절한 함수를 호출하도록 하는 것
// 전달된 함수들 = callback function
// calculate 함수의 세번째 매개변수 func가 callback function