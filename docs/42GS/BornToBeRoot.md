---
layout: default
title: Born To Be Root
parent: 42GS
nav_order: 1
---


# Mandatory Part(필수 부분)

* 이 프로젝트는 지정된 큐칙에 따라 서버를 구성 및 설정하는 과제입니다.
* GUI를 사용하지 않습니다.(그래픽 서버 설치 금지)
* Debien / Rocky 운영체제 (LSV)버전 사용 (Debian권장) - 24.03.25 현재 12.5.0
* Debian용 AppArmor는 시작시 실행되어야한다
* SELinux 실행되어야 한다!

## Debian Install
* 현제 Latest Stable Version - 12.5.0
* 한국어 지원
	1. Boot PV & LV 설정
	2. PV 암호화
	3. LV 생성 - 필수 및 필요
	4. 마운트
	5. SSH, BasicUtil 설치
	6. Hostname은 42로 끝나야함
	7. Hostname과 같은 이름의 사용자가 있어야함

## LVM (Local Volume Management)
```
PV : physical volume (물리)
VG : volume Group (그룹)
LV : logical volume (논리)
FS : file systems (파일 시스템)
```
```
root : 최상위 마운트 파티션 - 필수
swap : 가상메모리 파티션(물리적 램이 부족할때 사용됨) - 필수
home : 사용자 계정 파티션
var : 로그 파일 파티션
svr : 서버 파티션, 외부공유용
tmp : 임시 파티션, 임시저장용
var/log/sudo : 프로그램 로그파일 저장용 - 과제필수
boot : 커널 부트 이미지 파티션, 부팅시스템 파일용
```
* 디스크 공간을 '동적'으로 관리할 수 있는 Linux운영 체제 기능
* Devien설치 할때 할당 할 수 있음
* Volum 확인
	```bash
	lsblk
	fdisk -l
	```

## SELinux (Security Enhance Linux)
* 엑서스 권한 제어 보안 아키텍쳐
* Debian 12.5.0은 SELinux가 설치되어 있지 않다

### SELinux 설치
* Debian 공식 사이트 Doc
* SELinux 설치 및 기본정책/유틸리티 설치
	```bash
	apt-get install selinux-basics selinux-policy-default auditd
	```
* SELinux 활성화 및 상태확인
	```bash
	selinux-activate
	sestatus
	```
* 생각보다 용량이 커서 root의 충분한 용량을 확보


## Apparmor
* 서버 실행시 실행되어야함 - 과제 필수
* 리눅스 App 보안 시스템
* 정책을 기준으로 접근 및 실행 권한확인 후 실행
* MAC(Mandatory Access Control)을 활용 Unix DAC(Discretionary Access Control)을 보완
	* MAC - 강제적 접근 통제 : 소유자와 상관없이 정책에 따른 보완
	* DAC - 임의적 접근 통제 : 소유자가 자신의 판단에 따라 권한 부여

## SSH
* SSH는 4242 포트에서만 실행 됩니다.
* 보안을 위해서 SSH를 Root로 연결하는 것은 불가능 하게 합니다.
* /etc/ssh/sshd_config 수정
	* port 4242 - ssh 접속 포트
	* PermitRootLogin no - 루트 접근 권한
	```bash
	systemctl restart ssh
	systemctl status ssh
	```

### UFW(Uncomplicated Firewall)를 활용하여 방화벽 구성
```bash
apt-get install ufw
ufw status verbose - 상태확인
ufw enable - 활성화
ufw disable - 비활성화
ufw show raw - 기본 룰 확인
ufw default deny - 기본 정책 차단
ufw default allow - 기본 정책 허용
ufw allow 22 - 22번 포트에 대하여 tcp/udp 허용
ufw allow 22/tcp - 22번 포트에 대하여 tcp만 허용
ufw delete allow 22/tcp	- 룰 삭제
```
### VirtualBox Setting for network
* Check ip & port (vm)
	```bash
	ip a
	hostname -I
	ss
	```
