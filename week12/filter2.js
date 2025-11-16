const students = [
    {name: 'Alice', age: 20, math: 85, english: 85},
    {name: 'Bob', age: 22, math: 75, english: 90},
    {name: 'Charlie', age: 23, math: 93, english: 70},
    {name: 'David', age: 21, math: 83, english: 95},
    {name: 'Eve', age: 20, math: 62, english: 88},
];

const mathUpper80 = students.filter(s => s.math > 80);
const mathUpper70AndEnglishUpper80 = students.filter(s => s.math > 70 && s.english > 80);

console.log(`mathUpper 80: ${mathUpper80}`);
console.log(`mathUpper70AndEnglishUpper80: ${mathUpper70AndEnglishUpper80}`);

console.log('mathUpper80:', mathUpper80);
console.log('mathUpper70AndEnglishUpper80:', mathUpper70AndEnglishUpper80);

