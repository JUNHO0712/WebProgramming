const employee =[
    {name: 'Alice', age: 30, department: 'HR'},
    {name: 'Bob', age: 25, department: 'Engineering'},
    {name: 'Charlie', age: 28, department: 'Sales'},
    {name: 'David', age: 35, department: 'Engineering'},
    {name: 'Eve', age: 22, department: 'HR'},
];

const developrAgeList = employee.filter(e => e.department === 'Engineering').map(e => e.age).reduce((a, b) => a + b);

console.log('developrAgeList:', developrAgeList);