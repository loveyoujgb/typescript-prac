class Player {
  // 1. 타입스크립트에 알리지 않고 프로퍼티와 생성자를 초기화할 수 없다.
  // 1. 따라서, 이 클래스의 프로퍼티에 대해 타입스크립트에게 타입을 '미리' 알려준다.
  // 2. readonly // 3. 퍼블릭 접근 제어자 
  public readonly first: string;
  public readonly last: string;
  // 1. first, last 는 파라미터를 통해 값이 정해지므로 number처럼 값을 지정해줄 수 없는 케이스.
  // 3. 퍼블릭 접근 제어자 
  public score:number = 0;
  // 1. 생성자의 파라미터는 다른 함수의 파라미터와 동일한 방법으로 타입을 지정해준다.
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player("Elton", "Steele")
//1. 
//elton.score="123"; // error 넘버타입이라서 에러가 난다.
//2. readonly
// elton.first="235" // readonly로 읽기전용! 직접 수정할 수 없게 된다.

/* -------------------------------3. public & private 프라이빗 접근 제어자 ------------------------------- */
// public = 자바스크립트와 타입스크립트의 모든 클래스 프로퍼티와 메서드는 퍼블릭이다.
// 즉, 퍼블릭 접근 제어자는 필수는 아니지만, 다른 개발자가 클래스 외부에서 변경할 수 있다고 퍼블릭이라고 명시하는 것.
// private = 해당 프로퍼티 또는 메서드가 오직 클래스의 내부에서만 접근 및 사용할 수 있다고 알려줄 수 있다.