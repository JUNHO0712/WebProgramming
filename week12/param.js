function changeValue(val) {
    val = val + 10;
}
let kval = 10;
console.log(kval); // 10
changeValue(kval);
console.log(kval); // 10

function changeObject(obj) {
    obj.name = "corder";
}

let ksd = { name: "ksd" };

console.log(ksd);
changeObject(ksd);
console.log(ksd);