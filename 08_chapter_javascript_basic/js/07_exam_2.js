// 문제 풀이
//  문제 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
//  입력 1 : love
//  입력 2 : 3
//  출력 : lovelovelove
//  입력함수 : let char = prompt("1개의 문자열이 입력된다.");
//            let num = Number(prompt("1개의 숫자가 입력된다."));
// TODO: 3) 문자열 붙이기 사용 (단어 3개 붙이기)
// let char1 = prompt("1개의 문자열이 입력된다."); // love
// let num = Number(prompt("1개의 숫자가 입력된다.")); // 3
// let strCount = ""; // 문자열 붙이기 변수 초기화

// // num = 3 있는 상태
// for(let i=0; i < num; i++) { // TODO num ※ 비교연산자 주의 <= 아님!
//     // 문자열 붙이기 코드
//     // i=0 일때 0< 3 (참) strCount = "" + "love"("love")
//     // i=1 일때 1< 3 (참) strCount = "love" + "love"("lovelove")
//     // ...
//     strCount = strCount + char1; // char1 = "love"
// }
// console.log(strCount); // 최종 결과 출력
// console.log("============");

// 문제 2) 입력 : 없음
//    출력 : "!@#$%^&*()"
// 문자열 : "", '' 2 개 모두 사용가능
// alert('"!@#$%^&*()"');
// console.log("============");

// 문제 3) 입력 : 없음
//    출력 : "C:\Download\hello.cpp"
// 힌트 : 특수문자 출력방법 : \\ 
// alert("3번 답 :  C:\\Download\\hello.cpp");
// console.log("============");

// 문제 4) 입력 : 1.414213
//    출력 : 1.414213
// let num1 = Number(prompt("4번 문제 1.414213 입력"));
// console.log("4번 답 : " + num1);
// console.log("============");

// 문제 5) 입력 : 1.59254
//    출력 : 1.59
// 힌트 : 소수점 자르기 함수 : 숫자.toFixed(자를자리수)
// let num2 = Number(prompt("5번 문제 1.59254 입력"));
// console.log("5번 답 : " + num2.toFixed(2));
// console.log("============");

// 문제 6) 입력 : 125
//    출력 : 125 125 125
// let num3 = Number(prompt("6번 문제 125 입력"));
// console.log("6번 답 : " + num3 + " " + num3 + " " + num3);
// alert("6번 답 : " + num3, num3, num3);   // 오류 console 을 찍으면 자동으로 띄어쓰기가 입혀져 결과 값 오류이다.
// console.log("============");

// TODO 자료형 : 배열 (간략설명)
// 자료형 : 문자열(String), 숫자(number), 참/거짓(boolean/bool)
//          배열
// 변수 : 변하는 값을 저장하는 장소(1가지 값만 저장함),let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수명 동일하게 사용
//        인덱스번호
// 사용법 : 변수명[인덱스번호]
// 보충설명 : a[0] == 0번방에 값, a[1] == 1번방에 값이 들어가 있음
// 예) a[0] = 1, a[1] = 2, ....

// 예시) 입력 = 1 2
//          출력 = 2 1
// 자바스크립트에서 문자열 가르기 함수 : 문자열.split("자를문자");
// 예시) let arr = prompt("두 정수를 입력해 주세요").split(" ");
        // arr(배열), arr[0] = 1, arr[1] = 2
        // alert(arr[1] + " " + arr[0]);    // 2 1


// 문제 7) 입력 = A b
//         출력 = b A
// 힌트 : let 변수 = 문자열.split("자를문자") 사용할 것
// let arr1 = prompt("두 정수를 입력해 주세요").split(" "); // A b => 배열로 잘림
// // arr[0] = "A", arr[1] = "b"
// alert("7번 답 : " + arr1[1] + " " + arr1[0]); // b A


// 문제 8) 입력 : 3:16
//    출력 : 3:16
// let strNum = prompt("8번 문제 3:16 시간 입력");
// console.log("8번 답 : " + strNum);

