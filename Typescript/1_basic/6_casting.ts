/**
 * Casting
 *
 * 캐스팅에서 가장 중요한 건 TS는 JS로 컴파일이 되는 언어라는 것이다
 * 이게 왜 중요?
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 * = 실제 구동하는 코드에서는 아무런 의미가 없음
 */
const codefactory = 'code factory';

console.log(codefactory.toUpperCase());

let sampleNumber: any = 5;
let stringVar = sampleNumber as string;
stringVar = 3;
// 타입스크립트에서 stringVar 의 타입은 string이 됨.
// 캐스팅을 하면 실제 그 타입이 아니더라도 가정을 할 수 있음
// but, 캐스팅은 함부로 쓰면 안되는게
console.log(typeof (sampleNumber as string));
// 해보면 타입은 number 라고 나옴
// 왜? 캐스팅은 타입스크립트에만 존재하는 개념이기 때문에 백날 캐스팅해봤자
// 실제 자바스크립트로 컴파일돼서 구동될 때 아무런 의미가 없어지기 때문임
// 자바스크립트가 볼 때엔 sampleNumber = 5 니까

// 실제 JS로 실행될 때의 실제 타입과
// 코드를 쓸 때 인식하는 타입을 다르게 가져갈 수 있다는 것ㅠㅠ

// 그래서 as를 쓰는 좋은 예제는
// 상속상에서 더 구체화 된 값으로 캐스팅할 때!
