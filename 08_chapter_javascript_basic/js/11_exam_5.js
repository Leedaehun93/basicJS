// TODO : 새로운 출력방법(3) :
// 값 이 웹브라우저에 출력됨
// console.log(값) 대신에 아래 코드를 사용하면 화면에 출력됨
// document.querySelector("#output").innerHTML = "값";

/* 조건문 연습 */
// 문제 1) 입력값이 y이면 글쓰기 라고 출력하고
// y 가 아니면 글수정이라고 웹 브라우저에 출력하기
// 힌트 : 조건문

// let input_1 = prompt("1번문제 : 영문입력"); // TODO 입력 값

// if (input_1 === "y") {
//   document.querySelector("#output").innerHTML = "글쓰기";
// } else if (input_1 != "y") {
//   document.querySelector("#output").innerHTML = "글수정";
// }

// 문제 2) 입력값이 짝수이면 짝수입니다.
// 홀수이면 홀수입니다. 출력하는 코딩을 작성하세요.
// 입력 : 0
// 출력 : 짝수입니다.
//  단, 출력은 웹브라우저에 하세요

// let input_2 = Number(prompt("2번문제 : 숫자입력")); // TODO 입력 값

// if (input_2 % 2 === 0) {
//   document.querySelector("#output").innerHTML = "짝수입니다.";
// } else if (input_2 % 2 === 1) {
//   document.querySelector("#output").innerHTML = "홀수입니다.";
// }

// 문제 3) // 입력값이 3~5가 들어오면 봄입니다.
//          6~8 들어오면 여름입니다.
//          9~11 들어오면 가을입니다.
//          12~2 들어오면 겨울입니다.

// let input_month = Number(prompt("3번문제 : 1~12 숫자입력")); // TODO 입력 값

// TODO 오류 논리곱,합 이해하기
// let str1 = "봄입니다.";
// let str2 = "여름입니다.";
// let str3 = "가을입니다.";
// let str4 = "겨울입니다.";
// if (input_month === 3 <= 5) {
//   document.querySelector("#output").innerHTML = "봄입니다.";
// } else if (input_month === 6 <= 8) {
//   document.querySelector("#output").innerHTML = "여름입니다.";
// } else if (input_month === 9 <= 11) {
//   document.querySelector("#output").innerHTML = "가을입니다.";
// } else if (input_month === 2 <= 12) {
//   document.querySelector("#output").innerHTML = "겨울입니다.";
// }

// TODO ※ 숫자 "0" 을 입력해도 겨울로 나오기 때문에 방어적 코드를 사용하기
// 봄
// if (input_month >= 3 && input_month <= 5) {
//   document.querySelector("#output").innerHTML = "봄입니다.";
// } else if (input_month >= 6 && input_month <= 8) {
//   // 여름
//   document.querySelector("#output").innerHTML = "여름입니다.";
// } else if (input_month >= 9 && input_month <= 11) {
//   // 가을
//   document.querySelector("#output").innerHTML = "가을입니다.";
// } else if (input_month == 12 || input_month == 1 || input_month == 2) {  //TODO 합으로 풀어서 써야 함
//   // 겨울 : 논리합
//   document.querySelector("#output").innerHTML = "겨울입니다.";
//   // ※ 숫자 0 입력 방지
// } else{
//   document.querySelector("#output").innerHTML = "잘못 입력하였습니다.";
// }

// 문제 4) // 입력을 하나 받아서 "admin" 이 맞으면
// "해당 콘텐츠 이용이 가능합니다." 라고 출력 아니면
// 다시 입력값을 숫자로 하나 또 받아서 입력값이 1 ~ 7 사이에 있으면
// "해당 콘텐츠 이용이 가능합니다." 라고 출력하고,
// 아니면 "해당 콘텐츠에 접근할 수 없습니다."
// 힌트 : 중첩 if문 사용(if문 안에 if문 있는 구조)
// 구조 :
//  입력값(prompt)
//  if(조건식) {
//     실행문1
//  } else {
//     입력값2(prompt)
//     if(조건식) {
//         실행문2
//     } else {
//         실행문3
//     }
//  }
// 입력값

// let input_user_id = prompt("4번문제 : admin 입력"); //admin  // TODO 입력 값

// if (input_user_id === "admin") {
//   document.querySelector("#output").innerHTML =
//     "해당 콘텐츠 이용이 가능합니다.";
// } else {
//   // 입력값2
//   let input_num = Number(prompt("4번문제 : 숫자 입력")); // 1 ~ 7    // TODO 입력 값
//   //   또 조건문
//   if (input_num >= 1 && input_num <= 7) {
//     document.querySelector("#output").innerHTML =
//       "해당 콘텐츠 이용이 가능합니다.";
//   } else {
//     document.querySelector("#output").innerHTML =
//       "해당 콘텐츠에 접근할수 없습니다.";
//   }
// }

// 문제 5) // X 가 1일 경우 "x의 값은 1입니다."
// X 가 2일 경우 "x의 값은 2입니다."
// X 가 1도2 도 아닐경우 "x의 값은 1 또는 2가 아닙니다."
// 입력 : 2
// 출력 : x의 값은 2입니다.

let input_num1 = Number(prompt("5번문제 : x 숫자(1~2) 입력")); // TODO 입력 값

if (input_num1 == 1) {
  document.querySelector("#output").innerHTML = "x의 값은 1입니다.";
} else if (input_num1 == 2) {
  document.querySelector("#output").innerHTML = "x의 값은 2입니다.";
} else {
  document.querySelector("#output").innerHTML = "x의 값은 1 또는 2가 아닙니다";
}