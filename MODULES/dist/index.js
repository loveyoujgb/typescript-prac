// console.log("HEELO WORLD!")
// sample([12,3,4]);
// 자바스크립트는 export나 최상위 await가 없는 파일을 모듈이 아닌 스크립트로 간주한다고 선언한다.
// 또한 한 스크립트 내에 있는 변수와 타입은 공유 전역 스코프 내부에 있다고 선언된다.
// 현재 두 파일에 각각 코드를 작성하였으나 모듈로 작성하고 있지 않아서 같은 스크립트로 인식하여 접근이 가능하다.
//즉, 모듈을 선언하지 않고 전역 네임스페이스에서 작업한다면 아무 오류가 나지 않는다.
// 어디엔가 export를 선언하는 순간 ES모듈 모드로 전환되어 각 파일이 각자 독립된 파일과 네임스페이스로 분리되어 공유하려는 함수 기능을 일일이 가져오고 내보내야 되게 된다.
/* ------------------- ES6 모듈을 이용해 내보내기와 가져오기를 해보자 ------------------- */
// sample([12,3,4]); // error!
// import { sample } from "./utils.js";
// sample([12, 3, 4]);
// console.log(sample([12, 3, 4]));
/* ------------------- 작업3-  index.html파일 생성 후 순서대로 스크립트를 읽게 해보자 ------------------ */
//브라우저 내 자바스크립트는 CommonJS 모듈을 이해하지 못하기 때문에 export inport를 이해하지 못한다.
// 따라서 각 구문들을 지우고 순서대로 컴파일하여 코드를 정리한다.
// sample([12, 3, 4]);
// console.log(sample([12, 3, 4]));
//작동!
// 하지만 로직이 복잡해지면 내보내기, 가져오기 기능이 필요하다.
// 그 기능들을 가진 ES6모듈 구문을 사용할 수 있도록 만들어야 한다.
/* --------------------- 바꾼 후 다시 import export구문을 사용해보자 --------------------- */
// tsconfig.json 의 module값이 commonJS으로 되어있다. 그것을 ES6로 바꾸면 된다!
// 추가로 index.html 에 type="module" 을 추가해서 모듈의 타입을 특정해준다.
// 그 다음 lite server를 설치하고 스크립트 시작 시에 라이트서버가 실행되도록 세팅한다.
// 브라우저에서 모듈 구문을 사용하려면 거쳐야 하는 절차!
// 이 코드를 어디에 작성하든 ES모듈 구문을 이해시키도록 하는 것이다.
import User from "./User.js"; // default 를 사용한 export는 기본 내보내기를 위한 컨테이너처럼 작동한다 .
import { sample as randomSample, add, pi } from "./utils.js"; // { 중괄호 }로 감싸서 import해야한다.
// sample 변수가 두개인 경우 에러가 난다. 이 경우 as를 통해 다른 이름으로 가져온다  
import { userHelper } from "./User.js";
randomSample([12, 3, 4]);
console.log(randomSample([12, 3, 4]));
add(423, 153);
console.log(add(423, 153));
//작동!
console.log(pi);
console.log(User);
console.log(userHelper);
const sample = 123;
