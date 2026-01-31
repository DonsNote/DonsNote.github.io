---
layout: default
nav_order: 4
title: DA - 데이터 분석 도구와 활용 방법
description: "Data Analysis 4"
parent: DA
grand_parent: Goorm
has_children: false
---

# 제 4 강 - 데이터 분석 도구와 활용 방법

## 사전 질문
1. 서비스에서 발생하는 다양한 행동(예: 클릭, 방문, 구매)은 실제로 어떻게 데이터로 기록되고 분석될 수 있을까요?
    - 개발시 로그기록을 쌓을 수 있게 만들어서 수치를 확인 할 수 있습니다.
2. 특정 지표나 사용자 행동을 측정하는 과정에 대해, PM이 기술적으로 어떤 지식들을 이해하고 있어야 할까요?
    - 개발되어질때, 필요한 부분에 대한 로그 기록이 남을 수 있게 개발자와의 소통으로 미리 만들어 놔야합니다. 기술적인 부분은 분석할 수 있는 데이터를 위해서 플로우등의 연속된 행동에 대한 로그또한 만들어 놔야합니다.


## 데이터 분석 도구와 활용 방법

### 주요 데이터 분석에 사용되는 도구

현대 프로덕트 매니저는 다양한 데이터 분석 도구를 활용하여 **의사결정의 근거**를 마련합니다. 각 도구는 특정 목적과 사용 사례에 최적화되어 있습니다.

```
도구별 주요 활용 분야:
┌─────────────────────────────────────────────────────────────┐
│ 1. SQL                                                      │
│    → 원시 데이터 추출 및 복잡한 분석                       │
│                                                             │
│ 2. Spreadsheet (Excel, Google Sheets)                      │
│    → 빠른 데이터 가공 및 시각화                            │
│                                                             │
│ 3. Google Analytics                                         │
│    → 웹/앱 트래픽 및 사용자 행동 분석                      │
│                                                             │
│ 4. Mixpanel / Amplitude                                     │
│    → 이벤트 기반 제품 분석 및 코호트 분석                  │
│                                                             │
│ 5. Hotjar / FullStory                                       │
│    → 사용자 경험 시각화 및 세션 리플레이                   │
└─────────────────────────────────────────────────────────────┘
```

---

#### 1. SQL

**Structured Query Language**는 데이터베이스에서 데이터를 **조회, 가공, 분석**하는 표준 언어입니다.

**특징**:
- 원시 데이터에 직접 접근
- 복잡한 비즈니스 로직 구현 가능
- 대용량 데이터 처리에 효율적
- 맞춤형 분석 가능

**활용 사례**:
```
- 특정 조건의 사용자 추출
  예: \"지난 30일간 3회 이상 구매한 사용자\"
  
- 코호트 분석
  예: \"1월 가입자의 월별 리텐션\"
  
- 퍼널 전환율 계산
  예: \"단계별 이탈률 및 병목 구간\"
  
- 매출 분석
  예: \"제품별 월간 매출 추이\"
```

---

#### 2. Spreadsheet (Excel, Google Sheets)

스프레드시트는 **빠른 데이터 가공과 시각화**에 최적화된 도구입니다.

**장점**:
- 진입 장벽이 낮음
- 빠른 프로토타이핑
- 협업 용이 (Google Sheets)
- 다양한 내장 함수

**활용 사례**:
```
- 피벗 테이블로 데이터 요약
- VLOOKUP/INDEX-MATCH로 데이터 결합
- 조건부 서식으로 이상치 탐지
- 차트로 트렌드 시각화
- What-if 분석 및 시뮬레이션
```

**한계**:
- 대용량 데이터 처리 어려움 (보통 10만 행 이하 권장)
- 실시간 데이터 연동 제한적
- 복잡한 로직 구현 어려움

---

#### 3. Google Analytics 4 (GA4)

구글의 무료 웹/앱 분석 도구로, **트래픽과 사용자 행동**을 추적합니다.

**핵심 기능**:
- 실시간 사용자 모니터링
- 트래픽 소스 분석
- 페이지별 성과 측정
- 이벤트 추적
- 전환 목표 설정

**장점**:
- 무료
- Google 생태계 통합 (Search Console, Ads)
- 표준화된 대시보드
- 업계 벤치마크 비교

---

#### 4. Mixpanel / Amplitude

**이벤트 기반 제품 분석 도구**로, 사용자 행동을 깊이 있게 분석합니다.

**핵심 기능**:
- 사용자별 이벤트 추적
- 퍼널 분석
- 코호트 분석
- 리텐션 분석
- A/B 테스트 결과 분석

