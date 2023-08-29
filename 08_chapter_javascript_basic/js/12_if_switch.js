// TODO 조건문 (if문(90%) === switch문)

// 1번 예제 ) // X 가 1일 경우 "x의 값은 1입니다."
// X 가 2일 경우 "x의 값은 2입니다."
// X 가 1도2 도 아닐경우 "x의 값은 1 또는 2가 아닙니다."
// 입력 : 2
// 출력 : x의 값은 2입니다.
// TODO : if문 풀이
let input_num1 = Number(prompt("1번 예제문제 if : x 숫자(1~2) 입력")); // TODO 입력 값

if (input_num1 == 1) {
  document.querySelector("#output").innerHTML = "x의 값은 1입니다.";
} else if (input_num1 == 2) {
  document.querySelector("#output").innerHTML = "x의 값은 2입니다.";
} else {
  document.querySelector("#output").innerHTML = "x의 값은 1 또는 2가 아닙니다";
}

// TODO : switch문 풀이
let input_num2 = Number(prompt("1번 예제문제 swuitch : x 숫자(1~2) 입력")); // TODO 입력 값

// 조건문 : switch
// 사용법 : 조건변수와 값을 비교해서 각각의 case 따라 실행됨
//         switch(조건변수) {
//            case 값:
//                실행문;
//                break;
//            ...
//            default:
//                실행문;
//                break;
//         }

switch (input_num2) {
  // input_num2 === 1일때
  case 1:
    alert("x의 값은 1입니다.");
    break;
  // input_num2 === 2일때
  case 2:
    alert("x의 값은 2입니다.");
    break;
  // 모두 아닐때 아래가 실행됨
  default:
    alert("x의 값은 1 또는 2가 아닙니다.");
    break; // 생략가능
}

// TODO : 3항 연산자(조건문) ※React 에서 시도떄도 없이 사용함
// 활용 : 자바, 자바스크립트에서 간단한 조건 문제일 경우 사용함
// 사용법 : let 변수명 = (조건식)? 실행문 : 실행문2;
//     조건식을 판단하여 참이면 실행문1 실행되고, 거짓이면 실행문2가 실행됨

// 예제) 입력값을 받아서 값이 admin 이면 "있음" 라고 출력하고, 아니면 "없음" 출력하세요.

let input_str = prompt("2번 예제문제 : 아이디 입력"); // TODO 입력 값

// 조건식 : 3항 연산자 사용
// input_str 가 admin 이면 "있음" 이라는 문자열이 result 변수에 저장됨
// 아니면 "없음" 이라는 문자열이 result 변수에 저장됨
let result = input_str === "admin" ? "있음" : "없음";
alert(result);
