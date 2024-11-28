/**
 * Defining Function
 */

// function printName(name) {
//   console.log(name);
// }
///

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}`;
}

// parameter, type 도 친절하게 체크해줌
console.log(returnTwoCouples("아이유", "이민호"));
console.log(returnTwoCouples(0, 1));
console.log(returnTwoCouples("아이유", "이민호", "박서준"));

/**
 * Optional Parameter
 * 1. ? 사용
 * 2. 초기값 지정
 */
function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}

console.log(multiplyOrReturn(10));
console.log(multiplyOrReturn(10, 30));

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}
console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `학생 ${x}`);
}

console.log(getInfiniteParameters("아이유", "이민호", "박서준"));

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

addTwoNumbers(10, 20); // 반환타입 number 를 유추함

function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}

randomNumber(); // 반환타입 10 or '랜덤' 이라고 정확히 유추함

function subtractTwoNumber(x: number, y: number): number {
  //   return "반환 되나?";
  return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 *
 * void / never
 */
function doNotReturn(): void {
  console.log("void는 아무것도 반환하지 않는다.");
  return;
}

function neverEndingLoop(): never {
  console.log(
    "never가 반환 타입이 되려면 반환하는 상황 자체를 만들면 안된다.(끝나지 않는 상태)"
  );
  while (true) {}
}

function throwError(): never {
  throw Error();
}
