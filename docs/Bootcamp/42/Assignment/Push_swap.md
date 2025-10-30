---
layout: default
title: Push Swap
parent: 42
grand_parent: Bootcamp
permalink: /docs/Bootcamp/42/Push_swap/
nav_order: 5
---

# [Repository](https://github.com/DonsNote/Dons-42/tree/main/00_Circle/push_swap)

# Mandatory

두 개의 스택을 사용하여 정수를 정렬하는 프로그램을 구현하는 프로젝트입니다.
가능한 한 **최소한의 명령어**로 정렬해야 합니다.

## 과제 요구사항

**프로그램:**
- `push_swap`: 정수 리스트를 받아 정렬 명령어를 출력
- `checker` (보너스): 명령어가 올바르게 정렬하는지 확인

**규칙:**
- 두 개의 스택 사용: `a`와 `b`
- 모든 숫자는 스택 `a`에서 시작
- 목표: 스택 `a`를 오름차순으로 정렬, 스택 `b`는 비어있어야 함

## 허용된 연산

### Push 연산
- `pa` (push a): 스택 `b`의 맨 위 원소를 스택 `a`의 맨 위로 이동
- `pb` (push b): 스택 `a`의 맨 위 원소를 스택 `b`의 맨 위로 이동

### Swap 연산
- `sa` (swap a): 스택 `a`의 맨 위 두 원소의 위치를 바꿈
- `sb` (swap b): 스택 `b`의 맨 위 두 원소의 위치를 바꿈
- `ss`: `sa`와 `sb`를 동시에 수행

### Rotate 연산
- `ra` (rotate a): 스택 `a`의 모든 원소를 위로 한 칸씩 이동 (첫 번째 원소가 마지막으로)
- `rb` (rotate b): 스택 `b`의 모든 원소를 위로 한 칸씩 이동
- `rr`: `ra`와 `rb`를 동시에 수행

### Reverse Rotate 연산
- `rra` (reverse rotate a): 스택 `a`의 모든 원소를 아래로 한 칸씩 이동 (마지막 원소가 첫 번째로)
- `rrb` (reverse rotate b): 스택 `b`의 모든 원소를 아래로 한 칸씩 이동
- `rrr`: `rra`와 `rrb`를 동시에 수행

## 예시

**입력:**
```bash
./push_swap 2 1 3 6 5 8
```

**스택 변화:**
```
초기 상태:
a: [2, 1, 3, 6, 5, 8]
b: []

sa (swap a):
a: [1, 2, 3, 6, 5, 8]
b: []

pb (push b):
a: [2, 3, 6, 5, 8]
b: [1]

...
```

## 정렬 알고리즘 전략

### 1. 작은 케이스 (3개 이하)

#### 2개 정렬
```c
if (a[0] > a[1])
    sa();  // 한 번의 swap으로 정렬
```

#### 3개 정렬
```c
// 6가지 경우의 수를 최대 2번의 연산으로 정렬
void sort_three(t_stack *a)
{
    int first = a->arr[0];
    int second = a->arr[1];
    int third = a->arr[2];

    if (first > second && second < third && first < third)
        sa(a);  // 2 1 3
    else if (first > second && second > third)
    {
        sa(a);
        rra(a);  // 3 2 1
    }
    else if (first > second && second < third && first > third)
        ra(a);  // 3 1 2
    else if (first < second && second > third && first < third)
    {
        sa(a);
        ra(a);  // 2 3 1
    }
    else if (first < second && second > third && first > third)
        rra(a);  // 1 3 2
}
```

### 2. 중간 케이스 (5개)

**전략:**
1. 가장 작은 두 수를 스택 `b`로 이동
2. 남은 3개를 `sort_three()`로 정렬
3. 스택 `b`의 원소들을 다시 스택 `a`로 이동

```c
void sort_five(t_stack *a, t_stack *b)
{
    // 1. 가장 작은 수를 찾아 b로 이동
    int min_pos = find_min_position(a);
    move_to_top(a, min_pos);
    pb(a, b);

    // 2. 두 번째로 작은 수를 b로 이동
    min_pos = find_min_position(a);
    move_to_top(a, min_pos);
    pb(a, b);

    // 3. 남은 3개 정렬
    sort_three(a);

    // 4. b의 원소들을 a로 다시 이동
    pa(a, b);
    pa(a, b);
}
```

### 3. 큰 케이스 (100개, 500개)

효율적인 정렬을 위해 다양한 알고리즘 사용:

#### Quick Sort 변형
- Pivot을 기준으로 스택을 나누어 정렬
- 작은 값은 `b`로, 큰 값은 `a`에 유지

#### Radix Sort (기수 정렬)
- 비트 단위로 정렬
- 각 비트를 검사하여 0이면 `b`로, 1이면 `a`에 유지

