// 동기 방식 예제

function first(){
    second();
    console.log('first');
}
function second(){
    third();
    console.log('second');
}
function third(){
    console.log('third');
}
first();