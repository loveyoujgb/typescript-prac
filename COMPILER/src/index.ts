interface Chicken {
  breed:string;
  eggsPerWeek:number;
  name:string;
  age:number;
}

const norma : Chicken ={
  breed:"Silkie",
  eggsPerWeek:4,
  name:"Norma",
  age:2
}

const juniper:Chicken ={
  breed:"Silkie",
  eggsPerWeek:5,
  name:"Juniper",
  age:1,
}

// function doThing(thing){ // 암시적 any타입인 경우 에러가 난다. (strick옵션이 true일 때 또는 noImplicitAny 옵션이 true일 때 )
//   console.log(thing)
// }

let user:string[] = ["asdfdsf","sdfdsf"]; // 만약 null을 할당 해도 되는 변수인 경우 string | null 를 적어서 사용한다. 
// user=null;
// user=undefined; //null, undefined 값을 할당하게 되면 에러가 난다(strick옵션이 true일 때 또는 strictNullChecks 옵션이 true일 때 )
// strick옵션이 strictNullChecks, noImplicitAny 등등을 가지고 있기 때문에 strick을 true로 두면 에러가 나는 것이다. 원리이해!!
