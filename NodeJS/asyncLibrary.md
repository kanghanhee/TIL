`async`는 async, await인줄 알았는데, 비동기 처리에서 유용하게 사용되는 모듈이었다.<br>
약 70개의 함수를 지원하며, 예제도 잘 나와 있다.<br>
[공식문서](http://caolan.github.io/async/v3/)

```javascript
const async = require("async");
```

### each
---------------------

배열에 정의된 작업들을 반복적으로 처리해야 하는 경우 사용한다.
**반복적으로 비동기적인 업무를 처리할 때 아주 좋은 함수입니다.**

```javascript
const users = ["1", "2", "3"];

async.each(users, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(users);
  }
});
```

만약 1만 개의 유저 데이터가 배열에 들어가 있고 각각의 유저에 대해 유저 프로필을 호출한 다음 특정 값을 입력해야 하는 등의 작업을 처리할 때 유용합니다.

여기서 주의할 점은 each에 들어가는 작업은 순차적이 아닌 병렬적으로 실행된다는 것입니다. 따라서 실행 순서를 보장하지 않기 때문에 예상한 결과가 나오지 않는 경우가 많습니다.

반복문의 실행 순서가 중요한 경우 async.eachSeries를 사용하시면 됩니다. 하나의 작업이 다 끝나고 다음 작업을 순차적으로 실행하기 때문에 처리 속도가 상당히 느려지는 단점이 존재합니다.

그 이외에 반복적으로 처리한 값을 하나의 결과로 전달받아야 하는 경우 async 함수 바깥쪽에 const agg = [] 와 같이 정의해서 결과값을 push 하는 것이 아닌 async.map 을 사용하면 간단하게 해결할 수 있습니다.

### XXXSeries
---------------------------

series 함수는 비동기 함수들을 순차적으로 실행하도록 도와주는 함수이다. 이 함수는 독립적인 작업을 순차적으로 실행하기 위해 사용된다.

```
async.series(tasks, done)

```

```javascript
const tasks = [
  function (callback) {
    setTimeout(function () {
      console.log("one");
      callback(null, "one-1", "one-2");
    }, 200);
  },
  function (callback) {
    setTimeout(function () {
      console.log("two");
      callback(null, "two");
    }, 100);
  },
];

async.series(tasks, function (err, results) {
  console.log(results);
});
```

tasks의 첫번째 함수에서는 0.2초 후에 one 이라는 메시지를 출력하고, 두번째 함수에서는 0.1초 후에 two 라는 메시지를 출력하도록 해놓았다. 이 함수를 async의 series 함수로 실행하면 작업 시간은 첫번째 함수가 실행된 후 두번째 함수가 실행되어 총 0.3초가 걸린다. 각 수행의 결과는 results에 배열 형태로 반환된다.

### waterfall
-------------------------------

waterfall 함수는 series와 같이 비동기함수를 순차적으로 실행하지만 각 작업의 결과를 다음 작업으로 넘겨줄 수 있는 특징이 있다.

![img](https://techlog.io/gallery/javascript/waterfall.jpg)

```javascript
async.waterfall(
  [
    function (callback) {
      callback(null, "1");
    },
    function (arg, callback) {
      console.log(arg);
      callback(null, "2");
    },
    function (arg, callback) {
      console.log(arg);
      callback(null, "끝");
    },
  ],
  function (err, result) {
    if (err) {
      console.log("에러 발생");
    } else {
      console.log(result);
    }
  }
);
```

### parallel
----------------------------

비동기 작업을 동시에 수행 한 후, 모든 작업이 종료 된 후에 완료 함수를 수행하여 준다. waterfall 이나 whilist 등은 재귀 패턴으로 간단하게 구현이 가능하지만 병렬 처리 후 동기 작업은 다소 복잡한데 async에서 parallel 함수를 사용하면 간단하게 해결이 된다.

![img](https://i0.wp.com/proinlab.com/wp-content/uploads/2016/04/parallel.png?resize=525%2C401)

시간별로 프로세스 작업을 구성해보면 위의 그림과 같다. 메인에서 async를 통해 각 작업을 호출하고 모든 작업이 끝나면 완료 시점에 콜백을 호출하여 메인 쓰레드로 결과물들을 돌려준다. 웹 데이터 수집 시 다중 쓰레드로 빠른 속도로 수집하고 싶을 때 사용하면 좋을 듯 하다.

```javascript
const timestamp = new Date().getTime();

async.parallel(
  [
    function (callback) {
      setTimeout(function () {
        console.log("1");
        callback(null, "one");
      }, 2000);
    },
    function (callback) {
      setTimeout(function () {
        console.log("2");
        callback(null, "two");
      }, 1000);
    },
    function (callback) {
      setTimeout(function () {
        console.log("3");
        callback(null, "three");
      }, 3000);
    },
  ],
  function (err, result) {
    console.log(result, "in ", new Date().getTime() - timestamp, "ms");
  }
);
```

위의 코드는 parallel 함수의 작업 순서를 확인하기 위해 작성해본 코드이다. 가장 오래걸리는 작업은 세번째 함수로 3초가 걸리도록 하였다. 만약 각 작업이 동시에 진행된다고 하면 총 작업 시간은 세 작업의 합인 6초가 아닌, 가장 긴 작업의 시간인 3초 일 것이다. 위의 함수를 실행해보면 총 시간이 3초인 것을 확인 할 수 있다.

### whilst
-----------------------------

```javascript
let count = 0;

async.whilst(
  (cb) => {
    cb(null, count < 5);
  },
  (cb) => {
    console.log(count);
    count++;
    setTimeout(() => {
      cb(null, count);
    }, 1000);
  },
  (err, result) => {
    console.log(err, result);
  }
);
```

첫 번째 인자로 조건문을 받아들이며 두 번째 인자는 조건문이 `true`일 동안 실행되게 됩니다. 조건문이 `false`가될 경우 세 번째 인자로 받아들인 함수를 실행하게 되며 결과값도 함께 전달됩니다.
