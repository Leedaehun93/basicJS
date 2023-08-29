// TODO 문제 풀이

// TODO 문제 1) 증감연산자를 활용해서 화면 출력하세요.
// 출력방법: alert, console.log()
// 입력 : 없음
// 출력 : 10
//      : 11
//      : 12

// 결과 출력
let x = 10;
console.log(x); // x = 10

++x;
console.log(x); // x = 11

++x;
console.log(x); // x = 12

// TODO 문제 2) 아래 공식을 보고 지불 후 거스름 돈을 화면에 출력하세요.
//    공식 : price(개당 가격) = 1500
//           num(구매 개수) = 3
//           pay(지불 금액) = 10000
//    잔돈계산 공식 = pay - price * num;
//    입력 : 없음
//    출력 : - 개당 가격 : 1500원
//           - 구매 개수 : 3개
//           - 지불 금액 : 10000개
//           - 거스름 돈은 5500원입니다.
let price = 1500; // 개당 가격
let num = 3; // 구매 개수
let pay = 10000; // 지불 금액
// 공식 적용 : 거스름 돈 계산 공식
let change = pay - price * num;
// 출력 방법 : console.log
// 결과 출력
// 힌트: 문자열 붙이기 : 문자열 + 숫자 => 문자열 + 문자열 변경됨
console.log("- 개당 가격 : " + price + "원");
console.log("- 구매 개수 : " + num + "개");
console.log("- 지불 금액 : " + pay + "원");
console.log("- 거스름 돈은 : " + change + "원입니다.");

// TODO 문제 3) 입력함수 : prompt() 이용해서 입력받기
// TODO 아래 코딩을 완성하세요.
// 입력 1 : a
// 입력 2 : b
// 출력 : b a

// 사용법 : let 변수명 = prompt("문자열");  // 문자열(입력대화상자의 문구)
//          입력받은 글자가 변수명에 저장됨
let char1 = prompt("1개의 문자가 입력된다.");   // a
let char2 = prompt("1개의 문자가 입력된다.");   // b
// 결과 출력
alert(char2+" " + char1);   // b a

// TODO 문제 4) 입력받은 정수를 줄을 바꿔 3번 출력한다.
// TODO 단, 줄바꿈 특수문자를 사용해서 한 번에 출력하세요.
// (alert, console.log 1번만 사용)
// 힌트 : "\n"(줄바꿈), 문자열 붙이기(+)

// 입력 : 3
// 출력 : 3
//      : 3
//      : 3
let num1 = prompt("정수 3을 입력하시오."); // 3
// 결과 출력
alert(num1 + "\n" + num1 + "\n" + num1);

// TODO 문제 5) 단어 2개가 입력된다.
// 2개를 거꾸로 붙여서 출력하세요.
// 입력 1 : hello
// 입력 2 : world
// 출력   : worldhello
// 힌트 : 문자열 붙이기(+)
// let char1 = prompt("hello를 입력하세요.")   // hello
// let char2 = prompt("world를 입력하세요.")   // world
// 결과 출력
// alert(char2+char1); // worldhello

// TODO 문제 6) 입력 1: Hello
//        입력 2: world
//        출력 : Hello
//              world
// let char1 = prompt("Hello를 입력하세요");   // Hello
// let char2 = prompt("world를 입력하세요");   // world
// 결과 출력
// alert(char1 + "\n" + char2); // Hello
//                              world

// TODO 문제 7) 두 정수의 합을 출력하세요.
// 입력 1 : 123
// 입력 2 : -123
// 출력 : 0
// 힌트 : let 변수명 = Number(prompt("문자열")) (문자열 -> 숫자)
let num10 = Number(prompt("123을 입력하세요.")); // 123
let num20 = Number(prompt("-123을 입력하세요.")); // -123
// 결과 출력
alert(num10 + num20);
