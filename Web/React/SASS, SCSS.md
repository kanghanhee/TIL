# SASS

- CSS의 불편한 점들을 보완하고, 확장된 기능을 사용할 수 있다

# SCSS : Sassy CSS

- SASS의 기능을 지원하는 `CSS의 Superset`
- SASS의 문법은 기존 CSS와 다르지만, SCSS는 상당히 유사
- 변수, 연산자, 내장함수, 중첩 등 다양한 기능을 제공한다

# 사용방법

- 설치

```bash
npm install -g node-sass
```

- node-sass <입력파일경로> [출력파일경로]

```bash
node-sass scss/main.scss public/main.css
```

- `-watch` 옵션 사용하면 파일 변경시 자동 업데이트

```bash
node-sass --watch scss/main.scss public/main.css
```

```scss
$main-color: #cea0e3;

body {
  background-color: $main-color;
}

p {
  $main-color: white;
  color: $main-color;
}
```

- $로 변수 선언

- block scope

- 재할당 가능

```scss
body {
  width: 900px/300px;
  height: 400px+50px;
}
```

- 연산자 사용 가능(` + - \* / % == !=`)

```css
@import "style.scss";
@import "_style";
```

- @import "다른 스타일 파일"(.scss 확장자 생략 가능)
- `_`로 시작하는 파일은 컴파일 안됨

```scss
.class {
  font-size: 24px;
}
p {
  @extend .class;
}
```

- @extend로 상속

```css
@mixin box($color) {
  background-color: $color;
}
.class {
  @include box(red);
}
```

- @mixin으로 인수를 받을 수 있음
- @include로 선언한 mixin 사용

```scss
body {
  color: green;

  li {
    font-size: 2rem;
  }
}
```

- 선택자 중첩 가능
- &로 부모 선택자 사용

# 실습

```html
<div className="card">
  <div className="card__image">
    {image ? (
    <img className="card__image--photo" scr="{image}" alt="" />
    ) : (
    <img className="card__image--empty" scr="{EmptyImage}" alt="" />
    )}
  </div>
</div>
```

- CSS로 작성

```css
.card {
  width: 300px;
}
.card__image {
  heigth: 100px;
}
.card__image--photo {
  margin: 0 auto;
}
```

- SCSS로 작성

```scss
.card {
  width: 300px;
  &__imgae {
    heigth: 100px;
    &--photo {
      margin: 0 auto;
    }
  }
}
```
