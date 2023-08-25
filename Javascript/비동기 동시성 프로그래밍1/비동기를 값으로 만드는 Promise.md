```javascript
const go1 = (a, f) => f(a);
const add5 = (a) => a + 5;

console.log(go1(5, add5)); // 15
```

만약 `go1`에 전달되는 a값이 비동기 상황이라면?

`Promise`는 비동기 상황을 값으로 만드는 일급의 성질을 가지고 있다.

즉, 함수에게 전달할 수 있다는 것이고 이를 활용해 다양한 것들을 할 수 있다.

```javascript
const delay100 = (a) =>
  new Promise((resolve) => setTimeout(() => resolve(a), 100));

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const add5 = (a) => a + 5;

go1(delay100(5), add5).then(console.log); // 15
```

```javascript
console.log(go1(go1(5, add5), console.log)); // undefined
console.log(go1(go1(delay100(5), add5), console.log)); // Promise{pending}
```

일을 한 결과의 상황을 일급값(Promise)으로 만들어서 어떤 일들을 지속적으로 연결해나갈 수 있도록 하는 것이 Promise의 특징이다.

![image](https://github.com/kanghanhee/TIL/assets/68781598/19e2ccb5-24e3-4772-8707-20d5e18f942f)
