const arr1 = [1,2,3];
const arr2 = [];
for(let i=0; i< arr1.length; i++){
    arr2.push(arr1[i]*2);
}
console.log(arr2);

const muli2 = a => a * 2;
const arr3 = arr1.map(function(a){
    return muli2(a);
});
// const arr3 = arr1.map(a => a * 2);
// const arr3 = arr1.map(muli2);
console.log(arr3);


// 고차함수: 함수를 매개변수로 받는 함수
// 배열의 각 요소에 대해 주어진 함수를 실행하고 그 결과로 새로운 배열을 반환
// map 메서드 사용
// arr1의 각 요소에 2를 곱하는 함수를 전달
// 화살표 함수 사용
// arr1의 각 요소를 받아서 2를 곱한 값을 반환
// 이 함수를 map 메서드에 전달
// map 메서드는 arr1의 각 요소에 대해 전달된 함수를 실행하고
// 그 결과로 새로운 배열 arr3를 생성