// 문제 9) 입력 : 2013.8.5 (고정)
//    출력 : 2013.08.05
// 힌트 : 문자열 자르기 함수 : 문자열.split("자를문자");
// let num = prompt("9번 문제 2013.8.5 날짜 입력").split(".");
// let year = num[0]; // 년
// let month = ".0" + num[1]; // 월 (참고) 08, 09, 010, 012(오류) , .slice(-2))
// let day = ".0" + num[2]; // 일

// console.log("9번 답 : " + year + month + day);

// 문제 10) 입력 : 000907-1121112
//     출력 : 0009071121112
// let num2 = prompt("10번 문제 000907-1121112 입력").split("-"); // 배열로 나옴
// let first = num2[0]; // 000907
// let second = num2[1]; // 1121112
// console.log("10번 답 : " + first + second); 




// 문제 11) 입력 : Programming is very fun!!
//     출력 : Programming is very fun!!
// let strChar = prompt("문자열을 입력하세요");
// console.log("11번 답 : "+ strChar);

// 문제 12) 입력 : 1.414213
//     출력 : 1
// 문제가 실수라서 Number() 안됨 : split() 문자열만 잘림(숫자 안됨)
// let num = prompt("실수를 입력해 주세요").split(".");
// let first = num[0]; // 1
// let second = num[1]; // 414213
// console.log("12번 답 : "+ first); // 1


// 문제 13) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'
// 힌트 : Boy (문자열) : 1문자의 합 == 문자들의 배열
//      let arr = "Boy" -> arr[0] = "B", arr[1] = "o", arr[2] = "y";

// let strChar = prompt("문자열을 입력해 주세요"); // Boy

// let arr = "'" + strChar[0] + "'" + "\n"; // 'B'
// let arr2 = "'" + strChar[1] + "'" + "\n"; // 'o'
// let arr3 = "'" + strChar[2] + "'" + "\n"; // 'y'
// console.log("12번 답 : "+ "\n" + arr + arr2 + arr3);


// 문제 14) 두 정수의 합을 출력한다.
// 입력1 : 2147483648
// 입력2 : 2147483648
// 출력  : 4294967296

// let sum1 = Number(prompt("정수를 입력 1"));
// let sum2 = Number(prompt("정수를 입력 2"));

// console.log("14번 답 : " + sum1 + sum2); // 14번 답 : 21474836482147483648
// 출력 값: 14번 답 : 4294967296을 만들고 싶으면
// 정수의 합으로 Number 함수가 들어갔기 때문에 문자열이 들어가면 다른 값이 나온다.
// 문자열을 넣고 싶으면 괄호를 사용한다.
// TODO console.log("14번 답 : " + (sum1 + sum2)); // 14번 답 : 4294967296

// 문제 15) 입력 : 75254 
//           숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
//     let aaa = "75254";
//        aaa[0] == "7";
//        aaa[1] == "5";
//        alert(aaa[3]) // 5
//     출력 : [70000]
//            [5000]
//            [200]
//            [50]
//            [4]

let arr = prompt("문자열을 입력해 주세요"); // 75254 (문자들의 배열 == 문자열)
// arr[0] = 7 , arr[1] = 5 ... arr[4] = 4
let arr2 = "[" + arr[0] + "0000]" + "\n"; // [ + 7 + 0000]
let arr3 = "[" + arr[1] + "000]" + "\n"; // [ + 5 + 000]
let arr4 = "[" + arr[2] + "00]" + "\n"; // [ + 2 + 00]
let arr5 = "[" + arr[3] + "0]" + "\n"; // [ + 5 + 0]
let arr6 = "[" + arr[4] + "]" + "\n"; // [ + 4 + ]

// 결과 출력
alert("15번 답 : " + "\n" + arr2 + arr3 + arr4 + arr5 + arr6);
