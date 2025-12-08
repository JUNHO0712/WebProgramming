const students = [
{ name: "김철수", score: [70, 82, 90] },
{ name: "이영희", score: [88, 90, 92] },
{ name: "박민수", score: [60, 58, 77 },
  {name: "choi", scores: [95]}
];

function printStudentInfo(student) {
console.log(`이름: ${student.name}, 점수: ${student.score}`);
}

console.log("=== for...of ===");
for (const student of students) {
  printStudentInfo(student);
}

console.log("=== forEach ===");
students.forEach(function(student) {
  printStudentInfo(student);
});

console.log("=== forEach() + callback function ===");
students.forEach(printStudentInfo);