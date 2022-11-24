/* -------------------------------- tuple 튜플 -------------------------------- */
const stuff: (string | number)[] = [5, "sdf", "asdfa", "sdfsdf", 2];
//유니온 타입은 타입의 순서가 상관 없다.

const color: [number, number, number] = [255, 3, 24];
// const color:number[]=[2354,235,235,235]
// 3개의 값만 들어가길 원할 때 [] 안에 타입을 직접 순서를 정해서 넣어준다.

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// number, string 순서를 지켜야 하며 두가지 모두 들어가야 한다.
// 0번째 배열값을 문자열로 수정할 수도 없다.
goodRes.push(123);
//이미 만족된 사항 이후의 값을 추가하는 메서드를 쓰면 에러가 나지 않는다.
// pop을 해도 에러가 나지 않는다..
// js의 작동방식과 관련이 있다고 한다. 튜플의 한계.

const response: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

/* ---------------------------------- Enum --------------------------------- */
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
//순서대로 0 1 2 3 의 상수가 할당된다.

const myStatus = OrderStatus.DELIVERED;
//코드 전체에서 참조할 수 있게 된다.

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);
//자동완성으로 쉽게 찾아쓸 수 있다.

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 400,
}
//직접 값을 정해서 할당할 수도 있다.

/* ----------------------------------- 주의점 ---------------------------------- */
// enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED
// }
// enum에 의해서 javascript 코드는 아래와 같이 추가된다!!! ---> 초기에 정해진 코드.. 지양하고 있다고 한다.
// var OrderStatus;
// (function (OrderStatus) {
//     OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
//     OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
//     OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
//     OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
// })(OrderStatus || (OrderStatus = {}));



//그렇기 때문에 다른 방식을 주로 사용한다. - const enum을 생성하는 방식!
//const 를 추가하면 OrderStatus.PENDING한 부분이 해당되는 숫자값으로 할당된다.
const enum OrderStatusTest {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const orderTest = {
  orderNumber: 23523566,
  status: OrderStatus.PENDING,
};

