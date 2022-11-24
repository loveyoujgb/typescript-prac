// const activeUsers: [] = []
//빈 배열을 의미하는 것이므로 앞에 배열 안의 어떤 타입이 들어가는지 적어줘야 한다.

const activeUsers: string[] = [];
activeUsers.push("Tony");
//문자열만 push 가능

// const bools: Array<boolean> = []
const bools: boolean[] = [];
// 위의 두가지는 형태는 다르지만 서로 같은 뜻을 의미한다. 불리언 타입의 배열.

type Point = {
  x: number;
  y: number;
};
//객체 역할을 하지 않음. 타입선언만 !

const coords: Point[] = [];
coords.push({ x: 23, y: 3 });
// coords는 Point 타입에 있는 프로퍼티,타입을 지켜야만 한다. x나 y가 없거나 타입이 맞지 않으면 에러가 난다.

/* --------------------------------- 다차원 배열 --------------------------------- */
const board:string[][] =[["X","O","X"],["X","O","X"],["X","O","X"]]
//2차원 배열 - 배열 안에 배열을 넣는 경우 [][]로 타입을 표현한다.
//3차원 배열 - [][][]

