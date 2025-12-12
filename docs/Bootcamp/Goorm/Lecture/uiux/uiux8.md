---
layout: default
nav_order: 
title: UIUX 8 - 행동 유도 디자인 설계
description: "User Interface / User Experience"
parent: UIUX
grand_parent: Goorm
has_children: false
---

# 제 8 강 - 행동 유도 디자인 설계

## 사전 질문
1. 여러분이 '중독적으로' 사용하는 앱이나 서비스가 있나요? 왜 계속 사용하게 될까요?
    - 카카오 페이지
        * 기존에 읽던 소설의 지속적인 연재
        * 새로운 소설 찾기
        * 무료로 볼 수 있는 구독권
2. 좋은 기능이 있는데도 사용하지 않게 되는 서비스의 특징은 무엇일까요?
    - iOS 사진 앱
        * 카타고리 정리와 편집등 좋은 기능들이 많음
        * 직관적인 UX를 제공하지 않아 어떻게 사용해야하는지 알기 어려움
        * 각 기능들의 뎁스가 너무 깊어 이해하기 까지 오래 걸림
        * 대체제(앱)들이 많음


## 행동 유도 디자인 설계

행동 유도 디자인은 사용자의 행동을 이해하고, 원하는 행동을 유도하며, 습관을 형성하도록 설계하는 방법론입니다. 윤리적 책임을 가지고 사용자에게 진정한 가치를 제공하면서 제품 목표를 달성하는 것이 핵심입니다.

**행동 유도 디자인의 정의:**
```
사용자가 제품을 지속적으로 사용하도록 동기를 부여하고,
행동 장벽을 낮추며, 적절한 시점에 트리거를 제공하여
습관을 형성하게 만드는 설계 방법론
```

---

### BJ Fogg의 발견

**BJ Fogg**는 스탠포드 대학교의 행동과학자로, 설득 기술(Persuasive Technology)과 행동 디자인 분야의 선구자입니다.

#### Fogg 행동 모델 (Fogg Behavior Model - FBM)

Fogg는 모든 행동이 발생하기 위해서는 세 가지 요소가 동시에 만족되어야 한다고 주장합니다.

**FBM 공식:**
```
B = MAT

B (Behavior): 행동
M (Motivation): 동기
A (Ability): 능력
T (Trigger): 트리거
```

**핵심 원리:**
- 세 요소가 모두 충족되어야 행동 발생
- 하나라도 부족하면 행동이 일어나지 않음
- 각 요소는 서로를 보완할 수 있음

**예시:**
```
이메일 뉴스레터 구독하기:

M (동기): 유용한 정보를 받고 싶다
A (능력): 이메일 주소 입력만 하면 됨 (쉬움)
T (트리거): "무료로 구독하기" 버튼

→ 세 가지가 모두 충족되어 구독 행동 발생
```

---

### 행동 임계점 (Action Line)

행동 임계점은 사용자가 행동을 실행하는 데 필요한 동기와 능력의 최소 조합을 나타내는 곡선입니다.

#### 행동 임계점 그래프

```
    동기
     ↑
높음 │     ●               행동 발생 영역
    │   ●   ●
    │ ●       ●
    │●─────────●─────── 행동 임계선
    │             ●
낮음 │               ●     행동 미발생 영역
    └─────────────────→
     어려움         쉬움    능력
```

**핵심 인사이트:**

**1. 트레이드오프 관계**
- 동기가 높으면 능력이 낮아도 행동 가능
- 능력이 높으면 (매우 쉬우면) 동기가 낮아도 행동 가능

**2. 최적화 전략**
```
시나리오 1: 동기는 높지만 어려움
→ 능력 향상 (단순화, 자동화)

시나리오 2: 쉽지만 동기 부족
→ 동기 강화 (혜택 강조, 긴급성)

시나리오 3: 둘 다 부족
→ 능력 향상 우선 (능력이 더 쉽게 개선됨)
```

**3. 능력 우선 원칙**
- 동기 부여는 어렵고 지속성이 낮음
- 능력 향상 (사용성 개선)은 지속적 효과
- **"동기를 높이기보다 쉽게 만들어라"**

**실무 적용:**
```
❌ 나쁜 접근:
"운동을 시작하세요!" (동기만 강조)
→ 초기에는 효과 있지만 곧 중단

✅ 좋은 접근:
"오늘 2분만 스트레칭하기" (능력 높임)
→ 지속 가능한 습관 형성
```

---

### 동기 (Motivation)

동기는 사용자가 행동을 하려는 욕구입니다.

#### Fogg의 3가지 핵심 동기

**1. 쾌락 추구 / 고통 회피 (Pleasure / Pain)**
- 즉각적인 만족 vs 불편함 제거
```
쾌락: "좋아요를 받으면 기분 좋음"
고통 회피: "스팸 메일 차단"
```

**2. 희망 / 두려움 (Hope / Fear)**
- 긍정적 미래 vs 부정적 결과 회피
```
희망: "운동하면 건강해질 거야"
두려움: "백업 안 하면 데이터 잃을 수 있어"
```

**3. 사회적 수용 / 거부 (Social Acceptance / Rejection)**
- 소속감 vs 소외감
```
수용: "친구들도 다 쓰는 앱"
거부: "이걸 안 쓰면 뒤처질까봐"
```

#### 동기 부여 전략

**1. 혜택 강조**
```
❌ "회원가입하세요"
✅ "가입하고 10% 할인받기"
```

**2. 손실 회피 활용**
```
"지금 떠나면 장바구니 상품이 사라질 수 있습니다"
"마지막 1개 남았습니다"
```

**3. 사회적 증거**
```
"1만 명이 이미 사용 중입니다"
"친구 5명이 좋아요를 눌렀습니다"
```

---

### 능력 (Ability)

능력은 사용자가 행동을 얼마나 쉽게 할 수 있는지를 나타냅니다.

#### 능력을 구성하는 6가지 요소

행동이 쉬울수록 능력이 높아집니다. 다음 6가지 요소 중 하나라도 높으면 행동이 어려워집니다.

