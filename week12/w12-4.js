// 사용자 데이터 처리 예제
const users = [
    { name: 'KSD', age: 25, active: true },
    { name: 'KJH', age: 30, active: false },
    { name: 'CSH', age: 28, active: true },
    { name: 'HSW', age: 22, active: true }
];

// 고차 함수 체이닝
const activeAdultUsers = users
.filter(user => user.active) // 활성 사용자만
.filter(user => user.age >= 25) // 25세 이상만
.map(user => user.name) // 이름만 추출
.sort(); // 정렬

console.log(activeAdultUsers); // ['김철수', '박민수']

// 예전 방식
// const a = user.filter(u => u.active);
// const b = a.filter(b => u.age>=25);
// const c = b.map(u=>u.name);

// 재사용 가능한 고차 함수 만들기
const createFilter = (property, value) => {
    return (item) => item[property] === value;
};
const isActive = createFilter('active', true);
const activeUsers = users.filter(isActive);

// reduce를 활용한 데이터 집계
const totalAge = users
.filter(user => user.active)
.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // 75