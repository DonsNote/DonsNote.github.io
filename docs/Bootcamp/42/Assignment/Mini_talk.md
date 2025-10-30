---
layout: default
title: Mini Talk
parent: 42
grand_parent: Bootcamp
permalink: /docs/Bootcamp/42/Mini_talk/
nav_order: 7
---

# [Repository](https://github.com/DonsNote/Dons-42/tree/main/00_Circle/minitalk)

# Mandatory

UNIX 시그널을 사용하여 프로세스 간 통신(IPC)을 구현하는 프로젝트입니다.
클라이언트가 서버에게 문자열을 비트 단위로 전송합니다.

## 과제 요구사항

**두 개의 프로그램 구현:**
1. `server`: 시작 시 PID를 출력하고 클라이언트로부터 문자열을 받아 출력
2. `client`: 서버의 PID와 문자열을 인자로 받아 서버에 전송

**규칙:**
- `SIGUSR1`과 `SIGUSR2` 시그널만 사용
- 서버는 여러 클라이언트를 연속으로 처리 가능
- 메시지 전송은 빠르게 이루어져야 함
- 통신 속도: 1초에 100자 이상 전송 권장

## UNIX 시그널 기초

### 시그널이란?

프로세스 간 통신(IPC)의 한 방법으로, 운영체제가 프로세스에게 이벤트를 알리는 메커니즘입니다.

**주요 시그널:**
- `SIGUSR1` (10): 사용자 정의 시그널 1
- `SIGUSR2` (12): 사용자 정의 시그널 2
- `SIGINT` (2): 인터럽트 (Ctrl+C)
- `SIGTERM` (15): 종료 요청
- `SIGKILL` (9): 강제 종료 (처리 불가)

### 시그널 함수

#### signal()
시그널 핸들러를 등록하는 함수입니다.

```c
#include <signal.h>

void handler(int signum)
{
    if (signum == SIGUSR1)
        // SIGUSR1 처리
    else if (signum == SIGUSR2)
        // SIGUSR2 처리
}

int main(void)
{
    signal(SIGUSR1, handler);  // SIGUSR1 핸들러 등록
    signal(SIGUSR2, handler);  // SIGUSR2 핸들러 등록
    
    while (1)
        pause();  // 시그널 대기
    return (0);
}
```

#### sigaction() (권장)
`signal()`보다 안전하고 이식성이 높은 함수입니다.

```c
#include <signal.h>

void handler(int signum, siginfo_t *info, void *context)
{
    // info->si_pid로 보낸 프로세스의 PID 확인 가능
    if (signum == SIGUSR1)
        // SIGUSR1 처리
    else if (signum == SIGUSR2)
        // SIGUSR2 처리
}

int main(void)
{
    struct sigaction sa;

    sa.sa_flags = SA_SIGINFO;       // siginfo_t 사용
    sa.sa_sigaction = handler;      // 핸들러 지정
    sigemptyset(&sa.sa_mask);       // 시그널 마스크 초기화

    sigaction(SIGUSR1, &sa, NULL);  // SIGUSR1 핸들러 등록
    sigaction(SIGUSR2, &sa, NULL);  // SIGUSR2 핸들러 등록

    while (1)
        pause();
    return (0);
}
```

#### kill()
특정 프로세스에게 시그널을 보내는 함수입니다.

```c
#include <signal.h>

int kill(pid_t pid, int sig);
```

**사용 예:**
```c
kill(server_pid, SIGUSR1);  // server_pid 프로세스에 SIGUSR1 전송
kill(server_pid, SIGUSR2);  // server_pid 프로세스에 SIGUSR2 전송
```

#### getpid()
현재 프로세스의 PID를 반환합니다.

```c
#include <unistd.h>

pid_t pid = getpid();
printf("Server PID: %d\n", pid);
```

#### pause()
시그널이 올 때까지 프로세스를 일시 정지합니다.

```c
#include <unistd.h>

while (1)
    pause();  // 시그널이 올 때까지 대기
```

#### usleep()
마이크로초 단위로 프로세스를 일시 정지합니다.

```c
#include <unistd.h>

usleep(100);  // 100 마이크로초 (0.0001초) 대기
```

## 비트 전송 원리

### ASCII 문자를 비트로 표현

