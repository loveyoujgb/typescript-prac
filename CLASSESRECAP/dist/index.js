"use strict";
// class Player {
//   taunt(){
//     console.log("BOOYAH")
//   }
// }
// const player1 = new Player(); //Player클래스의 인스턴스 생성
// player1.taunt();

// const player2 = new Player(); //Player클래스의 인스턴스 생성
// player2.taunt();

/* ---------------------------- 생성자(constructor) ---------------------------- */
// class Player {
//   constructor(first,last){
//     //한번만 정의가능, 대개 클래스에서는 생성자를 정의하여 사용한다.
//     //이 클래스에 대한 인스턴스를 만들면 자바스크립트가 이 생성자 함수를 호출해준다. 사용자가 직접 호출하지 않아도 된다.
//     this.first = first; //this는 해당하는 인스턴스를 가리키고, this를 통해 반환된다. (인스턴스에 값을 부여해준다.)
//     this.last = last;
//   }

//   taunt(){
//     console.log("BOOYAH")
//   }
// }
// const player1 = new Player("blue", "steele"); //Player클래스의 인스턴스 생성
// player1.taunt();
// console.log(player1.first)

// const player2 = new Player("charlie","brown"); //Player클래스의 인스턴스 생성
// player2.taunt();

/* --------------------------------- 클래스 필드 --------------------------------- */
// class Player {
//   //클래스 필드는 프로퍼티를 생성할 때 생성자를 거치지도, this를 참조하지 않고도 하드코딩된 값을 추가할 수 있다.
//   score = 0; // 항상 정해져있는 값인 경우 클래스필드를 사용할 수 있겠다. 단지 초기값으로 가지고 있게 된다. 상수가 아님. 바뀔 수 있다.
//   numLives = 10;
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//   }

//   taunt() {
//     console.log("BOOYAH");
//   }
//   loseLife() {
//     this.numLives -= 1;
//   }
// }
// const player2 = new Player("charlie", "brown"); //Player클래스의 인스턴스 생성
// console.log(player2); // Player {score: 0, numLives: 10, first: 'charlie', last: 'brown'}

// console.log(player2.numLives); //10
// player2.loseLife();
// console.log(player2.numLives); //9 -> 이와같이 클래스필드는 초기값을 설정한 것이 된다.

/* --------------------------------- 프라이빗 필드 -------------------------------- */
//this앞이나 클래스필드 앞이나 메서드 앞에 #를 붙이면 프라이빗 값이 된다.
// class Player {
//   #score = 0; //해시표시를 하게 되면 클래스 내에서만 이 값을 사용.변경.액세스할 수 있게 된다. (밖에서 변경할 수 있기 때문에 변경되지 않도록!)
//   numLives = 10;
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//     //this.#sample = 235235; this에도 해시표시 가능
//     this.#secret();
//   }
//   // score 프로퍼티에 접근하게 하기 위해서는 메서드를 사용한다.
//   getScore() {
//     return this.#score;
//   }
//   // score 프로퍼티 값 변경 메서드 생성
//   updateScore(newScore) {
//     this.#score = newScore;
//   }
//   taunt() {
//     console.log("BOOYAH");
//   }
//   loseLife() {
//     this.numLives -= 1;
//   }
//   #secret() {
//     console.log("SECRET!!!")
//   }
// }
// const player2 = new Player("charlie", "brown");
// // player2.#score -> error
// console.log(player2.getScore()); //0
// console.log(player2.updateScore(28)); // score값 변경
// console.log(player2.getScore()); //28

/* --------------------------------- 객체 접근자 Getters & Setters-------------------------------- */
// # 프라이빗 값을 getter, setter로  접근, 업데이트할 수 있다.
//프로퍼티처럼 보이는 합성 프로퍼티를 쉽게 만들 수 있다.
//마치 메서드가 있는 듯이 그에 해당하는 로직을 실행한다.
class Player {
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  // first, last를 업데이트하는 Setters를 만들어서 값을 업데이트할 수 있다.
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  // Getters : 아래의 getScore코드와 같은 역할을 한다. 함수처럼 사용하지 않아도 되는 더 깔끔한 코드
  get score() {
    return this.#score;
  }
  // Setters : 메서드처럼 작동한다. 조건을 붙일 수 있다.
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive!");
    }
    this.#score = newScore;
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log("BOOYAH");
  }
  loseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log("SECRET!!!");
  }
}
const player2 = new Player("charlie", "brown");
console.log(player2.fullName); //charlie brown
console.log(player2.score); //0
player2.score = 2342353;
// getters만 사용할 때는 값이 변경되지 않는다. console.log(player2.score); // 0
// Setters코드를 추가하여 값이 변경되게 된다.!!
console.log(player2.score); //2342353
// player2.score = -2342353; // Uncaught Error: Score must be positive!

console.log(player2.fullName); //charlie brown
player2.fullName = "Amy Adams"; //메서드지만 사용할 때는 프로퍼티 처럼 사용한다.
console.log(player2); //Player {numLives: 10, first: 'Amy', last: 'Adams', #secret: ƒ, #score: 2342353} 변경 성공!!
