# pm2의 `fork모드`와 `cluster모드`?

pm2를 사용하면 cluster 모드를 이용해 서버 성능을 높일 수 있다는 것까지는 알았다.
</br>
근데, pm2 cluster모드는 stateless?? 세션 공유를 cluster끼리 할 수 없다.
이게 무슨 소리지...fork모드와 cluster모드의 정확한 차이도 모르고 이용하고 있는 것 같아서 공부해봤다.
