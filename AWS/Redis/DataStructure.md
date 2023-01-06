# `Redis` 의 자료구조

### - String(문자열)

Redis의 가장 기본적인 Type. 단순히 Key/Value 형태로 값을 저장합니다.
JPEG 이미지를 저장하거나, HTML fragment 를 캐시하는 용도로 자주 사용합니다.

```cmd
> set (key value)
> get (key)
```

<br>

string을 정수로 파싱하고, 이를 atomic 하게 증감하는 명령어

```cmd
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

```cmd
> RPUSH mylist A
> RPUSH mylist B
> LPUSH mylist first

> Lrange mylist 0 -1
1)"first"
2)"A"
3)"B"

```

```cmd
> RPUSH mylist 1 2 3 4 5 "foo bar"
> Lrange mylist 0 -1
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
6) "foo bar"

```

```cmd
> RPUSH mylist a b c
> RPOP mylist
"c"
> LPOP mylist
"a"
```

### - Hash(Field/Value)

Redis 의 Hash는 value 로 또 다른 key-value을 가지는 자료구조입니다.
![img](https://miro.medium.com/max/640/1*KoB9bWH9hC88CfkaNclnWw.webp)

<br>

RDB의 테이블과 비슷합니다. hash key 는 테이블의 PK, field 는 column, value 는 value 로 볼 수 있습니다. 아래는 일반적으로 사용하는 RDB의 테이블을 레디스의 해시 구조로 나타낸 그림입니다.
![img](https://miro.medium.com/max/720/1*Zc-Xo3Peb0Cew4IBiFQb7Q.webp)

```cmd
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

```cmd
> hincrby user:1000 birthyear 10
(integer) 1987
> hincrby user:1000 birthyear 10
(integer) 1997
```

### Set(집합)

set은 정렬되지 않은 문자열의 모음입니다. 일반적인 set이 그렇듯이, 아이템은 중복될 수 없습니다.

- 트래킹에 사용될 수 있습니다. 블로그에 접근한 IP 리스트를 관리하고자 할 때 중복을 허용하지 않는 Sets 자료구조를 활용한다면 좋을 결과를 얻을 수 있을 것입니다.
- 모든 태그를 나타내는 리스트에도 사용될 수 있습니다. 각 포스팅마다 태그가 있고 해당 태그의 모든 리스트를 보고 싶을 때 중복이 허용되지 않는 Set은 사용하기 좋은 자료구조 일 수 있습니다.

<br>
ID가 1000인 포스트에 1,2,5,77번의 태그ID가 연결된 경우, set에서 이 관계를 표현하는 방법은 간단합니다. key값을 post:1000:tags 로 지정하고 여기에 태그를 모두 add 해주면 됩니다.

```cmd
> sadd post:1000:tags 1 2 5 77
> smembers post:1000:tags

1.5
2.1
3.77
4.2
```

보시면 순서가 뒤죽박죽 출력됩니다.

### Sorted Set

Sorted Set은 Sets 자료구조에 Score를 추가로 기록하여 score가 낮은순서부터 높은순서대로 정렬되는 자료구조입니다. 정렬된 형태로 저장되기 때문에 인덱스를 이용하여 빠르게 조회할 수 있습니다.

![img](https://miro.medium.com/max/640/1*WDYvA4CyKdOhOU9kg8A8UQ.webp)

```cmd
> zadd birthyear 1995 "GARIM"
> zadd birthyear 2009 "PENGSOO"
> zadd birthyear 2016 "WILLIAM"
> zadd birthyear 2017 "BENTLY"

> zrange birthyear 0 -1 # score를 통한 범위 검색
1) "GARIM"
2) "PENGSOO"
3) "WILLIAM"
4) "BENTLY"

> zrange birthyear 2 3 # score를 통한 범위 검색
1) "WILLIAM"
2) "BENTLY"

> zrangebyscore birthyear 2000 +inf # 2000년부터 ~ 끝까지
1) "PENGSOO"
2) "WILLIAM"
3) "BENTLEY"
```