**1. 시간 (Time)**
- 행동에 걸리는 시간
```
어려움 ❌: 복잡한 회원가입 (5분 소요)
쉬움 ✅: 소셜 로그인 (10초 소요)
```

**2. 돈 (Money)**
- 비용 부담
```
어려움 ❌: 유료 구독 필요
쉬움 ✅: 무료 체험 또는 프리미엄
```

**3. 육체적 노력 (Physical Effort)**
- 신체적 수고
```
어려움 ❌: 많은 스크롤과 클릭
쉬움 ✅: 원클릭 구매, 음성 명령
```

**4. 인지적 노력 (Brain Cycles)**
- 생각하고 이해하는 노력
```
어려움 ❌: 복잡한 설정, 전문 용어
쉬움 ✅: 직관적 UI, 명확한 레이블
```

**5. 사회적 일탈 (Social Deviance)**
- 사회적 규범에서 벗어나는 정도
```
어려움 ❌: "이상한 사람으로 보일까?"
쉬움 ✅: 모두가 하는 행동, 익명 보장
```

**6. 비일상성 (Non-Routine)**
- 기존 루틴과 다른 정도
```
어려움 ❌: 완전히 새로운 방식
쉬움 ✅: 기존 습관에 통합 가능
```

#### 능력 향상 전략

**단순화 (Simplify):**
- 단계 줄이기
- 필수 정보만 요구
- 자동 완성, 기본값 제공

**친숙화 (Familiarize):**
- 익숙한 패턴 사용
- 업계 표준 따르기
- 온보딩 제공

**자동화 (Automate):**
- 반복 작업 자동화
- 스마트 기본값
- 기억 및 재사용

---

### PM이 집중해야 할 것: 능력의 마법

**핵심 원칙: "동기를 높이려 하지 말고, 쉽게 만들어라"**

#### 왜 능력 향상이 우선인가?

**1. 동기는 변덕스럽다**
- 시간에 따라 변함
- 외부 요인에 영향 받음
- 지속 가능하지 않음

**2. 능력은 지속적이다**
- 한 번 쉬워지면 계속 쉬움
- 학습 효과
- 누적된 개선

**3. 능력은 통제 가능하다**
- PM이 직접 개선 가능
- 디자인과 개발로 해결
- 측정 가능

#### 실무 전략

**Step 1: 병목 지점 찾기**
```
사용자 여정에서 이탈이 많은 곳:
- 회원가입 중단율 80%
→ 입력 필드가 너무 많음 (인지적 노력 ↑)
```

**Step 2: 6가지 요소로 분석**
```
무엇이 행동을 어렵게 만드는가?
- 시간? 15개 필드 입력 (3분 소요)
- 인지적 노력? 복잡한 비밀번호 규칙
- 비일상성? 생소한 입력 방식
```

**Step 3: 가장 큰 장벽 제거**
```
개선안:
- 필수 필드 3개로 축소 (시간 ↓)
- 소셜 로그인 추가 (인지적 노력 ↓)
- 나머지는 나중에 입력 가능
```

**Step 4: 측정 및 반복**
```
개선 후:
- 가입 완료율 80% → 65% 증가
- 평균 소요 시간 3분 → 30초
```

**사례:**
```
Amazon 원클릭 구매:
- 결제 정보 저장 (시간 ↓)
- 한 번의 클릭 (육체적 노력 ↓)
- 복잡한 결제 과정 제거 (인지적 노력 ↓)
→ 전환율 대폭 증가
```

---

### 트리거 (Trigger)

트리거는 행동을 촉발하는 신호입니다. 동기와 능력이 충분해도 트리거가 없으면 행동이 일어나지 않습니다.

#### 트리거의 3가지 유형

**1. 촉진자 (Facilitator)**
- **상황**: 높은 동기 + 낮은 능력
- **목적**: 행동을 쉽게 만들기
- **전략**: "지금 바로 쉽게 할 수 있어요"

```
예시:
"운동하고 싶지만 귀찮아"
→ 트리거: "5분 홈 트레이닝 시작하기" 버튼
   (능력 향상 + 즉시 실행 가능)
```

**2. 신호 (Signal)**
- **상황**: 높은 동기 + 높은 능력
- **목적**: 적절한 시점 알림
- **전략**: "지금이 적기예요"

```
예시:
"이미 운동 습관이 있고, 앱 사용법도 잘 알아"
→ 트리거: "운동 시간입니다 🏃"
   (타이밍 리마인더)
```

**3. 점화 (Spark)**
- **상황**: 낮은 동기 + 높은 능력
- **목적**: 동기 부여
- **전략**: "왜 해야 하는지 알려줄게요"

```
예시:
"운동이 쉽지만 하기 싫어"
→ 트리거: "친구가 당신을 앞질렀어요! 🏆"
   (경쟁심 자극, 사회적 동기)
```

#### 효과적인 트리거 설계

**1. 타이밍**
```
✅ 적절한 시점:
- 사용자가 필요로 할 때
- 관련 행동 직후
- 루틴에 맞춤 (아침, 퇴근 시간 등)

❌ 부적절한 시점:
- 한밤중 알림
- 업무 중 개인 알림
- 너무 자주
```

**2. 관련성**
```
✅ 맥락에 맞는 트리거:
"방금 본 상품이 할인 중입니다"
"친구가 댓글을 남겼습니다"

❌ 무관한 트리거:
"새 업데이트가 있습니다" (관심 없음)
"랜덤 프로모션"
```

**3. 개인화**
```
✅ 개인 맞춤:
"좋아하는 작가의 새 글"
"즐겨찾기한 팀이 곧 경기"

❌ 일반적:
"모든 사용자에게 동일한 알림"
```

---

### Hook Model: 습관 설계도

**Nir Eyal**이 제시한 Hook Model은 사용자 습관을 형성하는 4단계 순환 구조입니다.

