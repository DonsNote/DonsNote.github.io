---
layout: default
title: Ft_Printf
parent: 42
grand_parent: Bootcamp
permalink: /docs/Bootcamp/42/Printf/
nav_order: 2
---

# [Repository](https://github.com/DonsNote/Dons-42/tree/main/00_Circle/ft_printf)

# Mandatory

`stdio.h`에 있는 `printf`의 기능을 구현하는 프로젝트입니다.

## 과제 요구사항

**구현해야 할 형식 지정자(Conversion Specifiers):**
- `%c` : 문자(character) 출력
- `%s` : 문자열(string) 출력
- `%p` : 포인터 주소(pointer) 출력 (16진수)
- `%d` : 10진수(decimal) 정수 출력
- `%i` : 10진수(integer) 정수 출력
- `%u` : 부호 없는 10진수(unsigned decimal) 출력
- `%x` : 16진수(hexadecimal) 소문자 출력
- `%X` : 16진수(hexadecimal) 대문자 출력
- `%%` : '%' 문자 자체 출력

**함수 프로토타입:**
```c
int ft_printf(const char *format, ...);
```

**반환값:**
- 출력된 문자의 총 개수를 반환

## 가변인자 (Variadic Arguments)

### 가변인자란?

함수에 전달되는 인자의 개수가 정해지지 않은 상태를 말합니다.
`printf`처럼 매번 다른 개수의 인자를 받을 수 있는 함수를 만들 때 사용합니다.

### stdarg.h 헤더

가변인자를 다루기 위한 매크로들이 정의되어 있습니다.

```c
#include <stdarg.h>
```

### 주요 매크로

#### va_list
가변인자 목록을 가리키는 포인터 타입입니다.

```c
va_list ap;  // 가변인자 목록을 저장할 변수 선언
```

#### va_start(ap, last_param)
가변인자 목록의 시작 위치를 설정합니다.

```c
va_start(ap, format);  // format 다음부터 가변인자 시작
```

**매개변수:**
- `ap`: va_list 타입 변수
- `last_param`: 가변인자 직전의 마지막 고정 매개변수

#### va_arg(ap, type)
다음 가변인자를 가져오고 포인터를 이동시킵니다.

```c
int value = va_arg(ap, int);        // int 타입 인자 가져오기
char *str = va_arg(ap, char *);     // 문자열 포인터 가져오기
```

**매개변수:**
- `ap`: va_list 타입 변수
- `type`: 가져올 인자의 데이터 타입

**주의사항:**
- 올바른 타입을 지정해야 합니다 (타입 불일치 시 undefined behavior)
- 호출할 때마다 내부 포인터가 자동으로 다음 인자로 이동합니다

#### va_end(ap)
가변인자 사용을 종료합니다.

```c
va_end(ap);  // 반드시 호출해야 함!
```

**중요:**
- `va_start`를 호출했다면 반드시 대응하는 `va_end`를 호출해야 합니다
- 메모리 누수 방지 및 정상적인 함수 종료를 위해 필수입니다

### 가변인자 사용 예제

```c
#include <stdarg.h>
#include <stdio.h>

int sum(int count, ...)
{
    va_list ap;
    int     result;
    int     i;

    result = 0;
    va_start(ap, count);        // count 다음부터 가변인자 시작
    i = 0;
    while (i < count)
    {
        result += va_arg(ap, int);  // int 타입으로 인자 가져오기
        i++;
    }
    va_end(ap);                 // 가변인자 사용 종료
    return (result);
}

int main(void)
{
    printf("%d\n", sum(3, 10, 20, 30));     // 60
    printf("%d\n", sum(5, 1, 2, 3, 4, 5));  // 15
    return (0);
}
```

## 구분자 처리 전략

### % 문자 찾기

format 문자열을 순회하면서 '%' 문자를 발견하면:
1. 다음 문자를 확인하여 어떤 형식 지정자인지 판단
2. 해당하는 처리 함수 호출
3. va_arg로 적절한 타입의 인자 가져오기

```c
int ft_printf(const char *format, ...)
{
    va_list ap;
    int     count;
    int     i;

    count = 0;
    i = 0;
    va_start(ap, format);
    while (format[i])
    {
        if (format[i] == '%')
        {
            i++;
            count += handle_format(format[i], ap);  // 형식 지정자 처리
        }
        else
            count += write(1, &format[i], 1);       // 일반 문자 출력
        i++;
    }
    va_end(ap);
    return (count);
}
```

### 각 형식 지정자별 처리

