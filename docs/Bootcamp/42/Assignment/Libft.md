---
layout: default
nav_order: 1
title: Libft
description: "Make Lib"
parent: 42
grand_parent: Bootcamp
has_children: false
permalink: /docs/Bootcamp/42/Libft/
---

# [Repository](https://github.com/DonsNote/Dons-42/tree/main/00_Circle/Libft)

# Mandatory

나만의 라이브러리를 만들어 봅시다.

## C 라이브러리란?

라이브러리(Library)는 자주 사용되는 함수들을 모아놓은 코드의 집합입니다.
재사용 가능한 코드를 미리 컴파일하여 다른 프로그램에서 쉽게 사용할 수 있도록 만든 것입니다.

### 라이브러리의 장점

- **재사용성**: 한 번 작성한 코드를 여러 프로젝트에서 사용 가능
- **유지보수**: 라이브러리만 수정하면 모든 프로젝트에 반영
- **컴파일 시간 단축**: 미리 컴파일된 코드 사용으로 빌드 시간 감소
- **코드 모듈화**: 기능별로 분리하여 관리 용이

## 헤더 파일 (.h)과 라이브러리 파일 (.a)의 차이

### 헤더 파일 (.h)

**역할**: 함수의 선언(Declaration)을 담고 있는 파일

```c
/* libft.h 예시 */
#ifndef LIBFT_H
# define LIBFT_H

# include <stdlib.h>

int     ft_strlen(const char *s);
void    *ft_memset(void *b, int c, size_t len);
char    *ft_strdup(const char *s1);

#endif
```

**특징**:
- 함수의 프로토타입(원형)만 선언
- 구조체, 매크로, 상수 정의
- `#include`로 소스 파일에 포함
- 컴파일러에게 함수의 존재를 알려줌

### 아카이브 파일 (.a)

**역할**: 컴파일된 오브젝트 파일(.o)들을 하나로 묶은 정적 라이브러리

**특징**:
- 함수의 실제 구현(Definition)이 컴파일된 바이너리 형태로 저장
- 여러 .o 파일들을 `ar` 명령어로 압축
- 링킹(Linking) 단계에서 실행 파일에 포함됨
- 실행 파일 크기가 커지지만 외부 의존성 없음

### 함께 사용하는 이유

```
프로그램 작성 시:
1. .h 파일을 include → 컴파일러가 함수 존재 확인
2. .a 파일을 링크 → 실제 함수 코드를 실행 파일에 포함
```

## C 라이브러리 만드는 방법

### 1. 디렉토리 구조

```
libft/
├── libft.h          # 헤더 파일
├── Makefile         # 빌드 자동화
├── ft_strlen.c      # 각 함수 구현
├── ft_memset.c
├── ft_strdup.c
└── ...
```

### 2. 헤더 파일 작성 (libft.h)

```c
#ifndef LIBFT_H
# define LIBFT_H

# include <stdlib.h>
# include <unistd.h>

// 함수 선언
size_t  ft_strlen(const char *s);
void    *ft_memset(void *b, int c, size_t len);
char    *ft_strdup(const char *s1);

#endif
```

**중요 요소**:
- `#ifndef` ~ `#endif`: 헤더 중복 포함 방지 (Header Guard)
- 필요한 표준 라이브러리 include
- 모든 함수 프로토타입 선언

### 3. 함수 구현 파일 작성

```c
/* ft_strlen.c */
#include "libft.h"

size_t  ft_strlen(const char *s)
{
    size_t  i;

    i = 0;
    while (s[i])
        i++;
    return (i);
}
```

### 4. Makefile 작성

```makefile
NAME = libft.a

CC = cc
CFLAGS = -Wall -Wextra -Werror

SRCS = ft_strlen.c \
       ft_memset.c \
       ft_strdup.c

OBJS = $(SRCS:.c=.o)

all: $(NAME)

$(NAME): $(OBJS)
	ar rcs $(NAME) $(OBJS)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS)

fclean: clean
	rm -f $(NAME)

re: fclean all

.PHONY: all clean fclean re
```

**Makefile 주요 명령어**:
- `ar rcs`: 아카이브 생성
  - `r`: 오브젝트 파일 삽입/교체
  - `c`: 라이브러리 파일 생성
  - `s`: 인덱스 생성 (심볼 테이블)

### 5. 라이브러리 빌드 과정

```bash
# 1. 컴파일: .c → .o
cc -Wall -Wextra -Werror -c ft_strlen.c -o ft_strlen.o
cc -Wall -Wextra -Werror -c ft_memset.c -o ft_memset.o

# 2. 아카이브: .o → .a
ar rcs libft.a ft_strlen.o ft_memset.o

# 또는 Makefile 사용
make
```

### 6. 라이브러리 사용하기

```c
/* main.c */
#include "libft.h"
#include <stdio.h>

int main(void)
{
    char *str = "Hello";
    printf("Length: %zu\n", ft_strlen(str));
    return (0);
}
```

**컴파일 방법**:

```bash
# 방법 1: 직접 링크
cc main.c -L. -lft -o program
# -L.: 현재 디렉토리에서 라이브러리 찾기
# -lft: libft.a 링크 (lib와 .a는 생략)

# 방법 2: 라이브러리 파일 직접 지정
cc main.c libft.a -o program
```

## ar 명령어 상세

```bash
# 라이브러리 생성
ar rcs libft.a *.o

# 라이브러리 내용 확인
ar -t libft.a

# 자세한 정보 확인
ar -tv libft.a

# 특정 오브젝트 파일 추출
ar -x libft.a ft_strlen.o
```

**ar 옵션**:
- `r`: replace (파일 추가/교체)
- `c`: create (아카이브 생성)
- `s`: index (심볼 테이블 생성)
- `t`: table (목록 보기)
- `v`: verbose (자세히)
- `x`: extract (추출)

## 정적 라이브러리 vs 동적 라이브러리

### 정적 라이브러리 (.a)

- 컴파일 시 실행 파일에 포함
- 실행 파일 크기 증가
- 외부 의존성 없음
- 라이브러리 업데이트 시 재컴파일 필요

### 동적 라이브러리 (.so, .dll, .dylib)

- 실행 시 메모리에 로드
- 실행 파일 크기 작음
- 여러 프로그램이 공유 가능
- 라이브러리만 업데이트 가능

## 42 과제 요구사항

1. **Makefile 규칙**
   - `all`, `clean`, `fclean`, `re` 구현
   - `-Wall -Wextra -Werror` 플래그 필수
   - 재링크 방지

2. **함수 구현**
   - libc 함수 재구현
   - 추가 유틸리티 함수
   - Bonus: 연결 리스트 함수

3. **금지사항**
   - 전역 변수 사용 금지
   - 표준 라이브러리 함수 사용 제한

## 유용한 명령어

```bash
# 라이브러리 심볼 확인
nm libft.a

# 라이브러리 크기 확인
ls -lh libft.a

# 오브젝트 파일 정보
file ft_strlen.o

# 라이브러리 재생성
make re
```