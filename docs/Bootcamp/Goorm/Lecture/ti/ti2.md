---
layout: default
nav_order: 2
title: TI - AI 서비스의 이해
description: "Technology Trends and Industry Insights 2"
parent: TI
grand_parent: Goorm
has_children: false
---

# 제 2 강 - AI 서비스의 이해

## 사전 질문
1. SW 개발자와 AI 개발자와의 소통은 어떤 차이가 있을까요?
    - AI 개발자는 학문 위주의 LLM 아키택쳐 설계에 집중되어 있어서 실제적인 SW개발자와 소통이 쉽지않을 것으로 예상되고 구현에 대한 디테일함에서도 차이가 있을 것으로 예상됩니다
2. AI 기반 서비스를 만들기 위해 PM은 어디까지 이해하고 관여하는 것이 필요할까요?
    - AI 가 작동할 수 있는 한계치를 이해하고 리소스의 사용 범위 실제적 서비스의 동작 로직 정도는 이해하고 있어야 개발자와 대화가 될것이라고 생각합니다.
    - 프레임워크나 rangchain등 을 다 이해할 필요는 없지만 RAG나 Embedding정도는 알고 있어야 하지 않을까 합니다.

## 인공지능(Artificial Intelligence, AI)

인공지능은 인간의 학습 능력, 추론 능력, 지각 능력 등을 컴퓨터 프로그램으로 실현한 기술입니다. 컴퓨터가 데이터를 기반으로 패턴을 학습하고, 새로운 상황에서 의사결정을 내릴 수 있도록 합니다.

### AI의 주요 특징

1. **학습 능력**: 데이터로부터 패턴을 스스로 발견하고 개선
2. **적응성**: 새로운 환경과 상황에 대응 가능
3. **자동화**: 반복적이고 복잡한 작업을 사람의 개입 없이 수행
4. **확장성**: 대량의 데이터와 작업을 동시에 처리
5. **일관성**: 동일한 조건에서 동일한 결과를 보장

### AI의 오해

1. **AI는 만능이다**: AI는 학습된 데이터 범위 내에서만 효과적으로 작동하며, 학습하지 않은 상황에서는 한계가 있습니다.
2. **AI가 인간을 대체한다**: AI는 인간을 보조하는 도구이며, 창의성과 감성적 판단이 필요한 영역에서는 여전히 인간의 역할이 중요합니다.
3. **더 많은 데이터가 항상 좋다**: 데이터의 품질이 양보다 중요하며, 편향된 데이터는 오히려 성능을 저하시킵니다.
4. **AI는 즉시 완벽한 결과를 제공한다**: AI 모델은 지속적인 학습과 개선이 필요하며, 초기에는 불완전할 수 있습니다.

### AI 역량의 실용적 분류

1. **인식(Recognition)**
   - 이미지, 음성, 텍스트 등을 인식하고 분류
   - 예: 얼굴 인식, 음성 인식, OCR(문자 인식)

2. **예측(Prediction)**
   - 과거 데이터를 기반으로 미래 결과를 추정
   - 예: 수요 예측, 이탈 예측, 가격 예측

3. **생성(Generation)**
   - 새로운 콘텐츠나 데이터를 창조
   - 예: 텍스트 생성, 이미지 생성, 음악 생성

4. **최적화(Optimization)**
   - 주어진 제약 조건 내에서 최선의 해결책 도출
   - 예: 경로 최적화, 자원 배분, 일정 관리

### AI의 발전 역사와 중요 변곡점

- **1950년대**: 앨런 튜링의 튜링 테스트, AI 개념의 등장
- **1956년**: 다트머스 회의에서 'Artificial Intelligence' 용어 공식 사용
- **1980년대**: 전문가 시스템의 상업적 성공
- **1997년**: IBM Deep Blue가 체스 세계 챔피언 카스파로프 격파
- **2012년**: AlexNet이 ImageNet 대회에서 딥러닝의 우수성 입증
- **2016년**: AlphaGo가 이세돌 9단을 이기며 바둑에서 인간을 초월
- **2017년**: Transformer 아키텍처 등장 (Attention is All You Need 논문)
- **2022년**: ChatGPT 출시로 생성형 AI 대중화

