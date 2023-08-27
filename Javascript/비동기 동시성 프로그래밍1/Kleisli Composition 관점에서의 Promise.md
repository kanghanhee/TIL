Promise는 클레이슬리 합성을 지원하는 도구라고도 볼 수 있다.

## Kleisli Composition

오류가 있을 수 있는 상황에서 함수 합성을 안전하게 하는 규칙이다.

`f . g` 두 함수를 합성한다고 했을 때,

`f(g(x)) = f(g(x))` 를 보장하기 위해 만일 g()에서 에러가 발생했을 경우, `f(g(x)) = g(x)` 이 성립하도록(마치 f()가 적용이 안된 것처럼) 합성되는 것을 Kleisli Composition이라고 한다.

```javascript
var users = [
  { id: 1, name: "aa" },
  { id: 2, name: "bb" },
  { id: 3, name: "cc" },
];

const getUserById = (id) => find((u) => u.id == id, users);

const f = ({ name }) => name;
const g = getUserById;
const fg = (id) => f(g(id));

console.log(fg(2)); // bb

users.pop();
users.pop();

console.log(fg(2)); // Error undefined
```

위에서는 g()에서 에러가 나도 f()를 실행하여 오류를 반환했다.

하지만 Promise를 사용해 구현하면 g()에서 에러가 나면 .then(f)를 실행하지 않고 catch로 정리만 해주게 되는 것이다.

```javascript
var users = [
  { id: 1, name: "aa" },
  { id: 2, name: "bb" },
  { id: 3, name: "cc" },
];

const getUserById = (id) =>
  find((u) => u.id == id, users) || Promise.reject("없어요");

const f = ({ name }) => name;
const g = getUserById;
const fg = (id) =>
  Promise.resolve(id)
    .then(f)
    .then(g)
    .catch((a) => a);

console.log(fg(2)); // bb

users.pop();
users.pop();

console.log(fg(2)); // 없어요
```

결론 : Promise를 사용하면 오류가 발생하는 상황에서도 안전하게 함수를 합성할 수 있다. 클레이슬리 컴포지션을 지원한다.