문자 'A'의 ASCII 코드는 65이고, 이진수로 `01000001`입니다.

```
'A' = 65 = 0b01000001

비트 인덱스: 7 6 5 4 3 2 1 0
비트 값:     0 1 0 0 0 0 0 1
```

### 비트 단위 전송 방법

**전송 규칙:**
- 비트가 `0`이면 `SIGUSR1` 전송
- 비트가 `1`이면 `SIGUSR2` 전송
- 최상위 비트(MSB)부터 또는 최하위 비트(LSB)부터 전송

**예: 'A' (01000001) 전송 (MSB부터)**
```
비트: 0 → SIGUSR1
비트: 1 → SIGUSR2
비트: 0 → SIGUSR1
비트: 0 → SIGUSR1
비트: 0 → SIGUSR1
비트: 0 → SIGUSR1
비트: 0 → SIGUSR1
비트: 1 → SIGUSR2
```

## 서버 구현

### 기본 구조

```c
#include <signal.h>
#include <unistd.h>
#include <stdio.h>

typedef struct s_server
{
    unsigned char   current_char;   // 현재 조립 중인 문자
    int             bit_count;      // 받은 비트 개수
}   t_server;

t_server g_server;  // 전역 변수 (시그널 핸들러에서 접근 위해)

void signal_handler(int signum)
{
    // 비트를 왼쪽으로 시프트
    g_server.current_char <<= 1;

    // SIGUSR2면 비트를 1로 설정
    if (signum == SIGUSR2)
        g_server.current_char |= 1;

    g_server.bit_count++;

    // 8비트를 모두 받으면 문자 출력
    if (g_server.bit_count == 8)
    {
        if (g_server.current_char == '\0')
            write(1, "\n", 1);  // 문자열 끝
        else
            write(1, &g_server.current_char, 1);

        // 초기화
        g_server.current_char = 0;
        g_server.bit_count = 0;
    }
}

int main(void)
{
    pid_t pid;

    pid = getpid();
    printf("Server PID: %d\n", pid);

    // 시그널 핸들러 등록
    signal(SIGUSR1, signal_handler);
    signal(SIGUSR2, signal_handler);

    // 시그널 대기
    while (1)
        pause();

    return (0);
}
```

### sigaction 버전

```c
void signal_handler(int signum, siginfo_t *info, void *context)
{
    (void)context;  // 사용하지 않는 매개변수

    // 비트 처리 로직은 동일
    g_server.current_char <<= 1;
    
    if (signum == SIGUSR2)
        g_server.current_char |= 1;

    g_server.bit_count++;

    if (g_server.bit_count == 8)
    {
        if (g_server.current_char == '\0')
            write(1, "\n", 1);
        else
            write(1, &g_server.current_char, 1);

        g_server.current_char = 0;
        g_server.bit_count = 0;

        // 클라이언트에게 수신 확인 시그널 전송 (보너스)
        kill(info->si_pid, SIGUSR1);
    }
}

int main(void)
{
    struct sigaction sa;

    printf("Server PID: %d\n", getpid());

    sa.sa_flags = SA_SIGINFO;
    sa.sa_sigaction = signal_handler;
    sigemptyset(&sa.sa_mask);

    sigaction(SIGUSR1, &sa, NULL);
    sigaction(SIGUSR2, &sa, NULL);

    while (1)
        pause();

    return (0);
}
```

## 클라이언트 구현

### 기본 구조

```c
#include <signal.h>
#include <unistd.h>
#include <stdlib.h>

void send_char(pid_t server_pid, char c)
{
    int bit;

    bit = 7;  // MSB부터 전송
    while (bit >= 0)
    {
        if ((c >> bit) & 1)
            kill(server_pid, SIGUSR2);  // 비트가 1
        else
            kill(server_pid, SIGUSR1);  // 비트가 0

        usleep(100);  // 서버가 처리할 시간 주기
        bit--;
    }
}

void send_string(pid_t server_pid, char *str)
{
    int i;

    i = 0;
    while (str[i])
    {
        send_char(server_pid, str[i]);
        i++;
    }
    send_char(server_pid, '\0');  // NULL 문자 전송 (문자열 끝 표시)
}

int main(int argc, char **argv)
{
    pid_t server_pid;

    if (argc != 3)
    {
        write(2, "Usage: ./client <server_pid> <message>\n", 40);
        return (1);
    }

    server_pid = atoi(argv[1]);
    send_string(server_pid, argv[2]);

    return (0);
}
```

