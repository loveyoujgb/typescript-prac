let age: number | string = 21;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 324, long: 3253 };

/* ----------------------------- 함수에서의 unionType -1 ---------------------------- */
function printAge(age: number | string) {
  console.log(`You are ${age} year old`);
}

printAge(23);
printAge("83");

/* ----------------------------- 함수에서의 unionType -2 ---------------------------- */
function calculateTax(price: number | string, tax: number) {
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

/* ----------------------------- 배열에서의 unionType ---------------------------- */
const nums1: (number | string)[] = [];
// number와 string타입을 가진 배열

const nums2: number | string[] = [];
// number값 이거나, string타입을 가진 단일배열

const num3: number[] | string[] = [];
// number타입을 가진 단일배열 이거나, string타입을 가진 단일배열

const coords: (Point | Loc)[] = [];
coords.push({ lat: 324, long: 235 });
coords.push({ x: 3, y: 23 });
//커스텀 타입을 선언할 수도 있다.

/* --------------------------- 리터럴 타입에서의 unionType -------------------------- */
let zero: 0 = 0;
// zero =2; ->에러가 난다. 0을 가진 값이므로!

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
//두가지 값만 가질 수 있는 변수가 된다.

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Fri" | "Sat" | "Sun";
let today:DayOfWeek = "Mon";