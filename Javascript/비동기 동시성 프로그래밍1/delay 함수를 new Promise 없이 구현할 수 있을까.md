### delay 함수를 new Promise 없이 만들 수 있을까?

```html
<script>
  const delay = time => {
        setTimeout(()=>{
            console.log(time)
        }, time)
    }
    const a = await delay(3000);
    console.log('no_promise', a);
</script>
```

delay 함수를 async로 선언했으니 promise 를 리턴하고, 리턴된 promise를 await로 꺼내볼 수 있겠지 라고 생각했다.

`하지만,` 못 기다린다.

![image](https://github.com/kanghanhee/TIL/assets/68781598/08919793-c316-4c91-a219-46f5ca619fc9)

`setTimeout`은 숫자를 반환하고 있었다. Node.js에서 setTimeout은 Promise가 등장하기 전부터 있던 함수고, 호출하면 타이머 식별자로 양의 정수를 반환한다.

![image](https://github.com/kanghanhee/TIL/assets/68781598/89607e01-a0c5-4b05-9d11-59a1927a4456)

**결론은 new Promise 없이 구현할 수 없다 !**

javascript 개발을 하면서 Promise 를 잘 알고 있어야한다는 것을 다시 또 느꼈다. `async/await`만 안다고 되는게 아니다.

```html
<script>
  const delayPromise = time => new Promise(resolve=>
    setTimeout(()=> {
        resolve(time)
        console.log(time)
    }, time))

    const p = await delayPromise(3000);
    console.log('promise', p);
</script>
```
