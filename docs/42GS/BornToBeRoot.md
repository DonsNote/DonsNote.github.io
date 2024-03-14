---
layout: default
title: Born To Be Root
parent: 42GS
nav_order: 1
---


# Mandatory Part(필수 부분)

* 이 프로젝트는 지정된 큐칙에 따라 서버를 구성 및 설정하는 과제입니다.
* GUI를 사용하지 않습니다.(그래픽 서버 설치 금지)
* Debien / Rocky 운영체제 (LTS)버전 사용 (Debian권장)
* Debian용 AppArmor는 시작시 실행되어야한다

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
var/log : 프로그램 로그파일 저장용
boot : 커널 부트 이미지 파티션, 부팅시스템 파일용
```
* 디스크 공간을 '동적'으로 관리할 수 있는 Linux운영 체제 기능
* Devien설치 할때 할당 할 수 있음.(crypt)