**Hook Model의 4단계:**
```
1. Trigger (트리거) 
   ↓
2. Action (행동)
   ↓
3. Variable Reward (가변적 보상)
   ↓
4. Investment (투자)
   ↓
(다시 1로 순환)
```

---

#### 1. Triggers (트리거)

습관 형성의 시작점입니다.

**External Triggers (외부 트리거):**
- 외부에서 오는 신호
- 사용자에게 행동 촉구

```
유형:
- 유료: 광고, 마케팅
- 획득: SEO, 바이럴 콘텐츠
- 관계: 친구 추천, 공유
- 소유: 푸시 알림, 이메일
```

**Internal Triggers (내부 트리거):**
- 사용자 내면의 감정이나 상황
- 가장 강력한 트리거
- 습관 형성의 궁극적 목표

```
감정 기반:
- 지루함 → SNS 확인
- 외로움 → 메신저 열기
- 불확실성 → 검색
- 불안 → 이메일 체크
- FOMO → 피드 스크롤
```

**External → Internal 전환:**
```
초기: "알림이 와서 앱을 열었다" (외부)
   ↓
반복 사용
   ↓
습관: "심심하면 자동으로 앱을 연다" (내부)
```

---

#### 2. Action (행동)

트리거 후 사용자가 취하는 행동입니다.

**행동 설계 원칙:**

**1. 최대한 간단하게 (FBM 적용)**
```
B = MAT
- M (동기): 트리거가 제공
- A (능력): 매우 쉽게 만들기
- T (트리거): 명확하게
```

**2. 즉각적 만족**
```
❌ 나중에 보상:
"가입하면 나중에 할인 쿠폰"

✅ 즉시 보상:
"가입 완료! 바로 사용 가능합니다"
```

**3. 명확한 다음 단계**
```
사용자가 "지금 뭘 해야 하지?" 고민하지 않게
- 명확한 CTA
- 한 번에 하나의 행동만
```

**예시:**
```
Instagram:
Trigger: 알림 "친구가 사진을 올렸습니다"
Action: 앱 열기 → 피드 스크롤
      (매우 쉬움: 한 번의 탭, 자동 재생)
```

---

#### 3. Variable Reward (가변적 보상)

예측 불가능한 보상이 더 강력한 동기를 만듭니다.

**왜 가변적인가?**
- 뇌는 예측 불가능성에 더 흥분
- 도파민 분비 증가
- "다음엔 뭐가 나올까?" 기대감

**보상의 3가지 유형 (BJ Fogg):**

**1. Rewards of the Tribe (사회적 보상)**
- 타인과의 연결에서 오는 만족
```
예시:
- 좋아요, 댓글, 공유
- 팔로워 증가
- 멘션, 태그
- 랭킹, 리더보드

가변성:
"몇 개의 좋아요를 받을까?"
"누가 댓글을 달았을까?"
```

**2. Rewards of the Hunt (사냥 보상)**
- 자원이나 정보 획득
```
예시:
- 피드 스크롤 (새 콘텐츠 발견)
- 검색 결과
- 할인, 쿠폰
- 경품, 가챠

가변성:
"다음엔 뭐가 나올까?"
"좋은 게 나올까?"
```

**3. Rewards of the Self (자아 보상)**
- 자기 만족, 성취감
```
예시:
- 레벨 업, 배지
- 목표 달성 (운동 기록)
- 완성도 (프로필 100%)
- 학습 진도

가변성:
"오늘은 새 배지를 얻을까?"
"기록을 갱신할 수 있을까?"
```

**가변성 설계 팁:**
```
❌ 고정된 보상:
"매일 로그인하면 10포인트"
→ 예측 가능, 지루함

✅ 가변적 보상:
"매일 로그인하면 10~100포인트 랜덤 지급!"
→ 기대감, 반복 유도
```

---

#### 4. Investment (투자)

사용자가 제품에 시간, 노력, 데이터 등을 투자하게 만듭니다.

**투자의 목적:**

**1. 다음 트리거 로드**
- 사용자의 투자가 다음 사이클의 트리거가 됨
```
예시:
사용자가 친구를 팔로우 (투자)
→ 친구가 게시물 올림 (다음 트리거)
```

**2. 저장된 가치 (Stored Value)**
- 제품을 떠나기 어렵게 만듦
```
유형:
- 콘텐츠: 사진, 글, 플레이리스트
- 데이터: 운동 기록, 금융 데이터
- 평판: 팔로워, 리뷰 평점
- 학습: 숙련도, 레벨
- 관계: 친구, 네트워크
```

**3. 선호도 학습**
- 사용자 데이터로 경험 개선
```
사용자가 좋아요 누름 (투자)
→ 맞춤 추천 정확도 증가
→ 더 나은 경험
→ 계속 사용
```

**투자 설계 원칙:**

**1. 보상 이후에 요청**
```
순서:
Trigger → Action → Reward → Investment

❌ 보상 전 투자 요청:
"먼저 프로필을 완성하세요"

✅ 보상 후 투자 유도:
"좋아요 10개 받았어요! 프로필 사진 추가하기"
```

**2. 작은 투자부터**
```
❌ 큰 투자:
"친구 20명 초대하세요"

✅ 작은 투자:
"첫 친구 추가하기"
```

**3. 가치 명확히**
```
투자하면 무엇이 좋아지는지:
"프로필을 완성하면 3배 더 많은 매칭"
"플레이리스트를 만들면 더 정확한 추천"
```

**예시:**
```
Twitter Hook:
1. Trigger: 알림 "인기 트윗"
2. Action: 앱 열기, 피드 스크롤
3. Reward: 재미있는 트윗 발견 (가변적)
4. Investment: 
   - 좋아요, 리트윗 (다음 트리거 생성)
   - 팔로우 (피드 개인화)
   - 자신의 트윗 작성 (콘텐츠 축적)
→ 다시 1로 순환
```

---

#### Hook Model 전체 예시

