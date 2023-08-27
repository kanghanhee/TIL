## Promise.then의 중요한 규칙

Promise가 아무리 중첩돼서 선언되어 있더라도 단 한 번의 then으로 안에 있는 결과를 꺼내서 볼 수 있다는 점이다.

이건 Promise 체인이 연속적으로 대기가 걸려있더라도 내가 원하는 곳에서 한번에 then으로 해당하는 결과를 받을 수 있다는 얘기가 된다.

```javascript
Promise.resolve(Promise.resolve(Promise.resolve(1))).then(console.log);
```
