## 제너레이터 함수 이용해서 느긋한 L.map 구현해보기

```html
<script>
  L.map = function* (f, iter) {
    for (const a of iter) yield f(a);
  };
  var it = L.map((a) => a + 10, [1, 2, 3]);
  log(it.next()); // 1
  log(it.next()); // 2
  log(it.next()); // 3
</script>
```