#### %c - 문자 출력
```c
int print_char(va_list ap)
{
    char c;

    c = (char)va_arg(ap, int);  // char는 int로 승격되어 전달됨
    return (write(1, &c, 1));
}
```

#### %s - 문자열 출력
```c
int print_string(va_list ap)
{
    char    *str;
    int     len;

    str = va_arg(ap, char *);
    if (!str)
        str = "(null)";  // NULL 포인터 처리
    len = 0;
    while (str[len])
        len++;
    return (write(1, str, len));
}
```

#### %p - 포인터 주소 출력
```c
int print_pointer(va_list ap)
{
    unsigned long   addr;
    int             count;

    addr = (unsigned long)va_arg(ap, void *);
    count = write(1, "0x", 2);  // "0x" 접두사
    count += print_hex(addr, 'x');  // 16진수 소문자로 출력
    return (count);
}
```

#### %d, %i - 10진수 정수 출력
```c
int print_decimal(va_list ap)
{
    int     n;
    int     count;

    n = va_arg(ap, int);
    count = 0;
    if (n < 0)
    {
        count += write(1, "-", 1);
        n = -n;  // 음수를 양수로 변환 (주의: INT_MIN 처리 필요)
    }
    count += print_number(n);
    return (count);
}
```

#### %u - 부호 없는 정수 출력
```c
int print_unsigned(va_list ap)
{
    unsigned int n;

    n = va_arg(ap, unsigned int);
    return (print_unsigned_number(n));
}
```

#### %x, %X - 16진수 출력
```c
int print_hex(va_list ap, char format)
{
    unsigned int    n;
    char            *base;

    n = va_arg(ap, unsigned int);
    if (format == 'x')
        base = "0123456789abcdef";  // 소문자
    else
        base = "0123456789ABCDEF";  // 대문자
    return (print_base(n, base));
}
```

#### %% - '%' 문자 출력
```c
int print_percent(void)
{
    return (write(1, "%", 1));
}
```

## 숫자를 문자열로 변환하기

### 재귀 방식
```c
int print_number(unsigned int n)
{
    int     count;
    char    digit;

    count = 0;
    if (n >= 10)
        count += print_number(n / 10);
    digit = (n % 10) + '0';
    count += write(1, &digit, 1);
    return (count);
}
```

### 16진수 변환
```c
int print_base(unsigned long n, char *base)
{
    int     count;
    char    digit;

    count = 0;
    if (n >= 16)
        count += print_base(n / 16, base);
    digit = base[n % 16];
    count += write(1, &digit, 1);
    return (count);
}
```

## 주의사항

1. **타입 프로모션(Type Promotion)**
   - `char`, `short` 타입은 가변인자로 전달될 때 `int`로 자동 변환됩니다
   - `va_arg(ap, char)`가 아닌 `va_arg(ap, int)`로 받아야 합니다

2. **NULL 포인터 처리**
   - `%s`에 NULL이 들어올 경우 "(null)" 출력
   - `%p`에 NULL이 들어올 경우 "0x0" 또는 "(nil)" 출력

3. **INT_MIN 처리**
   - `-2147483648`을 양수로 변환할 수 없음 (overflow)
   - 별도 처리 로직 필요

4. **반환값**
   - 모든 출력 함수는 출력한 문자 개수를 정확히 반환해야 합니다
   - `write()` 함수의 반환값을 누적하여 사용

## 구조 예시

```
ft_printf.c
├── ft_printf()          # 메인 함수
├── handle_format()      # 형식 지정자 분기 처리
├── print_char()         # %c
├── print_string()       # %s
├── print_pointer()      # %p
├── print_decimal()      # %d, %i
├── print_unsigned()     # %u
├── print_hex()          # %x, %X
├── print_percent()      # %%
└── 유틸리티 함수들
    ├── print_number()
    └── print_base()
```

## 테스트 예시

```c
ft_printf("Hello %s!\n", "World");              // Hello World!
ft_printf("Number: %d\n", 42);                  // Number: 42
ft_printf("Hex: %x\n", 255);                    // Hex: ff
ft_printf("Pointer: %p\n", &var);               // Pointer: 0x7ffc8b4e5d3c
ft_printf("Percent: %%\n");                     // Percent: %
ft_printf("Mixed: %d %s %c\n", 42, "test", 'A'); // Mixed: 42 test A
```

## 유용한 함수들

```c
size_t  ft_strlen(const char *s);           // 문자열 길이
void    ft_putchar_fd(char c, int fd);      // 문자 출력
void    ft_putstr_fd(char *s, int fd);      // 문자열 출력
void    ft_putnbr_fd(int n, int fd);        // 숫자 출력
```