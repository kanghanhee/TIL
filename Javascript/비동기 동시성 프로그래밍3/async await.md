## async/await

async await 는 자바스크립트에서 비동기 상황을 보다 동기적인 코드로 다루기 위한 또 하나의 방법이다.

Haskell의 `do-notation`과 비슷하다.
비동기적으로 일어나는 일들을 문장으로 다루려고 할 때 동기적인 코드로 다룰 수 있게 해주는 키워드이다.

따라서 async/await 을 사용하면 보다 쉽게 비동기적인 상황들을 제어할 수 있다.

### 기본 사용법

async 키워드로 선언하면 함수 안에서 await를 쓸 수 있다.

await 를 써주면 delay(10)이 Promise가 결과를 만들어줘서 끝날 때까지 함수가 멈추게 된고 a 에 Promise 내부에 있는 값이 할당되게 된다.

```javascript
function delay(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a), 500));
}

async function f1() {
  const a = delay(10);
  console.log(a); // Promise{pending}
  const b = await delay(10);
  console.log(a); // 10
}
f1();
```

`but,` async/await 만 안다고 해서 모든 비동기 상황을 잘 동기적으로 다룰 수 있는 건 아니다.

일단 async/await 의 기반인 Promise에 대해 정확히 알고 있어야한다.

왜냐면 Promise라는 것이 보여지지 않고 동작하는 것 같지만, 사실 해당 함수를 await 하기 위해서 결국에는 그 함수가 반드시 Promise를 return 해야 await를 통해서 결과를 기다려서 변수에 넣어줄 수 있는 것이기 때문이다.

### 흔히 하는 실수

콘솔에 15로 찍히겠지? 노노노노 아니다!

```javascript
function delay(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a), 500));
}

async function f1() {
  const a = await delay(10);
  const b = await delay(5);

  return a + b;
}
console.log(f1());
```

**_async 를 선언하면 어떤 값을 리턴하든 Promise를 리턴하는 함수가 된다._**

```javascript
function delay(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a), 500));
}

async function f2() {
  const a = 10;
  const b = 5;

  return a + b;
}
console.log(f2()); // 그냥 변수를 할당해서 return 해도 Promise임
```

따라서 Promise를 리턴하니까 이런식으로 작성하면 된다.

```javascript
f1().then(console.log);

// 아니면
go(f1(), console.log);

// 아니면
(async () => {
  console.log(await f1());
})();
```

결론 : async/await을 다룰 때에도 `Promise가 값으로 다뤄지는 것`, async 함수가 Promise를 리턴하고 리턴된 Promise를 await로 꺼내볼 수 있는것이라는 걸 알고 프로그래밍하자..!

```javascript
const p = Promise.resolve(10);
(async () => {
  console.log(await p);
})();
```
