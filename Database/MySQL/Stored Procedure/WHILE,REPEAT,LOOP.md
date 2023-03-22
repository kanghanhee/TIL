# 저장 프로시저 반복문

### `while문`

기본구조

```sql
WHILE expression DO
    statements
END WHILE
```

```sql
DELIMITER $$

DROP PROCEDURE IF EXISTS while_loop$$
CREATE PROCEDURE while_loop(
    IN $num INT
)
BEGIN
    DECLARE x INT;
    DECLARE str VARCHAR(50);

    SET x = 1;
    SET str = '';

    WHILE x <= $num DO
        SET x = x+1;
        SET str = CONCAT(str,x,', ');
    END WHILE;

    SELECT str;
END$$

DELIMITER ;
```

### `repeat문`

기본구조

```sql
REPEAT
    statements;
UNTIL expression
END REPEAT
```

표현식의 값이 FALSE일 경우에 MySQL은 표현식의 결과가 `TRUE가 될때 까지` 반복한다.

```sql
DELIMITER $$

CREATE PROCEDURE repeat_test()
BEGIN
    DECLARE x INT;
    DECLARE str VARCHAR(30);

    SET x = 1;
    SET str = "";

    REPEAT
        SET str = CONCAT(str,x,', ');
        SET x = x+1;
    UNTIL x > 5 -- true 가 될 때까지 반복하므로
    END REPEAT;

    SELECT str;
END$$

DELIMITER ;
```

:rotating_light: UNTIL 표현식(expression)에서는 세미콜론( ; )을 사용하지 않는다.

### `loop문`

```sql
CREATE PROCEDURE loop_test()
BEGIN
    DECLARE x INT;
    DECLARE str VARCHAR(50);

    SET x = 1;
    SET str = "";

    loop_label: LOOP
    IF x > 10 THEN
        LEAVE loop_label;
    END IF;

    SET x = x+1;
    IF(x mod 2) THEN
        ITERATE loop_label;
    ELSE
        SET str = CONCAT(str,x,", ");
    END IF;
    END LOOP;

    SELECT str;
END;
```

**LEAVE 는 break 처럼 동작, ITERATE 는 continue 처럼 동작한다.**
<br>

```
- 만약 x의 값이 10보다 크다면 LEAVE문에 의해서 종료 되어진다.

- 만약 x의 값이 홀수 라면, ITERATE문 아래의 모든 것을 무시하고 새로운 반복을 시작한다.

- 만약 x의 값이 짝수 라면, ELSE문의 구간에 짝수만 존재하는 문자열을 만들 것이다.
```