### AI의 구성 요소와 아키텍처

1. **Data (데이터)**
   - 인간이 경험을 통해 배우듯, AI는 데이터를 통해 세상을 이해합니다.
   - 학습 데이터의 품질과 양이 AI 성능의 핵심 결정 요소
   - 데이터 수집, 정제, 라벨링 과정이 필수적

2. **Algorithms (알고리즘)**
   - 알고리즘은 데이터에서 패턴을 학습하고 새로운 상황에 적용하는 방법을 정의합니다.
   - 머신러닝, 딥러닝 등 다양한 학습 방법론 존재
   - 문제 특성에 맞는 알고리즘 선택이 중요

3. **인프라 (Infrastructure)**
   - AI 시스템의 성능, 확장성, 비용 효율성을 결정
   - GPU, TPU 등의 연산 자원
   - 클라우드 서비스 및 분산 처리 시스템

### 머신러닝의 기본 원리

머신러닝은 명시적으로 프로그래밍하지 않고도 컴퓨터가 데이터로부터 학습할 수 있도록 하는 AI의 한 분야입니다. 데이터 패턴을 발견하고 이를 바탕으로 예측이나 결정을 내립니다.

#### 지도 학습(Supervised Learning)

레이블이 있는 데이터로 학습하여 입력과 출력 간의 관계를 모델링합니다.

**특징**:
- 정답(레이블)이 있는 학습 데이터 필요
- 분류(Classification)와 회귀(Regression) 문제에 사용

**주요 알고리즘**:
- 선형 회귀, 로지스틱 회귀
- 의사결정 트리, 랜덤 포레스트
- 서포트 벡터 머신(SVM)
- 신경망(Neural Networks)

**실용 사례**:
- 스팸 메일 필터링
- 신용 점수 예측
- 질병 진단

#### 비지도 학습(Unsupervised Learning)

레이블이 없는 데이터에서 숨겨진 패턴이나 구조를 발견합니다.

**특징**:
- 정답 없이 데이터의 구조를 파악
- 클러스터링(Clustering)과 차원 축소에 사용

**주요 알고리즘**:
- K-means 클러스터링
- 계층적 클러스터링
- PCA(주성분 분석)
- 오토인코더

**실용 사례**:
- 고객 세분화
- 추천 시스템
- 이상 탐지

#### 강화 학습(Reinforcement Learning)

환경과의 상호작용을 통해 보상을 최대화하는 방향으로 학습합니다.

**특징**:
- 행동의 결과로 보상 또는 페널티를 받으며 학습
- 시행착오를 통한 최적 전략 발견

**주요 개념**:
- 에이전트(Agent), 환경(Environment)
- 상태(State), 행동(Action), 보상(Reward)
- 정책(Policy), 가치 함수(Value Function)

**실용 사례**:
- 게임 AI (알파고, 게임 플레이)
- 로봇 제어
- 자율 주행

### AI 기술의 주요 응용 분야

1. **자연어 처리(NLP)**
   - 텍스트 분류, 감정 분석, 기계 번역
   - 챗봇, 질의응답 시스템
   - 문서 요약, 정보 추출

2. **컴퓨터 비전**
   - 이미지 분류 및 객체 탐지
   - 얼굴 인식 및 인증
   - 의료 영상 분석

3. **추천 시스템**
   - 협업 필터링 기반 추천
   - 콘텐츠 기반 추천
   - 하이브리드 추천

4. **예측 분석**
   - 수요 예측
   - 고객 이탈 예측
   - 금융 시장 분석

5. **지능형 자동화**
   - RPA(로봇 프로세스 자동화)
   - 음성 비서 및 가상 비서
   - 스마트 팩토리

6. **금융 AI(FinTech)**
   - 신용 평가 및 대출 심사
   - 이상 거래 탐지
   - 알고리즘 트레이딩

