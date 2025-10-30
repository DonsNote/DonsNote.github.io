---
layout: default
title: Philosophers
parent: 42
grand_parent: Bootcamp
permalink: /docs/Bootcamp/42/Philosophers/
nav_order: 8
---

# [Repository](https://github.com/DonsNote/Dons-42/tree/main/00_Circle/philosophers)

# Mandatory

**식사하는 철학자 문제 (Dining Philosophers Problem)**

동시성 제어와 데드락을 배우는 고전적인 프로그래밍 문제입니다.

## 과제 요구사항

* **철학자 = 스레드**
* 철학자는 먹고(eat), 생각하고(think), 잠들어야(sleep) 함
* 먹을 때는 생각하지 않음
* 생각할 때는 먹고 잠들지 않음
* 잠들 때는 먹고 생각하지 않음
* 일정 시간(지정된 밀리초)동안 먹지 않으면 철학자는 죽음
* 철학자가 한 명이면 포크는 1개임
* 철학자들 사이에는 포크가 놓여있음
* 철학자가 먹을 때는 포크를 2개 사용해야 함

**프로그램 인자:**
```bash
./philo <number_of_philosophers> <time_to_die> <time_to_eat> <time_to_sleep> [number_of_times_each_philosopher_must_eat]
```

**인자 설명:**
- `number_of_philosophers`: 철학자(스레드) 수
- `time_to_die`: 마지막 식사 후 이 시간(ms) 내에 먹지 못하면 사망
- `time_to_eat`: 식사하는 데 걸리는 시간(ms)
- `time_to_sleep`: 잠자는 데 걸리는 시간(ms)
- `number_of_times_each_philosopher_must_eat` (선택): 각 철학자가 먹어야 할 최소 횟수

**출력 형식:**
```
timestamp_in_ms X has taken a fork
timestamp_in_ms X is eating
timestamp_in_ms X is sleeping
timestamp_in_ms X is thinking
timestamp_in_ms X died
```

## 멀티스레딩 기초

### Thread (스레드)란?

**스레드란?**
- 프로세스 내에서 실행되는 독립적인 실행 흐름
- 하나의 프로세스는 여러 개의 스레드를 가질 수 있음
- 같은 프로세스의 스레드들은 메모리(힙, 전역 변수 등)를 공유

**프로세스 vs 스레드:**
```
프로세스:
- 독립적인 메모리 공간
- 무거움 (생성 비용 큼)
- 프로세스 간 통신 복잡 (IPC 필요)

스레드:
- 같은 메모리 공간 공유
- 가벼움 (생성 비용 작음)
- 데이터 공유 쉬움 (하지만 동기화 필요)
```

### pthread 함수

#### pthread_create()
새로운 스레드를 생성합니다.

```c
#include <pthread.h>

int pthread_create(pthread_t *thread, const pthread_attr_t *attr,
                   void *(*start_routine)(void *), void *arg);
```

**사용 예:**
```c
void *philosopher_routine(void *arg)
{
    int id = *(int *)arg;
    printf("Philosopher %d is thinking\n", id);
    return (NULL);
}

int main(void)
{
    pthread_t thread;
    int id = 1;

    pthread_create(&thread, NULL, philosopher_routine, &id);
    pthread_join(thread, NULL);  // 스레드 종료 대기
    return (0);
}
```

#### pthread_join()
스레드가 종료될 때까지 대기합니다.

```c
int pthread_join(pthread_t thread, void **retval);
```

**사용 예:**
```c
pthread_t threads[5];

// 스레드 생성
for (int i = 0; i < 5; i++)
    pthread_create(&threads[i], NULL, routine, &data[i]);

// 모든 스레드 종료 대기
for (int i = 0; i < 5; i++)
    pthread_join(threads[i], NULL);
```

#### pthread_detach()
스레드를 분리합니다 (종료 시 자동으로 리소스 해제).

```c
int pthread_detach(pthread_t thread);
```

### Mutex (뮤텍스)

**Mutual Exclusion (상호 배제)**의 약자로, 여러 스레드가 공유 자원에 동시 접근하는 것을 방지하는 잠금 장치입니다.

#### pthread_mutex_init()
뮤텍스를 초기화합니다.

```c
#include <pthread.h>

pthread_mutex_t mutex;

pthread_mutex_init(&mutex, NULL);
```

#### pthread_mutex_lock()
뮤텍스를 잠급니다 (다른 스레드는 대기).

