FP에서는 이렇게 함수를 중첩하고, 함수를 연속적으로 실행함.

```javascript
const { map, filter, reduce } = require("./lib");

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// 2만원 미만의 가격을 모두 합친 값
console.log(
  reduce(
    (total, product) => total + product.price,
    0,
    filter((p) => p.price < 20000, products)
  )
);
```

_좀 더 FP 적으로 짜보기 !_</br>
`reduce`가 잘 동작할 수 있도록 iter 자리에 기대하는 형태([10,20,30])로 만들어주고 -> map()을 사용해서 숫자가 들어있는 배열로 평가되도록 만들어야겠다고 생각하고 코드를 짜는것!
`map`역시 price를 추출하기전 iter 자리에 들어올 것들을 -> filter()를 사용해서 만들어줌

```javascript
const add = (a, b) => a + b;
console.log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price < 20000, products)
    )
  )
);
```
