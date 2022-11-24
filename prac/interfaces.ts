// Point as a TYPE ALIAS
// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 213, y:12}

/* ------------------------ INTERFACE: ----------------------- */
// 인터페이스와 타입은 매우 비슷하다. 동일한 역할을 한다(일단은) 인터페이스는 아래와 같이 사용한다.
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
  readonly id: number; // id를 readonly 읽기 전용으로 설정하면 변경이 불가능해질 것이다.
  first: string;
  last: string;
  nickname?: string; // nickname이 없어도 에러가 나지 않게 된다.
  sayHi(): string; // 추가로 인터페이스에 메서드를 넣는 방식은 왼쪽과 같다.(파라미터를 받지 않고 string 문자열을 반환하는 메서드)
  // sayHi: () => string; // 다른 작성 방식은 이 방법이다. 둘다 같은 메서드라는 뜻!
}

const thomas: Person = {
  first: "Thomas", // 필수
  last: "Hardy", // 필수
  nickname: "Tom", // 없어도 에러가 나지 않을 것!
  id: 21837, // 변경불가 값이 된다. (초기 설정 시의 값이 고정된다.)
  sayHi: () => { // 아무런 인수 x 받지 않음
    return "Hello!"; // 문자열 반환 메서드
  },
};

thomas.first = "kasjdh";
// thomas.id = 238974;

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number; // 똑같이 인수에 타입 설정을 안하면 any로 설정될 것이다. 인수를 꼭 적어야만 하는 인터페이스를 설정한 것을 의미.
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) { // 인수를 꼭 적어야 한다. 똑같이 숫자 타입이어야 에러가 나지 않는다. or 타입은 적지 않고 추후에 사용될 때 숫자를 넣어야만 된다.
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

/* ------------------------ Re-opening an interface: ------------------------ */
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}
// 인터페이스를 다시 열어 Dog는 breed, bark가 있다고 추가로 지정해주는 것을 의미한다. 
// 기존거에서 추가하고 싶을 때, 인터페이스를 멀리 써두었을 때!, 삭제나 덮어쓰기를 원치 않을 때 사용한다. 

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};
//위의 두가지를 모두 포함한 인터페이스가 되므로 두가지를 포함한 대로 적어야 한다.

/* ------------------------- Extending an interface:상속 기능------------------------ */
interface ServiceDog extends Dog { //Dog를 상속하는 인터페이스, 즉 위의 4가지를 포함한 인터페이스가 되어야 한다. 
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  }, // 여기까지 Dog 인터페이스를 상속하는 부분.
  job: "guide dog", // 추가로 인터페이스에 추가한 부분!
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

/* ---------------------- Extending multiple interfaces (여러 인터페이스 확장) --------------------- */
interface Engineer extends Human, Employee { //두가지 인터페이스를 추가하여 인터페이스 확장이 가능하다. 
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre", // Human 인터페이스 
  id: 123897, 
  email: "pierre@gmail.com", // Employee 인터페이스 
  level: "senior",
  languages: ["JS", "Python"], // Engineer 인터페이스
};


/* --------------------------- Types vs Interface --------------------------- */
// 1. 인터페이스는 객체만을 묘사한다. => 리터럴 타입을 묘사할 수 없다.
type Color = "red" | "Blue"; //리터럴 유니온 타입 인데 객체가 아닌 다른 타입이므로 인터페이스에서 사용할 수 없다.

//2. 인터페이스는 다시 열어서 추가할 수 있다(다시 코드를 써서 작성하면 기존거에서 + 추가되지만 '타입'은 다시 열 수 없다. )

//3. 인터페이스는 상속(extends) 키워드 사용이 가능하다.
// 타입은 &(엔퍼센트)를 사용해서 다른 타입을 추가할 수 있다.
type Name = {
  name:string;
}
type PersonA = Name &{
  age:number;
}