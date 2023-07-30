FP에서는 코드를 값으로 다루는 아이디어를 많이 사용한다. 코드를 값으로 다룰 수 있기 때문에 어떤 함수가 코드인 함수를 받아서 평가하는 시점을 원하는대로 다룰 수 있기 때문에 코드의 표현력을 높일 수 있다.

# 코드를 값으로 다루어 표현력 높이기

## go, pipe

```javascript
const { reduce } = require("./lib");

const add = (a, b) => a + b;
const go = (...args) => reduce((a, b) => b(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

go(
  add(0, 1),
  (a) => a + 10,
  (a) => a + 100,
  console.log
);
// 111

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(0, 1)); // 111
```

## go, pipe 를 사용하여 읽기 좋은 코드로 만들기

```javascript
const { map, filter, reduce } = require("./lib");

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

console.log(
  reduce(
    (total, product) => total + product.price,
    0,
    filter((p) => p.price < 20000, products)
  )
);

// 전에 작성해본 코드를 go함수를 사용해서 구현해봤다.

go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  console.log
);
```

## go + curry 를 사용하여 더 읽기 좋은 코드로 만들기

`curry`는 이렇게 인자가 2개 이상일 경우 받아둔 함수를 즉시 실행하고 아니라면 다시 함수를 return하는 함수다.

```javascript
const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
console.log(mult); // (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
console.log(mult(1)); // (..._) => f(a, ..._);
console.log(mult(1)(2)); // 2
```

순서를 바꾸는 go와 함수를 부분적으로 실행하는 curry를 통해 깔끔하게 바꿔봤다. ` filter``map``reduce `에 `curry`를 사용하면 이렇게 쓸 수 있다.

```javascript
go(
  products,
  (products) => filter((p) => p.price < 20000)(products),
  (products) => map((p) => p.price)(products),
  (prices) => reduce(add)(prices),
  console.log
);
```

즉, 아래처럼 깔끔하게 쓸 수 있다는 것..!

```javascript
go(
  products,
  filter((p) => p.price < 20000),
  map((p) => p.price)(products),
  reduce(add),
  console.log
);
```