### 비트 조작 예시

```c
// 문자 'A' (01000001)를 비트별로 전송

char c = 'A';  // 0b01000001

// 7번째 비트 (MSB): 0
if ((c >> 7) & 1)  // (0b01000001 >> 7) & 1 = 0b00000000 & 1 = 0
    // SIGUSR1 전송

// 6번째 비트: 1
if ((c >> 6) & 1)  // (0b01000001 >> 6) & 1 = 0b00000001 & 1 = 1
    // SIGUSR2 전송

// ... 계속
```

## 보너스

**추가 기능:**
1. **수신 확인 (Acknowledgement)**
   - 서버가 각 비트를 받을 때마다 클라이언트에게 확인 시그널 전송
   - 클라이언트는 확인을 받은 후 다음 비트 전송

2. **유니코드 지원**
   - ASCII 이외의 문자 지원 (UTF-8 등)

### 수신 확인 구현

**서버 (signal_handler 수정):**
```c
void signal_handler(int signum, siginfo_t *info, void *context)
{
    g_server.current_char <<= 1;
    
    if (signum == SIGUSR2)
        g_server.current_char |= 1;

    g_server.bit_count++;

    // 매 비트마다 수신 확인 전송
    kill(info->si_pid, SIGUSR1);

    if (g_server.bit_count == 8)
    {
        if (g_server.current_char == '\0')
        {
            write(1, "\n", 1);
            // 문자열 수신 완료 확인
            kill(info->si_pid, SIGUSR2);
        }
        else
            write(1, &g_server.current_char, 1);

        g_server.current_char = 0;
        g_server.bit_count = 0;
    }
}
```

**클라이언트:**
```c
volatile sig_atomic_t g_received = 0;  // 수신 확인 플래그

void ack_handler(int signum)
{
    (void)signum;
    g_received = 1;
}

void send_bit(pid_t server_pid, int bit)
{
    g_received = 0;

    if (bit)
        kill(server_pid, SIGUSR2);
    else
        kill(server_pid, SIGUSR1);

    // 수신 확인 대기
    while (!g_received)
        usleep(10);
}

void send_char(pid_t server_pid, char c)
{
    int bit;

    bit = 7;
    while (bit >= 0)
    {
        send_bit(server_pid, (c >> bit) & 1);
        bit--;
    }
}

int main(int argc, char **argv)
{
    pid_t server_pid;

    if (argc != 3)
        return (1);

    // 수신 확인 핸들러 등록
    signal(SIGUSR1, ack_handler);

    server_pid = atoi(argv[1]);
    send_string(server_pid, argv[2]);

    return (0);
}
```

## 주의사항

1. **시그널 손실**
   - 시그널을 너무 빠르게 보내면 일부가 손실될 수 있음
   - `usleep()`으로 적절한 지연 시간 부여

2. **전역 변수 사용**
   - 시그널 핸들러에서는 전역 변수 사용이 권장됨
   - `volatile sig_atomic_t` 타입 사용 권장

3. **재진입 가능성 (Reentrancy)**
   - 시그널 핸들러 내에서 안전한 함수만 사용
   - `write()`는 안전하지만 `printf()`는 안전하지 않음

4. **PID 유효성 검사**
   - 잘못된 PID로 시그널을 보내면 오류 발생
   - `kill()`의 반환값 확인

## 테스트 예시

```bash
# 서버 실행
./server
# 출력: Server PID: 12345

# 다른 터미널에서 클라이언트 실행
./client 12345 "Hello, World!"

# 서버 출력:
# Hello, World!
```

## 컴파일 예시

```bash
gcc -Wall -Wextra -Werror server.c -o server
gcc -Wall -Wextra -Werror client.c -o client
```

## 유용한 함수들

```c
int     ft_atoi(const char *str);          // 문자열을 정수로 변환
size_t  ft_strlen(const char *s);          // 문자열 길이
void    ft_putstr_fd(char *s, int fd);     // 문자열 출력
void    ft_putnbr_fd(int n, int fd);       // 숫자 출력
```