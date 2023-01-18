# 자바스크립트 변수 선언 var, let, const

## var

var는 재선언, 재할당 모두 가능하다.

```javascript
var a = 1;
var a = 100;

console.log(a); // 100
```

만약 동일한 이름의 변수를 실수로 중복 선언하고 값을 할당했다면 먼저 선언된 변수 값이 변경되는 문제가 있다.

## `Function Scope`

var로 선언한 변수는 유효범위가 오직 함수 블록만이다. 따라서 함수 외부에서 var로 생성한 변수는 전역 변수가 된다.

```js
var a = 1;

if (true) {
  var a = 100;
}

console.log(a); // 100
```

Function Scope는 전역변수로 만들 확률이 높아지고 중복 선언되는 경우가 생긴다.

## `Hoisting`

변수 선언문이 제일 상단으로 끌어올려진 것 처럼 작동하는 것이다.
<br>
var로 변수를 선언하면 호이스팅되어 변수 선언 이전에 값을 할당하고 참조할 수 있다. -> 가독성 떨어짐, 이렇게 쓰지말자

```js
console.log(hoisting); // undefined : 선언 이전에 참조 가능

hoisting = "123";

console.log(hoisting); // 123

var hoisting;
```

var의 단점을 보완해서 나온게 let, const인데 되도록이면 이 키워드를 이용하는게 좋다.

## let

let은 재선언 불가능하고 재할당은 가능하다.

```js
var foo = 123;

var foo = 456;

let bar = 123;

let bar = 456; // SyntaxError: Identifier 'bar' has already been declared
```

var로 선언하면 런타임 이전에 자바스크립트 엔진에 의해 선언단계와 초기화 단계가 한번에 진행된다.
<br>
let 키워드로 선언하면 선언단계가 먼저 실행되고, 초기화 단계는 변수 선언문에 도달했을 때 실행된다.

let,(const 포함) 키워드로 선언한 변수는 변수 호이스팅이 일어나지 않는 것처럼 보이지만 그렇지 않다. 모든 선언을 호이스팅한다.

## const

const는 재선언, 재할당 모두 불가능하다. **선언과 동시에 초기화해야한다.**

```js
const a = 1;
```

const는 let과 마찬가지로 블록 레벨 스코프를 가지고, 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

```js
{
  // 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  const foo = 1;
  console.log(foo); // 1
}

console.log(foo); // ReferenceError: foo is not defined
```

const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없다. 하지만 const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다. 변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하다.

```js
const person = {
  name: "hi",
};

person.name = "Kim";

console.log(person); // { name: 'Kim' }
```
