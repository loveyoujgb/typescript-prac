"use strict";
/* --------------------------------- 타입선언 개요 -------------------------------- */
// .d.ts files - 실행될 자바스크립트 코드 및 출력을 찾아볼 수 없다. 대신 타입 정보만 찾을 수 있다.
// 즉, 타입을 선언하는 것
// 타입스크립트가 확인하고 코드에 대한 타입 규칙을 이해하고 실행하는 데 사용한다.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// .ts 파일에는 실행할 실제 코드 작성
// .d.ts 파일에는 중요한 타입 정보를 포함시킨다.
// 코드 작성 >우클릭>Type Definition클릭 > lib.dom.d.ts 파일이 열린다. 인터페이스, 클래스, 타입 별칭의 집합 - 모든 부분이 이곳에 설명되어 있다.
// 제 3자 라이브러리 사용을 할 때는 타입을 어떻게 어디에 있는 설명을 보고 작성해야 될지 알아보자.
/* ---------------------------------- axios --------------------------------- */
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1") // User에서 선언한 모든 타입이 AxiosResponse 에 전달되게 된다. ==> data
    .then((res) => {
    console.log("WOO!!!");
    console.log(res);
    printUser(res.data); // 단일 사용자 출력
})
    .catch((e) => {
    console.log("ERROR!", e);
});
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users") // 배열 타입!
    .then((res) => {
    console.log("WOO!!!");
    res.data.forEach(printUser); // 전체 사용자 출력
})
    .catch((e) => {
    console.log("ERROR!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
