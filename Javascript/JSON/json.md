### JSON 이란?

JSON은 JavaScript Object Notation의 약자로서 데이터를 문자열의 형태로 나타내기 위한 데이터 형식입니다.
특히 네트워크를 통해 서로 다른 시스템들이 데이터를 주고 받을 때 많이 사용됩니다.

<br>

`JSON`이 빠르게 기존에 사용되던 XML과 같은 데이터 포멧을 대체한 이유는 무엇보다도 `가독성`일 것입니다.

```json
{
  "name": "홍길동",
  "age": 25,
  "married": false,
  "family": { "father": "홍판서", "mother": "춘섬" },
  "hobbies": ["독서", "도술"],
  "jobs": null
}
```

어떤가요? 한 눈에 파악하기 매우 쉽습니다!

### JSON 내장 객체

Javascript 에서는 JSON 포멧의 데이터를 간편하게 다룰 수 있도록 JSON이라는 객체를 내장하고 있습니다.
JSON 내장 객체는 JavaScript 객체와 JSON 문자열 간의 상호 변환을 수행해주는 두 개의 메서드를 제공합니다.

### 1. JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환!

```javascript
const str = {
  name: "홍길동",
  age: 25,
  married: false,
  family: { father: "홍판서", mother: "춘섬" },
  hobbies: ["독서", "도술"],
  jobs: null,
};
```

str 변수에 JSON 문자열을 저장하고 parse() 메서드로 변환해 obj 변수에 저장하고 출력해보겠습니다.

```javascript
const obj = JSON.parse(str);

console.log(obj);
```

```javascript
{
    name: "홍길동",
    age: 25,
    married: false,
    family: {
        father: "홍판서",
        mother: "춘섬"
    },
    hobbies: [
        "독서",
        "도술"
    ],
    jobs: null
}
```

이렇게 JavaScript 객체로 변환된 데이터는 `.`나 `[]` 를 사용하여 각 속성에 접근할 수 있습니다.

```javascript
> obj.name

< 홍길동
```

### 2. JSON.stringfy() : 자바스크립트 객체를 JSON 문자열로 변환!

```javascript
const obj = {
  name: "홍길동",
  age: 25,
  married: false,
  family: {
    father: "홍판서",
    mother: "춘섬",
  },
  hobbies: ["독서", "도술"],
  jobs: null,
};
```

```javascript
const j = JSON.stringfy(obj, null, 2);

console.log(j);
```

```json
{
  "name": "홍길동",
  "age": 25,
  "married": false,
  "family": {
    "father": "홍판서",
    "mother": "춘섬"
  },
  "hobbies": ["독서", "도술"],
  "jobs": null
}
```

당연한 얘기이겠지만 이렇게 JSON 형식의 문자열로 변환된 데이터는 더 이상 `.`나 `[] ` 를 사용하여 각 속성에 접근할 수 없게 됩니다.

```javascript
> j.name

< undefined
```