**GA4 대비 장점**:
- 사용자 중심 분석 (세션 중심이 아닌)
- 더 유연한 이벤트 정의
- 강력한 세그먼트 기능
- 제품 분석에 특화

---

#### 5. Hotjar / FullStory

**정성적 데이터를 시각화**하여 "왜?"에 답하는 도구입니다.

**핵심 기능**:
- 세션 리플레이 (사용자 행동 녹화)
- 히트맵 (클릭, 스크롤, 마우스 이동)
- 사용자 피드백 수집
- 퍼널 시각화

**활용 사례**:
```
- 이탈 구간에서 사용자가 실제로 무엇을 했는지 확인
- 버튼이 클릭되지 않는 이유 파악 (안 보임? 작동 안 함?)
- 폼 입력 중 어느 필드에서 포기하는지 관찰
- 오류 메시지 발생 시 사용자 반응 확인
```

---

### 관계형 데이터베이스

대부분의 프로덕트 데이터는 **관계형 데이터베이스(RDBMS)**에 저장됩니다.

```
관계형 데이터베이스의 핵심 개념:
┌─────────────────────────────────────────────────────────────┐
│ 테이블 (Table): 데이터의 집합                               │
│   - 행 (Row): 개별 레코드                                   │
│   - 열 (Column): 속성/필드                                  │
│                                                             │
│ 키 (Key): 테이블 간 관계 정의                               │
│   - 기본 키 (Primary Key): 고유 식별자                      │
│   - 외래 키 (Foreign Key): 다른 테이블 참조                 │
│                                                             │
│ 관계 (Relationship):                                        │
│   - 1:1 (일대일)                                            │
│   - 1:N (일대다)                                            │
│   - N:M (다대다)                                            │
└─────────────────────────────────────────────────────────────┘
```

**주요 RDBMS**:
- PostgreSQL (오픈소스, 고급 기능)
- MySQL (오픈소스, 널리 사용)
- Microsoft SQL Server (기업용)
- Amazon RDS (클라우드 관리형)

---

### 일반적인 관계형 DB 구조

프로덕트 데이터베이스는 보통 아래와 같은 **핵심 테이블**로 구성됩니다.

#### 1. 사용자 테이블 (Users)

**사용자의 기본 정보**를 저장합니다.

```sql
테이블: users
┌──────────┬─────────────┬──────────────────────┬─────────────┐
│ user_id  │ email       │ signup_date          │ country     │
├──────────┼─────────────┼──────────────────────┼─────────────┤
│ 1001     │ user@a.com  │ 2024-01-15 10:23:45  │ KR          │
│ 1002     │ user@b.com  │ 2024-01-16 14:12:30  │ US          │
│ 1003     │ user@c.com  │ 2024-01-16 16:45:20  │ KR          │
└──────────┴─────────────┴──────────────────────┴─────────────┘

주요 필드:
- user_id: 기본 키 (PK)
- 가입 정보: email, signup_date
- 인구통계: age, gender, country
- 상태: is_active, subscription_tier
```

---

#### 2. 이벤트 테이블 (Events)

**사용자 행동**을 기록합니다.

```sql
테이블: events
┌──────────┬─────────────┬──────────────────────┬─────────────┐
│ event_id │ user_id     │ event_name           │ timestamp   │
├──────────┼─────────────┼──────────────────────┼─────────────┤
│ 50001    │ 1001        │ page_view            │ 2024-01-20  │
│ 50002    │ 1001        │ add_to_cart          │ 2024-01-20  │
│ 50003    │ 1002        │ purchase             │ 2024-01-20  │
└──────────┴─────────────┴──────────────────────┴─────────────┘

주요 필드:
- event_id: 기본 키
- user_id: 외래 키 (users 참조)
- event_name: 이벤트 유형
- timestamp: 발생 시각
- properties: JSON 형태의 추가 정보
```

---

#### 3. 제품/콘텐츠 테이블 (Products)

**제공하는 제품이나 콘텐츠**의 정보를 저장합니다.

```sql
테이블: products
┌──────────────┬─────────────────┬─────────┬────────────┐
│ product_id   │ product_name    │ price   │ category   │
├──────────────┼─────────────────┼─────────┼────────────┤
│ P001         │ Premium Plan    │ 9900    │ subscription│
│ P002         │ Pro Plan        │ 19900   │ subscription│
│ P003         │ Enterprise      │ 49900   │ subscription│
└──────────────┴─────────────────┴─────────┴────────────┘
```

---

#### 4. 트랜잭션 테이블 (Transactions)