```c
pthread_mutex_lock(&mutex);
// 임계 영역 (Critical Section)
pthread_mutex_unlock(&mutex);
```

#### pthread_mutex_unlock()
뮤텍스를 해제합니다.

```c
pthread_mutex_unlock(&mutex);
```

#### pthread_mutex_destroy()
뮤텍스를 파괴합니다.

```c
pthread_mutex_destroy(&mutex);
```

**뮤텍스 사용 예:**
```c
pthread_mutex_t fork_mutex;
int shared_data = 0;

void *increment(void *arg)
{
    pthread_mutex_lock(&fork_mutex);
    shared_data++;  // 보호된 영역
    pthread_mutex_unlock(&fork_mutex);
    return (NULL);
}
```

## 시간 함수

### gettimeofday()
현재 시간을 마이크로초 단위로 가져옵니다.

```c
#include <sys/time.h>

struct timeval {
    time_t      tv_sec;   // 초
    suseconds_t tv_usec;  // 마이크로초
};

long get_time_ms(void)
{
    struct timeval tv;

    gettimeofday(&tv, NULL);
    return (tv.tv_sec * 1000 + tv.tv_usec / 1000);
}
```

### usleep()
마이크로초 단위로 대기합니다.

```c
#include <unistd.h>

usleep(1000);  // 1000 마이크로초 = 1 밀리초 대기
```

**정밀한 sleep 함수:**
```c
void precise_sleep(long ms)
{
    long start = get_time_ms();

    while (get_time_ms() - start < ms)
        usleep(100);  // 짧은 간격으로 체크
}
```

## 철학자 문제 구현

### 데이터 구조

```c
typedef struct s_philo
{
    int             id;                 // 철학자 ID
    int             eat_count;          // 식사 횟수
    long            last_meal_time;     // 마지막 식사 시간
    pthread_t       thread;             // 스레드
    pthread_mutex_t *left_fork;         // 왼쪽 포크
    pthread_mutex_t *right_fork;        // 오른쪽 포크
    struct s_data   *data;              // 공유 데이터
}   t_philo;

typedef struct s_data
{
    int             num_philos;         // 철학자 수
    int             time_to_die;        // 사망 시간
    int             time_to_eat;        // 식사 시간
    int             time_to_sleep;      // 수면 시간
    int             must_eat_count;     // 필수 식사 횟수 (-1이면 무제한)
    long            start_time;         // 시뮬레이션 시작 시간
    int             someone_died;       // 사망 플래그
    pthread_mutex_t write_mutex;        // 출력용 뮤텍스
    pthread_mutex_t death_mutex;        // 사망 체크용 뮤텍스
    pthread_mutex_t *forks;             // 포크 뮤텍스 배열
    t_philo         *philos;            // 철학자 배열
}   t_data;
```

### 철학자 루틴

```c
void *philosopher_routine(void *arg)
{
    t_philo *philo = (t_philo *)arg;

    // 짝수 번호 철학자는 약간 대기 (데드락 방지)
    if (philo->id % 2 == 0)
        usleep(1000);

    while (!is_dead(philo->data))
    {
        // 1. 먹기
        take_forks(philo);
        eat(philo);
        put_forks(philo);

        // 2. 자기
        print_status(philo, "is sleeping");
        precise_sleep(philo->data->time_to_sleep);

        // 3. 생각하기
        print_status(philo, "is thinking");
    }

    return (NULL);
}
```

### 포크 잡기 (데드락 방지)

```c
void take_forks(t_philo *philo)
{
    // 데드락 방지: 낮은 번호 포크부터 잡기
    if (philo->id % 2 == 0)
    {
        pthread_mutex_lock(philo->left_fork);
        print_status(philo, "has taken a fork");
        pthread_mutex_lock(philo->right_fork);
        print_status(philo, "has taken a fork");
    }
    else
    {
        pthread_mutex_lock(philo->right_fork);
        print_status(philo, "has taken a fork");
        pthread_mutex_lock(philo->left_fork);
        print_status(philo, "has taken a fork");
    }
}

void put_forks(t_philo *philo)
{
    pthread_mutex_unlock(philo->left_fork);
    pthread_mutex_unlock(philo->right_fork);
}
```

### 식사

```c
void eat(t_philo *philo)
{
    print_status(philo, "is eating");
    
    pthread_mutex_lock(&philo->data->death_mutex);
    philo->last_meal_time = get_time_ms();
    philo->eat_count++;
    pthread_mutex_unlock(&philo->data->death_mutex);

    precise_sleep(philo->data->time_to_eat);
}
```

