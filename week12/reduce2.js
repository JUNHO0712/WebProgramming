const students = [
    {name: 'Alice', age: 20, score:85},
    {name: 'Bob', age: 22, score:75},
    {name: 'Charlie', age: 23, score:93},
    {name: 'David', age: 21, score:83},
    {name: 'Eve', age: 20, score:62},
];

const scores = students.map(s => s.score);
console.log('scores:', scores);

const sum = scores.reduce((a, b) => a + b);
console.log(`sum: ${sum}`);
    
const sum2 = students.map(s => s.score).reduce((a, b) => a + b);
console.log(`sum2: ${sum2}`);

// 점수 총합 구하기