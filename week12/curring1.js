function greet(greeting, name) {
    console.log(greeting + "," + + name);
}

greet("Hello", "ksd"); // Hello,ksd
greet("Hi", "coder"); // Hi,coder

function curryGreet(greeting) {
    return function(name) {
        console.log(greeting + "," + name);
    }
}
let hello = greet("Hello");
hello("ksd");
hello("coder");
// 커링 기법 사용하기
// 커링 기번이란 하나의 함수가 여러개의 인자를 받는 대신에
// 하나의 인자를 받고, 나머지 인자를 받는 또 다른 함수를 반환하는 기법이다.