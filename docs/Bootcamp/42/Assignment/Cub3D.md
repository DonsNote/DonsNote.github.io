---
layout: default
title: Cub 3D
parent: 42 GyeongSan
permalink: /doc/42GS/Assignment/Cub3D/
nav_order: 10
---

# Mandatory
```
Ray-Casting을 활용한 현실적인 3D 그레픽 구현
미로로 된 환경을 구성해야합니다.
```

1. minilibX를 OS버전에 맞추어 사용할 수 있습니다.
2. window창은 다른 창과 변경가능 해야하며, 최소화 될 수 있어야합니다.
3. 벽의 textures는 본인의 선택입니다.
4. 천장과 바닥은 반드시 다른 색상으로 설정 해야합니다.
5. 프로그램은 창에 이미지를 다음과 같은 규칙으로 표현해야합니다.
    ```
    키보드의 왼쪽, 오른쪽 화살표는 화면을 좌우로 보여줍니다.
    W,S,A,D키는 상,하,좌,우로 움직어야합니다.
    ESC키 입력시 창이 깔끔하게 종료되어야 합니다.
    창의 빨간 X표시를 클릭하면 깔끔하게 종료되어야 합니다.
    minilibX의 이미지들을 사용하기를 강력하게 권장합니다.
    ```

6. 지도의 구성
    - 지도는 벽으로 둘러쌓여져 있어야합니다.
    - .cub 파일의 마지막은 지도 데이터 이여야 합니다.
    ```
    0 : 빈공간
    1 : 벽
    N,S,E,W : 시작위치 및 바라보고있는 방향
    ```

7. Texture 구성
    ```
    NO ./path_to_the_north_texture
    SO ./path_to_the_south_texture
    WE ./path_to_the_west_texture
    EA ./path_to_the_east_texture
    F 200,100,0 - RGB(0 ~ 255)
    C 225,30,0 - RGB(0 ~ 255)
    ```

8. 파일의 구성이 잘못되었을경우 프로그램은 올바르게 종료되어야하고 Error를 출력해야 합니다.

## Allow Funtion

1. C 표준 라이브러리 (stdio.h, stdlib.h, string.h)
	```
	malloc    : 동적 메모리를 할당합니다.
    free      : 할당된 메모리를 헤제합니다.
	exit      : 프로그램을 종료합니다.
	strerror  : 오류 번호에 해당하는 오류 메시지 문자열을 반환합니다.
	perror    : 가장 최근의 오류를 표준 오류로 출력합니다.
	```

2. 파일 입출력 라이브러리 (fcntl.h, unistd.h, stdio.h)
    ```
    open      : 파일을 엽니다.
    close     : 파일을 닫습니다.
    read      : 파일을 읽습니다.
    write     : 지정된 fd 값에 데이터를 전송합니다.
	printf    : 형식화된 문자열을 출력합니다.
    ```

3. 시간관련 라이브러리 (sys/time.h)
    ```
    gettimeofday : 현재시간을 가져옵니다.
    ```

3. All functions of the math library (-lm man man 3 math) (math.h)
    ```
    sin
    cos
    tan
    sqrt
    pow
    ```

4. All functions of the MinilibX