### 특성 공학(Feature Engineering)

특성 공학은 원시 데이터를 머신러닝 모델이 더 잘 이해할 수 있는 형태로 변환하는 과정입니다. 모델 성능에 큰 영향을 미치는 핵심 단계입니다.

**중요성**:
- 좋은 특성은 단순한 모델로도 높은 성능을 달성 가능
- 도메인 지식을 모델에 반영하는 방법
- 데이터의 본질적인 패턴을 더 잘 드러냄

#### 주요 특성 공학 기법과 사례

1. **특성 선택(Feature Selection)**
   - 불필요한 특성 제거로 모델 복잡도 감소
   - 기법: 상관관계 분석, 순방향/역방향 선택, L1 정규화
   - 예: 수백 개의 변수 중 중요한 10개만 선택

2. **특성 추출(Feature Extraction)**
   - 기존 특성들을 조합하여 새로운 특성 생성
   - 기법: PCA, LDA, 오토인코더
   - 예: 수천 차원의 이미지를 수십 차원으로 압축

3. **특성 변환(Feature Transformation)**
   - 데이터 분포를 변경하여 모델 학습 개선
   - 기법: 정규화, 표준화, 로그 변환, 원-핫 인코딩
   - 예: 연봉 데이터에 로그 변환 적용

4. **특성 생성(Feature Creation)**
   - 도메인 지식을 활용한 새로운 특성 추가
   - 예: 날짜에서 요일, 공휴일 여부 추출
   - 예: 주문 금액과 횟수로 고객 가치 지표 생성

#### PM의 특성 공학 관련 역할

1. **도메인 지식 제공**
   - 비즈니스 맥락에서 중요한 변수 식별
   - 데이터 과학자와 협업하여 의미 있는 특성 정의

2. **데이터 수집 방향 제시**
   - 어떤 데이터가 필요한지 판단
   - 데이터 수집의 우선순위 결정

3. **성능 지표와 비즈니스 목표 연결**
   - 기술적 성능이 비즈니스 가치로 이어지는지 검증
   - 특성 개선의 ROI 평가

### 데이터 품질과 AI 성능의 상관관계

"Garbage In, Garbage Out" - 데이터 품질이 AI 성능의 상한선을 결정합니다.

1. **정확성(Accuracy)**
   - 데이터가 실제 상황을 정확히 반영하는 정도
   - 측정 오류, 입력 오류 최소화 필요
   - 영향: 부정확한 데이터는 잘못된 패턴 학습 유발

2. **완전성(Completeness)**
   - 필요한 모든 데이터가 존재하는 정도
   - 결측치(Missing Value) 처리 방법 중요
   - 영향: 불완전한 데이터는 편향된 모델 생성

3. **일관성(Consistency)**
   - 데이터가 모순 없이 일관된 정도
   - 서로 다른 소스 간 데이터 통합 시 중요
   - 영향: 비일관성은 모델의 신뢰성 저하

4. **적시성(Timeliness)**
   - 데이터가 최신 상태를 유지하는 정도
   - 실시간 학습 및 업데이트 필요 여부 판단
   - 영향: 오래된 데이터는 현재 상황 반영 불가

5. **대표성(Representativeness)**
   - 데이터가 전체 모집단을 대표하는 정도
   - 편향(Bias) 없는 샘플링 중요
   - 영향: 편향된 데이터는 특정 그룹에 불공정한 결과 초래

### PM이 알아야 할 주요 교차 검증 기법

교차 검증은 모델의 일반화 성능을 평가하기 위한 기법으로, 과적합(Overfitting)을 방지합니다.

1. **K-폴드 교차 검증(K-Fold Cross Validation)**

   **작동 방식**:
   - 데이터를 K개의 부분으로 분할
   - K-1개로 학습하고 1개로 검증
   - 모든 부분이 한 번씩 검증 세트가 되도록 K번 반복

   **장점**:
   - 모든 데이터가 학습과 검증에 사용됨
   - 안정적인 성능 추정

   **적용 사례**:
   - 일반적인 분류/회귀 문제
   - 데이터가 충분하지 않을 때

   **PM 관점의 의미**:
   - 모델이 새로운 데이터에서도 잘 작동할지 검증
   - 개발 환경과 실제 환경의 성능 차이 예측

