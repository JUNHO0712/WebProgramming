const userList = [
    { name: "Alice", age: 25, math: 85, science: 75 },
    { name: "Bob", age: 30, math: 95, science: 80 },
    { name: "Charlie", age: 35, math: 76, science: 90 },
    ];
const plus =(a,b) => a + b;
studentList.forEach(student =>console.log(`${student.name} total: ${plus(student.math, 
    student.science)}`));