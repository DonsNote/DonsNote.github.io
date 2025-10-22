---
layout: default
title: Mini Shell
parent: 42
grand_parent: Bootcamp
permalink: /docs/Bootcamp/42/Minishell/
nav_order: 9
---

# Mandatory
1. 새로운 명령어를 입력할 수 있는 프롬프트를 표시해야합니다.
2. 작업 히스토리를 갖고 있어야합니다.
3. PATH 변수나 상대, 절대 경로를 활용하여 올바른 실행 파일을 찾아 실행할 수 있어야 합니다.
4. 전역 변수는 한 개를 초과하여 사용할 수 없으며, 전역 변수를 왜 사용하였는지 생각해보고<br> 그 이유를 설명할 수 있어야합니다.
5. 닫히지 않은(홀수) 따옴표나 명시되지 않은 특수문자(\ or ; 등등)을 해석하지 않아야 합니다.
6. 쌍따옴표 안에 있는 $를 제외한 메타문자를 해석하지 않아야 합니다.
7. 다음을 구현해야 합니다.
    - \> : 출력
    - < : 입력
	- \>> : 출력을 덧붙이기
    - << : 구분자가 함께 주어지며, 구분자를 포함한 줄을 만나기 전까지 입력을<br>읽어들여야 합니다. 히스토리를 업데이트 할 필요는 없습니다.
	- \| : 각 파이프라인마다 명령어의 츨력은 파이프로 연결되어 다음 명령어에 입력.
	- \$ : 환경변수는 $뒤의 문자열로 값이 확장.
	- $? : 가장 최근에 실행한 포그라운드 파이프라인의 종료상태로 확장. 
	- ctrl-C, D, \ 는 Bash와 동일하게 작동해야합니다.

## Allow Funtion

1. GNU Readline 라이브러리
	```
	readline: 사용자가 입력한 한 줄의 문자열을 읽어옵니다.
	rl_clear_history: Readline 입력 히스토리를 초기화합니다.
	rl_on_new_line: 새 줄에서 Readline 상태를 초기화합니다.
	rl_replace_line: 현재 입력 줄을 새 문자열로 교체합니다.
	rl_redisplay: 현재 입력 상태를 다시 표시합니다.
	add_history: 입력 히스토리에 문자열을 추가합니다.
	```
2. C 표준 라이브러리 (stdio.h, stdlib.h, string.h)
	```
	printf: 형식화된 문자열을 출력합니다.
	malloc: 동적 메모리를 할당합니다.
	exit: 프로그램을 종료합니다.
	strerror: 오류 번호에 해당하는 오류 메시지 문자열을 반환합니다.
	perror: 가장 최근의 오류를 표준 오류로 출력합니다.
	```
3. POSIX 프로세스 관리 (unistd.h, sys/types.h, sys/wait.h)
	```
	waitpid: 특정 자식 프로세스가 종료될 때까지 기다립니다.
	wait3: 자식 프로세스의 종료를 기다리며 자원 사용량 정보를 반환합니다.
	wait4: wait3와 유사하지만, 특정 프로세스를 지정할 수 있습니다.
	kill: 지정한 프로세스에 신호를 보냅니다.
	execve: 현재 프로세스를 새 프로그램으로 교체합니다.
	```
4. POSIX 신호 처리 (signal.h)
	```
	signal: 지정한 신호에 대한 핸들러를 설정합니다.
	sigaction: 신호 동작을 설정하거나 조회합니다.
	sigemptyset: 신호 집합을 초기화합니다.
	sigaddset: 신호 집합에 특정 신호를 추가합니다.
	```
5. POSIX 파일 시스템 관리 (unistd.h, sys/stat.h)
	```
	getcwd: 현재 작업 디렉터리 경로를 반환합니다.
	chdir: 현재 작업 디렉터리를 변경합니다.
	stat: 파일의 상태 정보를 가져옵니다.
	lstat: 심볼릭 링크의 상태 정보를 가져옵니다.
	fstat: 파일 디스크립터를 통해 파일 상태 정보를 가져옵니다.
	unlink: 파일을 삭제합니다.
	dup: 파일 디스크립터를 복제합니다.
	dup2: 특정 파일 디스크립터에 복제본을 지정합니다.
	pipe: 익명 파이프를 생성합니다.
	```
6. POSIX 디렉터리 관리 (dirent.h)
	```
	opendir: 디렉터리를 열고 디렉터리 스트림을 반환합니다.
	readdir: 디렉터리에서 항목을 읽어옵니다.
	closedir: 열려 있는 디렉터리를 닫습니다.
	```
7. 터미널 I/O (termios.h, ioctl.h)
	```
	isatty: 파일 디스크립터가 터미널인지 확인합니다.
	ttyname: 파일 디스크립터와 연결된 터미널의 이름을 반환합니다.
	ttyslot: 터미널의 슬롯 번호를 반환합니다.
	ioctl: 파일 디스크립터의 장치 특성을 제어합니다.
	tcsetattr: 터미널 속성을 설정합니다.
	tcgetattr: 터미널 속성을 가져옵니다.
	```
8. 환경 변수 (unistd.h, stdlib.h)
	```
	getenv: 지정한 환경 변수의 값을 반환합니다.
	```
9. 터미널 제어 (curses.h 또는 termcap.h)
	```
	tgetent: 터미널 설명을 초기화합니다.
	tgetflag: 특정 터미널 기능 플래그를 가져옵니다.
	tgetnum: 터미널에 대한 숫자 값을 가져옵니다.
	tgetstr: 터미널에 대한 문자열을 가져옵니다.
	tgoto: 커서 이동 문자열을 생성합니다.
	tputs: 터미널 제어 문자열을 출력합니다.
	```
## Builtins

1. echo with option -n
2. cd with only a relative or absolute path
3. pwd with no options
4. export with no options
5. unset with no options
6. env with no option or arguments
7. exit with no options

# Solve
## Parse
1. 