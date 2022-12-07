export interface Person {
  username: string;
  email: string;
}

export type Color = "red" | "green" | "blue";
//컴파일링 하면 타입스크립트 문구가 모두 사라질 것이다.^^
// 바벨을 사용할 때에는 문제가 생길 수 있다. 그때는 import type ~ 으로 임포트 한다.(좀더 안전하게!)