자바스크립트 비동기 동시성 프로그래밍에는 2개 방법이 있다.

옛날부터 쓰던 callback 패턴과 promise 기반 함수 합성 방법. 그리고 async/await를 사용 방법(얘도 promise 기반이다.)

# callback

```javascript
function add10(a, callback) {
  setTimeout(() => callback(a + 10), 100);
}

add10(5, (res) => {
  console.log(res);
}); // 15

add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      console.log(res);
    });
  });
}); // 35
```

이 방법은 콜백지옥에 빠질 수 있다.

```javascript
add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      console.log(res);
    });
  });
}); // 35
```

# 비동기를 값으로 만드는 Promise

Promise 객체 반환

```javascript
function add20(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a + 20), 100));
}

add20(5).then(add20).then(add20).then(console.log); // 65
```

## 일급

Promise와 callback 차이의 초점은 callback을 .then()으로 결과를 꺼내본다는 것이 아니다.

Promise는 `비동기 상황을 일급값으로 다룬다`는 점에서 가장 중요한 차이를 가지고 있다.

그니까 Promise는 Promise라는 클래스를 통해서 만들어진 인스턴스를 반환하는데, 그 Promise라는 값은 대기, 성공, 실패를 다루는 일급값으로 만든다는 것이 callback과 가장 큰 차이고, 포인트다.

```javascript
var a = add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      // log(res);
    });
  });
});

log(a); // undefined

var b = add20(5).then(add20).then(add20);

log(b); // Promise{pending}
```