2. **시간 기반 교차 검증(Time Series Cross Validation)**

   **작동 방식**:
   - 과거 데이터로 학습, 미래 데이터로 검증
   - 시간 순서를 유지하며 점진적으로 학습 데이터 확장

   **장점**:
   - 시간의 흐름을 반영한 현실적인 평가
   - 데이터 누수(Data Leakage) 방지

   **적용 사례**:
   - 주가 예측, 수요 예측
   - 시계열 데이터 분석

   **PM 관점의 의미**:
   - 실제 운영 환경을 시뮬레이션
   - 모델의 지속 가능성 평가

### 핵심 AI 영역별 필수 성능 지표

1. **분류 모델(Classification)**

   **정확도(Accuracy)**:
   - 전체 예측 중 올바른 예측의 비율
   - 공식: (TP + TN) / (TP + TN + FP + FN)
   - 주의: 불균형 데이터에서는 오해의 소지

   **정밀도(Precision)**:
   - 긍정으로 예측한 것 중 실제 긍정의 비율
   - 공식: TP / (TP + FP)
   - 중요한 경우: 스팸 필터 (중요 메일을 스팸으로 분류하면 안 됨)

   **재현율(Recall)**:
   - 실제 긍정 중 올바르게 예측한 비율
   - 공식: TP / (TP + FN)
   - 중요한 경우: 질병 진단 (환자를 놓치면 안 됨)

   **F1 Score**:
   - 정밀도와 재현율의 조화 평균
   - 공식: 2 × (Precision × Recall) / (Precision + Recall)
   - 불균형 데이터에 유용

2. **추천 시스템(Recommendation Systems)**

   **정밀도@K (Precision@K)**:
   - 상위 K개 추천 중 관련 있는 항목의 비율
   - 사용자 경험과 직결

   **재현율@K (Recall@K)**:
   - 사용자가 좋아할 만한 전체 항목 중 추천된 비율
   - 다양성과 발견 가능성 평가

   **NDCG (Normalized Discounted Cumulative Gain)**:
   - 추천 순서를 고려한 성능 지표
   - 상위 항목에 더 높은 가중치

   **커버리지(Coverage)**:
   - 전체 아이템 중 추천된 아이템의 비율
   - 롱테일 아이템 노출 평가

3. **자연어 처리(NLP)**

   **BLEU (Bilingual Evaluation Understudy)**:
   - 기계 번역 품질 평가
   - 생성된 문장과 참조 문장의 n-gram 일치도

   **ROUGE (Recall-Oriented Understudy for Gisting Evaluation)**:
   - 요약 품질 평가
   - 참조 요약과의 중복도 측정

   **퍼플렉시티(Perplexity)**:
   - 언어 모델의 불확실성 측정
   - 낮을수록 좋은 성능

   **정확도/F1 (분류 태스크)**:
   - 감정 분석, 토픽 분류 등에 사용
   - 일반적인 분류 지표 활용




## 과제

### 연구 과제
1. AI 기능이 포함된 서비스를 하나 선택해 실제 결과를 살펴봅니다. 이 기능이 잘못된 결과를 보여주는 경우를 찾고, 왜 그런지 학습한 관점에 기반해 추측해 봅니다.
2. 서비스를 하나 선정해 AI 기능을 하나 추가한다면 무엇을 만들지 학습한 내용을 바탕으로 구체적으로 정해봅니다. 이를 위해 검토해야 할 것들을 나열하고, 설계가 타당한지 확인해 봅니다.
3. 앞서 설계한 기능의 정밀도를 높이는 경우와 재현율을 높이는 경우 각각 어떤 문제가 생기는지 살펴보고, 비즈니스 관점에서 어떤 선택이 나은지 판단해 봅니다.

