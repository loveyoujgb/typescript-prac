/* -------------------------------- tuple 튜플 -------------------------------- */
var stuff = [5, "sdf", "asdfa", "sdfsdf", 2];
//유니온 타입은 타입의 순서가 상관 없다.
var color = [255, 3, 24];
var goodRes = [200, "OK"];
// number, string 순서를 지켜야 하며 두가지 모두 들어가야 한다.
// 0번째 배열값을 문자열로 수정할 수도 없다.
goodRes.push(123);
//이미 만족된 사항 이후의 값을 추가하는 메서드를 쓰면 에러가 나지 않는다.
// pop을 해도 에러가 나지 않는다..
// js의 작동방식과 관련이 있다고 한다. 튜플의 한계.
var response = [
    [404, "Not Found"],
    [200, "OK"],
];
/* ---------------------------------- Enum --------------------------------- */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
//순서대로 0 1 2 3 의 상수가 할당된다.
var myStatus = OrderStatus.DELIVERED;
//코드 전체에서 참조할 수 있게 된다.
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
//자동완성으로 쉽게 찾아쓸 수 있다.
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys[ArrowKeys["ERROR"] = 400] = "ERROR";
})(ArrowKeys || (ArrowKeys = {}));
var orderTest = {
    orderNumber: 23523566,
    status: OrderStatus.PENDING
};
