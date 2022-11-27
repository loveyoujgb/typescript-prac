"use strict";
/* -------------------------- React, tsx 에서의 제네릭 함수 ------------------------- */
// 화사표 함수를 쓸 때 헷갈리지만.. 
// function getRandomElement<T>(list:T[]):T {
//   const randIdx = Math.floor(Math.random()*list.length); //랜덤 index 
//   return list[randIdx]
// }
//화살표함수 에서 T, 콤마를 붙여주자.
const getRandomElement2 = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
