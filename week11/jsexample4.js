const students = [
{ name: "김철수", scores: [85, 90, 88] },
{ name: "이영희", scores: [95, 93, 97] },
{ name: "박민수", scores: [70, 80, 75] }
];

// 콜백 함수: 평균 계산
function calcAverage(student) {
let sum = 0;
for (const score of student.scores) {
sum += score;
}
return sum / student.scores.length;
}

// 콜백 함수: 결과 출력
function printResult(student) {
const avg = calcAverage(student);
console.log(`${student.name}의 평균 점수: ${avg.toFixed(2)}`);
}

console.log("=== for...of ===");
for (const student of students) {
  printResult(student);
}


console.log("=== forEach ===");
students.forEach(student => {
  printResult(student);
});

console.log("=== forEach() + callback function ===");
students.forEach(printResult);