**Instagram:**
```
1. Trigger (외부):
   - 푸시: "친구가 사진을 올렸습니다"
   - 내부: 심심함, 호기심

2. Action:
   - 앱 열기 (매우 쉬움)
   - 피드 스크롤 (무한 스크롤)

3. Variable Reward:
   - 사회적: 좋아요, 댓글
   - 사냥: 흥미로운 콘텐츠 발견
   - 자아: 자신의 게시물 반응

4. Investment:
   - 사진 업로드 (콘텐츠)
   - 친구 팔로우 (네트워크)
   - 좋아요/댓글 (다음 트리거)
   - 알고리즘 학습 (개인화)

→ 다시 1로: 투자한 내용이 새 트리거 생성
```

---

### Gamification (게임화)

게임 요소와 메커니즘을 게임이 아닌 맥락에 적용하여 사용자 참여와 동기를 높이는 기법입니다.

#### 게임화의 핵심 요소

**1. 포인트 (Points)**
- 진행 상황 측정
- 성취감 제공
```
예시:
- 경험치 (XP)
- 크레딧, 코인
- 스탬프, 마일리지
```

**2. 배지 (Badges)**
- 성취 표시
- 수집 욕구 자극
```
예시:
- "첫 구매 완료" 배지
- "100일 연속 로그인" 배지
- 희귀 배지로 차별화
```

**3. 리더보드 (Leaderboards)**
- 사회적 경쟁
- 순위 확인
```
유형:
- 전체 순위
- 친구 순위
- 주간/월간 리더보드
```

**4. 레벨 (Levels)**
- 진행 단계
- 성장 시각화
```
예시:
- Level 1 → Level 50
- "초보자 → 전문가"
- 레벨업 시 보상
```

**5. 도전과제 (Challenges)**
- 목표 설정
- 완수 동기
```
예시:
- "이번 주 5일 운동하기"
- "친구 3명 초대하기"
- 시간 제한 챌린지
```

**6. 진행 바 (Progress Bars)**
- 완성도 시각화
- "거의 다 됐어!" 효과
```
예시:
- 프로필 완성도 80%
- "2단계 남았습니다"
```

#### 게임화 설계 원칙

**1. 의미 있는 보상**
```
❌ 무의미:
"축하합니다! 별 10개 획득"
(별을 왜 모으는지 모름)

✅ 의미 있음:
"별 10개로 프리미엄 기능 1주일 무료 사용"
```

**2. 균형 잡힌 난이도**
```
너무 쉬움 → 지루함
너무 어려움 → 좌절
적절함 → 몰입 (Flow)
```

**3. 진정한 가치 제공**
```
게임화는 수단이지 목적이 아님
사용자에게 실질적 혜택 제공
```

**성공 사례:**

**Duolingo (언어 학습):**
```
- 연속 학습 일수 (Streak)
- 리그 시스템 (경쟁)
- XP와 레벨업
- 일일 목표 달성 보상
→ 학습 지속률 대폭 증가
```

**Nike Run Club:**
```
- 달리기 기록 추적
- 배지 및 마일스톤
- 친구와 경쟁
- 개인 기록 갱신 축하
→ 운동 습관 형성
```

---

### Octalysis Framework

**Yu-kai Chou**가 개발한 게임화 프레임워크로, 인간 동기를 8가지 핵심 동인(Core Drives)으로 분류합니다.

#### 8가지 핵심 동인

```
        1. Epic Meaning
             (서사적 의미)
               ↑
8. Loss &   ←   → 2. Development
   Avoidance       & Accomplishment
   (손실 회피)      (발전과 성취)
       ↓             ↓
7. Unpredictability  3. Empowerment
   & Curiosity          of Creativity
   (불확실성과 호기심)   (창의성 발휘)
       ↓             ↓
6. Scarcity &    →  4. Ownership
   Impatience       & Possession
   (희소성과 조급함)  (소유와 소지)
               ↓
          5. Social Influence
             (사회적 영향)
```

**각 동인 설명:**

**1. Epic Meaning & Calling (서사적 의미와 소명)**
- "나는 특별한 목적을 위해 선택받았다"
```
예시:
- Wikipedia 편집: "인류 지식에 기여"
- 오픈소스 기여: "더 나은 세상"
- 자선 기부: "어려운 이웃 돕기"
```

**2. Development & Accomplishment (발전과 성취)**
- 성장하고 도전을 극복하는 욕구
```
예시:
- 레벨업, 경험치
- 스킬 트리
- 진행 바, 배지
- "전문가 되기"
```

**3. Empowerment of Creativity & Feedback (창의성 발휘와 피드백)**
- 창조하고 실험하며 결과를 보는 즐거움
```
예시:
- 레고: 자유로운 창작
- 마인크래프트: 세계 구축
- 커스터마이징: 아바타, 테마
```

**4. Ownership & Possession (소유와 소지)**
- 내 것이라는 느낌, 축적 욕구
```
예시:
- 컬렉션 (사진, 플레이리스트)
- 가상 재화 (코인, 아이템)
- 프로필 꾸미기
- "내 공간" 개념
```

**5. Social Influence & Relatedness (사회적 영향과 관계)**
- 타인의 행동에 영향받고 연결되고 싶은 욕구
```
예시:
- 좋아요, 공유, 댓글
- 친구 초대 보상
- 리더보드 경쟁
- "친구도 쓰고 있어요"
```

**6. Scarcity & Impatience (희소성과 조급함)**
- 희귀하거나 즉시 얻을 수 없는 것에 대한 욕구
```
예시:
- 한정판, "마지막 1개"
- 시간 제한 이벤트
- 초대 전용
- 대기 시간 (모바일 게임 에너지)
```

**7. Unpredictability & Curiosity (불확실성과 호기심)**
- 다음에 무엇이 일어날지 모르는 흥미
```
예시:
- 랜덤 보상 (가챠, 룰렛)
- 서프라이즈 이벤트
- 피드 무한 스크롤 (다음엔 뭐가?)
- 복권, 추첨
```

