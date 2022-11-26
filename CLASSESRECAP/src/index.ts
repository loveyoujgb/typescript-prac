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
  constructor(public first: string, public last: string, protected _score: number) {}

  private secretMethod(): void {
    console.log("SECRET METHOD");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative!");
    }
    this._score = newScore;
  }
}
class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score; // _score값이 private 값인 경우 자식 클래스에서는 접근 불가. 부모 클래스에서만 접근 가능.
    // protected 제어자를 사용하게 되면 외부에서는 _score에 접근할 수 없지만 자식 클래스에서는 접근이 가능하다.
  }
}

const elton = new Player("Elton", "Steele", 100);

/* ---------------------------------- 인터페이스 --------------------------------- */
interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  // color ="red" Colorful 인터페이스를 따르므로 color가 필수다. 이와같이 알려주거나, constructor 사용하여 color을 사용해준다.
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
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

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number; // 자식 클래스에서 꼭 사용해야 되도록 한다는 뜻. 
  // Employee 클래스에 존재하는 메서드가 아님. =>Employee를 확장하는 모든 클래스에 존재해야 한다는 뜻.
  greet(){
    console.log("HELLO")
  }
}

class FullTimeEmployee extends Employee {
  constructor(first:string, last:string, private salary:number){
    super(first,last);//부모의 생성자로 전달~(this.first, this.last와 같은 역할)
  }
  getPay(): number {
    return this.salary;
  }
}
class PartTimeEmployee extends Employee{
  constructor(first:string, last:string, private hourlyRate:number, private hoursWorked:number){
    super(first,last);
  }
  getPay():number{
    return this.hourlyRate * this.hoursWorked;
  }
}

//abstract 클래스 이므로 getPay를 사용해야 한다.
const betty = new FullTimeEmployee("Betty","White",95000);
console.log(betty.getPay())

const bill = new PartTimeEmployee("Bill","Billerson",24,1100)
console.log(bill.getPay()) 