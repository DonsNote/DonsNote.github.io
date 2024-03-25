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

```bash
lsblk
fdisk -l
```

## SELinux (Security Enhance Linux)
* 엑서스 권한 제어 보안 아키텍쳐

## Sudo Setting
* 

## Difference between Aptitude and Apt
* Apt (Advanced Packaging Tool) - /etc/apt/source.list에 저장된 목록사용
	* apt는 전부 삭제하려면 옵션 추가해야함 (auto-remove, apt-get autoremove)
* Aptitude - UI사용, apt-get / apt-cache를 포함, 설치목록, 자동/수동 설치 및 삭제

## KDump
* 커널패닉이 발생하였을때, BIOS를 거치지 않고 빠르게 새로운 커널로 부팅 - Kexec
* 커널패닉? - 윈도우의 블루스크린 (서버는 재부팅의 리스크 = 서비스 정지)
* Kexec를 실행하기 위한 캡쳐 vmcore를 생성하는 것!
