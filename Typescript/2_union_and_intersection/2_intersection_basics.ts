/**
 * Intersection
 *
 * 유니언과는 반대가 되는 개념을 가지고 있다
 * 유니언이 or 의 개념이었다면(A 또는 B),
 * 인터섹션은 and 의 개념이다(A 와 B)
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

// let humanAndContacts: HumanAndContacts = {
//   name: '강한희',
//   age: 25,
// };
// phone, address 속성이 없다는 에러발생함

let humanAndContacts: HumanAndContacts = {
  name: '강한희',
  age: 25,
  phone: '01012341234',
  address: '서울시',
};

// 결론: 인터섹션을 하면,
// Human에 있는 프로퍼티와 Contacts에 있는 프로퍼티가
// 모두 포함된 새로운 타입이 생긴다

// primitive 타입들 intersection
// never 타입(절대로 존재할 수 없는 상황)으로 정의됨
type NumberAndString = number & string;

// let numberAndString: NumberAndString = 1; // never 타입이기 때문에 어떤 값을 넣어도 에러
