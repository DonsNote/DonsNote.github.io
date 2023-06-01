---
layout: default
title: Data Type
parent: Learn
nav_order: 3
---

# 자료형

## 기본 자료형

### Int
    * int(integer) 정수
    >Int값의 범위 제한은 CPU사양에 따라 달라집니다.
    8bit 기준 2의 8승 = 256개의 값을 저장 할 수 있습니다.
    범위로 계산시 -128 ~ 127 까지 입니다.

    * Int의 종류
    >Int, Int8, Int16, Int32, Int64, UInt(UnsignedInteger), UInt8....

### Double & Float
    * Double은 64bit 부동소수점
    >소수점 아래 15 ~ 16자리의 값에 대한 정확도를 보장
    * Float은 32bit 부동소수점
    >소수점 아래 7 ~ 8자리의 값에 대한 정확도를 보장
    >두 자료형은 범위의 차이만 존재 합니다.

### Bool
    * Bool은 ture/false 두 가지의 종류의 값만 가질 수 있습니다.
    >논리값을 저장하기 위해 사용됩니다. 참/거짓, 성공/실패, 스위치가 켜저있는 상태 On/Off등
    ```swift
    var close = ture // Bool 타입 저장 변수

    let success = ture
    let fail = false // Bool 타입 저장 상수
    ```

### 
    