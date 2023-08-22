길이를 받아 배열을 만드는 range 함수와 제너레이터 함수를 사용한 L.range 함수를 작성해봤다.

```html
<script src="./lib/fx.js"></script>

## range
<script>
  const add = (a, b) => a + b;

  const range = (l) => {
    let i = -1;
    let res = [];
    while (++i < l) {
      log(i, "range");
      res.push(i);
    }
    return res;
  };

  var list = range(4);
  log(list);
  //   log(reduce(add, list));
</script>

## 느긋한 L.range

<script>
  const L = {};
  L.range = function* (l) {
    let i = -1;
    while (++i < l) {
      log(i, "L.range");
      yield i;
    }
  };

  var list = L.range(4);
  log(list);
  //   log(reduce(add, list));
</script>
```

`reduce`함수를 주석처리하면 `log(i, "L.range");`는 콘솔에 찍히지 않는다.

### why?

아직 평가되지 않았기 때문 ! 이터레이터 내부를 순회할 때 마다 하나씩 값이 평가가 되는데 따라서 next() 하기전까지는 실행 안된다. reduce 안에서 실제로 값이 필요해질 때 평가가 이뤄져서 값이 꺼내진다.

`range함수`는 Array 만들어 놓고 숫자를 생성하고 저장한다. 그 다음에 그 Array를 Iterator{}로 만들고, 그 다음에 next()를 하면서 순회 동작을 하게 되고, `L.range`는 제너레이터 함수를 사용하여 숫자만 생성하고 필요할 때 호출된다. 따라서 배열을 만들지 않고 하나씩 값을 그냥 꺼내서 쓰기만 하게 되는 것이다. 따라서 좀 더 효율적이라고 할 수 있다.

### real?

성능테스트를 해보겠다.

```html
<script>
  function test(name, time, f) {
    console.time(name);
    while (time--) f();
    console.timeEnd(name);
  }

  test("range", 10, () => reduce(add, range(1000000)));
  test("L.range", 10, () => reduce(add, L.range(1000000)));
</script>
```

작지만 차이가 났다.

![image](https://github.com/kanghanhee/TIL/assets/68781598/a0fc37ca-2d32-431b-a371-1c7d0681d170)
