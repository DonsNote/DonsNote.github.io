---
layout: default
title: Loop
parent: Statement
grand_parent: Learn Swift
permalink: /docs/Learn Swift/Statement/
nav_oder: 1
---

# 반복문 (Loop Statements)

## for ~ in
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

## while
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

## repeat ~ while
```swift
repeat {
  <실행할 구문>
}
while <조건식>
```
1. repeat ~ while 구문은 실행 블록의 수행을 최소 한번은 보장합니다.