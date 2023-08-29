// TODO : 식별자 : 변수명, 상수명, 함수명 등을 통틀어서 말함
// 변수(변하는 공간), 상수(안 변하는 공간)

//  TODO : 변수, 상수의(이름을 정하는 규칙)
// 변수명 규칙 : 1) 첫 글자는 영문자, 달러($), 언더바(_)만 올 수 있음(숫자 안됨)
//              2) 대소문자를 구분
let hi = "안녕하세요";    // (서로 다른 함수)
let Hi = "안녕하세요";    // (서로 다른 함수)

//              3) js 예약어(let, const 등) 사용 못함
// 기타(참고) 한글, 한자도 가능은 하다.
let 안녕 = "안녕하세요";

// TODO : 명명법(이름을 정하는 규칙)
// TODO 1) 카멜 표기법(cameiCase) : 낙타 표기법
// 사용법) 단어와 단어 사이는 대문자, 첫 글자는 소문자
// 예) hello + world -> helloW(대)orld
// 사용처 : 변수명, 함수명(메소드명) 등

// TODO 2) 파스칼 표기법(Pascal)
// 사용법) 단어와 단어 사이는 대문자, 첫 글자는 대문자
// 예) hello + world -> H(대)elloW(대)orld
// 사용처 : 클래스명, 생성자명

// TODO 기타(참고) : 3) 언더바 표기법(스네이크 표기법), 4) 마이너스 표기법
// 예) hello + world -> hello_world (언더바 표기법)
// 예) hello + world -> hello-world (마이너스 표기법)


// TODO 표현식 : 변수, 상수, 값 ...
// TODO 1) 변수 : 변하는 값을 저장하는 1가지 값만 저장되는 곳(공간) vs 값 : 문자열, 숫자 등
// 변수 사용법 : let 변수명 = 값;
let hello = "안녕하세요";
hello = "안녕"; // 값 수정(변수는 가능)
// TODO 출력 변수 사용(소프트 코딩(soft code)) 방법 : ★ 추천 ★
alert(hello);
// TODO 출력(하드 코딩(hard coding)) 방법 : ☆ 비추천 ☆ 
alert("안녕")

// TODO 2)  상수 : 변하지 않는 값을 저장하는 곳(공간)
// 상수 사용법 : const 상수명 = 값;
const num = 1; // 상수 정의 (값 저장), 초기화
// TODO num = 2; -> 상수 수정 불가(에러 발생)
alert(num);

// TODO 자료형 :
// 1) 문자열(String) : 예) "반갑습니다", '안녕하세요'
//      쌍따옴표, 홑따옴표를 사용해서 문자들을 묶음
let hello_1 = "반갑습니다"
alert(hello_1 + '안녕하세요');

// 2) 숫자(Number) : 1, 2, 3 등
alert(2);


// TODO 3)  문자열 특수문자
// 특수문자 사용법 :

// TODO 줄 바꿈(<br/>) :\n
let hello_2 = "안녕하세요\n홍길동입니다"
// 결과 출력
alert(hello_2);


// TODO 홑따옴표'안녕하세요' 출력
let hello_3 = "'안녕하세요'";
alert(hello_3);


// TODO 쌍따옴표 "안녕하세요" 출력
let hello_4 = '"안녕하세요"';
alert(hello_4);


// TODO 쌍따옴표 + 홑따옴표 모두 출력
// TODO 사용법 : 특수문자 사용 : \", \'
// '"안녕"하세요'
let hello_5 = "'안녕\"하세요'";
alert(hello_5);