**결제 및 거래 내역**을 저장합니다.

```sql
테이블: transactions
┌──────────┬─────────┬────────────┬─────────┬──────────────┐
│ txn_id   │ user_id │ product_id │ amount  │ txn_date     │
├──────────┼─────────┼────────────┼─────────┼──────────────┤
│ T0001    │ 1001    │ P001       │ 9900    │ 2024-01-20   │
│ T0002    │ 1002    │ P002       │ 19900   │ 2024-01-21   │
└──────────┴─────────┴────────────┴─────────┴──────────────┘

주요 필드:
- txn_id: 기본 키
- user_id: 외래 키 (users)
- product_id: 외래 키 (products)
- amount: 결제 금액
- status: pending, completed, refunded
```

---

### SQL의 기본 개념과 역할

SQL은 **데이터베이스와 대화하는 언어**입니다. PM은 SQL을 통해:

```
PM의 SQL 활용:
┌─────────────────────────────────────────────────────────────┐
│ 1. 데이터 추출 (SELECT)                                     │
│    → \"지난 달 신규 가입자 수는?\"                          │
│                                                             │
│ 2. 조건 필터링 (WHERE)                                      │
│    → \"유료 구독 중인 한국 사용자만\"                       │
│                                                             │
│ 3. 데이터 결합 (JOIN)                                       │
│    → \"사용자 정보 + 구매 내역 연결\"                       │
│                                                             │
│ 4. 집계 (GROUP BY, COUNT, SUM)                              │
│    → \"국가별 평균 구매액\"                                 │
│                                                             │
│ 5. 정렬 (ORDER BY)                                          │
│    → \"매출 상위 10개 제품\"                                │
└─────────────────────────────────────────────────────────────┘
```

---

### SQL의 기본 구조 이해하기

**기본 SELECT 문**:

```sql
-- 기본 형태
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1;

-- 예시: 한국 사용자 조회
SELECT user_id, email, signup_date
FROM users
WHERE country = 'KR'
ORDER BY signup_date DESC;
```

**집계 함수**:

```sql
-- 사용자 수 세기
SELECT COUNT(*) as total_users
FROM users;

-- 국가별 사용자 수
SELECT country, COUNT(*) as user_count
FROM users
GROUP BY country
ORDER BY user_count DESC;

-- 평균 구매액
SELECT AVG(amount) as avg_purchase
FROM transactions
WHERE status = 'completed';
```

**JOIN (테이블 결합)**:

```sql
-- 사용자와 구매 내역 결합
SELECT 
  u.user_id,
  u.email,
  t.amount,
  t.txn_date
FROM users u
JOIN transactions t ON u.user_id = t.user_id
WHERE t.status = 'completed';
```

**날짜 필터링**:

```sql
-- 지난 30일 신규 가입자
SELECT COUNT(*) as new_users
FROM users
WHERE signup_date >= CURRENT_DATE - INTERVAL '30 days';

-- 월별 가입자 추이
SELECT 
  DATE_TRUNC('month', signup_date) as month,
  COUNT(*) as signups
FROM users
GROUP BY month
ORDER BY month;
```

**코호트 분석 (리텐션)**:

```sql
-- 1월 가입자의 2월 활동률
WITH jan_cohort AS (
  SELECT user_id
  FROM users
  WHERE signup_date BETWEEN '2024-01-01' AND '2024-01-31'
)
SELECT 
  COUNT(DISTINCT jc.user_id) as total_cohort,
  COUNT(DISTINCT CASE 
    WHEN e.timestamp BETWEEN '2024-02-01' AND '2024-02-28' 
    THEN e.user_id 
  END) as retained,
  ROUND(100.0 * COUNT(DISTINCT CASE 
    WHEN e.timestamp BETWEEN '2024-02-01' AND '2024-02-28' 
    THEN e.user_id 
  END) / COUNT(DISTINCT jc.user_id), 2) as retention_rate
FROM jan_cohort jc
LEFT JOIN events e ON jc.user_id = e.user_id;
```

---

### 웹/앱 분석 도구 - Google Analytics 4 (GA4)

**GA4는 2020년 출시된 구글의 차세대 분석 플랫폼**으로, 기존 Universal Analytics를 대체합니다.

```
GA4의 핵심 변화:
┌─────────────────────────────────────────────────────────────┐
│ 기존 (UA)          →  GA4                                   │
│ ─────────────────────────────────────────────────────────   │
│ 세션 중심          →  이벤트 중심                           │
│ 웹 전용            →  웹 + 앱 통합                          │
│ 쿠키 기반          →  머신러닝 기반 (쿠키 없는 추적)        │
│ 고정 리포트        →  유연한 탐색                           │
└─────────────────────────────────────────────────────────────┘
```