### 실전 과제
1. AI 서비스를 실제 운용하고 있는 기업의 기술 블로그를 방문해 주요 기능의 실제 구현 기술과 그 배경을 살펴봅니다.
2. 이 기술이 어떤 과정을 통해 고객 가치를 만들어내는지 기술적 측면과 비즈니스적 측면 두 관점에서 분석해 봅니다.
3. 학습한 내용을 바탕으로, 해당 기술이 앞으로 더 나은 고객 가치를 창출하기 위해 필요한 발전 방향과 접근법을 정리합니다.

## 참고 자료
- [2강 연구 과제 PDF](/assets/pdf/goormti2iw.pdf)
- [2강 실전 과제 PDF](/assets/pdf/goormti2gw.pdf)

### 학습 자료 및 출처

#### 서적
- Russell, S., & Norvig, P. (2021). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson. - AI 기본 개념 및 역사
- Géron, A. (2022). *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* (3rd ed.). O'Reilly Media. - 머신러닝 기본 원리 및 실습
- Provost, F., & Fawcett, T. (2013). *Data Science for Business*. O'Reilly Media. - PM을 위한 데이터 과학 및 AI 성능 지표

#### 관련 강의 및 코스
- [Coursera - Machine Learning Specialization by Andrew Ng](https://www.coursera.org/specializations/machine-learning-introduction) - 지도/비지도/강화 학습 개념
- [Stanford CS229: Machine Learning](http://cs229.stanford.edu/) - 머신러닝 기본 원리 및 알고리즘
- [Fast.ai - Practical Deep Learning for Coders](https://course.fast.ai/) - 실무 중심 딥러닝 학습
- [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) - 특성 공학 및 교차 검증 기법

#### 실무 사례 참고
- [Google AI Blog](https://ai.googleblog.com/) - AI 응용 분야 및 실무 사례
- [Netflix Tech Blog](https://netflixtechblog.com/) - 추천 시스템 성능 지표
- [Uber Engineering Blog](https://www.uber.com/en-KR/blog/engineering/) - 예측 분석 및 최적화 사례
- [Airbnb Engineering & Data Science](https://medium.com/airbnb-engineering) - 데이터 품질 관리 사례

#### 학술 논문 및 문서
- Vaswani, A., et al. (2017). "Attention is All You Need". *NeurIPS*. - Transformer 아키텍처
- Silver, D., et al. (2016). "Mastering the game of Go with deep neural networks and tree search". *Nature*. - 강화 학습
- Krizhevsky, A., Sutskever, I., & Hinton, G. (2012). "ImageNet Classification with Deep Convolutional Neural Networks". *NeurIPS*. - AlexNet 및 딥러닝 발전

#### Youtube
- [StatQuest with Josh Starmer](https://www.youtube.com/@statquest) - 머신러닝 개념 설명
- [3Blue1Brown - Neural Networks Series](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) - 딥러닝 수학적 기초
- [Weights & Biases](https://www.youtube.com/@WeightsBiases) - MLOps 및 모델 성능 평가

#### 커뮤니티
- [Kaggle](https://www.kaggle.com/) - 데이터 과학 및 머신러닝 실습
- [Papers with Code](https://paperswithcode.com/) - 최신 AI 논문 및 벤치마크
- [Reddit r/MachineLearning](https://www.reddit.com/r/MachineLearning/) - AI/ML 커뮤니티

#### 도구 및 프레임워크
- [Scikit-learn Documentation](https://scikit-learn.org/stable/) - 머신러닝 알고리즘 및 교차 검증
- [TensorFlow](https://www.tensorflow.org/) - 딥러닝 프레임워크
- [PyTorch](https://pytorch.org/) - 연구 및 프로덕션용 딥러닝
- [Hugging Face](https://huggingface.co/) - 자연어 처리 모델 및 도구
- [Weights & Biases](https://wandb.ai/) - 실험 추적 및 모델 성능 모니터링