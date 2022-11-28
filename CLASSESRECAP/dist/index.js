"use strict";
// class Player {
//   // 1. 타입스크립트에 알리지 않고 프로퍼티와 생성자를 초기화할 수 없다.
//   // 1. 따라서, 이 클래스의 프로퍼티에 대해 타입스크립트에게 타입을 '미리' 알려준다.
//   // 2. readonly // 3. 퍼블릭 접근 제어자
//   public readonly first: string;
//   public readonly last: string;
//   // 4. private
//   // 해시# 표시와 private는 차이가 있다.
//   // 접근 제어자(private)와 private 식별자(#)는 같이 쓸 수 없다.
//   // #score:number =0; // score라는 프로퍼티 이름 -> 자바스크립트 코드
//   private score:number = 0; // score라는 private 항목이 된다. -> 타입스크립트
//   // 1. first, last 는 파라미터를 통해 값이 정해지므로 number처럼 값을 지정해줄 수 없는 케이스.
//   // 3. public 접근 제어자
//   // public score:number = 0;
//   // 1. 생성자의 파라미터는 다른 함수의 파라미터와 동일한 방법으로 타입을 지정해준다.
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     // 4. 클래스 내부에서 호출할 수 있는 private메서드
//     this.secretMethod();
//   }
//   // 4. private 메서드
//   private secretMethod():void {
//     console.log("SECRET METHOD")
//   }
// }
// const elton = new Player("Elton", "Steele")
//1.
//elton.score="123"; // error 넘버타입이라서 에러가 난다.
//2. readonly
// elton.first="235" // readonly로 읽기전용! 직접 수정할 수 없게 된다.
/* -------------------------------3. public & 4. private 프라이빗 접근 제어자 ------------------------------- */
// 3. public
// public = 자바스크립트와 타입스크립트의 모든 클래스 프로퍼티와 메서드는 퍼블릭이다.
// 즉, 퍼블릭 접근 제어자는 필수는 아니지만, 다른 개발자가 클래스 외부에서 변경할 수 있다고 퍼블릭이라고 명시하는 것.
// 4. private
// private = 해당 프로퍼티 또는 메서드가 오직 정의된 함수(클래스의 내부)에서만 접근 및 사용할 수 있다고 알려줄 수 있다.
// 타입스크립트가 에러가 떠도 자바스크립트로 컴파일 되어 실행된다.(private가 없는것으로 인식)
// elton.secretMethod(); //실행되기는 하지만. 타입스크립트에서는 에러! error: 'secretMethod' 속성은 private이며 'Player' 클래스 내에서만 액세스할 수 있습니다.
// console.log(elton.score); // 실행되기는 하지만. 타입스크립트에서는 에러!
/* ---------- 단축 구문(shortcut syntax) - 파라미터 프로퍼티(parameter property) ---------- */
// 생성자를 초기화하기 전에 먼저 타입을 선언하기위한 많은 항목이 필요하다. 복잡!
// 그래서 단축 구문을 사용한다.
// class Player {
//   //파라미터에 단축 구문을 추가하였다. 인스턴스를 만들면 first,last,score값이 잘 들어가있다!
//   // this.first = first; 등등과 같이 참조하도록 하는 코드를 안적어도 된다!!!
//   // 자바스크립트 코드에는
//         // this.first = first;
//         // this.last = last;
//         // this.score = score; 코드가 들어가게 된다.
//   constructor(public first: string, public last: string, private score: number) {}
//   private secretMethod(): void {
//     console.log("SECRET METHOD");
//   }
// }
// const elton = new Player("Elton", "Steele", 100);
/* ----------------------------- Getter와 Setter ----------------------------- */
// class Player {
//   constructor(public first: string, public last: string, private _score: number) {}
//   private secretMethod(): void {
//     console.log("SECRET METHOD");
//   }
//   get fullName(): string {
//     return `${this.first} ${this.last}`;
//   }
//   get score(): number {
//     return this._score;
//   }
//   // privage한 값을 없데이트할 수 있는 setter
//   set score(newScore: number) {
//     if (newScore < 0) {
//       throw new Error("Score cannot be negative!");
//     }
//     this._score = newScore;
//   }
// }
// const elton = new Player("Elton", "Steele", 100);
// elton.fullName; // 프로퍼티로 취급하여 접근, 하지만 getter은 읽기전용(접근) 이므로 값 수정 불가! setter로 수정가능^
// elton.score =99; //set을 통해 프로퍼티 처럼 사용하고 privage한 값을 없데이트할 수 있게 되었다.
// elton.score=-1; // 타입스크립트는 set score의 추가 로직을 이해할 정도로 똑똑하지 않다.
//추가 로직은 런타임 동안 확인하게 되고 결국 콘솔에러가 난 것을 확인할 수 있다.
/* ------------------------------ protected 제어자 ----------------------------- */
// 보호 키워드
// 상속 작업때 사용된다.
// private는 자식 클래스, 외부에서 엑세스 불가하지만 protected는 자식 클래스에서 접근 가능, 외부에서는 불가능하다.
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRET METHOD");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score; // _score값이 private 값인 경우 자식 클래스에서는 접근 불가. 부모 클래스에서만 접근 가능.
        // protected 제어자를 사용하게 되면 외부에서는 _score에 접근할 수 없지만 자식 클래스에서는 접근이 가능하다.
    }
}
const elton = new Player("Elton", "Steele", 100);
class Bike {
    // color ="red" Colorful 인터페이스를 따르므로 color가 필수다. 이와같이 알려주거나, constructor 사용하여 color을 사용해준다.
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        //Printable 인터페이스를 추가로 따르고 있으므로 print()를 사용해준다.
        console.log(`${this.color} ${this.brand} Jacket`);
    }
}
// 위 두 클래스 모두 Colorful 인터페이스의 규칙을 따른다.
// 공통점은 문자열인 color 프로퍼티를 갖는다는 점이다.
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
/* -------------------------------- 타입스크립트 Abstract 키워드/제어자 -------------------------------- */
// abstract 키워드는 클래스 앞에 사용하면 더이상 이 클래스는 인스턴스화 할 수 없게 된다.
// abstract는 패턴을 정의하고 자식 클래스에서 꼭 시행되어야 하는 메서드를 정의하는 데에 사용된다.(자식 클래스에서 시행되어야 하는 규칙(또는 제약..)을 추가하는것)
// 인스턴스화 하고 싶다면 ? abstract getPay() 를 만들어서 모든 Employee를 따르는 인스턴스가 getPay라는 메서드를 시행해야 한다. 규칙!을 상속
// abstract는 클래스에 있는 기능과 데이터도 가지고 있지만 이 클래스를 확장하려면 getPay 메서드를 사용해야한다.
// 인스페이스와 abstract 클래스의 주요한 차이?
// 인터페이스는 아래와 같이 숫자가 반환되게 할 수 있다. 하지만 이렇게 한다면.. Employee가 확장될 때 자동으로 얻게되는 추가 기능은 포함되지 않는다.
// 단순히 아래의 getPay 메서드만 필요로 하게 된다
// interface Payable{
//   getPay(): number;
// }
// 하지만 abstract클래스를 사용하게 되는 경우 그 안에 있는 기능(greet 같은..)과 값(first..)에 접근할 수 있다.
// Employee 를 설명하는 요소가 많은 것이다.
// 참고로* 확장할 abstract 클래스와 인터페이스는 동시에 구현이 가능하다. 양자택일이 아니다.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // Employee 클래스에 존재하는 메서드가 아님. =>Employee를 확장하는 모든 클래스에 존재해야 한다는 뜻.
    greet() {
        console.log("HELLO");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last); //부모의 생성자로 전달~(this.first, this.last와 같은 역할)
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
//abstract 클래스 이므로 getPay를 사용해야 한다.
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
/* ----------------------------------- 제네릭 ---------------------------------- */
// 제네릭은 여러 타입에서 사용할 수 있는 재사용 함수나 재사용 클래스를 정의할 수 있게 해주는 특수 구문이다.
// dothing이 숫자 또는 문자열을 허용하지만 제네릭은 모든 타입을 허용하고 그 타입이 무엇이든 동일한 타입을 반환하게 만들 수 있다.
// 아래 함수는 :number|string를 반환한다고 말할 수 있다.(둘중하나~)
// 하지만, 제네릭 함수를 작성하게 되면 // 타입[1]를 주면 타입[1]를 반환하는 함수가 된다.
// function doThing(thing:number|string):number|string{
// 아래를 보면, 이것이 숫자의 배열임을 알 수 있다
//const nums: number[] =[];
// Array라는 인터페이스 <>안에는 타입명
const nums = []; // 숫자롤 된 배열타입 반환
const colors = ["234"]; // 문자열로 된 배열타입 반환
/* --------------------------- 제네릭 - querySelector -------------------------- */
//타입스크립트는 inputEl을 Element | null 타입으로 추측한다. HTMLInputElement와 비슷한 타입들이 많지만
// querySelector는 어떤 Element인지는 모름.
// const inputEl = document.querySelector("#username")
// console.log(inputEl) //<input id="username" type="text" placeholder="username">
// console.dir(inputEl) //inputEl의 전체 객체를 확인해보자
// inputEl.value = "Hacked" //'Element' 형식에 'value' 속성이 없다고 인식한다. HTMLInput요소인지 알려줘야 한다.
// 또한 null일 수 있으므로 error!
//<>에 타입을 넣어 HTMLInputElement임을 알려준다.
const inputEl = document.querySelector("#username");
inputEl.value = "Hacked"; //null일 수 있으므로 !를 붙여서 null은 확실히 아니라고 알려준다.
// =>querySelector는 제네릭 함수로 특정 타입을 받는다.
// button
const btn = document.querySelector(".btn");
/* ------------------------------- 제네릭 함수 만들기 ------------------------------- */
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// identity 이라고 하는 제네릭 함수이며 'Type(참조명)' 타입을 입력할 수 있는 제네릭 함수라는 뜻.
function identity(item) {
    return item;
}
// 입력 타입에 따라 그 타입으로 반환한다.
identity(7); //function identity<number>(item: number): number
// identity<string>(7) //'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
// 인터페이스를 넣어도 동일하다. 해당 인터페이스를 넣고 반환하는 함수만 허용!
// identity<Cat>({}) // function identity<Cat>(item: Cat): Cat
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length); //랜덤 index
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"])); //함수를 돌릴 때 마다 랜덤으로 배열 내의 문자열 반환
getRandomElement([23, 5235, 6, 3, 42, 646, 235]); //function getRandomElement<number>(list: number[]): number
// 추론된 제네릭 타입 파라미터,
// 타입스크립트에서 제네릭 함수의 파라미터(인수)를 보고 어떤 타입을 받고 반환하는지 추론한다.
// 단, 모든 제네릭 함수에 적용되는 것은 아님!!
// - getElementById 나 querySelector 같은 함수들은 인수만 보고는 타입을 추론할 수 없다. 인수는 내용물이 아닌 알려주는 용도로 쓰이고 있을것이므로
// function getRandomElement<string>(list: string[]): string !!!
getRandomElement(["a", "b", "c"]);
/* ------------------------------ 여러 타입을 가진 제네릭 ----------------------------- */
// T U V
// i j k 와 같은 관례
// 반환하는 타입을 적지 않아도 된다. 반환 타입은 T와 U의 교차타입이라는 것을 추론할 것이다.(: T & U)
// function merge<T,U>(object1:T, object2:U){
// return {
//   ...object1,
//   ...object2
// }
// }
//아래와 같이 적지 않아도 된다.
// merge<{name:string},{pets:string[]}>({name:"colt"},{pets:["blue",'elton']})
// 첫번째와 두번째가 각각 T U 타입인 것을 알기 때문
// const comboObj = merge({name:'colt'},{pets:["blue",'elton']})
// console.log(merge({name:'colt'},{pets:["blue",'elton']}));
/* ------------------------------- 제네릭 - 타입 제한 추가하기 ------------------------------- */
// function merge<T,U>(object1:T, object2:U){
//   return {
//     ...object1,
//     ...object2
//   }
// }
// console.log(merge({name:'Colt'},9)) // T와 U는 어떤 타입이든지 받아들인다. 에러없이 {name:'Colt'} 객체만 받아들여진다.
// 이 때 타입 제한을 추가한다.
// extends를 넣어서 객체(object)타입으로 확장해보자
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
function printDoubleLength(thing) {
    return thing.length * 2;
    // thing에 length 속성이 있는지 알 수 없으므로 T뒤에 extends Lengthy를 작성해서 에러해결
}
// 어떤 타입이든간에 Length 인터페이스 규칙을 따라야만 한다.
printDoubleLength("23ㅇㄴㄹ");
// printDoubleLength(235325); // 'number' 형식의 인수는 'Lengthy' 형식의 매개 변수에 할당될 수 없습니다.
//다만.. 위의 예시는 적절한 제네릭 함수는 아니다^. 아래와 같이 그냥 함수로 하는게 더 깔끔한 예시이기는 하다...
function printDoubleLength2(thing) {
    return thing.length * 2;
    // thing에 length 속성이 있는지 알 수 없으므로 T뒤에 extends Lengthy를 작성해서 에러해결
}
/* ------------------------------- 제네릭 - 기본 타입 파라미터 ------------------------------- */
function makeEmptyArray() {
    return [];
}
const strings = makeEmptyArray(); // function makeEmptyArray<string>(): string[]
//<>을 아무것도 적지 않는다면? unknown으로 지정된다.
const strings2 = makeEmptyArray(); // function makeEmptyArray<unknown>(): unknown[]
//기본 값을 지정하는 방법!
//T 뒤에 = number로 기본 값을 적어준다.
function makeEmptyArray3() {
    return [];
}
// <> 타입을 적지 않은 경우에만! 기본값이 들어간다.
const strings3 = makeEmptyArray3(); // function makeEmptyArray3<number>(): number[]
// class VideoPlaylist {
//   public videos: Video[] = [];
// }
// class SongPlaylist {
//   public song: Song[] = [];
// }
//위의 두가지 클래스를 제네릭으로 바꾸면 아래처럼 가능하다.
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
//<>에 인터페이스를 넣음으로써 각각의 인수가 Song, Video여야 되는 인터페이스가 생성된다..
const songs = new Playlist();
// songs.add() // (method) Playlist<Song>.add(el: Song): void
const videos = new Playlist();
// videos.add() // (method) Playlist<Video>.add(el: Video): void
//제네릭 끝.
/* --------------------------------- 타입 좁히기 - Typeof 가드--------------------------------- */
function triple(value) {
    // 값을 3번 연속되게 하고 싶다고 가정해보자.
    // 타입에 따라 다른 메서드가 들어가야 하기 때문에 에러가 난다.
    // value.repeat(3)
    // value * 3
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
/* --------------------------------- 타입 좁히기 - Truthiness 가드--------------------------------- */
// if문을 통해 truthy 인지 falsy 인지 확인하는 타입 좁히기.
// 예시1
const el = document.getElementById("idk"); // HTMLElement | null
if (el) {
    // if문을 통해 truthy한 값으로 인지함. => HTMLElement 요소일 경우가 된다.
    el;
}
else {
    el; // null 이어야만 한다.
}
// 예시2
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            //word: string
            //문자열인 경우가 된다.
            console.log(char);
        }
        console.log(word);
    }
    else {
        console.log("YOU DID NOT PASS IN A WORD!");
        console.log(word); // word: string | undefined => if문에서 반드시 문자열! 이라고 단정짓고 있는 것은 아니므로
        // 빈 문자열은 falsy한 값
    }
};
/* ---------------------------- Equality (동등) 좁히기 --------------------------- */
function someDemo(x, y) {
    if (x === y) {
        x; //:stting
        y; //:string
        // ===를 통해 타입까지 알맞아야만 한다.
    }
    // ==으로 하는 경우? 정확하지 않음.
    // if(x == y){
    //   return x.toUpperCase();
    // }
}
// ==으로 하는 경우?
// someDemo(3,"3"); // 타입스크립트가 에러를 찾지 못한다. 자바스크립트에서 TypeError 가 난다.
/* ------------------------------ in연산자로 타입 좁히기 ----------------------------- */
const pet = { name: "Kitty", age: 20 };
function getRuntime(media) {
    if ("numEpisodes" in media) {
        // if문의 in연산자를 통해 media: TVShow 타입으로 좁혀진다.
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration; // media: Movie
}
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 }));
