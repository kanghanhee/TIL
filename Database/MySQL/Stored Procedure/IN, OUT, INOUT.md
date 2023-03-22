# 프로시저 매개변수

### `IN`(입력용)

매개변수를 받을 때 사용한다. IN 매개변수의 복사본만 사용하므로 원본 값은 프로시저 종료 후에도 유지된다.

```sql
DELIMITER $$
CREATE PROCEDURE getUser(
    IN $name VARCHAR(50)
)
BEGIN
    SELECT *
    FROM user
    WHERE name = $name;
END $$
DELIMITER;
```

```sql
CALL getUser('john')
```

### `OUT`(출력용)

값을 밖으로 내보낼 때 사용한다.

```sql
DELIMITER $$
CREATE PROCEDURE getUserCount(
    OUT total VARCHAR(50)
)
BEGIN
    SELECT count(*)
    INTO total
    FROM user;
END $$
DELIMITER;
```

```sql
CALL getUserCount(@total);
SELECT @total;
```

유저수를 알기 위해 getUserCount 라는 프로시저를 호출하고 반환 값을 얻기 위해 인수 (@total) 을 전달한다.

### `INOUT`

`IN`과 `OUT`을 합친 것이다. 매개변수를 프로시저에 전달하고 프로시저는 INOUT 매개변수를 수정한 후에 다시 호출한 프로그램에 값을 전달해준다.

```sql
DELIMITER $$
CREATE PROCEDURE in_out_test(
	INOUT COUNT INT(4)
)
BEGIN
	SET COUNT = COUNT + 1;
END$$
DELIMITER ;
```

```sql
SET @count = 1;
CALL in_out_test(@count); -- 2
CALL in_out_test(@count); -- 3
SELECT @counter;
```
