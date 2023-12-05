/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = [
  '아이유',
  '김고은',
  '박소담',
];

stringListOrBooleanList = [true, false, true];

type StrOrNumberList = (string | number)[];

let stringOrNumberList: StrOrNumberList = [1, 2, 3, '아이유', '레드벨벳'];
stringOrNumberList = [1, 2, 3];
stringOrNumberList = ['아이유', '레드벨벳'];

/**
 * 인터페이스로 사용하는 유니언
 */
interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: '강한희',
  age: 25,
  address: '대한민국',
};

console.log(animalOrHuman); // animalOrHuman이 Human 타입이라고 추론함

animalOrHuman = {
  name: '오리',
  age: 9,
};

console.log(animalOrHuman); // Animal 타입이라고 잘 추론함
console.log(animalOrHuman.address); // Animal 타입엔 address 속성이 없기 때문에 에러
console.log((animalOrHuman as Human).address); // 강제 캐스팅의 문제점

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
  name: string;
  age: number;
};

type Cat = {
  bread: string;
  country: string;
};

type PersonOrCat = Person | Cat;

// '|' 쓰면 무언가 타입하나 충족한다면, 초과되는 값이 다른 타입으로 부터와도 상관없음
const personOrCat: PersonOrCat = {
  name: '코드팩토리',
  age: 30,
  bread: 'Yorkshire Terrier',
  country: '영국',
};