**주요 개념**:

1. **이벤트 (Events)**: 모든 사용자 상호작용
   - 예: page_view, click, scroll, purchase

2. **매개변수 (Parameters)**: 이벤트 상세 정보
   - 예: page_title, button_text, item_name

3. **사용자 속성 (User Properties)**: 사용자 특성
   - 예: subscription_type, signup_source

---

### 핵심 기능과 활용법

#### GA4 핵심 리포트

```
1. 획득 리포트 (Acquisition)
   → 사용자가 어디서 왔는가?
   활용: 채널별 성과 비교, 마케팅 ROI

2. 참여 리포트 (Engagement)
   → 사용자가 무엇을 하는가?
   활용: 인기 페이지, 이벤트 빈도

3. 수익 창출 리포트 (Monetization)
   → 수익은 얼마나 발생하는가?
   활용: 전환, 거래, 수익 분석

4. 유지 리포트 (Retention)
   → 사용자가 다시 돌아오는가?
   활용: 코호트 분석, 리텐션 추이
```

**실무 활용 예시**:

```
시나리오: 새 랜딩 페이지 성과 측정

1. 목표 설정
   - 전환 이벤트: 'sign_up' 이벤트
   
2. 추적 설정
   - 페이지뷰 자동 수집
   - 커스텀 이벤트: 버튼 클릭
   
3. 분석
   - 랜딩 페이지 유입량
   - 체류 시간
   - 전환율
   - 이탈률
   
4. 세그먼트 비교
   - 모바일 vs 데스크톱
   - 신규 vs 재방문
   - 유입 채널별
```

---

### 이벤트 기반 분석 도구 - Mixpanel, Amplitude

**이벤트 기반 분석**은 사용자의 **모든 행동을 이벤트로 추적**하여 깊이 있는 인사이트를 제공합니다.

```
이벤트 구조:
┌─────────────────────────────────────────────────────────────┐
│ Event: "Add to Cart"                                        │
│                                                             │
│ Properties:                                                 │
│   - product_id: "SKU123"                                    │
│   - product_name: "Premium Plan"                            │
│   - price: 9900                                             │
│   - category: "Subscription"                                │
│   - source: "Homepage Banner"                               │
│                                                             │
│ User Properties:                                            │
│   - user_id: 1001                                           │
│   - signup_date: "2024-01-15"                               │
│   - subscription_tier: "Free"                               │
│   - country: "KR"                                           │
└─────────────────────────────────────────────────────────────┘
```

---

### 이벤트 기반 분석의 기본 개념

**1. 이벤트 추적 설계**:

```
좋은 이벤트 명명:
✅ "Button Clicked - Sign Up" (명확)
✅ "Video Played - Tutorial 1" (구체적)
✅ "Purchase Completed - Premium Plan" (결과 명확)

나쁜 이벤트 명명:
❌ "Click" (너무 모호)
❌ "Event1" (의미 불명)
❌ "User Action" (일반적)
```

**2. 이벤트 속성 (Properties)**:

```
필수 속성:
- timestamp: 언제 발생했는가
- user_id: 누가 했는가
- event_name: 무엇을 했는가

컨텍스트 속성:
- device_type: mobile, desktop
- location: country, city
- referrer: 이전 페이지
- campaign: 마케팅 캠페인

비즈니스 속성:
- product_id: 관련 제품
- amount: 금액
- category: 카테고리
- ab_test_variant: A/B 테스트 그룹
```

---

### 핵심 기능과 활용법

#### Mixpanel / Amplitude 주요 기능

**1. 퍼널 분석 (Funnel Analysis)**:

```
가입 퍼널 예시:
┌─────────────────────────────────────────────────────────────┐
│ 1. 랜딩 페이지 방문    10,000명  (100%)                     │
│         ↓                                                   │
│ 2. 가입 버튼 클릭       4,000명  (40%)   ← 60% 이탈        │
│         ↓                                                   │
│ 3. 폼 작성 시작         3,000명  (75%)   ← 25% 이탈        │
│         ↓                                                   │
│ 4. 폼 제출              2,100명  (70%)   ← 30% 이탈        │
│         ↓                                                   │
│ 5. 이메일 인증 완료     1,680명  (80%)   ← 20% 이탈        │
└─────────────────────────────────────────────────────────────┘

전체 전환율: 16.8%
최대 병목: 랜딩 → 버튼 클릭 (60% 이탈)
```

