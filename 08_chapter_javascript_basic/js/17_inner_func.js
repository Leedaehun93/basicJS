// 자바스크립트 유용한 내장함수들 소개
// TODO : 1) .toFixed() : 소수점 자르기 함수
// 사용법 : 변수명.toFixed(자리수)
let x_1 = 12.4763;
console.log(x_1.toFixed(2)); // 2째 자리수 자르기

// TODO : 2) 문자열 -> 숫자로 바꾸기 함수
let x_2 = "10.33"; // 숫자로 된 문자열
console.log(Number(x_2)); // 문자열 -> 숫자
console.log(parseInt(x_2)); // 문자열 -> 정수
console.log(parseFloat(x_2)); // 문자열 -> 실수

// 참고 : 이렇게 사용하지 말기
let x_2_1 = "apple";
console.log(Number(x_2_1)); // 에러 발생(숫자로 변경불가)
// NaN 에러발생 : (Not a Number)

// TODO : 3) 배열의 요소(원소) 모두 문자열로 변경하기
// 사용법 : 배열변수.toString()
let animals = ["사자", "호랑이", "사슴", "펭귄"];
// 문자열로 변경
let str = animals.toString();
console.log("str", str);

// TODO 참고 : ※ 자료형 확인 함수 : typeof(변수명
console.log(typeof str);

// TODO : 4) 배열의 길이 : 배열변수.length (반복문에 많이 사용)
let animals_4 = ["사자", "호랑이", "사슴", "펭귄"];
console.log("animals_4.length", animals_4.length);

// TODO : 5) 배열 정렬 함수 : 오름차순(가~하), 내림차순(하~가)
// 문자열 대상 정렬
let animals_5 = ["사자", "호랑이", "사슴", "펭귄"];
animals_5.sort(); // TODO 오름차순 정렬
console.log("animals_5", animals_5); // 결과 값: 사슴, 사자, 펭귄, 호랑이

animals_5.reverse(); // TODO 배열 뒤집기
console.log("animals_5", animals_5); // 결과 값: 호랑이, 펭귄, 사자, 사슴

// TODO : 6) 문자열 자르기 함수
// 사용법 : 문자열.substring(시작인덱스번호, 끝인덱스번호);
//          (시작인덱스번호 ~ 끝인덱스번호-1 까지 잘림)

let str_6 = "태산이 무너져도 솟아날 구멍이 있다.";
// 4(무),5(너),6(져),7(도) 까지 보임
console.log("str_6.substring", str_6.substring(4, 8));

// TODO : 7) 문자열 바꾸기 함수
// 사용법 : 문자열.replace(/대상문자/g, "바꿀문자");
let str_7 = "A friend in need is a friend indeed.";
let str_7_1 = str_7.replace(/friend/g, "family");
console.log("str_7_1", str_7_1);

// TODO : 8) 대소문자 바꾸기 함수
// 사용법(대문자) : 문자열.toUpperCase();
// 사용법(소문자) : 문자열.toLowerCase();
let str_8 = "Have a Nice Day!";
let str_8_2 = str_8.toLocaleUpperCase(); // 대문자바꾸기
console.log("str_8_2", str_8_2);
let str_8_3 = str_8.toLowerCase(); // 소문자바꾸기
console.log("str_8_3", str_8_3);

// TODO : 9) 문자열 자르기 : split(구분자)
// 사용법 : 문자열.split(자를문자)
//     결과 : 배열로 내보내기 됨
let str_9 = "2025 3 25";
let arr_9 = str_9.split(" "); // 공백으로 자르기
console.log("arr_9[0]", arr_9[0]);
console.log("arr_9[1]", arr_9[1]);
console.log("arr_9[2]", arr_9[2]);

// TODO : 10) 수학함수
// 반올림(첫째자리)
// 사용법 : Math.reound(실수) -> 반올림된 정수
console.log("Math.round", Math.round(5.3)); // 결과 값: 5
console.log("Math.round", Math.round(5.7)); // 결과 값: 6

// 올림(첫째자리), ceil(천장)
// 사용법 : Math.celil(실수) -> 올림 정수
console.log("Math.ceil", Math.round(5.3)); // 결과 값: 5

// 올림(첫째자리), floor(바닥)
// 사용법 : Math.floor(실수) -> 내림 정수
console.log("Math.floor", Math.round(5.3)); // 결과 값: 5

// 절대값 : 음수 -> 양수
// 사용법 : Math.abs(음수) -> 양수
console.log("Math.abs", Math.abs(-3.7));

// 최소값 :
// 사용법 : Math.min(값, 값2...값n) -> 최소값
console.log("Math.min", Math.min(0, 3, -5, 12));

// 최대값 :
// 사용법 : Math.max(값, 값2...값n) -> 최소값
console.log("Math.max", Math.max(0, 3, -5, 12));

// 제곱 :
// 사용법 : math.pow(숫자, 제곱수)
console.log("Math.pow", Math.pow(2, 4));

// 제곱근 :
// 사용법 : math.sqrt(숫자)
console.log("Math.sqrt", Math.sqrt(25));

// TODO : 11) 날짜 함수들
let date = new Date(); // 현재 날짜 (년, 월, 일, 시, 분, 초);

// 출력
let year = date.getFullYear(); // 년도
let month = date.getMonth() + 1; // 월 // TODO ※ 월 표기할 때 (0(1월) ~ 11월(12월)까지로 출력이 되기 때문에 +1 증가해야 함
let day = date.getDate(); // 일

console.log("year", year);
console.log("month", month);
console.log("day", day);

let hour = date.getHours(); // 시
let minute = date.getMinutes(); // 분
let second = date.getSeconds(); // 초
// 출력
console.log("hour", hour);
console.log("minute", minute);
console.log("second", second);
