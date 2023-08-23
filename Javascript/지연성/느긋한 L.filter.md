## 제너레이터 함수 이용해서 느긋한 L.filter 구현해보기

```html
<script>
  L.filter = function* (f, iter) {
    for (const a of iter) if (f(a)) yield a;
  };
  var it = L.filter((a) => a % 2, [1, 2, 3, 4]);
  log(it.next()); // 1
  log(it.next()); // 3
  log(it.next()); // undefined, done
</script>
```
