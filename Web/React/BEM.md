# BEM 방법론

`.block__element--modifier css className을 정하는 방법론 중 하나`

- **block**: 재사용 가능한 기능적으로 독립적인 컴포넌트
- **element**: 블록을 구성하는 단위
- **modifier**: block이나 element의 속성

</br>
className = "컴포넌트__요소--속성" 형식으로</br>
camelCase 대신에 camel-case처럼 `하이픈` 사용</br>

![image](https://user-images.githubusercontent.com/68781598/228702142-c09b44d9-5743-4537-b981-e4892b4c16d6.png)

```javascript
<div className ="card">
  <div className = "card__image">
  {image ? (
    <img className="card__image--photo" scr={image} alt="" />
  ) : (
    <img className="card__image--empty" scr={EmptyImage} alt="" />
  )}
</div>
```

# 장점

```
1.  className의 중복 방지

2.  className만으로 마크업 구조 파악 가능

3.  SASS에서 부모 선택자와 사용하면 편리하다

4.  유지 보수에 유리하다
```