```c
void radix_sort(t_stack *a, t_stack *b)
{
    int max_bits = get_max_bits(a);
    int size = a->size;

    for (int bit = 0; bit < max_bits; bit++)
    {
        for (int i = 0; i < size; i++)
        {
            if (((a->arr[0] >> bit) & 1) == 0)
                pb(a, b);  // 해당 비트가 0이면 b로
            else
                ra(a);     // 해당 비트가 1이면 뒤로
        }
        
        // b의 모든 원소를 a로 다시 이동
        while (b->size > 0)
            pa(a, b);
    }
}
```

#### Chunk 방식
- 전체 숫자를 여러 청크(구간)로 나눔
- 각 청크를 순차적으로 처리

```c
void chunk_sort(t_stack *a, t_stack *b)
{
    int chunk_size = a->size / 5;  // 5개의 청크로 분할
    
    // 청크별로 b로 이동
    for (int chunk = 0; chunk < 5; chunk++)
    {
        int min = chunk * chunk_size;
        int max = (chunk + 1) * chunk_size;
        
        while (has_numbers_in_range(a, min, max))
        {
            if (is_in_range(a->arr[0], min, max))
                pb(a, b);
            else
                ra(a);
        }
    }
    
    // b에서 큰 순서대로 a로 이동
    while (b->size > 0)
    {
        int max_pos = find_max_position(b);
        move_to_top(b, max_pos);
        pa(a, b);
    }
}
```

## 성능 기준

평가 기준 (명령어 개수):

**3개:**
- 3번 이하: 만점
- 3번 초과: 0점

**5개:**
- 12번 이하: 만점
- 12번 초과: 0점

**100개:**
- 700번 미만: 5점
- 900번 미만: 4점
- 1100번 미만: 3점
- 1300번 미만: 2점
- 1500번 미만: 1점

**500개:**
- 5500번 미만: 5점
- 7000번 미만: 4점
- 8500번 미만: 3점
- 10000번 미만: 2점
- 11500번 미만: 1점

## 구현 구조

### 스택 구조체

```c
typedef struct s_stack
{
    int     *arr;       // 동적 배열
    int     size;       // 현재 크기
    int     capacity;   // 최대 용량
}   t_stack;
```

### 주요 함수

```c
// 초기화
t_stack *init_stack(int capacity);
void    free_stack(t_stack *stack);

// 입력 파싱
int     *parse_input(int argc, char **argv, int *size);
int     check_duplicates(int *arr, int size);
int     is_sorted(t_stack *stack);

// 연산 함수
void    sa(t_stack *a);
void    sb(t_stack *b);
void    ss(t_stack *a, t_stack *b);
void    pa(t_stack *a, t_stack *b);
void    pb(t_stack *a, t_stack *b);
void    ra(t_stack *a);
void    rb(t_stack *b);
void    rr(t_stack *a, t_stack *b);
void    rra(t_stack *a);
void    rrb(t_stack *b);
void    rrr(t_stack *a, t_stack *b);

// 정렬 함수
void    sort_two(t_stack *a);
void    sort_three(t_stack *a);
void    sort_five(t_stack *a, t_stack *b);
void    sort_large(t_stack *a, t_stack *b);

// 유틸리티
int     find_min(t_stack *stack);
int     find_max(t_stack *stack);
int     find_min_position(t_stack *stack);
int     find_max_position(t_stack *stack);
```

## 보너스: Checker

정렬 명령어가 올바른지 검증하는 프로그램입니다.

```c
int main(int argc, char **argv)
{
    t_stack *a;
    t_stack *b;
    char    *line;

    // 스택 초기화
    a = parse_and_init(argc, argv);
    b = init_stack(a->capacity);

    // 표준 입력에서 명령어 읽기
    while (get_next_line(0, &line) > 0)
    {
        execute_command(a, b, line);
        free(line);
    }

    // 검증
    if (is_sorted(a) && b->size == 0)
        ft_putstr("OK\n");
    else
        ft_putstr("KO\n");

    free_stack(a);
    free_stack(b);
    return (0);
}
```

**사용 예:**
```bash
ARG="4 67 3 87 23"; ./push_swap $ARG | ./checker $ARG
```

## 주의사항

1. **오류 처리**
   - 숫자가 아닌 인자
   - INT 범위를 벗어나는 값
   - 중복된 숫자
   - 오류 시 "Error\n" 출력 후 종료

2. **메모리 관리**
   - 모든 할당된 메모리는 반드시 해제
   - 오류 발생 시에도 메모리 누수 없어야 함

3. **최적화**
   - 불필요한 연산 최소화
   - 효율적인 알고리즘 선택

## 테스트 도구

```bash
# 랜덤 숫자 생성
ARG=$(seq 1 100 | shuf | tr '\n' ' ')

# 명령어 개수 확인
./push_swap $ARG | wc -l

# 정렬 검증
./push_swap $ARG | ./checker $ARG

# 여러 번 테스트
for i in {1..100}; do
    ARG=$(seq 1 100 | shuf | tr '\n' ' ')
    RESULT=$(./push_swap $ARG | wc -l)
    echo "Test $i: $RESULT operations"
done
```