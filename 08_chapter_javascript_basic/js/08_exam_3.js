// 문제 1) 부호를 바꾸어 출력한다.
//  입력 : -1
//  출력 : 1

// let num1 = Number(prompt("-1 입력")); // 문자열 -> 숫자로 변경됨
// console.log(num1 * -1); // 부호 변경됨 (양수 <-> 음수)

// 문제 2) 입력 : -2147483649
//    출력 : -2147483649

// let num2 = Number(prompt("-2147483649 입력"));
// console.log(num2);

// 문제 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력 1(a) : 1
// 입력 2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) -> 정수, parseInt(문자열) -> 정수
//        .toFixed() : 소수점 자르기

// let num3 = Number(prompt("1 입력"));
// let num4 = Number(prompt("3 입력"));
// console.log(parseInt(num3/num4));

// 4) 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1(a): 10
// 입력 2(b): 3
// 출력 : 1

// let num5 = Number(prompt("10(a) 입력"))
// let num6 = Number(prompt("3(b) 입력"))
// console.log(parseInt(num5%num6)); // TODO 내가 입력함

// 문제 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648

// let num7 = Number(prompt(" 2147483647 입력"))
// console.log(++num7); // TODO 내가 입력함

// alert(num7 + 1);

// 문제 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
//   7
//   30
//   3
//   1
// let num8 = Number(prompt("10 입력")) // 10
// let num9 = Number(prompt("3 입력"))  // 3
// console.log(num8+num9); // TODO 내가 입력함
// console.log(num8-num9);
// console.log(num8*num9);
// console.log(parseInt(num8/num9));
// console.log(num8%num9);

// // 합
// let sumVal = num8 + num9;
// // 차
// let sumVal2 = num8 - num9;
// // 곱
// let sumVal3 = num8 * num9;
// // 몫 (정수)
// let sumVal4 = parseInt(num8 / num9);
// // 나머지
// let sumVal5 = num8 % num2;
// // 결과 출력
// alert(sumVal + "\n" + sumVal2 + "\n"
//             + sumVal3 + "\n" + sumVal4 + "\n" + sumVal5 + "\n")

// // 문제 7) 정수 3개 입력받아 합과 평균 출력하기
// // 입력 1: 1
// // 입력 2: 2
// // 입력 3: 3
// // 출력 : 6
// //      : 2.0
// // 공식 : 합 = 모든 숫자 더하기
// //      평균 = 모든숫자합/개수

// let num11 = Number(prompt("7번 문제 정수 1 입력"));
// let num12 = Number(prompt("7번 문제 정수 2 입력"));
// let num13 = Number(prompt("7번 문제 정수 3 입력"));

// // 합
// let sumVal6 = num11 + num12 + num13;
// console.log(sumVal6);

// // 평균
// let sumVal7 = (sumVal6/3);
// console.log(sumVal7);

// // 문제 8) 정수 1개 입력받아 2배 곱해 출력하기(설명)
// // 입력 : 1024
// // 출력 : 2048

// let num14 = Number(prompt("8번 문제 정수 1024 입력"))
// // 2배수 곱
// let sumVal8 = num14 * 2;
// console.log(sumVal8);

// // 문제 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// // a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// // 입력 1(a): 9
// // 입력 2(b): 1

// let num15 = Number(prompt("9번 문제 정수 9 입력"))
// let num16 = Number(prompt("9번 문제 정수 1 입력"))

// let num17 = 1;
// let num18 = 0;

// if(num15 > num16){
//     console.log(num17);
// } else {
//     console.log(num18);
// }

// 문제 10) // 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// (단, 0 또는 1 만 입력된다.)

// let num19 = Number(prompt("10번 문제 0 또는 1입력"));
// if(num19 === 0){
//     console.log(1);
// } else if (num19 == 1){
//     console.log(0);
// } else{
//     console.log("잘못 입력하였습니다.");
// }

// 문제 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// 힌트 : Math.min(값1, 값2....) : 최소값, Math.max(값1, 값2....) : 최대값

let num21 = Number(prompt("11번 문제 3입력")); // 3
let num22 = Number(prompt("11번 문제 -1입력")); // -1
let num23 = Number(prompt("11번 문제 5입력")); // 5

// 결과 출력 : 최소값 , Math.min(값1, 값2....)
alert(Math.min(num21, num22, num23));

// 문제 12) 정수 3개 입력받아 짝수만 출력하기(설명)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 4
// 출력 : 2
//        4
// 힌트 : % (나머지 연산자) 이용, 어떤수 % 2 -> 1 (홀수), 어떤수 % 2 -> 0(짝수)
let num = Number(prompt("숫자1")); // 1
let num2 = Number(prompt("숫자2")); // 2
let num3 = Number(prompt("숫자3")); // 4

// 임시 결과 변수
let result = ""; // 최초 빈문자 초기화

// 조건문 판단 : num
if (num % 2 === 0) {
  // 짝수
  result = result + num + "\n"; // result(문자열) + num(숫자) == 문자열
}
// 조건문 판단 : num
if (num2 % 2 === 0) {
  // 짝수
  result = result + num2 + "\n"; // result(문자열) + num(숫자) == 문자열
}
// 조건문 판단 : num
if (num3 % 2 === 0) {
  // 짝수
  result = result + num3 + "\n"; // result(문자열) + num(숫자) == 문자열
}
// 결과 출력
alert(result);

// 문제 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even
let num24 = Number(prompt("숫자1")); // 1
let num25 = Number(prompt("숫자2")); // 2
let num26 = Number(prompt("숫자3")); // 8

// 임시 결과 변수
let result1 = ""; // 최초 빈문자 초기화

// 조건문 : num24
if (num24 % 2 === 0) {
  // 짝수
  // TODO: 3) 문자열 붙이기
  result1 = result1 + "even" + "\n";
} else {
  // 홀수
  result1 = result1 + "odd" + "\n";
}

// 조건문 : num25
if (num25 % 2 === 0) {
  // 짝수
  // TODO: 3) 문자열 붙이기
  result1 = result1 + "even" + "\n";
} else {
  // 홀수
  result1 = result1 + "odd" + "\n";
}

// 조건문 : num26
if (num26 % 2 === 0) {
  // 짝수
  // TODO: 3) 문자열 붙이기
  result1 = result1 + "even" + "\n";
} else {
  // 홀수
  result1 = result1 + "odd" + "\n";
}
// 결과 출력
alert(result1);

// 문제 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B
// 힌트 : if/else if/else 문, 논리연산자(&&(논리곱), ||(논리합))
let num27 = Number(prompt("정수1")); // 73

// 조건문 : 논리곱 사용하는 조건문
if (num27 >= 90 && num27 < 100) {
  alert("A");
} else if (num27 >= 70 && num27 < 90) {
  alert("B");
} else if (num27 >= 40 && num27 < 70) {
  alert("C");
} else if (num27 >= 0 && num27 < 40) {
  alert("D");
}

// 문제 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!
let strChar = prompt("문자"); // A

// 조건문
if (strChar === "A") {
  alert("best!!!");
} else if (strChar === "B") {
  alert("good!!");
} else if (strChar === "C") {
  alert("run!");
} else if (strChar === "D") {
  alert("slowly~");
} else {
  alert("what?");
}

// 문제 16) 정수 판별
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오.
// 힌트 : 입력값 > 0 (양수)
// 입력 : 5
// 출력 : 양수
let num28 = Number(prompt("숫자1")); // 5

// 조건문
if( num28 > 0 ) {
    alert("양수");
} else if(num28 < 0) {
    alert("음수");
} else {
    alert("0");
}