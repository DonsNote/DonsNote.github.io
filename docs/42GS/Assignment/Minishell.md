---
layout: default
title: Mini Shell
parent: 42 GyeongSan
permalink: /doc/42GS/Assignment/Minishell/
nav_order: 9
---

# Mandatory
- This project is about creating a simple shell.
- Yes, your own little bash.
- You will learn a lot about processes and file descriptors.

## Allow Funtion
- readline
- rl_clear_history
- rl_on_new_line
- rl_replace_line
- rl_redisplay
- add_history
- printf
- malloc
- waitpid
- wait3
- wait4
- signal
- sigaction
- sigemptyset
- sigaddset
- kill
- exit
- gextcwd
- chdir
- stat
- lstat
- fstat
- unlink
- execve
- dup
- dup2
- pipe
- opendir
- readdir
- closedir
- strerror
- perror
- isatty
- ttyname
- ttyslot
- ioctl
- getenv
- tcsetattr
- tcgetattr
- tgetent
- tgetflag
- tgetnum
- tgetstr
- tgoto
- tputs

## Main Assignment
1. 새로운 명령어를 입력할 수 있는 프롬프트를 표시해야합니다.
2. 작업 히스토리를 갖고 있어야합니다.
3. PATH 변수나 상대, 절대 경로를 활용하여 올바른 실행 파일을 찾아 실행할 수 있어야 합니다.
4. 전역 변수는 한 개를 초과하여 사용할 수 없으며, 전역 변수를 왜 사용하였는지 생각해보고<br> 그 이유를 설명할 수 있어야합니다.
5. 닫히지 않은(홀수) 따옴표나 명시되지 않은 특수문자(\ or ; 등등)을 해석하지 않아야 합니다.
6. 쌍따옴표 안에 있는 $를 제외한 메타문자를 해석하지 않아야 합니다.
7. 다음의 리다이렉션을 구현해야 합니다.
    - < : 입력
    - \> : 출력
    - << : 
