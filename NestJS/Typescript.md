💡 Nest는 타입스크립트를 기본 언어로 채택하고 있다.

## 왜 Typescript 를 쓰는거지?

**정적 타입 검사를 위해!**

TS 는 JS 에서 타입 문법 등을 추가한 상위 집합
코드 작성 단계에서 타입을 체크해 오류 발견

JS 와 100% 호환!

변수가 어떤 Type을 가지는 지 몰라서 생기는 오류가 없다!

### Typescript 의 장점

- 높은 수준의 코드 탐색과 디버깅
  - 코드에 목적을 명시, 버그를 사전에 제거
- Javascript 와 100% 호환
  - 백엔드 / 웹 프론트엔드 어디서든 가능
- 강력한 생태계
  - 그리 오래되지 않은 언어지만 다양한 플러그인 존재

## Typescript 의 Type

### 기본적인 타입 표현

const variable: T = 초기값;</br>
let variable: T = 초기값;

```typescript
let isDone: boolean = true;

const str: string = 'hi ts';

let num: number = 10;

const sum: number = 'sum number';

// Type 'string' is not assignable to type 'number'.
```

### 배열 타입 표현

const variable: T[] = 초기값;</br>
let variable: Array<T> = 초기값; // 제네릭 배열 타입

```typescript
let arr: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];

const objArr: Array<object> = [{ item: 'value' }, { item: 'value2' }];
```

### 헷갈리는 Object 와 object

object 는 **원시 타입을 제외한** 나머지를 모두 받을수있다!

Object 는 자바스크립트의 모든 생성자를 extend</br>
즉, 자바스크립트의 **모든 타입이 할당될 수 있다!**

```typescript
const foo = (obj: object): void => {
  console.log(obj);
};

const boo = (obj: Object): void => {
  console.log(obj);
};

foo('hi');
// Argument of type 'string' is not assignable to parameter of type 'object'.

boo('hi');
```

### 함수 타입 표현

**반환 타입 표기**

반환값이 없는 합수 = void 타입

```typescript
function foo2(a: number, b: number): number {
  return a + b;
}

const boo2 = (a: number, b: number): number => {
  return a + b;
};
```

### null, undefined

null, undefined 는 이름 그대로가 타입

해당 타입은 **null / undefined 자신 이외의 값 할당 안됨**

### 타입 단언 (Type assertions)

“날 믿어,난 내가 뭘 하고 있는지 알아"</br>
개발자가 직접 타입을 단언

```typescript
// angle-bracket
let name: any = '이름';
let nameLength: number = (<string>name).length;

// as
let name2: any = '이름2';
let name2Length: number = (name2 as string).length;
```

### (마법의) any

어떤 타입이라도 any 에 할당 가능</br>
즉, **타입 검사를 하지 않는다.**

개발자가 알기 어려운 타입을 받을 때 사용</br>
혹은, 일부 타입만 알 때 사용

```typescript
const unknown: any = {
  name: '이름',
  age: 18,
};
```

## Interface

타입 체크를 위해 여러가지 프로퍼티를 갖는 새로운 타입 정의</br>
변수, 함수, 클래스 모두 사용 가능

interface Name { </br>
&nbsp;&nbsp;&nbsp;&nbsp;...</br>
&nbsp;&nbsp;&nbsp;&nbsp;property: T; </br>
}

```typescript
interface Member {
  name: string;
  age: number;
  organization: string;
  completion: number[];
}

const member: Member = {
  name: '이름',
  age: 18,
  organization: 'SOPT',
  completion: [28, 29],
};

const members: Member[] = [
  {
    name: '이름',
    age: 18,
    organization: 'SOPT',
    completion: [28, 29],
  },
  {
    name: '이름2',
    age: 18,
    organization: 'SOPT',
    completion: [28, 29],
  },
  {
    name: '이름3',
    age: 18,
    organization: 'SOPT',
    completion: [30, 31, 32],
  },
];
```

### Optional Properties

**선택적 프로퍼티**</br>
인터페이스 내부에서 **필수적이지 않은 프로퍼티**</br> 있을 수도 있고, 없을 수도 있다!

프로퍼티 명 뒤에 `?`를 붙여서 표시!