**8. Loss & Avoidance (손실과 회피)**
- 잃을까봐 두려워하는 심리
```
예시:
- "연속 로그인 끊기지 않게"
- "장바구니 상품 곧 사라져요"
- "레벨 다운 방지"
- FOMO (Fear of Missing Out)
```

#### Octalysis 활용

**좌뇌 vs 우뇌:**
- **좌뇌 동인 (2, 4, 6)**: 논리적, 소유욕
- **우뇌 동인 (3, 5, 7)**: 창의적, 사회적

**화이트햇 vs 블랙햇:**
- **화이트햇 (상위 1, 2, 3)**: 긍정적, 건강한 동기
- **블랙햇 (하위 6, 7, 8)**: 부정적, 중독성 (윤리적 주의)

---

### Dark Pattern (다크 패턴)

사용자를 속이거나 조작하여 원치 않는 행동을 하게 만드는 비윤리적 디자인 패턴입니다.

#### 주요 다크 패턴 유형

**1. Bait and Switch (미끼와 바꿔치기)**
- 기대와 다른 결과
```
예시:
- 광고: "무료 다운로드!"
  실제: 다운로드는 무료, 사용은 유료
```

**2. Disguised Ads (위장 광고)**
- 광고를 콘텐츠처럼 보이게
```
예시:
- 뉴스 기사처럼 보이는 광고
- "다운로드" 버튼처럼 보이는 광고
```

**3. Forced Continuity (강제 연속성)**
- 무료 체험 종료 후 자동 결제
```
예시:
- 카드 등록 필수 무료 체험
- 취소 어렵게 만들기
- 사전 알림 없이 청구
```

**4. Friend Spam (친구 스팸)**
- 동의 없이 연락처에 메시지 발송
```
예시:
- "연락처 접근 허용"
  → 모든 친구에게 초대 메시지
```

**5. Hidden Costs (숨겨진 비용)**
- 마지막 단계에서 추가 비용 공개
```
예시:
- 결제 직전: "배송비 5,000원 추가"
- 세금, 수수료 나중에 표시
```

**6. Misdirection (오도)**
- 주의를 다른 곳으로 돌림
```
예시:
- "동의" 버튼은 크고 눈에 띄게
- "거부" 버튼은 작고 회색으로
```

**7. Price Comparison Prevention (가격 비교 방지)**
- 다른 옵션과 비교 어렵게
```
예시:
- 복잡한 가격 구조
- 애매한 단위 (ml vs oz)
```

**8. Privacy Zuckering**
- 의도치 않게 개인정보 공개
```
예시:
- 기본값이 "전체 공개"
- 복잡한 개인정보 설정
```

**9. Roach Motel (바퀴벌레 함정)**
- 들어가기는 쉽고 나가기는 어려움
```
예시:
- 가입: 클릭 한 번
- 탈퇴: 고객센터 전화, 복잡한 절차
```

**10. Sneak into Basket (몰래 장바구니 담기)**
- 동의 없이 상품 추가
```
예시:
- 체크되어 있는 "보험 추가" 옵션
- "추천 상품 함께 담기" 기본 선택
```

**11. Trick Questions (속임수 질문)**
- 혼란스러운 질문
```
예시:
- "스팸 메일을 받지 않으시겠습니까?"
  → "아니요" = 받겠다는 뜻?
```

#### 왜 다크 패턴을 피해야 하는가?

**1. 신뢰 손실**
- 사용자가 속았다고 느낌
- 브랜드 평판 하락
- 부정적 입소문

**2. 법적 문제**
- 소비자 보호법 위반
- 집단 소송 위험
- 규제 강화 (GDPR, CCPA 등)

**3. 장기적 손실**
- 단기 이익, 장기 손해
- 사용자 이탈
- 지속 가능하지 않음

**4. 윤리적 책임**
- 디자이너의 사회적 책임
- 사용자 존중
- 투명성과 정직성

#### 윤리적 설득 vs 조작

**윤리적 설득 ✅:**
```
- 투명한 정보 제공
- 사용자 선택 존중
- 진정한 가치 제공
- 쉬운 탈퇴 옵션
- 명확한 비용 안내
```

**비윤리적 조작 ❌:**
```
- 정보 숨기기
- 선택 제한
- 가짜 긴급성
- 복잡한 탈퇴
- 숨겨진 비용
```

**윤리적 체크리스트:**
- [ ] 사용자에게 정직한가?
- [ ] 투명하게 공개하는가?
- [ ] 쉽게 취소/탈퇴 가능한가?
- [ ] 사용자가 통제권을 가지는가?
- [ ] 장기적으로 신뢰를 구축하는가?

---

## 행동 유도 디자인의 윤리

**책임 있는 설계:**

**1. 사용자 복지 우선**
- 사용자에게 진정한 가치 제공
- 중독이 아닌 습관 형성
- 건강한 사용 패턴 장려

**2. 투명성**
- 의도를 명확히
- 숨기지 않기
- 예상 가능한 결과

**3. 통제권 부여**
- 사용자가 선택할 수 있게
- 쉬운 탈퇴/취소
- 알림 설정 자유

**4. 균형**
- 비즈니스 목표와 사용자 이익의 균형
- 단기 전환율보다 장기 신뢰

**사례:**
```
✅ 윤리적 습관 형성 (Duolingo):
- 학습 습관 형성 (사용자 이익)
- 연속 학습 장려 (동기 부여)
- 과도한 사용 경고 (건강한 습관)
- 언제든 중단 가능 (통제권)

❌ 비윤리적 중독 유도:
- 무한 피드 스크롤 (시간 낭비)
- 가짜 긴급성 (FOMO)
- 탈퇴 어렵게 만들기
- 숨겨진 비용
```

---

## 핵심 요약

**행동 유도 디자인의 핵심:**

1. **FBM (Fogg Behavior Model)**: B = M × A × T
   - 동기, 능력, 트리거 모두 필요
   - 능력 향상 우선 (쉽게 만들기)

2. **Hook Model**: 습관 형성 순환
   - Trigger → Action → Reward → Investment

