# TS 기본 타입 표현

```typescript
let isDone: boolean = true;
const str: string = "hello ts";
let num: number = 3;
const sum: number = "number"; // Type 'string' is not assignable to type 'number'.
```

`배열`

```typescript
let arr: number[] = [1, 2, 3];
const strArr: Array<string> = ["hello", "ts"];
const objArr: Array<object> = [{ item: "1" }, { item: "2" }];
```

`Object, object`
Object 는 자바스크립트의 모든 생성자를 extend.
즉, 자바스크립트의 모든 타입이 할당될 수 있다.
<br>
object는 원시 타입을 제외한 나머지 모두를 받을 수 있다.

```typescript
const foo = (obj: object): void => {
  console.log(obj);
};

const boo = (obj: Object): void => {
  console.log(obj);
};

foo("hi"); // Argument of type 'string' is not assignable to parameter of type 'object'.
boo("hi"); // hi
```

`함수`
**반환 타입 표기**

- 반환 값이 없는 함수 = void 타입이다.

```typescript
function foo(a: number, b: number): number {
  return a + b;
}

const boo = (a: number, b: number): number => {
  return a + b;
};
```

`마법의 any`
어떤 타입이라도 any 에 할당 가능하다. 즉, 타입 검사를 하지 않는다.

- 개발자가 알기 어려운 타입을 받을 때 사용
- 혹은, 일부 타입만 알때 사용
