자바 스크립트에서 스코프는 var, let, const 키워드에 따라 범위가 다르게 동작한다.

먼저 스코프란 변수에 접근할 수 있는 유효범위이다.

```js
function print(x, y) {
  console.log(x, y);
}

print(2, 3);

console.log(x, y); // ReferenceError: x is not defined
```

x,y 를 매게변수로 받아 출력하는 함수를 작성해보았다. 여기서 x,y 는 매게변수를 참조할 수 있는 유효범위(=스코프) 가 함수 내부로 한정되기 때문에 함수 외부에서 참조하려고 하면 오류가 발생한다.

## 🔍자바스크립트의 스코프

```js
var x = "global";

function foo() {
  var x = "local";
  console.log(x); // 1
}

foo();

console.log(x); // 2
```

코드의 가장 바깥 영역과 foo 함수 내부에 같은 이름을 갖는 x 변수를 선어했고 1과 2에서 x 변수를 참조한다. 이때 자바스크립트 엔진은 이름이 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지를 결정해야 한다. 이를 식별자 결정이라 한다. 자바스크립트 엔진은 스코프를 통해 어떤 변수를 참조해야 할 것인지 결정한다. 따라서 스코프란 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙이라고도 할 수 있다.

자바스크립트 엔진은 코드를 실행할 때 코드의 문맥(context)를 고려한다. 코드가 어디서 실행되며 어떤 코드가 있는지에 따라 위 예제의 1과 2처럼 동일한 코드도 다른 결과가 나온다.

## Fuction Scope (var)

`let 키워드 사용 예시`

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i); // ReferenceErrer
```

블록 스코프 안에서 let과 const 키워드로 선언한 변수는 스코프 안에서만 참조 가능하다.

<br>

C나 자바 등을 비롯한 대부분의 프로그래밍 언어는 함수 몸체만이 아니라 모든 코드 블록(if, for, while, try/catch 등)이 지역 스코프를 만든다. 이러한 특성을 블록 레벨 스코프라 한다. 하지만 var 키워드로 선언된 변수는 블록 스코프를 무시하고 스코프 울타리 밖에서도 접근 가능하다.

`var 키워드 사용 예시`

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// var 키워드로 선언한 변수 i 는 지역 스코프에서 선언되었지만 모든 스코프에서 접근 가능하다.
console.log(i); // 10
```

var 키워드로 선언한 변수는 only `함수 스코프`만을 따른다.