### 사망 모니터링

```c
void *monitor_routine(void *arg)
{
    t_data *data = (t_data *)arg;
    int i;

    while (1)
    {
        i = 0;
        while (i < data->num_philos)
        {
            pthread_mutex_lock(&data->death_mutex);
            
            // 사망 체크
            if (get_time_ms() - data->philos[i].last_meal_time > data->time_to_die)
            {
                print_status(&data->philos[i], "died");
                data->someone_died = 1;
                pthread_mutex_unlock(&data->death_mutex);
                return (NULL);
            }

            // 모두 필수 횟수만큼 먹었는지 체크
            if (data->must_eat_count != -1 && 
                data->philos[i].eat_count >= data->must_eat_count)
            {
                // 모든 철학자 체크 로직...
            }

            pthread_mutex_unlock(&data->death_mutex);
            i++;
        }
        usleep(1000);  // 1ms마다 체크
    }
    return (NULL);
}
```

### 안전한 출력

```c
void print_status(t_philo *philo, char *status)
{
    long timestamp;

    pthread_mutex_lock(&philo->data->write_mutex);
    
    if (!is_dead(philo->data))
    {
        timestamp = get_time_ms() - philo->data->start_time;
        printf("%ld %d %s\n", timestamp, philo->id, status);
    }

    pthread_mutex_unlock(&philo->data->write_mutex);
}
```

## 데드락 (Deadlock)

### 데드락이란?

두 개 이상의 스레드가 서로가 가진 자원을 기다리며 무한정 대기하는 상태입니다.

**데드락 발생 예:**
```
철학자 1: 포크 1 잠금 → 포크 2 대기
철학자 2: 포크 2 잠금 → 포크 3 대기
철학자 3: 포크 3 잠금 → 포크 1 대기  ← 데드락!
```

### 데드락 방지 전략

1. **순서 지정**
   - 모든 뮤텍스를 일정한 순서로 잠금
   - 짝수/홀수 철학자가 다른 순서로 포크 잡기

2. **홀수 명의 철학자**
   - 철학자가 홀수면 순환 대기 방지

3. **타임아웃 설정**
   - 일정 시간 내에 모든 자원을 얻지 못하면 포기

## Data Race 방지

**Data Race란?**
- 여러 스레드가 동시에 같은 메모리에 접근하고, 최소 하나는 쓰기 작업을 할 때 발생

**방지 방법:**
- 공유 변수 접근 시 항상 뮤텍스 사용
- 읽기 전용 데이터는 `const`로 선언

```c
// Bad: Data Race 발생 가능
philo->last_meal_time = get_time_ms();

// Good: 뮤텍스로 보호
pthread_mutex_lock(&data->death_mutex);
philo->last_meal_time = get_time_ms();
pthread_mutex_unlock(&data->death_mutex);
```

## 보너스: 세마포어 사용

`sem_wait()`와 `sem_post()`를 사용하여 구현합니다.

```c
#include <semaphore.h>

sem_t *forks;

// 초기화
forks = sem_open("/forks", O_CREAT, 0644, num_philos / 2);

// 포크 잡기
sem_wait(forks);
sem_wait(forks);

// 포크 놓기
sem_post(forks);
sem_post(forks);
```

## 주의사항

1. **메모리 누수**
   - 모든 malloc()에 대응하는 free()
   - 모든 뮤텍스 destroy

2. **정확한 타이밍**
   - usleep()은 정확하지 않음
   - 바쁜 대기(busy waiting)로 정밀도 향상

3. **사망 메시지 중복 방지**
   - 한 번만 출력되도록 플래그 사용

## 테스트 예시

```bash
# 아무도 죽지 않아야 함
./philo 5 800 200 200

# 1명이 죽어야 함
./philo 4 310 200 100

# 아무도 죽지 않아야 함, 모두 7번 먹으면 종료
./philo 5 800 200 200 7

# 1명만 있을 때 죽어야 함
./philo 1 800 200 200
```

## 컴파일 예시

```bash
gcc -Wall -Wextra -Werror -pthread *.c -o philo
```

## 유용한 디버깅 도구

```bash
# Helgrind: 스레드 오류 검사
valgrind --tool=helgrind ./philo 5 800 200 200

# DRD: Data Race 검사
valgrind --tool=drd ./philo 5 800 200 200
```