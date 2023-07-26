함수형 프로그래밍에서 `map,filter,reduce` 함수는 아주 실용적으로 많이 쓰인다.

# map

이름, 가격별로 데이터를 모으고 싶다면, 아래와 같이 코드를 짤 수 있다.

```javascript
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let names = [];
for (const p of products) {
  names.push(p.name);
}

let prices = [];
for (const p of products) {
  prices.push(p.price);
}
```

이럴 때 유용하게 쓸 수 있는 게 `map`함수다.

```javascript
products.map((p) => p.name);
```

### map함수 만들어보기

```javascript
const map = (func, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(func(a));
  }
  return res;
};

console.log(map((p) => p.name, products));
console.log(map((p) => p.price, products));
```

# 이터러블 프로토콜을 따른 map의 다형성

이터러블 프로토콜을 따르는 iterable인 모든 값들, 제너레이터 함수 결과들에도 map을 사용할 수 있다. 사실상 모든 것들에 map을 할 수 있다.

```javascript
function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}

console.log(map((a) => a * a, gen()));
```

```javascript
let m = new Map();
m.set("a", 10);
m.set("b", 20);

console.log(map(([k, a]) => [k, a * 2], m)); // [ [ 'a', 20 ], [ 'b', 40 ] ]
console.log(new Map(map(([k, a]) => [k, a * 2], m))); // 따라서 이걸 다시 Map 객체로 만들 수도 있음
```

# filter

`filter`는 특정 범위를 걸러낼 때 유용하게 사용할 수 있다.

```javascript
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let under20000 = [];
for (const p of products) {
  if (p.price < 20000) under20000.push(p);
}
let over20000 = [];
for (const p of products) {
  if (p.price >= 20000) over20000.push(p);
}
log(...over20000);
console.log(...under20000);
```

### filter 함수 만들어보기

조건을 `(p) => p.price < 20000`라는 내부함수를 통해 지원할 수 있도록 만든다.

```javascript
const filter = (func, iter) => {
  let res = [];
  for (const a of iter) {
    if (func(a)) res.push(a);
  }
  return res;
};

console.log(...filter((p) => p.price < 20000, products));
```

map처럼 제너레이터함수를 만들어 쓰는 것도 가능하다.

```javascript
console.log(
  filter(
    (n) => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })()
  )
);
```

# reduce

`reduce`는 값을 축약하는 함수다. 이터러블 값을 계속 순회하면서 어떤 하나의 값으로(다른 값으로) 축약해나가는 함수다.</br>

예를 들어서, nums 값을 모두 더해서 하나의 값을 만든다고 할 때 `reduce`를 쓴다.

```javascript
const nums = [1, 2, 3, 4, 5];

let total = 0;
for (const n of nums) {
  total = total + n;
}
console.log(total);
```

### reduce 함수 만들어보기

`const add = (a, b) => a + b;` 라는 함수가 있다고 했을 때 `console.log(reduce(add, 0, [1, 2, 3, 4, 5]));` 의 결과가 15가 나오도록 하면 된다.
내부적으로는 `add(0,1)`-> `add(add(0,1),2)`...이런식으로 함수를 재귀적으로 호출하면서 하나의 값으로 누적해나간다.

```javascript
const add = (x, y) => x + y;

const reduce = (func, acc, iter) => {
  for (const a of iter) {
    acc = func(acc, a);
  }
  return acc;
};
console.log(reduce(add, 0, [1, 2, 3, 4, 5]));
```

사실 자바스크립트의 `reduce`는 시작값을 주지 않더라도 마치 `reduce(add, 1, [ 2, 3, 4, 5])` 이렇게 받은 첫번째 값을 꺼내서 기본값으로 변경하는 식으로 동작한다.
이렇게 구현해보겠다.

```javascript
const add = (x, y) => x + y;

const reduce = (func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = func(acc, a);
  }
  return acc;
};
console.log(reduce(add, [1, 2, 3, 4, 5])); // 15 잘 출력됨
```

```javascript
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

console.log(
  reduce((total_price, product) => total_price + product.price, 0, products)
);
```

이건 안됨. </br>
`why?` reduce를 사용할때 배열의 원소의 형과 누적하여 리턴할 값의 형이 다른 패턴일때는 초기값이 없을 수 없습니다. 이 패턴일 때는 초기값이 없겠금 무언가를 하는 일 자체를 고려하는 것이 의미가 없는 일 입니다. 애초에 초기값을 넣는 것이 올바른 사용법이기 때문입니다.</br>
reduce 함수 구현부에 초기값이 없는 경우와 있는 경우를 지원하고 있는건 초기값이 필요한 패턴에서 초기값이 없을 경우를 지원하기 위함이 아닌,

`reduce(add, [1, 2, 3]);`

과 같이 사용하거나

`reduce((obj, [k, v]) => Object.assign(obj, {[k]: v}), {}, [["a", 1], ["b", 2]]);`

와 같이 사용하기 위해 이 두가지 용도만으로 사용하기 위해 지원하는 것입니다.

```javascript
console.log(
  reduce((total_price, product) => total_price + product.price, products)
);
```