**2. 리텐션 분석 (Retention Analysis)**:

```
코호트 리텐션:
┌──────────┬────────┬────────┬────────┬────────┬────────┐
│ 가입 주  │ Week 0 │ Week 1 │ Week 2 │ Week 3 │ Week 4 │
├──────────┼────────┼────────┼────────┼────────┼────────┤
│ Jan W1   │  100%  │   42%  │   28%  │   22%  │   18%  │
│ Jan W2   │  100%  │   48%  │   32%  │   25%  │   20%  │
│ Jan W3   │  100%  │   45%  │   30%  │   24%  │   -    │
│ Jan W4   │  100%  │   50%  │   35%  │   -    │   -    │
└──────────┴────────┴────────┴────────┴────────┴────────┘

→ 개선 추세 확인 (W2 코호트가 W1보다 나음)
```

**3. 세그먼트 분석 (Segmentation)**:

```
사용자 세그먼트 비교:
┌─────────────────┬──────────┬──────────┬──────────┐
│ 세그먼트        │ DAU/MAU  │ 전환율   │ ARPU     │
├─────────────────┼──────────┼──────────┼──────────┤
│ Power User      │   65%    │   25%    │ ₩25,000  │
│ Regular User    │   40%    │   8%     │ ₩8,000   │
│ Casual User     │   15%    │   2%     │ ₩1,500   │
└─────────────────┴──────────┴──────────┴──────────┘

→ Power User 특성 분석 → 다른 사용자를 이 그룹으로 이동
```

**4. 경로 분석 (Path Analysis)**:

```
구매까지의 실제 사용자 경로:
┌─────────────────────────────────────────────────────────────┐
│ 경로 1 (45%):                                               │
│   홈 → 검색 → 상품 → 장바구니 → 구매                       │
│                                                             │
│ 경로 2 (30%):                                               │
│   홈 → 카테고리 → 상품 → 리뷰 → 장바구니 → 구매            │
│                                                             │
│ 경로 3 (15%):                                               │
│   홈 → 프로모션 배너 → 상품 → 구매 (빠른 전환)             │
└─────────────────────────────────────────────────────────────┘

→ 경로 3이 가장 효율적 → 프로모션 강화
```

---

### 사용자 경험 분석 도구 - Hotjar, FullStory

**정량 데이터가 "무엇이 일어났는지"를 알려준다면, 정성 도구는 "왜 일어났는지"를 보여줍니다.**

```
정량 + 정성 결합 예시:
┌─────────────────────────────────────────────────────────────┐
│ 정량 데이터 (Mixpanel):                                     │
│   \"결제 페이지에서 40% 이탈\"                              │
│                                                             │
│         ↓ 왜?                                               │
│                                                             │
│ 정성 데이터 (Hotjar):                                       │
│   세션 리플레이 확인 결과,                                  │
│   사용자들이 \"배송비\" 항목을 보고 놀라며 뒤로가기          │
└─────────────────────────────────────────────────────────────┘

→ 해결책: 배송비를 장바구니 단계에 미리 표시
```

---

### 사용자 경험 기반 분석의 기본 개념

**1. 세션 리플레이 (Session Replay)**:

사용자의 **실제 화면 조작을 비디오처럼 재생**합니다.

```
관찰 가능한 것:
✓ 마우스 이동 경로
✓ 클릭 위치
✓ 스크롤 깊이
✓ 폼 입력 행동 (민감 정보는 마스킹)
✓ 페이지 간 이동
✓ 오류 메시지 발생
```

**활용 사례**:
- 이탈 직전 사용자 행동 분석
- 버그 재현 (사용자가 겪은 오류 확인)
- UX 문제점 발견 (헤매는 구간)
- A/B 테스트 정성 검증

---

**2. 히트맵 (Heatmap)**:

사용자 상호작용을 **색상으로 시각화**합니다.

```
히트맵 유형:
┌─────────────────────────────────────────────────────────────┐
│ 1. 클릭 맵 (Click Map)                                      │
│    → 어디를 가장 많이 클릭하는가?                           │
│    빨강: 많이 클릭, 파랑: 적게 클릭                         │
│                                                             │
│ 2. 스크롤 맵 (Scroll Map)                                   │
│    → 페이지를 얼마나 아래까지 보는가?                       │
│    100% → 50% → 0% (색상 변화)                              │
│                                                             │
│ 3. 무브 맵 (Move Map)                                       │
│    → 마우스가 어디를 주로 가는가?                           │
│    관심 영역 파악                                           │
└─────────────────────────────────────────────────────────────┘
```

