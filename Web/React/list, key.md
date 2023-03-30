# list를 렌더링 할 때는 반드시 props에 key를 설정해야한다.

```javascript
userData.map((data) => {
  return <Card key={data.id} props={data} />;
});
```

```javascript
userData.map((data, index) => {
  return <Card key={index} props={data} />;
});
```

- key는 각 요소의 `고유값(id, index 등)`으로 설정해야함
- key를 설정하지 않으면 오류 메시지가 뜸
  `이유? key가 있어야 배열을 효율적으로 렌더링 할 수 있기 때문`->`배열이 변경되면, 바뀌는 부분만 업데이트함`
