var user ={
    name : "Baek",
    gender : "male"
};
let copyObject = function(target) {
  let result = {};                // 🧱 1) 새 객체(새 주소) 생성
  for (let key in target) {       // 🧭 2) 원본의 각 속성을 반복
    result[key] = target[key];    // 🪣 3) 새 객체의 같은 key에 값 복사
  }
  return result;                  // 🎁 4) 새 객체 반환
};

let user2 = copyObject(user);
console.log("user2", user2);
user2.name = "Baek-JunHo";

if(user !== user2){
    console.log("user != user2");
}
console.log(user.name, user2.name);
console.log(user === user2);

// “새로운 객체를 만들어서, 그 새 객체의 주소 안에 복사하려는 값을 하나씩 저장한 것”