**인사이트 예시**:
```
발견: 중요한 CTA 버튼이 클릭 맵에서 '파란색' (클릭 적음)
원인: 스크롤 맵 확인 결과, 80% 사용자가 해당 영역까지 스크롤 안 함
해결: 버튼을 화면 상단으로 이동 또는 복제
```

---

**3. 폼 분석 (Form Analysis)**:

사용자가 폼을 **어떻게 작성하는지** 추적합니다.

```
추적 지표:
┌─────────────────┬──────────┬──────────┬──────────┐
│ 필드            │ 시작률   │ 완료율   │ 평균시간 │
├─────────────────┼──────────┼──────────┼──────────┤
│ 이름            │  100%    │   95%    │  5초     │
│ 이메일          │   95%    │   92%    │  8초     │
│ 비밀번호        │   92%    │   85%    │  25초    │ ← 병목
│ 주소            │   85%    │   70%    │  45초    │ ← 이탈
│ 전화번호        │   70%    │   65%    │  12초    │
└─────────────────┴──────────┴──────────┴──────────┘

→ 비밀번호 필드에서 7% 이탈 (복잡한 요구사항?)
→ 주소 필드에서 15% 이탈 (수동 입력 불편?)

개선안:
- 비밀번호 요구사항 명확히 표시
- 주소 자동완성 기능 추가
```

---

**4. 피드백 수집 (Feedback Polls)**:

페이지 내에서 **직접 사용자 의견**을 묻습니다.

```
설문 유형:
1. NPS 설문
   \"이 서비스를 추천하시겠습니까? (0-10)\"
   
2. 이탈 의도 설문 (Exit Intent)
   \"떠나시는 이유가 무엇인가요?\"
   - 찾는 정보가 없음
   - 가격이 비쌈
   - 기타 (자유 입력)
   
3. 기능별 만족도
   \"이 기능이 도움이 되었나요? 😊 😐 😞\"
```

---

### 핵심 기능과 활용법

#### 실무 워크플로우

**1. 문제 발견 (정량 도구)**:
```
Mixpanel에서 발견:
\"결제 페이지 전환율이 업계 평균 대비 30% 낮음\"
```

**2. 원인 탐구 (정성 도구)**:
```
Hotjar로 세션 리플레이 20개 시청:
- 10명: 배송비를 보고 즉시 이탈
- 5명: 결제 수단 입력란에서 오래 헤맴
- 3명: 페이지 로딩 중 이탈
- 2명: 할인 코드 찾다가 포기
```

**3. 가설 수립**:
```
가설:
1. 배송비를 장바구니 단계에 미리 표시하면 이탈 감소
2. 결제 수단 입력 UI 개선 (자동 입력 지원)
3. 로딩 속도 개선
```

**4. A/B 테스트**:
```
변형 A: 배송비 사전 고지
변형 B: 기존 (통제군)

결과: 변형 A가 전환율 18% 향상
```

**5. 검증 (다시 정성 도구)**:
```
개선 후 세션 리플레이 확인:
→ 배송비 보고 이탈하는 사용자 감소 확인
```

---

#### 도구별 특화 기능

**Hotjar 특화**:
- 간단한 설치 (스크립트 한 줄)
- 무료 플랜 충실
- 직관적인 UI
- 빠른 인사이트 도출

**FullStory 특화**:
- 자동 이벤트 캡처 (모든 클릭, 입력 자동 기록)
- 강력한 검색 기능 ("분노 클릭" 자동 감지)
- 개발자 도구 통합 (콘솔 에러 함께 표시)
- 엔터프라이즈 기능 (세밀한 권한 관리)

---

### 도구 조합 전략

**효과적인 도구 스택 예시**:

```
기본 스택 (스타트업):
┌─────────────────────────────────────────────────────────────┐
│ 1. Google Analytics (무료)                                  │
│    → 전체 트래픽 및 전환 모니터링                           │
│                                                             │
│ 2. Mixpanel (Freemium)                                      │
│    → 코호트 및 리텐션 분석                                  │
│                                                             │
│ 3. Hotjar (Freemium)                                        │
│    → 정성적 사용자 행동 분석                                │
│                                                             │
│ 4. Google Sheets                                            │
│    → 빠른 분석 및 리포팅                                    │
└─────────────────────────────────────────────────────────────┘

성장 단계 스택:
┌─────────────────────────────────────────────────────────────┐
│ 1. Amplitude                                                │
│    → 고급 제품 분석 및 예측                                 │
│                                                             │
│ 2. Segment                                                  │
│    → 데이터 통합 및 라우팅                                  │
│                                                             │
│ 3. FullStory                                                │
│    → 엔터프라이즈급 세션 분석                               │
│                                                             │
│ 4. Tableau / Looker                                         │
│    → 고급 BI 및 대시보드                                    │
│                                                             │
│ 5. SQL (Redshift / BigQuery)                                │
│    → 데이터 웨어하우스 직접 쿼리                            │
└─────────────────────────────────────────────────────────────┘
```

