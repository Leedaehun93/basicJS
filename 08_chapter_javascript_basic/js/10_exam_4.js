// 문제 1) 1 부터 100까지 출력하기
// for 문 사용
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// 문제 2) 1 부터 n 까지 출력하기
// 입력예시 : 5
// 출력예시 : 1 2 3 4 5
let num = Number(prompt("정수1")); // 5
// 문자열 붙이기 변수
let result1 = ""; // 빈문자열

// 반복문
// for(초기값;초기값변수<=끝값;증감식){}
for (let i = 1; i <= num; i++) {
  result = result + i + " "; // 문자열 붙이기
}
// 결과 출력
console.log(result);

// 문제 3) a(시작값) 부터 b(끝값)까지 출력하기(a < b)
// 입력예시 1: 8
// 입력예시 2: 3
// 출력예시 : 3 4 5 6 7 8
// for(시작값;시작값<=끝값;증감식){}
// 입력값 2개를 비교해서 : 작은값(시작값) , 큰값(끝값)

let num2 = Number(prompt("숫자 1개")); // 8
let num3 = Number(prompt("숫자 1개")); // 3

// 최대값(Math.max()) , 최소값(Math.min())
let maxNum = Math.max(num2, num3); // 큰값(끝값)
let minNum = Math.min(num2, num3); // 작은값(시작값)

// 문자열 붙이기 변수
let result = ""; // 빈문자열로 초기화

// for(시작값;시작값<=끝값;증감식){}
for (let i = minNum; i <= maxNum; i++) {
  // 문자열 붙이기 : 문자열 + 숫자 => 문자열(자동 자료형변환)
  result = result + i + " ";
}
// 결과 출력
alert(result);

// 문제 4) 별 출력하기
// 입력 : 5
// 출력 : *****
let num4 = Number(prompt("숫자 1개")); // 5

// for(초기값; 초기값< = 끝값;증감식) {}
for (i = 0; i < num4; i++) {
  // 문자열 붙이기
  result = result + "*";
}
console.log(result);

// 문제 5) 1 ~ 10 까지 합계를 구해서 아래와 같이 화면에 출력해 보세요
// 출력 : "1~10까지의 합계 : 55"

let sumVal = 0;
for (let i = 0; i <= 10; i++) {
  sumVal = sumVal + i;
}
console.log("5번 문제 1~10의 합계 : " + sumVal);
