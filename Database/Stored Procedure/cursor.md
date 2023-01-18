# cursor

저장 프로시저 내부에 있는 집합들을 처리하는데 `cursor` 을 사용할 수 있다. 커서는 query에 의해 반환된 rows의 set을 반복하고 그에 따라 각 row를 처리할 수 있다.

<br>

- ReadOnly: 데이터를 업데이트할 수 없다.
- Non-scrollable: set에 대해 특정한 행을 건너 뛰거나 생략할 수 없다. select문에 의해 결정된 순서로 rows 를 가져올 수 있다. 반대 순서는 안됨.
- Asensitive: asensitive 커서는 실제 데이터를 가리킨다. 데이터 복사본을 만들지 않기 때문에 insensitive 커서보다 속도가 빠르다.

<br>

```sql
DECLARE cursor_name CURSOR FOR SELECT_statement;
```

cursor는 변수 선언한 후에 선언 해야한다. 만약 그 전에 선언한다면 에러가 나고, 항상 select문과 함께 조합되어야한다.

```sql
OPEN cursor_name;
```

OPEN문은 cursor의 결과값으로 초기화되기 때문에 rows를 가져오기 전에 호출해야한다.

```sql
FETCH cursor_name INTO variables list;
```

cursor에 의해 다음 행이 가르키는 걸 가져오고 그 다음 행에 cursor를 옮기는 과장에 FETCH문을 사용한다.

```sql
CLOSE cursor_name;
```

cursor를 닫는다.

```
:rotating_light: cursor 를 사용할 때, cursor가 row를 찾지 못했을 경우에 대해 에러 처리를 해줘야한다.
<br>
FETCH문을 호출 할 때 마다 cursor가 다음 row를 읽기를 시도하기 때문이다. 마지막 행에 도달하면 다음 row는 없을 것이고 이럴 경우를 위해 NOT FOUND 핸들러를 선언해줘야한다.
```
