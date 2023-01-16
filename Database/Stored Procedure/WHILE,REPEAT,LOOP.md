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
