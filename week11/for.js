const userList = [
    { name: "Alice", age: 25, score: 85 },
    { name: "Bob", age: 30, score: 95 },
    { name: "Charlie", age: 35, score: 76 },
    ];

for(const user of userList){
    console.log('user:', user);
}

userList.forEach(function(user){
    console.log('user:', user);
});

userList.forEach(user =>  console.log('user:', user));