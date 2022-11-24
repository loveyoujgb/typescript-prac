/* ----------------------------- 함수에서의 any type ----------------------------- */
function square(num) {
  return num * num;
}
// num 을 any type으로 추론한다.

/* ---------------------------- 파라미터의 기본값, 애너테이션 ---------------------------- */
function greet(person: string = "stranger") {
  //person * person; /error
  return `Hi, ${person}`;
}
//파라미터의 기본 값을 설정하는 경우 애너테이션 뒤에 적어준다. "stranger" -> 아무 값도 안 넣는 경우 해당 기본값이 들어간다.
//greet(3); -> string이 아니므로 에러가 난다.

function asd(num = 10) {}
//파라미터의 기본 값 설정 예시 num의 기본값이 10인 함수

const doSomething = (person: string, age: number, isFunny: boolean) => {};
//doSomething("ChickenFace",76); 함수의 파라미터 개수가 모자른 경우에도 에러가 난다.

/* ------------------------------ 함수의 반환값 애너테이션 ----------------------------- */
function count(num: number): number {
  return num + 1;
}
//함수의 반환값에 타입을 설정할 수 있다. return 에 타입에 맞게 적어야 될 것이다.
//하지만 변수와 동일하게 타입추론을 해준다.
//return문을 적지 않는 경우 void를 반환한다고 나온다. 아무것도 없다는 뜻.

/* ----------------------------- 두가지 타입(유니온 타입) ----------------------------- */
function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

/* --------------------------- map과 같은 함수에서의 애너테이션 -------------------------- */
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  // colors가 선언될 때 string인지 알고 있으므로 애너테이션을 쓸 필요가 없다.
  return color.toUpperCase();
});

/* ------------------------------- 함수에서의 void ------------------------------- */
function printTwice(msg: string):void {
  console.log(msg);
  console.log(msg);
  // return ""; 
  //항상 아무것도 반환하지 않도록 하길 원할때 -> void 로 설정! -> return 을 하는 경우 에러가 난다
}

/* -------------------------------- never 타입 -------------------------------- */
//절대로 반환하면 안되는 함수를 애너테이션 할 때, 함수의 반환 타입으로 쓰이는 때 사용된다. undefined를 반환해도 에러가 난다.
//void는 백그라운드에서 undefined로 반환되기에 never타입과는 다르다.
function makeError(msg: string):never{
  throw new Error(msg)
  // return undefined; -> 에러가 난다.
}

function gameLoop():never{ // -> 끝나지 않는 함수임을 never로 알려주고 있다.
  while(true){
    console.log("GAME LOOP RUNNING")
  }
  // return true -> error
}

// never 를 사용하여 아무것도 반환하지 않는 함수임을 명시적으로 알려주고 있다.