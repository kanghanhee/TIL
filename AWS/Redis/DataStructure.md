# `Redis` 의 자료구조

### - String(문자열)

Redis의 가장 기본적인 Type. 단순히 Key/Value 형태로 값을 저장합니다.
JPEG 이미지를 저장하거나, HTML fragment 를 캐시하는 용도로 자주 사용합니다.

```
> set (key value)
> get (key)
```

<br>

string을 정수로 파싱하고, 이를 atomic 하게 증감하는 명령어

```
> set counter 100
> incr counter
(integer) 101
> incr counter
(integer) 102
> incr counter 50
(integer) 152
```

### - List

Linked list 의 특징을 가지고 있습니다. 따라서 list 내에 수백만 개의 아이템이 있더라도 head와 tail 에 값을 추가,삭제,조회할 때 O(1) 의 속도를 가집니다.
중간에 있는 index값을 가져와야할 경우가 많다면 Sorted Set 자료구조를 추천드립니다.

**LPUSH와 RPOP을 이용한다면 message를 전달하는 queue로 사용할 수 있습니다.**

```
> RPUSH mylist A
> RPUSH mylist B
> LPUSH mylist first

> Lrange mylist 0 -1
1)"first"
2)"A"
3)"B"

```

```
> RPUSH mylist 1 2 3 4 5 "foo bar"
> Lrange mylist 0 -1
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
6) "foo bar"

```

```
> RPUSH mylist a b c
> RPOP mylist
"c"
> LPOP mylist
"a"
```

### - HASH(Field/Value)

Redis 의 Hash는 value 로 또 다른 key-value을 가지는 자료구조입니다.
[!img](https://miro.medium.com/max/640/1*KoB9bWH9hC88CfkaNclnWw.webp)

<br>

RDB의 테이블과 비슷합니다. hash key 는 테이블의 PK, field 는 column, value 는 value 로 볼 수 있습니다. 아래는 일반적으로 사용하는 RDB의 테이블을 레디스의 해시 구조로 나타낸 그림입니다.
[!img](https://miro.medium.com/max/720/1*Zc-Xo3Peb0Cew4IBiFQb7Q.webp)

```
> hmset user:1 email garim.kim@nhn.com country korea
> hmget user:1 email
1)garim.kim@nhn.com
>hgetall user:1
1) "email"
2) "garim.kim@nhn.com"
3) "country"
4) "korea"
```

개별 아이템을 atomic하게 조작할 수 있는 커맨드도 존재합니다.

```
> hincrby user:1000 birthyear 10
(integer) 1987
> hincrby user:1000 birthyear 10
(integer) 1997
```

### SET(집합)

은 다음에ㅎ
