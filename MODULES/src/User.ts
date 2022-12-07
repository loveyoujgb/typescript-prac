import { Person } from "./types";
// 좀 더 확실하게 타입을 가져오는 방법(바벨같은 것 사용할 때 쓰는게 좋다.)
// import {type Person } from "./types"; 지정해서 타입 꺼내오기
// import type{ Person } from "./types"; {}안에 있는 전체 타입 꺼내오기

export default class User implements Person{  //Person 이라는 인터페이스 가져오기!
  // default 를 사용한 export. 기본값 하나만 가질 수 있다. 
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out!!`);
  }
}

export function userHelper(){
  console.log("USER HELPER!")
}