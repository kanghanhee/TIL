# 저장 프로시저 조건문

### `프로시저의 if문`

- 기본 구조

```sql
IF expression THEN
    statements;
END IF;
```

```sql
DELIMITER $$

CREATE PROCEDURE getAge(
    IN $name VARCHAR(30),
    OUT result VARCHAR(30)
)
BEGIN
    DECLARE user_age INT;

    SELECT age INTO user_age
    FROM user
    WHERE name = $name;

    IF user_age >= 30 THEN
        SET result = '30대';
    ELSE IF (user_age >= 20 AND user_age < 30) THEN
        SET result = '20대';
    ELSE
        SET result = '10대';
    END IF;
END

DELIMITER ;
```

### `case문`

```sql
DELIMITER $$

CREATE PROCEDURE get_age_case(
    IN $name VARCHAR(30),
    OUT result VARCHAR(30)
)
BEGIN
    DECLARE user_age INT;

    SELECT age INTO user_age
    FROM user
    where name = $name;

    CASE
        WHEN user_age >= 30 THEN
            SET result = '30대';
        WHEN (user_age>=20 AND user_age<30) THEN
            SET result = '20대';
         ELSE
         BEGIN
         END;
   END CASE;

END$$

DELIMITER ;
```

MySQL은 THEN절이나 ELSE절에 빈 명령줄을 가지는 것을 허용하지 않는다. <br>
만약 MySQL이 에러를 출력하지 않게 하고, ELSE 절에 있는 로직을 처리하고 싶지 않는 것을 원한다면, ELSE 절에 빈 BEGIN END 문맥을 작성하면 된다.
