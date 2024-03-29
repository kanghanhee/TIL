# pm2(프로세스 매니저)에 대해

Node.js에 사용성을 200% 높여주는 패키지 매니저로 `npm`이 있다면, </br>
Node.js를 Express와 같은 프레임 워크를 이용해 서버를 만들고 있는 개발자들에게 </br>
사용성을 20000% 높여준다고 할 수 있는 한 줄기 빛인 `프로세스 매니저로 PM2`가 있다.

# pm2를 왜 쓰나?

Node.js를 서버로서 백엔드에서 사용하려면 여러가지 고민이 들 수 있다.

대표적으로
</br>

> _1. 서비스를 제공하고 있는 도중에 서버가 꺼진다면?_ </br> _2. Node.js는 싱글 스레드 기반인데 멀티 코어 혹은 하이퍼 스레딩을 사용하고 싶다면?_

</br>

이 있을텐데 PM2를 사용하면 고민을 해결할 수 있다!

</br>

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

# pm2 cluster mode

![image](https://user-images.githubusercontent.com/68781598/222614880-f54a5290-6d5e-485b-87b4-a09f1159aa0a.png)
PM2의 cluster 모드는 Node.js의 cluster module을 이용해 기본적으로 싱글 스레드인 Node.js를 멀티 스레드로 구동시켜준다.
</br>

싱글 스레드의 경우 구동 중인 서버의 CPU 개수와 상관없이 1개만 사용할 수 있기에 서버의 성능을 제대로 끌어내지 못한다. 반면, 멀티 스레드는 최대 서버 CPU 수만큼(하이퍼스레딩을 지원한다면 x2) 프로세스를 생성해 최대 성능을 끌어낼 수 있다.
</br>

PM2에서 cluster mode를 사용하기 위해서는 다음과 같이 설정해주면 된다.
</br>

```json
// ecosystem.config.json
{
  "apps": [
    {
      "name": "app-name",
      "cwd": "./project-dir", // 앱이 실행될 디렉토리
      "instances": "max", // 실행시킬 프로세스의 갯수(max로 입력할 경우 최대 갯수로 설정한다.)
      "exec_mode": "cluster", // cluster 모드로 어플리케이션을 구동시킨다.
    },
  ],
};
```
