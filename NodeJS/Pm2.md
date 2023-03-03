# pm2(프로세스 매니저)에 대해

Node.js에 사용성을 200% 높여주는 패키지 매니저로 npm이 있다면,
Node.js를 Express와 같은 프레임 워크를 이용해 서버를 만들고 있는 개발자들에게
사용성을 20000% 높여준다고 할 수 있는 한 줄기 빛인 프로세스 매니저로 PM2가 있다.

# pm2를 왜 쓰나?

Node.js를 서버로서 백엔드에서 사용하려면 여러가지 고민이 들 수 있다.

대표적으로
`1. 서비스를 제공하고 있는 도중에 서버가 꺼진다면?` </br>
`2. Node.js는 싱글 스레드 기반인데 멀티 코어 혹은 하이퍼 스레딩을 사용하고 싶다면?` </br>
이 있을텐데 PM2를 사용하면 고민을 해결할 수 있다!

```
pm2 start example.js
pm2 list (pm2 리스트보기)
pm2 log {name or id} (log 보기)
pm2 stop {name or id}
pm2 restart {name or id}
pm2 delete {name or id}
pm2 kill (프로세스 한번에 종료됨)
pm2 monit (서버 상황을 한눈에 확인할 수 있는 화면)

~/.pm2/log (로그 저장소)
```
