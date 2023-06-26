---
layout: default
title: Swift
parent: Learn
nav_order: 4
---

# Swift

## 구문(Statement)
* 구문은 크게 단순구문과 흐름 제어 구문으로 구분된다.

### 반복문

#### for ~ in
```swift
for <loop> in <target>
{
    <function>
}
```

1. target : 순회대상 = 배열(Array), 딕셔너리(Dictionary), 집합(set), 범위 데이터, 문자열(string)
2. loop : 루프상수 = 구문반복시 순회대상이 포함하고있는 개별 값을 받아 임의 저장, 실행하는 값
    * let선언 필요없음
3. function : fot~in구문 안에서 실행하고자 하는 기능
 ```swift
for i in 1..<10
{
    for j in 1..<10
    {
        print("\(i) X \(j) = \(i * j)")
    }
}
```

#### while
```swift
while <조건식>
{
    <실행할구문>
}
```
1. while문은 조건을 만족하는 동안은 계속 실행 되는 반복문 입니다.





