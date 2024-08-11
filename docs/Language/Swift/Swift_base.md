---
layout: default
title: Swift
parent: Swift
nav_order: 1
---

# Swift

* 대부분의 내용은 "꼼꼼한 재은 씨의 Swift : 문법편"을 공부한 내용입니다.

## Swift의 특징
1. 클래스나 구조체를 선언할 때 정의와 구현을 분리하지 않고 통합해서 작성한다.
<br>

2. 대소문자 구분
    * 변수나 상수 이름에서 대소문자를 구분하여 사용한다.
    * 함수와 메소드, 인스턴스명의 첫 글자는 소문자
    * 클래스와 구조체, 프로토콜 등 객체의 첫 글자는 대문자를 사용하는게 일반적입니다.
<br>

3. 세미콜론 생략 가능
    * 구문 끝에 세미콜론 마감을 하지 않아도 된다.
    * 한줄에 두개이상의 구문을 작성할 때는 구문사이 세미콜론 필수
<br>

4. 엔트리 포인트 main()함수가 없다.
    * 메인 함수가 없는 대신, @UIApplicationMain을 사용하여, 시작 객체를 지정한다.
        ```swift
        import UIkit //UIkit 기준

        @UIApplicationMain
        class Appdelegate : UIResponder, UIApplicationDelegate
        ```
        ```swift
        import SwiftUI

        @main //SwiftUI 기준

        struct App : App {
            var body: some Scene {
                WindowGroup {
                    mainView()
                }
            }
        }
        ```
<br>

5. 문자(character)와 문자열(string) 모두 "" 사용
    * 별도로 처리하지 않으면 문자와 문자열의 구분 불가
        ```swift
        var i = "a"
        var j = "abc"
        var k: Character = "c" //문자열이 아닌 문자를 별도로 처리
        ```
<br>

6. 객체를 호출할 때 별도의 import구문이 없어도 된다.