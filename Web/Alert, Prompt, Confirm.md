# Javascript의 Alert(), Prompt(), Confirm()

# Alert() : 사용자가 확인을 누를 때까지 화면에 메세지를 표시한다

```html
<script>
  alert("안녕하세요.");
</script>
```

![image](https://user-images.githubusercontent.com/68781598/227817784-2ce43e70-e9f9-40b6-bc4a-91b67a5434de.png)

# Prompt() : 사용자에게 값을 입력받을 수 있다

`두번째 인자는 default값이고, 만약 사용자가 취소를 누르면 null이 리턴된다`

```html
<script>
  const name = prompt("이름을 입력해주세요", "이름"); // prompt('메시지', '디폴트값')
  document.write(`${name}님 안녕하세요.`);
</script>
```

![image](https://user-images.githubusercontent.com/68781598/227818199-e9d548d0-929b-423e-8617-1f3ed9aeb9e5.png)

# Confirm() : 사용자에게 질문을 보여주고, true(확인) 또는 false(취소)가 리턴된다

```html
<script>
  const name = prompt("이름을 입력해주세요", "이름");
  const check = confirm(`${name}님 환영합니다!`);
</script>
```

![image](https://user-images.githubusercontent.com/68781598/227818548-5b58d711-e870-41f2-b4ba-33e85b3dc1c0.png)
