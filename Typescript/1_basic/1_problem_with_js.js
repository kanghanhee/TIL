'use strict';
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 2));
console.log(add(1, '2'));
// 명시적으로 number 라는 타입이라는 걸 알려줌
// 컴파일이 안됨
// => 함수, 변수, 클래스 등 모든 정의를 좀 더 정확히 할 수 있음
