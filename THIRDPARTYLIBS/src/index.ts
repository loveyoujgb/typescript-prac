/* --------------------------------- 타입선언 개요 -------------------------------- */
// .d.ts files - 실행될 자바스크립트 코드 및 출력을 찾아볼 수 없다. 대신 타입 정보만 찾을 수 있다.
// 즉, 타입을 선언하는 것
// 타입스크립트가 확인하고 코드에 대한 타입 규칙을 이해하고 실행하는 데 사용한다.

// .ts 파일에는 실행할 실제 코드 작성
// .d.ts 파일에는 중요한 타입 정보를 포함시킨다.
// 코드 작성 >우클릭>Type Definition클릭 > lib.dom.d.ts 파일이 열린다. 인터페이스, 클래스, 타입 별칭의 집합 - 모든 부분이 이곳에 설명되어 있다.
// 제 3자 라이브러리 사용을 할 때는 타입을 어떻게 어디에 있는 설명을 보고 작성해야 될지 알아보자.

/* ---------------------------------- axios --------------------------------- */
import axios from "axios";
// axios // F12 타입선언 파일이 열린다. axios 라이브러리는 타입 선언 파일이 기본으로 함께 제공된다. 따로 설치하지 않아도 볼 수 있다.
// axios.get // axios.get이 제네릭 함수<T>라고 나온다.
// "https://jsonplaceholder.typicode.com/uwers/1"

// axios
//   .get<boolean>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("WOOO");
//     console.log(res.data)
//     const {data} = res; // const data: boolean - boolean으로 타입선언하여 data의 타입이 boolean이 된다.
//   })
//   .catch((e) => {
//     console.log("ERROR", e);
//   });
// export interface AxiosResponse<T = any, D = any>  {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: AxiosRequestConfig<D>;
//   request?: any;
// }

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1") // User에서 선언한 모든 타입이 AxiosResponse 에 전달되게 된다. ==> data
  .then((res) => {
    console.log("WOO!!!");
    console.log(res);
    printUser(res.data); // 단일 사용자 출력
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users") // 배열 타입!
  .then((res) => {
    console.log("WOO!!!");
    res.data.forEach(printUser); // 전체 사용자 출력
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}

/* --------------------------------- 타입 개별설치 -------------------------------- */

// import _ from "lodash" //모듈 'lodash'에 대한 선언 파일을 찾을 수 없습니다.
// 타입스크립트 공식문서에 보면 타입선언에 대한 정보를 다운할 수 있는 방법을 알려주고 있다.
// npm install --save-dev @types/lodash
// https://github.com/DefinitelyTyped/DefinitelyTyped
// 많이 쓰이는 라이브러리들의 타입선언이 들어있는 깃헙 레포

import _ from "lodash"; // 에러가 사라졌다.

// _.partition 메서드를 사용한 후 타입설명을 확인할 수 있게 된다

/* --------------------------------- 네임스페이스 --------------------------------- */
// 일부 타입스크립트 타입선언 파일에서 namespace를 발견할 수 있다.
// 타입스크립트에서 코드를 구성하는 오래된 방식이다. 현재는 거의 사용할 일이 없어지고 있다.

