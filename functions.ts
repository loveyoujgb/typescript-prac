function square(num) {
  return num * num;
}
// num 을 any type으로 추론한다.

//------------------------------------------------->

function greet(person: string = "stranger") {
  //person * person; /error
  return `Hi, ${person}`;
}

function asd(num = 10) {}
//파라미터의 기본 값 설정 예시 num의 기본값이 10인 함수

//파라미터의 기본 값을 설정하는 경우 애너테이션 뒤에 적어준다. "stranger" -> 아무 값도 안 넣는 경우 해당 기본값이 들어간다.
//greet(3); -> string이 아니므로 에러가 난다.

//------------------------------------------------->

const doSomething = (person: string, age: number, isFunny: boolean) => {};
//doSomething("ChickenFace",76); 함수의 파라미터 개수가 모자른 경우에도 에러가 난다.

//------------------------------------------------->
function count(num: number): number {
  return num + 1;
}
//함수의 반환값에 타입을 설정할 수 있다. return 에 타입에 맞게 적어야 될 것이다. 
//하지만 변수와 동일하게 타입추론을 해준다. 
//return문을 적지 않는 경우 void를 반환한다고 나온다. 아무것도 없다는 뜻.
