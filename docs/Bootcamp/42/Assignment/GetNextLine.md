---
layout: default
title: Get Next Line
parent: 42
grand_parent: Bootcamp
permalink: /docs/Bootcamp/42/GetNextLine/
nav_order: 3
---

# [Repository](https://github.com/DonsNote/Dons-42/tree/main/00_Circle/get_next_line)

# Mandatory

파일 디스크립터(fd)로부터 한 줄씩 읽어오는 함수를 구현하는 프로젝트입니다.

## 과제 요구사항

**함수 프로토타입:**
```c
char *get_next_line(int fd);
```

**기능:**
- 파일 디스크립터로부터 한 줄을 읽어 반환
- 개행 문자(`\n`)를 포함한 한 줄을 반환
- 더 이상 읽을 내용이 없거나 오류 발생 시 NULL 반환

**반환값:**
- 성공: 읽은 한 줄 (개행 문자 포함)
- 파일 끝(EOF): 마지막 줄 또는 NULL
- 오류: NULL

## 핵심 개념

### Buffer (버퍼)

**버퍼란?**
- 처리 속도 차이가 나는 두 개의 장치나 함수 사이에서 그 차이를 완화하기 위한 임시 저장 공간
- 데이터를 한 번에 여러 개 읽어와 저장해두고 필요할 때 꺼내 쓰는 방식

**왜 버퍼를 사용할까?**
```c
// 비효율적인 방법: 한 번에 1바이트씩 읽기
while (read(fd, &c, 1) > 0)  // 시스템 콜을 수천 번 호출!
    // 처리...

// 효율적인 방법: 버퍼 사용
char buffer[BUFFER_SIZE];
read(fd, buffer, BUFFER_SIZE);  // 한 번에 여러 바이트 읽기
```

**버퍼 사이즈 (BUFFER_SIZE):**
- 컴파일 시 `-D BUFFER_SIZE=n` 플래그로 정의
- 일반적으로 42, 1024 등의 값 사용
- 너무 작으면 read() 호출 횟수 증가
- 너무 크면 메모리 낭비

### Static 변수

**정적 변수(Static Variable)란?**
- 프로그램이 종료되기 전까지 값을 유지하는 변수
- 함수가 여러 번 호출되어도 이전 값을 기억함
- 함수 내부에 선언하면 해당 함수에서만 접근 가능

```c
char *get_next_line(int fd)
{
    static char *saved;  // 함수가 끝나도 값이 유지됨!
    
    // saved에는 이전 호출에서 남은 데이터가 저장되어 있음
}
```

**왜 static을 사용할까?**
- 이전에 읽었지만 사용하지 않은 데이터를 다음 호출까지 보관하기 위해
- 예: 버퍼에 "Hello\nWorld"를 읽었다면
  - 첫 번째 호출: "Hello\n" 반환, "World"는 saved에 보관
  - 두 번째 호출: saved의 "World"부터 시작

### 파일 디스크립터 (File Descriptor, fd)

**파일 디스크립터란?**
- 운영체제가 파일을 관리하기 위해 부여하는 음이 아닌 정수
- 프로세스가 파일에 접근할 때 사용하는 추상적인 지시자

**표준 파일 디스크립터:**
```c
0: stdin  (표준 입력)
1: stdout (표준 출력)
2: stderr (표준 에러)
```

**파일 열기:**
```c
int fd = open("file.txt", O_RDONLY);
// fd가 3 이상의 값을 가짐 (0, 1, 2는 예약됨)
```

## 주요 허용 함수

### open()
파일을 열고 파일 디스크립터를 반환합니다.

```c
#include <fcntl.h>

int fd = open(const char *path, int flags);
```

**플래그:**
- `O_RDONLY`: 읽기 전용
- `O_WRONLY`: 쓰기 전용
- `O_RDWR`: 읽기/쓰기

**반환값:**
- 성공: 파일 디스크립터 (양수)
- 실패: -1

### read()
파일 디스크립터로부터 데이터를 읽습니다.

```c
#include <unistd.h>

ssize_t read(int fd, void *buf, size_t count);
```

**매개변수:**
- `fd`: 파일 디스크립터
- `buf`: 읽은 데이터를 저장할 버퍼
- `count`: 읽을 최대 바이트 수

**반환값:**
- 성공: 실제로 읽은 바이트 수
- EOF (파일 끝): 0
- 오류: -1

**예제:**
```c
char buffer[BUFFER_SIZE + 1];
ssize_t bytes_read;

bytes_read = read(fd, buffer, BUFFER_SIZE);
if (bytes_read > 0)
    buffer[bytes_read] = '\0';  // NULL 종료 문자 추가
```

### close()
파일 디스크립터를 닫습니다.

```c
#include <unistd.h>

int close(int fd);
```

**주의:**
- 파일을 다 사용한 후 반드시 close() 호출
- 메모리 누수와 유사한 파일 디스크립터 누수 방지

## 구현 전략

### 1. 기본 구조

```c
char *get_next_line(int fd)
{
    static char *saved;
    char        *line;
    char        buffer[BUFFER_SIZE + 1];
    ssize_t     bytes_read;

    // 1. 유효성 검사
    if (fd < 0 || BUFFER_SIZE <= 0)
        return (NULL);

    // 2. 파일 읽기 (개행 문자를 찾을 때까지)
    bytes_read = read(fd, buffer, BUFFER_SIZE);
    while (bytes_read > 0)
    {
        buffer[bytes_read] = '\0';
        saved = join_and_free(saved, buffer);  // 버퍼를 saved에 추가
        
        if (contains_newline(saved))
            break;
        
        bytes_read = read(fd, buffer, BUFFER_SIZE);
    }

    // 3. 한 줄 추출
    line = extract_line(saved);
    
    // 4. 남은 부분 saved에 저장
    saved = update_saved(saved);

    return (line);
}
```

