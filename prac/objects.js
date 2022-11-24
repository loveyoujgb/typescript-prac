/* -------------------------------- 객체를 받는 함수 ------------------------------- */
function printName(person) {
  console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
/* ---------------------------------- 객체 반환 --------------------------------- */
var coordinate = { x: 34, y: 2 };
//주로 이렇게 하진 않지만.. 변수에서의 객체반환 애너테이션은 위와 같이 한다.
function randonCoordinate() {
  return { x: Math.random(), y: Math.random() };
}
//함수에서의 객체 반환
//printName({first:"Mick", last:"Jagger", age:473}) // 에러!
var singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer);
// let point: { x: number; y: number } = { x: 34, y: 2 };
var point = { x: 34, y: 2 };
// function randomPoint(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
function randomPoint() {
  return { x: Math.random(), y: Math.random() };
}
// function doublePoint(point: { x: number; y: number }): { x: number; y: number } {
//   return { x: point.x * 2, y: point.y * 2 };
// }
function doublePoint(point) {
  return { x: point.x * 2, y: point.y * 2 };
}
var age = 234235;
function calculatePayout(song) {
  return song.numStreams * 0.0033;
}
function printSong(song) {
  console.log("".concat(song.title, " - ").concat(song.artist));
}
var mysong = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};
// node로 확인하고 싶으면 변수로 바꿔서 console.log!
var earnings = calculatePayout(mysong);
console.log(earnings);
printSong(mysong);

// $ node objects.js
// Thomas Jenkins
// Mick Jagger
// 42481.9593
// Unchained Melody - Righteous Brothers

