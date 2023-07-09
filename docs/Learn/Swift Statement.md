---
layout: default
title: Swift Statement
parent: Learn Swift
nav_order: 4
---



# 스위프트 구문(Swift Statement)
## 구문은 크게 단순구문과 흐름 제어 구문으로 구분된다.

## 반복문 (Loop Statements)

### for ~ in
```swift
for <loop> in <target> {
   <function>
}
```

1. target : 순회대상 = 배열(Array), 딕셔너리(Dictionary), 집합(set), 범위 데이터, 문자열(string)
2. loop : 루프상수 = 구문반복시 순회대상이 포함하고있는 개별 값을 받아 임의 저장, 실행하는 값
3. function : fot ~ in구문 안에서 실행하고자 하는 기능
     ```swift
    for i in 1..<10 {
        for j in 1..<10 {
            print("\(i) X \(j) = \(i * j)")
        }
    } //구구단 출력
    ```

### while
```swift
while <조건식> {
    <실행할구문>
}
```
1. while문은 조건을 만족하는 동안은 계속 실행 되는 반복문 입니다.
    ```swift
    var i = 2
    while i < 1000 {
        i = i * 2
    }
    print("i = \(i)")
    ```

### repeat ~ while
```swift
repeat {
  <실행할 구문>
}
while <조건식>
```
1. repeat ~ while 구문은 실행 블록의 수행을 최소 한번은 보장합니다.
<br>
<br>
<br>

## 조건문 (Branch Statements)

### if
```swift
if <조건식> {
    <실행할 구문>
}
```
1. if 구문은 대부분의 프로그래밍 언어에서 가장 많이 사용되는 구문 중 하나입니다.
2. 형태는 모두 코드 블록을 여닫는 중괄호 {}가 사용 된다는 점 입니다.
3. 기본적인 if 구문에서는 조건이 참(true) 일때만 구문을 실행 합니다.
4. 조건식이 복잡할 경우 소괄호 ()를 사용하여 조건식을 감싸 주어도 가능 합니다.
    ```swift
    var adult = 19
    var age = 15

    if age < adult {
        print("당신은 미성년자 입니다")
    } // 조건문이 참 임으로 실행구문인 프린트가 실행됩니다.
    ```

## if ~ else
```swift
if <조건식> {
    <조건이 참일때 실행할 구문>
} else {
    <조건의 거짓일때 실행할 구문>
}
```
1. else 구문은 if 문의 조건이 거짓일 때만 실행하는 블록을 생성합니다.
2. if ~ else 구문은 두가지 구문 중 하나는 반드시 실행 됩니다.
3. if 조건과 else의 조건은 양립할 수 없음으로 "이율배반 사건"이라고 부르기도 합니다.
    * 양자역학에서는 참이면서 거짓을수 있기때문에 적용되지 않을 수 있으나,<br>컴퓨터 알고리즘은 대수학 기반임으로 양립을 인정하지 않습니다.
    ```swift
    let adult = 19
    var age = 21

    if age < adult {
        print("당신은 미성년자 입니다.")
    } else {
        print("당신은 성인 입니다.")
    }
    ```

### if 구문의 중첩