**도구 선택 기준**:
```
고려 사항:
1. 팀 규모와 기술 역량
2. 예산
3. 데이터 볼륨
4. 필요한 분석 깊이
5. 기존 시스템과의 통합
6. 프라이버시 정책 준수
```




## 과제

### 연구 과제
1. 다양한 데이터 분석 도구들이 실제로 데이터를 어떻게 수집하는지 조사해 봅니다.(SQL, Spreadsheet, 웹 분석 도구, 이벤트 분석 도구, 히트맵 분석 도구 등)
2. 해당 도구들의 주요 사용 사례를 찾아보고, 가능하다면 무료로 가입해 데모 버전을 직접 사용해 봅니다.
3. 각 도구들의 레퍼런스 문서를 살펴보고, 이를 활용하기 위해 알아야 할 지식과 개념들을 학습해 봅니다.

### 실전 과제
1. 자신의 프로젝트에서 검증하고 싶은 가설을 설정하고, 그 가설을 검증하기 위해 측정해야 할 핵심 지표를 정의해봅니다.(만약 가설이 없다면, 해당 제품의 핵심 가치를 가장 잘 보여주는 사용자 행동을 하나 선정해 지표로 설정해도 됩니다.)
2. 해당 지표를 측정하기 위해 필요한 데이터는 무엇인지 구체적으로 정리해봅니다.(예: 어떤 이벤트가 필요하고, 어떤 속성이 함께 기록되어야 하는지)
3. 그 데이터를 효과적으로 수집하기 위해 어떤 분석 도구를 사용할지 선택하고, 그 이유를 함께 설명해봅니다.


## 참고 자료
- [4강 연구 과제 PDF](/assets/pdf/goormda4iw.pdf)
- [4강 실전 과제 PDF](/assets/pdf/goormda4gw.pdf)

### 학습 자료 및 출처

#### 서적

- **"SQL for Data Analysis"** - Cathy Tanimura | 데이터 분석을 위한 SQL 실무 가이드
- **"Storytelling with Data"** - Cole Nussbaumer Knaflic | 데이터 시각화 및 인사이트 전달
- **"The Data Warehouse Toolkit"** - Ralph Kimball, Margy Ross | 데이터 모델링 및 분석 설계
- **"Learning SQL"** - Alan Beaulieu | SQL 기초부터 고급까지
- **"Google Analytics Breakthrough"** - Feras Alhlou 등 | GA4 실무 활용법
- **"Web Analytics 2.0"** - Avinash Kaushik | 웹 분석의 원칙과 전략

#### 관련 강의 및 코스

