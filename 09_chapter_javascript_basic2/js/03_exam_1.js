// 함수 문제 풀이
// TODO 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20

// 함수 정의
function sum_1(num) {
  console.log(num + 10);
}
// 합수 사용(호출)
let input_1 = Number(prompt("10 입력"));
sum_1(input_1);

// TODO 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even

// 함수 정의
function name(params) {
  // params 가 짝수이면
  if (params % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
// 함수 사용(호출)
// 사용법 : 함수명(값);
// let num2 = Number(prompt("숫자"));
// name(num2);

// TODO 연습문제 3
// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55
// 함수 정의 : 2nd 함수 형태(return 없음)

// 함수 정의
let result_3 = 0;
function input_3() {
  for (let i = 1; i <= num_3; i++) result_3 = result_3 + i;
}
// 함수 호출
let num_3 = Number(prompt("10 입력"));
input_3(num_3);
console.log(result_3);

// TODO 연습문제 4
// 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 1
// 최소값 구하기

// 함수 정의
function input_4(input_4_1, input_4_2, input_4_3) {
  // 최소값 구하는 코딩
  console.log(Math.min(input_4_1, input_4_2, input_4_3));
}
// 함수 사용(호출)
let num4_1 = Number(prompt("1 입력")); // 1
let num4_2 = Number(prompt("2 입력")); // 2
let num4_3 = Number(prompt("3 입력")); // 3

input_4(num4_1, num4_2, num4_3); //  함수 사용

// TODO 연습문제 5
// 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5

// 함수 정의
function input_5(input_5_1) {
  if (input_5_1 % 5 == 0) {
    console.log("5의 배수이다.");
  } else {
    console.log("5의 배수가 아니다.");
  }
}
// 함수 사용(호출)
let num_5 = Number(prompt("5 입력"));
input_5(num_5);

// TODO 연습문제 6
// 함수를 이용해서 코딩하세요
// 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80
// 입력2 : 90
// 입력3 : 100
// 결과 : 270
//        90

// 함수 정의
function input_6(num6_1, num6_2, num6_3) {
  // 함수안에서 문제를 푸는 코딩을 하면됨
  // 합계
  let sum_6 = num6_1 + num6_2 + num6_3;
  // 평균
  let avg_6 = sum_6 / 3;
  // 출력
  console.log("합계: " + sum_6 + "\n" + "평균 : " + avg_6);
}

// 함수 사용(호출)
let input_num6_1 = Number(prompt("80 입력"));
let input_num6_2 = Number(prompt("90 입력"));
let input_num6_3 = Number(prompt("100 입력"));

input_6(input_num6_1, input_num6_2, input_num6_3);
