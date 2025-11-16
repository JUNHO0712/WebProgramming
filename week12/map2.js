const listEmployees = [
    {name: 'Alice', age: 35, salary: 5000},
    {name: 'Bob', age: 28, salary: 4000},
    {name: 'Charlie', age: 32, salary: 4500},
    {name: 'David', age: 45, salary: 6000},
];

const raisedSalaryList = listEmployees.map(e => e.salary * 1.1);
raisedSalaryList.forEach(s => console.log(`salary: ${s}`));
raisedSalaryList.forEach(s => console.log(s)); 

// map 메서드 사용
// listEmployees의 각 요소에 대해 급여를 10% 인상하는 함수를 전달
// 화살표 함수 사용