3. **Gamification**: 게임 요소로 참여 증대
   - 의미 있는 보상
   - 적절한 난이도

4. **Octalysis**: 8가지 인간 동기
   - 다양한 동인 조합
   - 화이트햇 vs 블랙햇

5. **윤리적 설계**: 
   - 투명성, 통제권, 진정한 가치
   - 다크 패턴 회피

**실무 적용:**
- 사용자 행동 분석 → 병목 지점 파악
- 능력 장벽 제거 → 쉽게 만들기
- 적절한 트리거 설계 → 타이밍과 맥락
- 가변적 보상 제공 → 지속적 참여
- 윤리적 책임 → 장기적 신뢰 구축

## 과제

### 연구 과제
1. 당신이 습관적으로 쓰는 앱 하나를 골라 "왜 계속 쓰는가"를 먼저 적어 봅니다. 그 다음 MAT(동기×능력×트리거) 공식으로 다시 분석해 봅니다. 처음 적은 이유와 다른 부분이 있다면 왜 그랬을까요?
2. 좋은데 안 쓰게 되는 앱을 하나 떠올려 봅니다. 능력(Ability)의 6가지 요소 중 어떤 것이 병목인지 특정해 봅니다. 한 가지로 딱 집어서 말하기 어렵다면 무엇이 판단을 방해하는지 관찰해 봅니다.
3. 그 앱의 리텐션을 높이는 Hook 순환(트리거→행동→보상→투자)을 설계해 봅니다. 네 단계 중 어디서 막히는지, 그리고 그 막힘이 "사용자 이해 부족" 때문인지 "메커니즘 이해 부족" 때문인지 구분해 봅니다.

### 그룹 과제
1. 좋은 서비스이지만 자주 들어가지 않게 되는 서비스를 조원별로 하나씩 소개합니다.
2. 그 중 하나를 선택해 오늘 배운 내용을 바탕으로 자주 방문하게 만드는 구조를 설계하기 위한 행동 흐름을 설계해 봅니다.
3. 각 행동별로 지속적 방문을 유도하기 위한 전략을 학습한 내용들에 기반하여 제안해 봅니다.
4. 최종적으로 습관적 사용의 행동 흐름을 이해할 수 있는 시각 자료를 만들어 봅니다.


## 참고 자료
- [8강 연구 과제 PDF](/assets/pdf/goormuiux8iw.pdf)
- [8강 그룹 과제 PDF](/assets/pdf/goormuiux8gw.pdf)

### 학습 자료 및 출처

#### 서적

**행동 디자인 & 습관 형성**

1. **"Hooked: How to Build Habit-Forming Products" - Nir Eyal (2014)**
   - Hook Model의 창시자
   - 습관 형성 제품 설계의 바이블
   - Trigger → Action → Reward → Investment 순환 구조
   - 윤리적 설계 원칙 포함
   - [Amazon](https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788)

2. **"Indistractable: How to Control Your Attention and Choose Your Life" - Nir Eyal (2019)**
   - Hooked의 후속작
   - 건강한 기술 사용법
   - 산만함 극복 방법
   - 윤리적 제품 디자인

3. **"Atomic Habits" - James Clear (2018)**
   - 습관 형성의 과학
   - 작은 변화가 만드는 큰 결과
   - 1% 개선의 복리 효과
   - 실생활 적용 가능한 전략
   - [Amazon](https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299)

4. **"The Power of Habit" - Charles Duhigg (2012)**
   - 습관 루프: Cue → Routine → Reward
   - 개인과 조직의 습관 변화
   - 실제 사례 연구
   - [Amazon](https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X)

**설득 기술 & 행동 과학**

