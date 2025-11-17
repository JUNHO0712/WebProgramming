const cart = [
    { item: "노트북", price: 1500000 },
    { item: "마우스", price: 30000 },
    { item: "키보드", price: 50000 }
];

// 콜백 함수: 가격 할인 적용
function applyDiscount(product) {
    product.price *= 0.9; // 10% 할인
}
const printCart = cart => console.log(cart);

// forEach(callbackFunc)
cart.forEach(printCart);
console.log(cart);