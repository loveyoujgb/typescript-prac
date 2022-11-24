// Point as a TYPE ALIAS
// type Point = {
//     x: number,
//     y: number
// }
var pt = { x: 123, y: 1234 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 21837,
    sayHi: function () {
        return "Hello!"; // 문자열 반환 메서드
    }
};
thomas.first = "kasjdh";
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark: function () {
        return "WOOF WOOF!";
    }
};
var chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark: function () {
        return "Bark!";
    },
    job: "guide dog"
};
var pierre = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
};
