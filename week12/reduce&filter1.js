const students = [
    {name: 'Alice', age: 20, math: 85, english: 85},
    {name: 'Bob', age: 22, math: 75, english: 90},
    {name: 'Charlie', age: 23, math: 93, english: 70},
    {name: 'David', age: 21, math: 83, english: 95},
    {name: 'Eve', age: 20, math: 62, english: 88},
];

const upper80StudentsSum = students.filter(s => s.math > 80).map(s => s.math).reduce((a, b) => a + b);
//reduce의 초기값이 없으면 배열의 첫번째 요소를 a(누적값)로 사용, 초기값은 주는것이 좋음

console.log(upper80StudentsSum); // 261
console.log('---------------');
console.log(students.filter(s => s.math > 80).map(s => s.math));