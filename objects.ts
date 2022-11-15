/* -------------------------------- 객체를 받는 함수 ------------------------------- */
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

/* ---------------------------------- 객체 반환 --------------------------------- */
let coordinate: { x: number; y: number } = { x: 34, y: 2 };
//주로 이렇게 하진 않지만.. 변수에서의 객체반환 애너테이션은 위와 같이 한다.

function randonCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
//함수에서의 객체 반환

//printName({first:"Mick", last:"Jagger", age:473}) // 에러!
const singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer);
// 함수 안에서 정의하지 않은 파라미터를 사용하게 되면 에러가 난다.
// 반면, 정의하지 않은 파라미터를 사용한 변수를 함수의 파라미터로 넘길 때는 에러가 나지 않는다.
// singer 변수 === printName 파라미터 일치하는 것이 있는지만 확인한 후 변수에서 필요한 프로퍼티만 전달하기 때문이다.

/* -------------------------------- 타입 재사용, 별칭 생성 -------------------------------- */
type Point = {
  x: number;
  y: number;
};

// let point: { x: number; y: number } = { x: 34, y: 2 };
let point: Point = { x: 34, y: 2 };

// function randomPoint(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
function randomPoint(): Point {
  return { x: Math.random(), y: Math.random() };
}

// function doublePoint(point: { x: number; y: number }): { x: number; y: number } {
//   return { x: point.x * 2, y: point.y * 2 };
// }
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

//위와 같이 계속 타입을 동일하게 적을 때 별칭을 생성하여 사용한다.

//단순히 변수가 숫자인 것이 뻔하지만 명시적으로 명확하게 하고 싶은 경우 사용할 수도 있다(잘 쓰진 않음.)
type MyNum = number;
let age: MyNum = 234235;

/* ---------------------------------- 중첩 객체 --------------------------------- */
// function calculatePayout(song:{title:string, artist:string, numStreams:number, credits:{producer:string, writer:string}}){

// }
//위와 같은 중첩 객체의 애너테이션을 매번 사용해야 할 때 타입을 생성한다. 꼭 대문자로 시작!
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const Mysong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1223849,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

calculatePayout(Mysong);
printSong(Mysong);
