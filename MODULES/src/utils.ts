// function add(x: number, y: number) {
//   return x + y;
// }

// function sample<T>(arr: T[]): T {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }
//에러가 나지 않았다
/* --------------------------------- export --------------------------------- */
// function add(x: number, y: number) {
//   return x + y;
// }

// export function sample<T>(arr: T[]): T {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }

/* -------------------작업3 index.html파일 생성 후 순서대로 스크립트를 읽게 해보자 ------------------ */
// function add(x: number, y: number) {
//   return x + y;
// }

// function sample<T>(arr: T[]): T {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }

/* --------------------- 바꾼 후 다시 import export구문을 사용해보자 --------------------- */
export function add(x: number, y: number) {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}