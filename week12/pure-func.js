let glob = 10;
let add = a => glob + a;
console.log(add(5)); // 15
console.log('glob:', glob); // 10

let add2 = a => {
    glob = 20; // 외부 상태 변경
    return glob + a;
}
add2(5);
console.log(add(10)); // 30
console.log('glob:', glob); // 20

//위 코드들은 외부 상태를 변경하기 때문에 순수 함수가 아님
// 순수 함수
// 1. 외부 상태를 변경하지 않는다.
// 2. 동일한 입력에 대해 항상 동일한 출력을 반환한다.