### 2. 필요한 유틸리티 함수들

#### 개행 문자 찾기
```c
int contains_newline(char *str)
{
    int i;

    if (!str)
        return (0);
    i = 0;
    while (str[i])
    {
        if (str[i] == '\n')
            return (1);
        i++;
    }
    return (0);
}
```

#### 두 문자열 연결
```c
char *join_and_free(char *s1, char *s2)
{
    char *joined;
    
    joined = ft_strjoin(s1, s2);  // s1과 s2를 연결한 새 문자열
    free(s1);                     // 기존 s1 메모리 해제
    return (joined);
}
```

#### 한 줄 추출하기
```c
char *extract_line(char *saved)
{
    char    *line;
    int     i;

    if (!saved)
        return (NULL);
    
    i = 0;
    while (saved[i] && saved[i] != '\n')
        i++;
    
    if (saved[i] == '\n')
        i++;  // 개행 문자 포함
    
    line = malloc(sizeof(char) * (i + 1));
    if (!line)
        return (NULL);
    
    i = 0;
    while (saved[i] && saved[i] != '\n')
    {
        line[i] = saved[i];
        i++;
    }
    
    if (saved[i] == '\n')
        line[i++] = '\n';
    line[i] = '\0';
    
    return (line);
}
```

#### saved 업데이트
```c
char *update_saved(char *saved)
{
    char    *new_saved;
    int     i;
    int     j;

    if (!saved)
        return (NULL);
    
    i = 0;
    while (saved[i] && saved[i] != '\n')
        i++;
    
    if (!saved[i])  // 개행이 없으면 모두 사용됨
    {
        free(saved);
        return (NULL);
    }
    
    i++;  // 개행 문자 건너뛰기
    new_saved = malloc(sizeof(char) * (ft_strlen(saved) - i + 1));
    if (!new_saved)
        return (NULL);
    
    j = 0;
    while (saved[i])
        new_saved[j++] = saved[i++];
    new_saved[j] = '\0';
    
    free(saved);
    return (new_saved);
}
```

## 동작 예시

파일 내용: `"Hello\nWorld\nTest"`

**첫 번째 get_next_line() 호출:**
```
read() → "Hello\nWorld\nTest"
saved = "Hello\nWorld\nTest"
line = "Hello\n" (반환)
saved = "World\nTest" (업데이트)
```

**두 번째 get_next_line() 호출:**
```
saved에 개행이 있으므로 read() 호출 안 함
line = "World\n" (반환)
saved = "Test" (업데이트)
```

**세 번째 get_next_line() 호출:**
```
read() → 0 (EOF)
line = "Test" (반환, 개행 없음)
saved = NULL
```

**네 번째 get_next_line() 호출:**
```
saved가 NULL이고 read()가 0 반환
NULL 반환
```

## 보너스: 여러 파일 디스크립터 동시 처리

여러 파일을 동시에 읽을 수 있도록 구현합니다.

```c
#ifndef BUFFER_SIZE
# define BUFFER_SIZE 42
#endif

#ifndef OPEN_MAX
# define OPEN_MAX 1024
#endif

char *get_next_line(int fd)
{
    static char *saved[OPEN_MAX];  // 각 fd마다 별도의 버퍼
    
    if (fd < 0 || fd >= OPEN_MAX || BUFFER_SIZE <= 0)
        return (NULL);
    
    // saved[fd]를 사용하여 각 파일별로 독립적으로 처리
    // ...
}
```

**사용 예:**
```c
int fd1 = open("file1.txt", O_RDONLY);
int fd2 = open("file2.txt", O_RDONLY);

char *line1 = get_next_line(fd1);  // file1의 첫 줄
char *line2 = get_next_line(fd2);  // file2의 첫 줄
char *line3 = get_next_line(fd1);  // file1의 두 번째 줄
```

## 주의사항

1. **메모리 누수**
   - 모든 malloc()에 대응하는 free() 필요
   - valgrind로 테스트: `valgrind --leak-check=full ./program`

2. **파일 끝 처리**
   - 마지막 줄에 개행이 없을 수 있음
   - EOF 도달 시 saved에 남은 내용 처리

3. **오류 처리**
   - read() 실패 (-1 반환)
   - 잘못된 fd (음수, 너무 큰 값)
   - BUFFER_SIZE가 0이하

4. **정적 변수 초기화**
   - static 변수는 자동으로 NULL/0으로 초기화됨

## 테스트 방법

```c
int main(void)
{
    int     fd;
    char    *line;

    fd = open("test.txt", O_RDONLY);
    if (fd == -1)
        return (1);

    while ((line = get_next_line(fd)) != NULL)
    {
        printf("%s", line);
        free(line);
    }

    close(fd);
    return (0);
}
```

## 컴파일 예시

```bash
# BUFFER_SIZE 지정하여 컴파일
gcc -Wall -Wextra -Werror -D BUFFER_SIZE=42 *.c -o gnl

# 다른 BUFFER_SIZE로 테스트
gcc -Wall -Wextra -Werror -D BUFFER_SIZE=1 *.c -o gnl
gcc -Wall -Wextra -Werror -D BUFFER_SIZE=9999 *.c -o gnl
```

## 유용한 함수들

```c
size_t  ft_strlen(const char *s);
char    *ft_strdup(const char *s);
char    *ft_strjoin(char const *s1, char const *s2);
char    *ft_substr(char const *s, unsigned int start, size_t len);
```