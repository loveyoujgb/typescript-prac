var age = 21;
age = "24";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 324, long: 3253 };
function printAge(age) {
    console.log("You are ".concat(age, " year old"));
}
printAge(23);
printAge("83");
function calculateTax(price, tax) {
    // return price*tax
    // price가 string인 경우 *곱할 수 없으므로 에러가 납니다.
    // price.replace("$","")
    // price가 number인 경우 replace를 사용할 수 없으므로 에러가 납니다.
    // 타입이 다른 경우에 맞게 적용할 때 if문을 사용하여 합니다.
    // if(typeof price === "string"){
    //   price.replace("$","")
    // } else {
    //   price*tax
    // }
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", "")); // 숫자로 변환된다. -> number 타입이 되므로 return문에서 에러가 나지 않는다.
        //type 이 number인 price가 된다!
    }
    return price * tax;
}
console.log(calculateTax(45, 0.07));
console.log(calculateTax("$45", 0.07));
// $ node unionTypes.js
// You are 23 year old
// You are 83 year old
// 3.1500000000000004
// 3.1500000000000004