5. **"Persuasive Technology" - BJ Fogg (2002)**
   - 설득 기술의 아버지
   - 컴퓨터가 태도와 행동을 바꾸는 방법
   - Fogg Behavior Model (FBM) 기초
   - 스탠포드 연구 기반
   - [Amazon](https://www.amazon.com/Persuasive-Technology-Computers-Interactive-Technologies/dp/1558606432)

6. **"Tiny Habits" - BJ Fogg (2019)**
   - 작은 습관의 힘
   - Behavior = Motivation × Ability × Prompt
   - 실천 가능한 행동 변화 전략
   - [Amazon](https://www.amazon.com/Tiny-Habits-Changes-Change-Everything/dp/0358003326)

7. **"Influence: The Psychology of Persuasion" - Robert Cialdini (1984)**
   - 설득의 6가지 원칙
   - 상호성, 일관성, 사회적 증거, 호감, 권위, 희소성
   - 마케팅과 UX에 적용
   - [Amazon](https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X)

8. **"Nudge" - Richard Thaler & Cass Sunstein (2008)**
   - 행동경제학 기반 넛지 이론
   - 선택 설계 (Choice Architecture)
   - 부드러운 개입으로 행동 변화
   - 노벨 경제학상 수상 이론
   - [Amazon](https://www.amazon.com/Nudge-Improving-Decisions-Health-Happiness/dp/014311526X)

**게임화**

9. **"Actionable Gamification" - Yu-kai Chou (2015)**
   - Octalysis Framework 창시자
   - 8가지 핵심 동인 (Core Drives)
   - 화이트햇 vs 블랙햇 게임화
   - 실무 적용 사례
   - [Actionable Gamification](https://yukaichou.com/gamification-book/)

10. **"The Gamification of Learning and Instruction" - Karl Kapp (2012)**
    - 교육과 학습의 게임화
    - 게임 메커니즘 활용법
    - 참여도와 동기 부여 증대

11. **"Reality is Broken" - Jane McGonigal (2011)**
    - 게임이 세상을 바꾸는 방법
    - 게임 디자인 원리를 현실에 적용
    - 긍정적 게임화

**다크 패턴 & 윤리**

12. **"Evil by Design" - Chris Nodder (2013)**
    - 다크 패턴의 심리학
    - 비윤리적 설득 기법 분석
    - 윤리적 경계선
    - [Amazon](https://www.amazon.com/Evil-Design-Interaction-Lead-Temptation/dp/1118422147)

13. **"Technically Wrong" - Sara Wachter-Boettcher (2017)**
    - 기술이 사회에 미치는 부정적 영향
    - 편향과 배제의 디자인
    - 책임 있는 디자인

**행동경제학**

14. **"Thinking, Fast and Slow" - Daniel Kahneman (2011)**
    - 노벨상 수상 행동경제학자
    - 시스템 1 (빠른 사고) vs 시스템 2 (느린 사고)
    - 인지 편향과 휴리스틱
    - UX 디자인에 필수적인 통찰

15. **"Predictably Irrational" - Dan Ariely (2008)**
    - 비합리적 행동의 패턴
    - 가격 책정, 선택 설계
    - 실험 기반 행동경제학

#### 관련 강의 및 코스

**온라인 강의 플랫폼**

1. **Coursera - Stanford University**
   - [Behavior Design Studio](https://www.coursera.org/)
   - BJ Fogg의 행동 디자인 원리
   - Tiny Habits 방법론
   - 실습 프로젝트 포함

2. **Udemy**
   - "Hooked: How to Build Habit-Forming Products"
   - "Gamification & Behavioral Design"
   - Nir Eyal 본인 강의
   - 실전 사례 중심

3. **Interaction Design Foundation (IxDF)**
   - [Behavioral Design](https://www.interaction-design.org/courses/behavioral-design)
   - 행동 변화 디자인 종합 과정
   - FBM, Hook Model, Gamification 통합

4. **LinkedIn Learning**
   - "Persuasive UX: The Ethics of Behavioral Design"
   - "Gamification of Learning"
   - 윤리적 설득 기법

**무료 리소스**

5. **BJ Fogg's Behavior Design Lab**
   - [Behavior Model](http://www.behaviormodel.org/)
   - 무료 온라인 자료
   - Behavior Grid, Tiny Habits 방법론

6. **Nir Eyal's Blog**
   - [NirAndFar.com](https://www.nirandfar.com/)
   - Hook Model 심화 아티클
   - 행동 디자인 사례 연구

7. **Yu-kai Chou's Gamification Blog**
   - [Yukaichou.com](https://yukaichou.com/)
   - Octalysis Framework 상세 설명
   - 게임화 전략과 사례

#### 실무 사례 참고

**주요 플랫폼 분석**

1. **Duolingo (언어 학습)**
   - Gamification의 모범 사례
   - Streak (연속 학습 일수)
   - 리그 시스템
   - XP, 레벨업, 배지
   - 적절한 난이도 조절
   - [케이스 스터디](https://blog.duolingo.com/)

2. **Instagram**
   - Hook Model 완벽 구현
   - 무한 스크롤 (Variable Reward)
   - 좋아요, 댓글 (Social Reward)
   - 알고리즘 개인화 (Investment)

3. **LinkedIn**
   - 프로필 완성도 진행 바
   - "축하합니다!" 사회적 보상
   - 네트워크 효과
   - 주간 활동 요약

4. **Strava (운동 추적)**
   - 운동 기록 시각화
   - 세그먼트 경쟁 (리더보드)
   - Kudos (사회적 보상)
   - 클럽과 챌린지

5. **Headspace (명상 앱)**
   - 연속 명상 일수
   - 마일스톤 배지
   - 진행 시각화
   - 친구와 함께 명상

**다크 패턴 사례**

6. **Dark Patterns Hall of Shame**
   - [Darkpatterns.org](https://www.darkpatterns.org/)
   - 실제 다크 패턴 사례 모음
   - 유형별 분류
   - 비판적 분석

7. **Deceptive Design**
   - [DeceptiveDesign.net](https://www.deceptive.design/)
   - 다크 패턴 데이터베이스
   - 카테고리별 정리
   - 법적 사례

**아티클 & 블로그**

8. **Nielsen Norman Group**
   - [Gamification](https://www.nngroup.com/articles/gamification/)
   - 게임화의 효과와 한계
   - 사용자 조사 기반

9. **Smashing Magazine**
   - Behavioral Design 아티클
   - Hook Model 실전 적용
   - 윤리적 설계 가이드

10. **UX Collective**
    - [Medium - UX Design](https://uxdesign.cc/)
    - 행동 유도 디자인 사례
    - 실무자 경험담

#### Youtube 채널

**전문가 채널**

1. **Nir Eyal**
   - [Nir Eyal YouTube](https://www.youtube.com/c/NirEyal)
   - Hook Model 설명
   - 습관 형성 전략
   - Q&A 세션

2. **BJ Fogg**
   - Tiny Habits 워크샵
   - Behavior Model 강의
   - 스탠포드 강의 영상

3. **Yu-kai Chou**
   - [Yu-kai Chou YouTube](https://www.youtube.com/user/yukaichou)
   - Octalysis Framework 설명
   - 게임화 사례 분석
   - 기업 컨설팅 인사이트

**UX/디자인 채널**

4. **The Futur**
   - 행동 디자인과 비즈니스
   - 설득 기법
   - 클라이언트 커뮤니케이션

5. **NN/g (Nielsen Norman Group)**
   - [Gamification in UX](https://www.youtube.com/@NNgroup)
   - 연구 기반 인사이트
   - 사용성 테스트 결과

**추천 영상**

6. **"How to Design for Behavior Change" - BJ Fogg (TED)**
   - Behavior Model 핵심 요약
   - 실생활 적용 사례

7. **"The Hook Model" - Nir Eyal**
   - 4단계 순환 구조
   - 습관 형성 메커니즘

8. **"Gamification at Work" - Yu-kai Chou (Google Talk)**
   - 직장에서의 게임화
   - Octalysis 적용

#### 커뮤니티

**온라인 커뮤니티**

1. **Behavioral Design Community (Slack)**
   - 행동 디자이너 네트워크
   - 사례 공유 및 토론

2. **Hooked Community**
   - Nir Eyal의 공식 커뮤니티
   - Hook Model 실무 적용
   - [NirAndFar.com/community](https://www.nirandfar.com/)

3. **Octalysis Community**
   - Yu-kai Chou의 게임화 커뮤니티
   - 프레임워크 학습 및 적용

4. **r/BehavioralEconomics (Reddit)**
   - [Reddit 커뮤니티](https://www.reddit.com/r/BehavioralEconomics/)
   - 행동경제학 토론
   - 학술 논문 공유

5. **UX Korea**
   - [Facebook 그룹](https://www.facebook.com/groups/uxkorea)
   - 한국 UX 커뮤니티
   - 행동 디자인 관련 토론

**컨퍼런스 & 이벤트**

6. **Habit Summit**
   - 습관 형성 제품 컨퍼런스
   - Nir Eyal 주최
   - 글로벌 전문가 강연

7. **Gamification Europe / Asia**
   - 게임화 전문 컨퍼런스
   - 실무 사례 발표
   - 워크숍 및 네트워킹

8. **Behavioral Economics in Action**
   - 행동경제학 실무 적용
   - 학계와 산업계 교류

#### 도구 및 프로토타이핑

**행동 분석 도구**

1. **Amplitude** - [https://amplitude.com/](https://amplitude.com/)
   - 제품 분석 플랫폼
   - 사용자 행동 추적
   - Retention, Engagement 측정
   - Behavioral Cohorts 분석

2. **Mixpanel** - [https://mixpanel.com/](https://mixpanel.com/)
   - 사용자 행동 분석
   - Funnel 분석
   - A/B 테스팅
   - Retention 리포트

3. **Heap** - [https://heap.io/](https://heap.io/)
   - 자동 이벤트 추적
   - 행동 패턴 발견
   - Retroactive 분석

4. **Hotjar** - [https://www.hotjar.com/](https://www.hotjar.com/)
   - 히트맵, 세션 녹화
   - 사용자 행동 시각화
   - 피드백 수집

**게임화 플랫폼**

5. **Bunchball (by BI Worldwide)**
   - 엔터프라이즈 게임화 플랫폼
   - 포인트, 배지, 리더보드
   - 맞춤형 게임 메커니즘

6. **Badgeville (by Influence Health)**
   - 게임화 및 행동 플랫폼
   - 미션, 챌린지 설계
   - 실시간 분석

7. **Gametize**
   - 모바일 게임화 플랫폼
   - 교육, 마케팅, 직원 참여
   - 템플릿 제공

**A/B 테스팅 & 최적화**

8. **Optimizely** - [https://www.optimizely.com/](https://www.optimizely.com/)
   - A/B 테스트 플랫폼
   - 행동 패턴 실험
   - Feature Flag 관리

9. **VWO (Visual Website Optimizer)**
   - 전환율 최적화
   - 히트맵 및 세션 리플레이
   - Behavioral Targeting

10. **Google Optimize**
    - 무료 A/B 테스팅 도구
    - Google Analytics 통합
    - 간단한 실험 설정

**푸시 알림 & 트리거 관리**

11. **OneSignal** - [https://onesignal.com/](https://onesignal.com/)
    - 푸시 알림 서비스
    - 세그먼트별 타겟팅
    - A/B 테스팅

12. **Braze** - [https://www.braze.com/](https://www.braze.com/)
    - 고객 참여 플랫폼
    - 다채널 메시징
    - 행동 기반 트리거

13. **Iterable**
    - 크로스 채널 마케팅
    - 개인화된 메시징
    - Workflow Automation

**습관 추적 & 개인 생산성**

14. **Habitica** - [https://habitica.com/](https://habitica.com/)
    - 습관을 RPG로
    - 게임화된 To-Do 리스트
    - 오픈소스 (참고용)

15. **Streaks**
    - iOS 습관 추적 앱
    - 연속 일수 기록
    - 깔끔한 UI

16. **Forest**
    - 집중 시간 추적
    - 가상 나무 키우기
    - 실제 나무 심기 연동

**프로토타이핑 & 디자인**

17. **Figma / FigJam**
    - Hook Model 다이어그램 작성
    - 사용자 여정 시각화
    - 협업 화이트보드

18. **Miro**
    - 행동 맵핑
    - Behavior Grid
    - 워크숍 템플릿

19. **Whimsical**
    - 플로우차트, 와이어프레임
    - Hook 순환 다이어그램
    - 빠른 프로토타이핑

**설문 & 사용자 조사**

20. **Typeform** - [https://www.typeform.com/](https://www.typeform.com/)
    - 인터랙티브 설문
    - 사용자 동기 조사
    - 게임화된 질문 형식

21. **SurveyMonkey**
    - 행동 패턴 조사
    - 동기 및 장벽 파악

**윤리 검토 도구**

22. **Dark Patterns Tip Line**
    - 다크 패턴 신고 사이트
    - 비윤리적 디자인 인식
    - 사례 학습

23. **Ethical OS Toolkit**
    - [https://ethicalos.org/](https://ethicalos.org/)
    - 윤리적 기술 개발
    - 리스크 체크리스트
    - 시나리오 기반 평가

**학습 리소스**

24. **Behavior Wizard** - BJ Fogg
    - 행동 유형 분류 도구
    - 15가지 행동 카테고리
    - 전략 매칭

25. **Hook Canvas** - Nir Eyal
    - Hook Model 워크시트
    - 4단계 설계 템플릿
    - [다운로드](https://www.nirandfar.com/hook-canvas/)

26. **Octalysis Tool**
    - Yu-kai Chou의 분석 도구
    - 8가지 동인 점수화
    - 게임화 전략 도출

**한글 리소스**

27. **국내 서적 (번역)**
    - "훅: 사용자의 마음을 사로잡는 제품의 비밀" (Hooked 번역)
    - "아주 작은 습관의 힘" (Atomic Habits 번역)
    - "넛지" (Nudge 번역)

28. **한국 커뮤니티**
    - UX Korea (Facebook)
    - 프로덕트 디자이너 모임
    - Gamification Korea