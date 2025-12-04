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
// 깊은 복사는 내용을 복사해 별개의 공간에 저장
// user.gender은 문자열을 읽어오는 것이기 때문에 값 복사(기본형은 값 복사)
// object(예를 들어 type(male))은 참조 복사