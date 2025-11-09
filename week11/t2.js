var user ={
    name : "Baek",
    gender : "male"
};
var changeName = function(user,newname){
    return {
        name : newname,
        gender: user.gender
    }
}
var user2 = changeName(user,"Baek-JunHo");
if(user !== user2){
    console.log("user != user2");
}
console.log(user.name, user2.name);
console.log(user === user2);
//복사 개선
// newUser와 user가 다른 주소를 참조하기 때문에
// user와 user2는 다른 객체를 참조하게 된다.
// 따라서 user === user2는 false가 된다.   
// 깊은 복사, 값 복사 -> 새 객체 생성