- [Mode SQL Tutorial](https://mode.com/sql-tutorial/) - 무료 대화형 SQL 학습 (기초~고급)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/) - GA4 공식 무료 교육
- [Codecademy - Learn SQL](https://www.codecademy.com/learn/learn-sql) - 실습 중심 SQL 코스
- [Mixpanel Academy](https://mixpanel.com/academy) - 제품 분석 공식 교육
- [Amplitude Scholarship](https://amplitude.com/scholarship) - 무료 제품 분석 인증 프로그램
- [DataCamp - SQL for Business Analysts](https://www.datacamp.com/) - 비즈니스 분석을 위한 SQL
- [Udemy - SQL Bootcamp](https://www.udemy.com/topic/sql/) - PostgreSQL, MySQL 실무 부트캠프

#### 실무 사례 참고

- [Mixpanel Blog - Product Analytics](https://mixpanel.com/blog/category/product-analytics/) - 이벤트 기반 분석 사례 및 베스트 프랙티스
- [Amplitude Blog](https://amplitude.com/blog) - 디지털 최적화 및 제품 분석 실무
- [Segment Blog](https://segment.com/blog/) - 고객 데이터 플랫폼 및 통합 전략
- [Google Analytics Blog](https://blog.google/products/marketingplatform/analytics/) - GA4 업데이트 및 활용 팁
- [Mode Analytics Blog](https://mode.com/blog/) - SQL 기반 데이터 분석 사례
- [Looker Blog](https://looker.com/blog) - BI 및 데이터 탐색 인사이트
- [Hotjar Blog](https://www.hotjar.com/blog/) - 사용자 경험 분석 및 CRO 사례

#### YouTube

- [Alex The Analyst](https://www.youtube.com/@AlexTheAnalyst) - SQL 및 데이터 분석 실무 튜토리얼
- [Measure School](https://www.youtube.com/@MeasureSchool) - Google Analytics 및 GTM 전문 채널
- [Mixpanel YouTube](https://www.youtube.com/@Mixpanel) - 제품 분석 웨비나 및 튜토리얼
- [Data with Baraa](https://www.youtube.com/@DataWithBaraa) - GA4 심화 분석 가이드
- [Luke Barousse](https://www.youtube.com/@LukeBarousse) - 데이터 분석 커리어 및 SQL 팁
- [freeCodeCamp - SQL](https://www.youtube.com/@freecodecamp) - 무료 SQL 전체 코스
- [Hotjar YouTube](https://www.youtube.com/@Hotjar) - 사용자 경험 분석 실무

#### 커뮤니티

- [r/analytics](https://www.reddit.com/r/analytics/) - 웹 분석 및 도구 토론 커뮤니티
- [Measure Slack](https://www.measure.chat/) - 분석 전문가 슬랙 커뮤니티
- [GA4 Community](https://www.en.advertisercommunity.com/t5/Google-Analytics-4/ct-p/google-analytics-4) - Google Analytics 공식 커뮤니티
- [SQL Server Central](https://www.sqlservercentral.com/) - SQL 전문가 포럼
- [Product Analytics Playbook](https://productanalyticsplaybook.com/) - 제품 분석 리소스 허브
- [Amplitude Community](https://community.amplitude.com/) - Amplitude 사용자 커뮤니티
- [Stack Overflow - SQL](https://stackoverflow.com/questions/tagged/sql) - SQL 질의응답

#### 도구 및 프로토 타이핑

- **SQL 도구**
  - [PostgreSQL](https://www.postgresql.org/) - 오픈소스 관계형 데이터베이스
  - [MySQL](https://www.mysql.com/) - 널리 사용되는 오픈소스 RDBMS
  - [DBeaver](https://dbeaver.io/) - 무료 SQL 클라이언트 (멀티 DB 지원)
  - [DataGrip](https://www.jetbrains.com/datagrip/) - JetBrains SQL IDE
  - [BigQuery](https://cloud.google.com/bigquery) - Google 클라우드 데이터 웨어하우스

- **스프레드시트**
  - [Google Sheets](https://sheets.google.com/) - 협업 스프레드시트
  - [Microsoft Excel](https://www.microsoft.com/excel) - 데스크톱 스프레드시트
  - [Airtable](https://airtable.com/) - 데이터베이스형 스프레드시트

- **웹/앱 분석**
  - [Google Analytics 4](https://analytics.google.com/) - 무료 웹/앱 분석
  - [Plausible](https://plausible.io/) - 프라이버시 중심 경량 분석
  - [Fathom](https://usefathom.com/) - 단순하고 프라이버시 보호 분석

- **이벤트 기반 분석**
  - [Mixpanel](https://mixpanel.com/) - 제품 분석 및 사용자 행동 추적
  - [Amplitude](https://amplitude.com/) - 디지털 최적화 플랫폼
  - [Heap](https://heap.io/) - 자동 이벤트 캡처
  - [PostHog](https://posthog.com/) - 오픈소스 제품 분석

- **사용자 경험 분석**
  - [Hotjar](https://www.hotjar.com/) - 히트맵 및 세션 리플레이
  - [FullStory](https://www.fullstory.com/) - 디지털 경험 인텔리전스
  - [Microsoft Clarity](https://clarity.microsoft.com/) - 무료 히트맵 및 세션 녹화
  - [Crazy Egg](https://www.crazyegg.com/) - 히트맵 및 A/B 테스트

- **BI 및 시각화**
  - [Looker](https://looker.com/) - 구글 클라우드 BI 플랫폼
  - [Tableau](https://www.tableau.com/) - 데이터 시각화 및 대시보드
  - [Metabase](https://www.metabase.com/) - 오픈소스 BI 도구
  - [Mode Analytics](https://mode.com/) - SQL 기반 분석 및 협업
  - [Apache Superset](https://superset.apache.org/) - 오픈소스 데이터 탐색

- **데이터 통합**
  - [Segment](https://segment.com/) - 고객 데이터 플랫폼 (CDP)
  - [RudderStack](https://rudderstack.com/) - 오픈소스 CDP
  - [Fivetran](https://www.fivetran.com/) - 자동화된 데이터 파이프라인