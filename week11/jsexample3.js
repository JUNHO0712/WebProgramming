const students = [
{ name: "김철수", score: 85 },
{ name: "이영희", score: 92 },
{ name: "박민수", score: 78 }
];

function printStudentInfo(student) {
console.log(`이름: ${student.name}, 점수: ${student.score}`);
}

console.log("=== for문 ===");
for (let i = 0; i < students.length; i++) {
  printStudentInfo(students[i]);
}

console.log("=== forEach ===");
students.forEach(function(student) {
  printStudentInfo(student);
});

console.log("=== for + forEach 조합 ===");
// 바깥 for문 → 강제로 1번만 실행 (예시용)
for (let i = 0; i < 1; i++) {
  students.forEach(student => printStudentInfo(student));
}