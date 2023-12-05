/**
 * 중요!
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수 있게 되는걸 의미한다.
 */
let numberOrString: number | string = 'Code Factory';
numberOrString; // 타입을 number|string 으로 선언했지만, string으로 유추함

// TS 는 값을 통해서 어떤 타입이 될 지를 유추할 수 있다.

const decimal = 12.3278;
console.log(decimal.toFixed(2));

// toFixed()는 number 타입만 쓸 수 있음
numberOrString.toFixed(); // number|string 타입으로 선언했지만 error
// 값을 입력해서 narrowing을 해버리면
// 실제 narrowing 된 타입으로 완전하게 인지해버린다.

/**
 * Narrowing 종류
 *
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing(차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numOrString: number | string = '아이유';

numOrString.toString();

// (2) typeof narrowing
numOrString = Math.random() > 0.5 ? 1123 : '아이유';
// 빌드하는 순간에는 어떤 값일지 알 수 없음
// TS도 그렇게 유추하기 때문에
// 지금은 number|string 으로 유추하고 있음

if (typeof numOrString === 'string') {
  // 여기 들어오는 순간은 string 타입일 경우밖에 없으므로
  // string으로 유추
  numOrString;
} else {
  // number로 유추
  numOrString;
}

// (3) Truthiness Narrowing
// 위에 typeof narrowing 이랑 비슷
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if (nullOrString) {
  // 여기 들어오는 순간은 true 일 경우
  // 따라서 string[] 로 유추됨
  nullOrString;
} else {
  // null 로 유추됨
  nullOrString;
}

// (4) Equality Narrowing
let numOrString2: number | string = Math.random() > 0.5 ? 1234 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numOrString2 === stringOrBool2) {
  numOrString2;
  stringOrBool2;
} else {
  numOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '  안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
  numberOrStringOrNull;
} else {
  // number 타입을 제외한 나머지 타입들로 유추됨
  numberOrStringOrNull;
}

// typeof 를 쓰면, typeof narrowing과 equality narrowing이 동시에 작용한다.

// (5) in operator narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: '안유진',
  age: 23,
};

let dog: Dog = {
  name: '오리',
  type: 'Yorkshire Terrier',
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log('name' in human); // true
console.log('type' in human); // false

if ('type' in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

// (6) instanceof narrowing
let dateOrString: Date | string =
  Math.random() > 0.5 ? new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

// (7) Discriminated Union Narrowing
interface Animal {
  type: 'dog' | 'human';
  height?: number;
  // 강아지의 종
  bread?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: 'human',
        height: 177,
      }
    : {
        type: 'dog',
        bread: 'Yorkshire Terrior',
      };

if (animal.type === 'human') {
  // number | undifined 로 유추함
  animal.height;
} else {
  animal.height;
  animal.bread;
}

// 둘 다 타임에 undifined 가 있음
// 좋지 않은 방법
// 타입을 다르게 정의해보겠다.

interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
  type: 'dog';
  bread: string;
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: 'human',
        height: 177,
      }
    : {
        type: 'dog',
        bread: 'Yorkshire Terrior',
      };

if (humanOrDog2.type === 'human') {
  // 타입을 정확히 유추함
  humanOrDog2;
} else {
  // 타입을 정확히 유추함
  humanOrDog2;
}

// Discriminated Union Narrowing 을 적극 활용해야하는데
// 공통된 프로퍼티를 갖고 있는 객체를 선언을 할 때
// 절대적으로 위에처럼 하나로 뭉퉁그려 선언하는 것보다
// 여러개로 나눠서 선언하고 union 으로 묶어주는게
// 타입을 정확히 유추하는데 훨씬 더 유리하다.

// (8) Exhuastiveness Checking
// 체크를 하면서 내로잉을 할 수 있음(TS를 좀 더 잘 활용할 수 있는 방법)

// 만약 fish 타입을 추가했다면,
// _check 부분에서 에러가 발생함
// default에 마지막 체크를 하나 해놓으면
// switch 문에서 타입 체크할 때
// 의도했던 타입외에 새로 생긴 타입에 대한 문제를 체크할 수 있음
interface Fish2 {
  type: 'fish';
  length: number;
}

type HumanOrDogOrFish = Human2 | Dog2 | Fish2;

let humanOrDogOrFish: HumanOrDogOrFish =
  Math.random() > 0.5
    ? {
        type: 'human',
        height: 177,
      }
    : Math.random() > 0.5
    ? {
        type: 'dog',
        bread: 'Yorkshire Terrior',
      }
    : {
        type: 'fish',
        length: 13,
      };

switch (humanOrDogOrFish.type) {
  case 'human':
    humanOrDogOrFish;
    break;
  case 'dog':
    humanOrDogOrFish;
    break;
  default:
    humanOrDogOrFish;

    const _check: never = humanOrDogOrFish; // error
    break;
}
