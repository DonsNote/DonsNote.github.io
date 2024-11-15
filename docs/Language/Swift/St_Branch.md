---
layout: default
title: Branch
parent: Statement
grand_parent: Swift
permalink: /docs/Language/Swift/St_Branch/
nav_order: 1
---

# 조건문 (Branch Statements)

## if
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

## if 구문의 중첩

1. if 구문은 일반적으로 3단계 이상의 중첩 구문은 사용하지 않는 것이 좋습니다.
    ```swift
    var adult = 19
    var age = 21
    var gender = "M"

    if adult > age {
        if gender == "M" {
            print("남자 미성년자 입니다")
        } else {
            print("여자 미성년자 입니다")
        }
    } else {
        if gender == "M" {
            print("남자 성인 입니다.")
        } else {
            print("여자 성인 입니다.")
        }
    }
    ```

## if ~ else if
```swift
if <조건1> {
    <조건1이 참일 때 실행할 구문>
} else if <조건2> {
    <조건2가 참일 때 실행할 구문>
} else {
    <조건1,2를 만족하지 않을 때 실행할 구문>
}
```
1. else if 구문은 if 절과 함께 사용하는 점에서 esle 절과 비슷하지만 자신만의 조건을 만듬이 다릅니다.
2. if 문을 중첩하여도 같은 결과를 얻을 수 있으나, 컴파일러는 if ~ else구문은 하나의 조건식으로 인식<br>함으로서 리소스를 절약할 수 있습니다.
    ```swift
    var gender = "M"

    if gender == "M" {
        print("남자 입니다")
    } else if gender == "F" {
        print("여자 입니다.")
    } else {
        print("남자와 여자 어느쪽도 아닙니다.")
    }
    ```

## guard
```swift
guard <조건식 또는 표현식> else {
    <조건식 또는 표현식의 결과가 false일 때 실행될 코드>
}
```
1. guard 구문은 if 구문과 같이 조건, 표현식의 결과가 참이나 거짓인지에 따라 실행 여부를 결정합니다.
2. if 구문과의 차이점은 guard 구문에는 else 블록이 필수이고, 결과가 참일경우 실행되는 블록이 없습니다.
3. guard 구문은 특정 조건을 확인하여 만족하지 않을시 조기종료(Early Exit)하기 위한 목적으로 사용됩니다.
4. 구문의 else 블록에는 코드진행 종료 구문이 반드시 들어가야 합니다. 예) return, break 등등
    ```swift
    func divide(base: Int) {
        guard base != 0 /* Divide by Zero 체크 */ esle {
            print("연산할수 없습니다")
            return /* 정지구문 */
        }
        
        let result = 100 / base
        print(result)
    }
    ```
5. guard 구문을 다중으로 사용하여 충족되어야 하는 조건을 체크 할 수도 있습니다.

## #available
```swift
if #available(<플랫폼이름 버전>, <...>, <*>) {
    <해당 버전에서 사용할 수 있는 API 구문>
} else {
    <API를 사용할 수 없는 환경에 대한 처리>
}
```

1. 개발을 하다보면 기기의 OS버전 별로 구문을 나누어 작성해야 할 때가 있습니다. "API가 버전을 탄다"
2. 특정 API를 사용할 때 애플 개발자용 문서를 확인하여 사용 가능한 OS버전과 기기를 체크 해야합니다.
3. 스위프트 2 이전버전에서 #available 구현 방법
    ```swift
    if (UIDevice.current().systemVersion.hasPrefix("9")) {
        // IOS 9 버전에서 지원하는 구문.

    } else if (UIDevice.current().systemVersion.hasPrefix("8")) {
        // IOS 8 버전에서 지원하는 구문.

    } else if (UIDevice.current().systemVersion.hasPrefix("7")) {
        // IOS 7 버전에서 지원하는 구문.

    } else {
        // 기타 나머지 버전에서 지원하는 구문

    }
    ```
4. 현재
    ```swift
    if #available(iOS 9, OSX 10.10, watchOS 1, *) {
        // iOS 9용 API 구문 또는 OS X 10.10용 API 구문, watchOS 1용 API 구문

    } else {
        // API를 사용하지 못했을 때에 대한 실패 처리

    }
    ```

## switch
```swift
switch <비교대상> {
    case <비교 패턴1> :
        <비교 패턴1이 일치했을때 실행할 구문>
    case <비교 패턴2>, <비교 패턴3> :
        <비교 패턴2 또는 패턴3이 일치했을 때 실행할 구문>
    default :
        <비교 패턴에 일치하지 않았을 때 실행할 구문>
}
```

1. switch 구문은 여러 개의 조건 비교에 효율적인 구문입니다.
2. C 나 Java의 switch 구문과 다른점은 일치 패턴이 있을시 분기문을 종료합니다.
    * 다른 언어에서는 case 실행 구문내에 break를 추가해야 종료합니다.
    * swift에선 Fallthrough을 따로 지정해 주어야 합니다.
        ```swift
        let sampleChar : Character = "a"

        switch sampleChar {
            case "a" :
                fallthrough // 타 언어에선 생략할 수 있습니다.

            case "A" :
                print("글자는 A 입니다.")
            
            default :
                print("일치하는 글자가 없습니다.")
        }
        ```
3. switch 구문은 반드시 하나의 비교 패턴과 일치해야 합니다.
    * default 구문이 반드시 들어가야 합니다.
    * 단, 모든 패턴을 매칭시킬 수 있는 구문이 존재하면 생략 가능합니다. (추후 업데이트)
4. 하나 이상의 비교 패턴을 작성 할 수 있습니다.
    ```swift
    var value = 3

    switch value {
        case 0, 1 :
            print("0 또는 1입니다.")
        case 2, 3 :
            print("2 또는 3입니다.")
        default :
            print("default 입니다")
    }
    ```
5. 특정 타입으로 캐스팅 된 객체도 사용 가능합니다.
    ```swift
    var value = (2, 3)

    switch value {
        case let (x, 3):
            print("튜플의 두 번째 값이 3일 때 첫번째 값은 \(x)입니다.")
        case let (3, y):
            print("튜플의 첫 번째 값이 3일 때 두번째 값은 \(y)입니다.")
        case let (x, y):
            print("튜플의 값은 각각 \(x), \(y)입니다.")
    }
    ```
6. case 구문에 범위 연산자를 사용 할 수도 있습니다.
    ```swift
    switch time {
        case 0..<50:
            print("...")
    }
    ```
