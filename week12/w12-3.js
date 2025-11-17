const cart = [
{ item: "노트북", price: 1200000, quantity: 1 },
{ item: "마우스", price: 35000, quantity: 2 },
{ item: "키보드", price: 89000, quantity: 3 }
];
console.log("=== 원본 장바구니 ===");
console.log(cart);

// 최종 목표:
// item 이름(item) 과 총액 (total) 값을 가진 새로운 장바구니 배열 생성
let newCart = [];

// 방법 1: for of 문
for (p of cart){
    let o= { item: p.item, price: p.price*p.quantity};
    newCart.push(o);
};
console.log("=== for ... of 새로운 장바구니 ===");
console.log(newCart);

// 방법 2: forEach 메서드 + 화살표 함수
newCart = [];
cart.forEach(p =>{
    let o= { item: p.item, price: p.price*p.quantity};
    newCart.push(o);
});
console.log("=== forEach 새로운 장바구니 ===");
console.log(newCart);

// 방법 3: map 메서드
//오해를 할 수 있으니 확실히 return과 {} BODY 써주기 
cart.map(p => 
   {return {item: p.item, total: p.price*p.quantity}})
console.log("=== map 새로운 장바구니 ===");
console.log(newCart);