* 도구 네트워크에서 호스트 전용 네트워크 생성
	* 어댑터 수동 설정
	* vm power off 설정 - 네트워크
		* 어댑터 1 : NAT - 고급 - 포트 포워딩 - 호스트 = 로컬, 게스트 = 서버, 포트 = 4242
		* 어댑터 2 : 호스트 전용 - 이름 = 도구 어댑터
	
### 로컬에서 서버(VM) ssh 연결
```bash
ssh <id>@<ipaddr> -p 4242
```


## Sudo Setting
* Hostname 과 같은 이름의 사용자를 sudo그룹에 넣어야함
	```bash
	adduser <id>
	usermod -aG sudo <id>
	```
* 사용자 전환
	```bash
	login <id> - 사용자로 전환
	su - - root권한으로 전환
	```

### Sudo 설정
* 권한 오류시 메세지 표시
* 비밀번호 오류시 메세지 표시
* sudo 명령 작업은 입/출력을 /var/log/sudo/에 저장
* TTY모드 활성화 - tty가 할당되지않으면 sudo 명령어 사용 불가
	* sudo에서 사용할 수 있는 경로 제한
		* /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin

* Sudo install
	```bash
	apt-get install sudo
	```
* Sudoers setting
	* visudo 명령어로 sudoers.tmp 편집 - MUST be 라고 되어있음
		```bash
		Defaults	authfail_message=""
		Defaults	badpass_message=""
		Defaults	iolog_dir=""
		Defaults	log_input
		Defaults	log_output
		Defaults	requiretty
		Defaults	passwd_tries=3
		```
	* man sudoers 전체 옵션 확인가능

## Password Setting
* 30일마다 만료되어야 함
* 비밀번호 수정 허용 일자는 2일
* 비밀번호 만료 7일전 경고 메세지를 발송해야함
	```bash
	vi /etc/login.defs
	```
	* PASS_* max/min/warn 수정

* 비밀번호는 10자 이상으로 대문자, 소문자, 숫자를 포함해야하며, 동일문자 3개 이상 연속되면 안됨
* 사용자 이름이 포함되어서는 안됨
	```bash
	apt-get install libpam-pwquality
	vi /etc/pam.d/common-password
	retry=3 minlen=10 ucredit=-1 lcredit=-1 dcredit=-1 maxrepeat=3 reject_username enforce_for_root difok=7
	```
* 비밀번호 정책 구성 후 루트 계정을 포함하여 모든 계정의 비밀번호를 변경해야함

## Monitoring.sh
* 모니터링 쉘 스트립트 작성
	* 10분마다 모든 터미널에 정보 표시 - crontab 명령어 사용
		1. 운영 체제의 아키텍처 및 커널 버전
			* uname -a
		2. 물리 프로세서의 갯수
			* nproc --all
		3. 가상 프로세서의 갯수
			* /proc/cpuinfo 파일안에 정보가 들어있음
		4. 사용가능한 RAM 과 사용율(%)
			* free
		5. 사용가능한 메모리(저장소)와 활용율(%)
			* df
		6. 프로세서의 현재 활용율(%)
			* mpstat
		7. 마지막 재부팅 날짜 및 시간
			* who -b
		8. LVM 활성 상태 여부
			* lsblk
		9. 활성화된 연결 수
			* ss
		10. 사용자 수
			who
		11. IPv4 주소 및 MAC 주소
			* hostname -I
			* ip link show
		12. sudo로 실행되는 명령의 갯수
			* journalctl _COMM=sudo
	



## TTY (Teletypewriter)
* 리눅스의 콘솔 및 터미널을 의미

## Difference between Aptitude and Apt
* Apt (Advanced Packaging Tool) - /etc/apt/source.list에 저장된 목록사용
	* apt는 전부 삭제하려면 옵션 추가해야함 (auto-remove, apt-get autoremove)
* Aptitude - UI사용, apt-get / apt-cache를 포함, 설치목록, 자동/수동 설치 및 삭제

## KDump
* 커널패닉이 발생하였을때, BIOS를 거치지 않고 빠르게 새로운 커널로 부팅 - Kexec
* 커널패닉? - 윈도우의 블루스크린 (서버는 재부팅의 리스크 = 서비스 정지)
* Kexec를 실행하기 위한 캡쳐 vmcore를 생성하는 것!
