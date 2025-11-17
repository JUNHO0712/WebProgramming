const students = [
{ name: "김철수", score: 85 },
{ name: "이영희", score: 92 },
{ name: "박민수", score: 78 }
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