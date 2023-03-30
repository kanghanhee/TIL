# Grid Layout

`2차원 레이아웃 시스템`

![image](https://user-images.githubusercontent.com/68781598/228711739-a8a99545-da4f-4f38-9e6e-9adf259609ae.png)
</br>
![image](https://user-images.githubusercontent.com/68781598/228726321-384c8afd-fa84-4c2a-b8e4-6f790af8eecd.png)
</br>

## 사용법

- Grid 레이아웃 적용: `display: grid;`
- 가로/세로 기준 나열
  - `grid-templete-cloumns: 1fr 2fr 3fr;`
  - `grid-templete-rows: 100px 200px`
- 속성값으로 쓸 수 있는 함수
  - repeat(반복횟수, 반복값)
  - minmax(최소, 최대)</br>
    ex) `repeat(auto-fit, minmax(20%, auto))`

## Grid 셸을 병합할 때

- grid-column-start: 2;
- grid-column-end: 4;
- grid-row-start: 1;
- grid-row-end: 3;
  </br>
- grid-column: 2/4;
- grid-row: 1/3;
