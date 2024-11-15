---
layout: default
title: Ft_Printf
parent: 42 GyeongSan
permalink: /doc/42GS/Assignment/Printf/
nav_order: 2
---


# Mandatory
* stdio.h 에 있는 printf 의 기능을 하는 프로그램을 만들자!
* 구분자는 c, s, p, d, i, u, x, X, %

## 가변인자
* 가변인자란?
    - 함수에 들어오는 인자의 갯수가 정해지지 않은 상태
    - stdarg.h 에 있는 va_list 구조체를 활용하여 va_start(ap, format)과 같이 가변인자를 활용 할수있으며, ap에 이동된 주소값이 저장되어 있음.
    - va_arg(ap, type)으로 type을 지정해서 다른 함수의 인자로 넣어줄 수 있음.
    - 인자의 활용이 끝났으면 va_end(ap) 필수!!

## 구분자와 %처리
* 