---
layout: default
title: Swift Grammer
parent: Swift
grand_parent: Language
permalink: /docs/Language/Swift/Grammer/
nav_order: 5
---


# Swift 기본문법

## 변수와 상수명

1. 알파벳과 한글 자음 및 모음, 아라비아 숫자를 사용할 수 있으며, 특수 기호나 한자,<br>이미지용 바이너리 코드까지 사용할 수 있다.
    * 실무에서는 영어, 숫자, 밑줄(언더바)이외에 다른 문자나 기호를 사용하지 않는다.
    * 연산자와 혼동할 수 있는 +, -, *, / 및 공백은 사용할 수 없다.
    * 스위프트 예약어와 키워드로 등록되어있는 단어는 사용할 수 없다. 단, 대소문자 구분으로 사용은 가능하다.
        >예약어와 등록된 키워드 예시<br>
        >class, enum, struct, extension, protocol, as 등등
    * 변수와 상수명 첫번째 자리에 숫자를 사용할 수 없다.
        ```swift
        var 1abc = 123 // (x)

        var a123b = 123 // (o)
        ```

## 변수와 상수 선언

1. 변수 선언할 때 : var + 변수명: 타입
2. 상수 선언할 때 : let + 상수명: 타입
    ```swift
    var i: Int
    let j: Character
    ```

## 초기화

1. 초기화 할 때 : 변수명 = 값
    ```swift
    i = 1999
    j = "Swift"
    ```
    * 스위프트는 컴파일시 타입을 추론하여 최적의 타입을 지정한다.
    * Type Annotation(타입선언) 도 가능하다.

## 선언과 초기화
1. 선언과 초기화 할 때 : 변수(상수) = 변수명 = 값
    ```swift
    var i = 1999
    let j = "Swift"
    ```