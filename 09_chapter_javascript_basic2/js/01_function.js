// TODO : 함수(==메소드) : js 내장함수(js 미리 만들어 놓은 함수들)
//          예) .split() , .toFixed() 등
// 함수 사용 이유(why?) : 코드 재사용(코딩 생산성 증가),
//                       코딩 라인이 짧아짐(코딩 효율성 증가)

// TODO : 함수 만드는 법(함수 정의)
// TODO : 1) 함수 1st 형태(패턴)
// 사용법 : (1) 함수 정의
//          function 함수명() {
//              실행문;
//           }
//          (2) 함수 사용(호출)
//          함수명();   // 함수 사용(호출)

// 예제) 안녕하세요 출력하는 함수를 정의하고 사용해 보세요.
// 함수 정의
function hello() {
  console.log("안녕하세요");
}
// 함수 사용(호출)
hello();
// 코드 재사용(코딩 라인이 짧아짐)
hello();
hello();

// 예제 1) "hello world" 출력하는 함수를 작성하고 함수를 사용(호출)하세요.
// 입력 : 없음
// 출력 : hello world
// 단 함수를 정의해서 출력하세요

// 함수 정의
function hello_1() {
  console.log("hello world");
}
// TODO 함수 사용(호출), 무조건 hello world 고정됨
hello_1();
// TODO 만약 hello world2 출력하고 싶으면?
// 기존에 동작하던 소스가 오류가 발생할 가능성이 커짐(소스 수정 지양)
function hello_1_1() {
  console.log("hello world2");
}
// TODO 추가로 함수를 만들어야하는 번거러움이 있다.(에러 발생 도모)
hello_1_1();

// TODO : 2) 함수 2nd 형태(패턴), ※1st 보다 효율적이기에 2nd 형태로 주로 사용하기!※
// 사용법 : (1) 함수 정의
//     function 함수명(매개변수, ...) {
//        실행문 = 실행문 + 매개변수; // 실행문에서 매개변수 활용
//     }

// 함수정의
function hello_2(params) {
  console.log(params); // 매개변수를 실행문에 활용, console.log("params")
}
//함수 사용(호출)
hello_2("안녕하세요"); // 매개변수에 값을 넣으면서 사용함(params = "안녕하세요")
hello_2("반갑습니다. 좋은 아침입니다"); // 매개변수에 값을 넣게 되면 1st처럼 번거롭게 함수를 안 넣어도 된다.

// TODO : 3) 함수 3rd 형태(패턴)
// 변수의 허용범위(스코프) : 항상 중괄호 안에서만 의미가 있음
// 사용법 : (1) 함수 정의
//     function 함수명(매개변수, ...) {
//          let 결과 = 실행문(매개변수);
//          return 결과; // 결과 내보내기(함수 밖으로 값을 내보냄)
//     }
//     (2) 함수 사용(호출)
//   let 변수 = 함수명(매개변수);
// 예제 3) 매개변수와 return 이 있는 함수를 정의해서 hello world 출력하세요.
// 함수 정의
function hello_3(params) {
  return params + " world"; // params + " world" : 결과 내보내기 됨
}
// 함수 사용(호출)
// "hello world" 결과가 나와서 result 변수에 저장됨
let result_3 = hello_3("hello");
console.log(result_3);

// 예제 4) 어떤 수를 매개변수로 받아서 제곱을 구하는 함수를 작성하세요.
// 입력 : 없음
// 출력 : 9
// 함수 호출 : f(3)
// 함수 3rd 형태 적용

function intput_4(num) {
  // 제곱 : num * num;
  // return : 함수 밖으로 결과 내보내기 예약어
  return num * num; // 제곱 결과 내보내기(밖으로)
}
let result_4 = intput_4(3); // f(3) 결과가 result_4 변수에 저정됨
console.log(result_4);

// 예제 5) 원의 넓이 구하기 함수를 작성하세요.
// 원의 넓이 공식 : 반지름 * 반지름 * 3.14
// 입력 : 5
// 출력 : 78.5
// 단, 함수 작성해서 결과 를 출력하세요

let intput_5 = Number(prompt("5번문제 : " + "5 입력"));

function num_5(num) {
  return num * num * 3.14;
}
let output_5_result = num_5(intput_5);
console.log(output_5_result);

// 예제 6) 원의 둘레 구하기 함수를 작성하세요.
// 원의 둘레 공식 : 반지름 * 2 * 3.14
// 입력 : 6
// 출력 : 37.68

let intput_6 = Number(prompt("6번문제 : " + "6 입력"));

function num_6(num) {
  return num * 2 * 3.14;
}
let output_6_result = num_6(intput_6);
console.log(output_6_result);

// 예제 7) 시작수 , 끝수가 주어지면 시작수~끝수까지의 합계를
//     구하는 함수를 작성하세요.
// 입력 1: 100
// 입력 2: 300
// 결과 :  40200

function sum(intput_7, intput_7_1) {
  let sumVal = 0; // 누적합 변수 초기화
  for (let i = intput_7; i <= intput_7_1; i++) {
    // 누적합
    sumVal = sumVal + i;
  }
  return sumVal; // 함수 밖으로 결과 내보내기
}

let intput_7 = Number(prompt("100 입력"));
let intput_7_1 = Number(prompt("300 입력"));

// 함수 사용(호출) : 3rd 형태
// let 변수명 = 함수명(값);
let output_7_result = sum(intput_7, intput_7_1);
// 결과 출력
console.log(output_7_result);
