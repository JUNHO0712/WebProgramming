var user ={
    name : "Baek",
    gender : "male"
};
var changeName = function(user,newname){
   let newUser = user;
    newUser.name = newname;
    return newUser;

}
var user2 = changeName(user,"Baek-JunHo");
if(user !== user2){
    console.log("user != user2");
}
console.log(user.name, user2.name);
console.log(user === user2);

// newUser와 user가 같은 주소를 참조하기 때문에
// user와 user2는 같은 객체를 참조하게 된다.
// 따라서 user === user2는 true가 된다.
// 복사가 제대로 이루어지지 않음
// 참조 복사 -> 두 변수가 같은 메모리 공간을 가리키게 되는 것 
// 보통 js는 배열에서 참조 복사가 일어남