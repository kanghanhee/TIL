Symbol은 객체의 키로 사용될 수 있음.
log(set[Symbol.iterator]) // 어떤 함수가 들어있다고 나옴

arr[Symbol.iterator]=null 로 비워보면 순회가 안됨.

## 이터러블/이터레이터 프로토콜

일단 arr, set, map 은 자바스크립트 내장 객체로써 이터러블/이터레이터 프로토콜을 따르고있음

- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값 -> arr는 이터러블이라고 할 수 있음 그래서 아까 null로 비웠을 때 arr가 이터러블이 아니라는 오류 메시지가 뜬 것임

- 이터레이터: {value,done} 객체를 리턴하는 next()를 가진 값
  iterator.next() // {value:1, done: false}, {value:2, done: false}, {value:3, done: false}, {value:undefined, done: true}
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

=> for...of문 같은 경우, arr가 이터러블이고, arr는 Symbol.iterator를 통해 이터레이터를 리턴하기 때문에 for of 문과 함께 잘 동작하는 이터러블 객체고 그렇게 해서 forof 로 순회할 수 있기 때문에 이터러블/이터레이터 프로토콜을 따른다고 할 수 있다.

for of 문을 보면 value에 들어오는 값을 a담아서 출력하고, 출력하다가 done이 true가 되면 이 for문에서 빠져나오도록 되어있음

```javascript
const arr = [1, 2, 3];
let iter1 = arr[Symbol.iterator]();
iter1.next();
for (const a of iter1) log(a); // 2,3 만 순회됨
```

set,map이 set[0]처럼 숫자로 접근할 수 있는 값이 없음에도 불구하고 for of문이 동작하는 것은 증가하는 i값을 키밸류로 접근해서 순회하는 것이 아니라 이터러블 프로토콜을 따르고 있기 때문임.

더 재밌는거+++
map같은 경우 keys()라는 함수가 있는데(map.keys()) 얘는 이터레이터를 리턴함.
이 이터레이터는 value에 키만 남게됨.
뭔 말이냐?

```javascript
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const a of map.keys()) log(a); // a,b,c 만 출력됨, 키만 출력됨
for (const a of map.values()) log(a); // 1,2,3
for (const a of map.entries()) log(a); //  ["a", 1], ["b", 2], ["c", 3]
```
