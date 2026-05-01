# SKT FLY AI Challenger 8기 학습 아카이브

이 문서는 SKT FLY AI Challenger 8기에서 공부한 내용을 프로젝트 결과가 아니라 **학습 과정 자체**에 초점을 맞춰 정리한 내부 아카이브다.

- 외부 링크는 의도적으로 남기지 않았다.
- 원문 노트에서 확인된 주제와 날짜를 기준으로 재구성했다.
- 일부 날짜 페이지는 메모가 매우 짧거나 비어 있어, 확인 가능한 범위까지만 적었다.

---

## 1. 전체 구조

확인된 학습 구조는 다음과 같았다.

- **1주차**: 오리엔테이션, ESG, AI 트렌드, NumPy, Pandas, 머신러닝 기초
- **2주차**: 머신러닝 심화, 챗봇/RAG 초입, CNN/RNN, Azure 연결
- **3주차**: 클라우드 컴퓨팅, Azure, App Service, Blob Storage, RAG, DevOps
- **4주차**: Azure Functions, Git/DevOps, 로드밸런서, 컨테이너 레지스트리, OpenCV
- **5주차**: PyTorch, ResNet, ViT/Object Detection, 강화학습, 논문 발표
- **6주차**: AI Agent, LangChain, LangGraph, Memory, Database Toolkit, Custom RAG, Supervisor, MCP

별도 페이지로는 다음 두 가지가 있었다.

- **ADsP 자격증 준비**
- **논문 비교**

즉, 단순히 한 가지 모델만 깊게 파는 과정이라기보다,

1. 데이터/머신러닝 기초를 잡고  
2. 클라우드·배포·운영을 붙이고  
3. 컴퓨터 비전과 딥러닝으로 확장한 뒤  
4. 논문 이해와 AI Agent 구현까지 이어지는 흐름이었다.

---

## 2. 무엇을 공부했는가 — 큰 축

### 2-1. 데이터/머신러닝 기초

초반에는 전형적인 실무형 AI 입문 흐름이 있었다.

- NumPy 배열과 shape 이해
- 축(axis), 데이터 타입, ndarray 개념
- Pandas 기본 구조와 DataFrame/Series 이해
- 데이터 전처리 패턴 감각
- 머신러닝의 큰 분류: 분류, 회귀, 차원축소, 딥러닝

특히 초반 메모에서는 “배열의 차원과 타입을 반드시 확인해야 한다”는 식의 내용이 반복됐다. 단순 문법보다 **데이터를 잘못 다루면 뒤 단계가 다 무너진다**는 감각을 강조한 것으로 보였다.

### 2-2. 머신러닝 알고리즘과 평가

머신러닝 쪽에서는 다음이 구체적으로 등장했다.

- 회귀
  - 선형 회귀
  - 다중 회귀
  - 다항 회귀
  - 최소제곱법
  - 경사하강법
- 분류
  - KNN
  - Decision Tree
  - SVM
  - Ensemble
  - Random Forest
  - AdaBoost
  - Gradient Boosting
- 평가 지표
  - 정확도
  - 정밀도
  - ROC
  - MAE
  - MSE
  - RMSE
- 과적합, 규제, 손실함수 개념

여기서 중요한 점은, 단순히 알고리즘 이름만 훑은 것이 아니라:

- **왜 MSE를 쓰는지**
- **왜 학습률이 너무 크면 안 되는지**
- **K 값에 따라 과대적합/과소적합이 어떻게 갈리는지**
- **Decision Tree가 해석은 쉽지만 일반화 성능은 취약할 수 있다는 점**

같은 설명 수준의 메모가 남아 있었다는 점이다. 즉 “모델 호출법”보다 **원리 중심 정리**가 있었다.

### 2-3. 딥러닝 기초와 구조 이해

딥러닝 쪽으로 넘어가면서는 다음 요소가 확인됐다.

- 뉴럴 네트워크, DNN
- 역전파
- 기울기 소실
- Optimizer
- CNN
- 전이학습
- RNN, LSTM, GRU, Bidirectional LSTM
- ResNet
- ViT

ResNet 메모는 꽤 교육적으로 정리돼 있었다.

- 층을 깊게 쌓으면 정보가 사라지거나 뒤섞여 성능이 떨어질 수 있음
- 이를 residual connection, 즉 지름길 연결로 해결
- ResNet-34와 ResNet-50의 차이
- bottleneck 구조의 의미

RNN 쪽에서는 다음이 눈에 띄었다.

- 시계열/음성/자연어처럼 순서가 중요한 데이터 처리
- timestep, embedding 개념
- CNN 입력 차원과 RNN 입력 차원의 차이

즉 딥러닝 파트도 단순 구현보다 **입력 표현과 구조 차이**를 이해하는 방향이었다.

---

## 3. 날짜별 학습 기록

아래는 확인 가능한 범위에서 재구성한 날짜별 학습 기록이다.

## 1주차

### 2025-12-22

첫날은 기술 수업만이 아니라 과정의 태도를 잡는 날이었다.

- 과정 소개
- 대한상공회의소 관련 안내
- ESG 강의
- AI 기술 트렌드 강연
- NumPy
- Pandas
- Machine Learning Overview

#### 이 날의 핵심 내용

**ESG / AI 윤리**

- ESG는 별도 과제가 아니라 제품과 서비스 전반에 녹아야 한다는 관점
- Green Coding, AI 거버넌스, 인권 같은 주제 등장
- “기술이 있으니 문제를 찾는 것”이 아니라 “현장의 문제에서 기술이 필요해진다”는 사고와 연결되는 내용

**AI 트렌드**

- 인식형 AI와 생성형 AI
- 경쟁자는 AI 자체가 아니라 AI를 활용하는 사람이라는 메시지
- Vibe Coding, 생산성 향상, 반복 업무 축소
- Gemini, Veo 등 생성형 도구 사례

**NumPy / Pandas 기초**

- 배열 차원과 shape
- tuple과 shape 표기 차이
- axis를 기준으로 연산한다는 감각
- ndarray 타입 이해
- NumPy가 list보다 빠른 이유
- Pandas 데이터 핸들링 기초

이 날은 기술 자체보다도 “앞으로 어떤 관점으로 AI를 다룰 것인가”를 세팅하는 날에 가까웠다.

### 2025-12-23

본격적인 머신러닝 기초.

- 회귀 모델
- 선형 회귀
- 다중 회귀
- 다항 회귀
- 최소제곱법
- 경사하강법
- 손실함수
- 분류 모델
- KNN
- Decision Tree
- SVM
- Ensemble
- Random Forest
- AdaBoost
- Gradient Boosting
- 평가 지표

#### 이 날의 핵심 포인트

- 회귀와 분류를 분리해서 이해
- MAE/MSE/RMSE를 각각 어떤 목적에 쓰는지 구분
- 경사하강법을 직관적으로 이해하려고 노력한 흔적이 강함
- 과적합과 규제의 필요성 등장

### 2025-12-24

이 날짜는 메모가 짧았고, **클러스터링**만 명시적으로 남아 있었다.

확실히 확인 가능한 내용:

- 클러스터링

즉 이 날은 비지도학습 또는 군집화 파트를 다룬 것으로 보이지만, 세부 메모는 거의 남아 있지 않았다.

### 2025-12-26

머신러닝에서 딥러닝/컴퓨터비전 쪽으로 넘어가는 연결일이었다.

- 머신러닝 개요 재정리
- 선형 회귀 / 로지스틱 회귀
- MSE, Cost Function
- 경사하강법
- Convex / local minimum / global minimum
- 배치, 확률적, 미니배치 경사하강법
- 다중분류와 Softmax
- 뉴럴 네트워크
- Transformer
- 역전파
- CNN
- 이미지 분류
- 합성곱, 패딩, 풀링
- 전이학습

#### 이 날의 핵심 포인트

- 회귀/분류의 수학적 기초를 다시 딥러닝 손실함수 관점으로 연결
- Softmax와 원핫 인코딩 개념 등장
- CNN을 실습 위주로 진행할 예정이라는 메모가 있어, 이론 후 실습 전환 지점으로 보임

---

## 2주차

### 2025-12-29

이 날은 **팀빌딩** 중심 기록이었다. 참가자 소개와 팀 형성 관련 메모가 대부분이었다.

기술 학습보다는:

- 팀 구성
- 동기 파악
- 서로의 전공/강점 확인

에 가까웠다.

사용자 요청대로 프로젝트 상세는 핵심이 아니므로 여기서는 길게 다루지 않는다. 다만 과정 운영상 “개인 학습 → 협업 전환”의 분기점이었던 날로 기록해둘 가치가 있다.

### 2025-12-30

이 날은 상당히 흥미롭다. 단순 수업 메모가 아니라 **실무자 관점, 에이전트, RAG, 커리어**가 섞여 있다.

- 챗봇 만들기
- LangGraph vs LangChain
- 멀티 Agent
- PDF 문서 로딩
- 실무자 패널/대화
- 기업에서 보는 협업, 적응력, AI 활용력
- 학부생이 가져가야 할 프로젝트/클라우드 경험

#### 이 날의 핵심 포인트

기술적으로는:

- LangChain / LangGraph 차이
- PDF 기반 RAG 초입

실무 관점에서는:

- 협업 능력의 중요성
- 스스로 공부하고 적응하는 능력
- 클라우드, Docker, Kubernetes, 메시지 큐처럼 학부생이 잘 못 해보는 경험의 가치
- 프로젝트는 얕게 많이 하는 것보다 한 가지를 끝까지 파는 게 중요하다는 조언

즉 이 날은 단순한 강의보다 **AI 실무자의 관점으로 학습 방향을 교정한 날**에 가깝다.

### 2025-12-31

- RAG Agent (Chatbot) with LangChain
- LangChain만으로 RAG 구현
- Streamlit
- 프로젝트 발표 준비 메모

핵심은 명확하다.

- LangChain 기반 RAG Agent 구성
- UI는 Streamlit 사용

즉 “검색 기반 챗봇”을 실제 형태로 이어보는 날이었다.

### 2026-01-02

- RNN
- LSTM
- GRU
- Bidirectional LSTM
- 임베딩
- timestep
- 이미지 증강
- Microsoft Azure 언급

#### 이 날의 핵심 포인트

- 순서 정보를 다루는 모델로서 RNN 계열 이해
- 텍스트를 숫자로 바꾸는 embedding 개념
- 시퀀스 길이와 입력 텐서 형태에 대한 감각
- CNN 이후 RNN/NLP로 넘어가는 연결

---

## 3주차 — 클라우드 컴퓨팅 / Azure / DevOps

### 2026-01-05

- Microsoft Azure
- AZ-900 / DP-900 / AI-900
- IaaS / PaaS / SaaS
- 프라이빗 / 퍼블릭 / 하이브리드 클라우드
- CapEx / OpEx
- 리소스 그룹
- 서버 생성
- 방화벽
- MySQL 설치
- Azure Storage / Blob / Container / File / Queue / Table
- Python으로 Blob 업로드

#### 이 날의 핵심 포인트

이 날은 “클라우드 개념 + Azure 실제 사용”이 동시에 있었다.

- 클라우드 서비스 모델 비교
- 비용 구조 사고(CapEx vs OpEx)
- 네트워크/방화벽 감각
- 스토리지 계정과 Blob 개념
- Python 코드로 직접 업로드하는 수준까지 연결

즉 추상적인 클라우드 소개에서 끝나지 않고 **실제 리소스 생성과 데이터 저장까지** 내려갔다.

### 2026-01-06

- Azure App Service 웹앱 구현
- Computer Vision
- LLM
- 배포 슬롯
- Token / Vector
- 파인튜닝 vs RAG

핵심 포인트는 두 가지다.

1. **App Service 기반 웹앱 배포 감각**  
2. **파인튜닝과 RAG의 역할 분리**

메모에서 “바뀌지 않는 정보는 파인튜닝, 바뀌는 정보는 RAG”라는 구분이 인상적이다. 실무에서 어떤 방식으로 문제를 풀지 결정하는 판단 기준이 들어간 날이다.

### 2026-01-07

- Azure OpenAI를 이용한 생성형 AI 개발
- RAG
- Blob Storage
- Azure AI Search
- index / search / datasource
- vector database 개념
- chunk / embed / vector store 흐름

즉 이 날은 RAG를 실제 Azure 서비스 조합으로 보는 날이었다.

**RAG 파이프라인이 어떻게 구성되는지**가 명확히 등장한다.

- 문서 적재
- chunk 분할
- embedding 생성
- vector 저장
- 검색 서비스 구성

### 2026-01-08

- 머신러닝
- Automated ML
- Machine Learning Studio / Foundry
- MLOps
- PDF RAG
- 코사인 유사도

이 날은 Azure 생태계 안에서 AI 개발 환경을 보는 날이었다.

- Azure ML Designer / Studio
- Azure AI Foundry
- MLOps 개념
- PDF RAG와 임베딩 유사도 계산

즉 모델 개발과 운영, 그리고 검색형 응용을 하나의 플랫폼 관점으로 보게 된 시점이다.

### 2026-01-09

- DevOps
- 클라우드 컴퓨팅 비교
- 가상 네트워크
- 가상 머신 배포
- Linux VM
- 스토리지
- 파일 공유
- 디스크 추가/마운트
- Azure Bastion

핵심은 “서비스를 띄우는 것”보다 **인프라를 실제로 다루는 감각**이다.

- VM 생성
- 네트워크 설계
- 디스크 포맷/마운트
- 리소스 시각화

AI 과정이지만 인프라를 건드리는 메모가 꽤 구체적이었다.

### 2026-01-10

- Azure CLI
- App Service
- 웹앱 배포
- 배포 슬롯
- Storage 계정 구성
- 서버리스
- Terraform / IaC
- Vibe Coding vs Augmented Coding

핵심은 운영 자동화와 배포다.

- Portal뿐 아니라 CLI로 Azure를 다룸
- App Service 배포 방식 비교
- 배포 슬롯 개념
- IaC(Terraform) 소개
- AI 보조 개발 방식에 대한 개념 구분

즉 이 주차는 AI만이 아니라 **배포 가능한 서비스로 만들기 위한 플랫폼 이해**가 매우 강했다.

---

## 4주차 — Azure Functions / Git / DevOps / OpenCV

### 2026-01-12

- Azure Functions
- HTTP Trigger 함수 생성
- Blob Storage Trigger
- 이미지 매니저
- Git
- Branch 실습
- Github Codespaces
- Github Actions

이 날은 함수형 클라우드와 개발 협업 도구가 결합됐다.

- 서버리스 함수 생성
- 함수 URL 테스트
- 스토리지 트리거 함수
- Git/GitHub 실습

즉 “코드를 어떻게 만들고 배포하며 연결할 것인가”의 기초를 다지는 날이었다.

### 2026-01-13

- 로드밸런서 실습
- WSL2 / Docker Desktop 설치
- Docker 이미지 빌드
- 컨테이너 수명주기
- VM 2대 구성
- NGINX 설치
- Azure Load Balancer 구성

이 날은 로컬 개발환경과 클라우드 인프라를 잇는 실습이었다.

- Windows 환경에서 WSL2 + Docker 준비
- VM 두 대에 동일 서비스 구성
- 로드밸런서를 두고 트래픽 분산 확인

즉 DevOps 개념이 아니라 **실제 네트워크 레벨 분산**을 몸으로 익히는 실습이었다.

### 2026-01-14

- 컨테이너 레지스트리
- DockerHub
- Azure ACR push
- 컨테이너 인스턴스 생성
- 웹앱 컨테이너 배포
- Azure k8s
- VMSS

핵심은 컨테이너 아티팩트를 저장하고 배포하는 흐름이다.

- 이미지 저장소 개념
- Public/Private Registry 차이
- ACR 사용
- 컨테이너 기반 배포 확장

### 2026-01-15

- 디지털 영상처리 개요
- 빛과 색
- 눈의 구조
- 컬러 모델
- 디지털 영상 종류
- OpenCV 인터페이스
- 웹캠/동영상 읽기
- 이벤트 처리
- 그리기 함수
- 색상 공 탐지
- 기본 배열/비트 연산

이 날은 OpenCV의 가장 기초를 깔았다.

- 영상이 무엇인지
- 색을 어떻게 표현하는지
- OpenCV에서 영상이 ndarray라는 점
- 카메라 입력과 간단한 제어

즉 컴퓨터비전의 “수학 이전 감각”을 잡는 날이었다.

### 2026-01-16

- 화소 처리
- 산술 연산
- 명암 대비
- 히스토그램
- 컬러 공간 변환
- Hue 기반 객체 검출
- 회선(convolution)
- 엠보싱
- 블러링
- 샤프닝
- 에지 검출
- 모폴로지

이 날은 전형적인 영상처리 연산을 한꺼번에 다룬 날이다.

- 밝기/대비 조절
- 필터 기반 영상 처리
- edge detector 비교
- morphology

딥러닝 이전에 영상처리 연산을 손으로 다뤄보는 감각을 강화했다.

### 2026-01-17

- 기하학적 변환
- 보간
- 평행이동
- 회전
- 어파인 변환
- 원근 투시 변환
- 동적 비전
- 광류 추정(Farneback)
- KLT 추적
- 얼굴 검출
- MediaPipe

이 날은 정적인 영상 처리에서 **움직임과 추적**으로 넘어간 날이다.

특히 다음이 중요하다.

- optical flow
- tracking
- face detection
- MediaPipe 기반 사람 인식

즉 CV를 “이미지 분류”가 아니라 **실시간 영상 분석**까지 넓혀봤다.

---

## 5주차 — PyTorch / 논문 / 강화학습

### 2026-01-19

- PyTorch 설치
- Tensor
- Dataset / DataLoader
- Transform
- Build Model
- Autograd
- Optimization

이 날은 PyTorch 입문 정석 코스였다.

- 텐서 개념
- 데이터셋과 배치 로딩
- transform 구조
- nn.Module 기반 모델 정의
- 자동 미분
- 학습 루프

같은 날 복습 페이지도 별도로 있었다.

#### 복습 페이지에서 보강된 내용

- 모델 저장 / 불러오기
- 하이퍼파라미터
- 손실 함수 / optimizer
- CNN receptive field 참고자료
- ResNet 논문 자료

즉 이 날은 단순 사용법보다 **PyTorch로 신경망을 짜는 기본 문법**을 확실히 잡는 날이었다.

### 2026-01-20

- ResNet
- residual connection
- ResNet-34 vs ResNet-50
- bottleneck 구조

이 날은 한 주제에 집중해서, CNN의 고전적인 핵심 구조를 이해한 날로 보인다.

### 2026-01-21

- ViT 논문 발표
- Object Detection
- YOLOv8 / DETR / CLIP 자료

이 날은 논문과 응용 주제가 함께 갔다.

- Vision Transformer 이해
- Object Detection 관련 자료 검토

즉 CNN 이후 비전 모델을 더 넓게 보는 전환 지점이다.

### 2026-01-22

- 강화학습
- PEAS
- Tree Search vs Reinforcement Learning
- MDP
- Monte Carlo RL
- DQN
- Gridworld 실습
- Gym / Gymnasium

이 날은 강화학습의 기본을 상당히 체계적으로 정리한 날이었다.

- 상태, 행동, 보상
- 누적 보상(return)
- MDP
- 탐색과 강화학습의 차이
- Deep Q-Learning

즉 “환경과 상호작용하면서 학습하는 방식”을 별도 축으로 배운 셈이다.

### 2026-01-23

이 날짜는 공개된 메모가 거의 없었다. 확인 가능한 내용은 사실상 없다고 보는 편이 맞다.

### 2026-01-24 — 논문 발표

이 날은 논문 발표 중심이었다.

확인된 발표 주제:

- InstructPix2Pix
- Attention Is All You Need
- Adaptive KV Cache Compression
- Animate Anyone
- Self-RAG
- Chain-of-Thought Prompting
- Prefix-Tuning

즉 이 날은 단순 강의 수강이 아니라 **직접 논문을 읽고 발표하는 훈련**이 이루어진 날이다.

프로젝트 자체보다 중요한 점은,

- 비전/이미지 생성
- LLM 구조
- RAG
- Prompt Engineering
- PEFT
- LLM 추론 최적화

같은 현대 AI 논점을 직접 소화했다는 점이다.

---

## 6주차 — AI Agent

### 2026-01-26

- LCEL
- RAG
- structured_output
- LangGraph Basic
- State / Node / Conditional Edge
- Tools
- DuckDuckGo Search

핵심은 “LLM을 호출하는 코드”에서 끝나지 않고,

- 체인 구성
- 상태 기반 그래프 구성
- 도구 연결
- 조건 분기

즉 **에이전트 워크플로우 설계**로 넘어갔다는 점이다.

### 2026-01-27

- Memory
- Tavily API
- Web Search Tool
- Database Toolkit
- 자연어 → SQL
- Custom RAG
- 문서 처리
- 질문 재작성
- Supervisor
- 검색 에이전트 / 파일 시스템 에이전트

이 날은 Agent를 훨씬 실무적으로 다뤘다.

- 장기/단기 메모리
- 검색 도구 연결
- DB 질의
- custom RAG 파이프라인
- supervisor 패턴

즉 “챗봇” 수준이 아니라 **복수 기능을 가진 에이전트 시스템**에 가까워졌다.

### 2026-01-28

- MCP
- MCP 서버/클라이언트
- FastMCP
- LangChain MCP Adapters
- math server
- weather server
- filesystem MCP
- playwright MCP
- 비동기 호출

이 날이 꽤 중요하다. Agent 수업이 단순 프롬프트 체인에서 끝나지 않고,

- 별도 서버 형태의 도구
- 프로토콜 기반 연결
- 다중 서버 구성
- 실제 파일시스템/브라우저 같은 외부 능력 연결

까지 갔다.

즉 이 과정은 “AI Agent”를 유행어로 다룬 것이 아니라, **도구 호출 가능한 에이전트 아키텍처**까지 실제 코드 수준으로 본 것이다.

---

## 4. 별도 학습 트랙

### ADsP 자격증 준비

별도 페이지에서 확인된 파트는 다음과 같다.

- Part 01. 데이터 이해
- Part 02. 데이터 분석 기획

상세 메모는 많지 않았지만, 과정 학습과 별개로 **데이터 분석 자격 준비를 병행**하고 있었음을 보여준다.

### 논문 비교 페이지

논문 비교 페이지는 단순 참고 링크 모음이 아니었다. 분야별로 비교 축을 만들고 정리해둔 형태였다.

#### CNN / Vision Transformer 축

- U-Net
- Image Style Transfer
- YOLO
- Segment Anything
- EfficientNet
- BERT도 같이 포함되어 있어 모델 계보 비교 시야가 넓었음

#### Stable Diffusion / 이미지 생성 축

- InstructPix2Pix
- DreamBooth
- DragDiffusion
- Animate Anyone
- Concept Sliders
- Super Resolution
- ControlNet 계열

#### LLM 축

- Iterative RAG
- Self-RAG
- Zero-shot Reasoning
- Chain-of-Thought
- Few-shot
- Calibration
- Prefix-Tuning
- SmoothQuant
- Adaptive KV Cache Compression
- Attention Is All You Need

즉 이 페이지는 단순히 “읽은 논문 기록”이 아니라, **비전 / 생성 / LLM을 각각 어떻게 비교해서 볼지 정리해둔 지도**에 가까웠다.

---

## 5. 이 과정을 통해 축적된 역량

프로젝트를 빼고 학습 자체만 봐도, 이 과정에서 쌓인 것은 꽤 넓다.

### 5-1. 데이터와 모델의 기초 체력

- 배열, 차원, 타입, shape에 대한 감각
- Pandas 기반 데이터 처리
- 회귀/분류/평가 지표 이해
- 손실함수와 최적화 개념

### 5-2. 딥러닝 구조 이해

- CNN / RNN / LSTM / GRU
- ResNet
- ViT
- Transformer
- 전이학습

### 5-3. 검색·생성형 AI 응용

- LangChain / LangGraph
- RAG
- PDF 기반 검색
- 벡터화 / 코사인 유사도
- structured output
- tool calling

### 5-4. 클라우드와 운영 감각

- Azure App Service
- Azure Functions
- Blob Storage
- Azure AI Search
- VM / VNet / Load Balancer
- Azure CLI
- 배포 슬롯
- IaC 감각

### 5-5. 컴퓨터 비전과 영상처리

- OpenCV
- 영상처리 기초
- convolution / filtering
- object detection 기초 감각
- optical flow / tracking / face detection

### 5-6. 논문 읽기와 비교 능력

- 논문 주제 분류
- 한 분야에서 대표 논문 계보 보기
- 발표로 설명 가능한 수준까지 구조화

### 5-7. AI Agent 아키텍처 이해

- State/Node 기반 그래프 구성
- Memory
- Supervisor
- DB Toolkit
- Custom RAG
- MCP 연동

---

## 6. 한 줄 요약이 아니라, 실제로는 어떤 경험이었는가

SKT FLY AI Challenger 8기는 단순히 “AI 강의를 들었다”로 요약하기 어렵다.

실제 기록을 보면 이 과정은:

- 초반에 데이터와 머신러닝 기초를 다지고,
- 중반에 Azure와 DevOps로 서비스/인프라 감각을 붙이고,
- OpenCV와 PyTorch로 모델링을 직접 만지며,
- 논문 비교와 발표로 기술 이해를 정리하고,
- 마지막에 LangChain/LangGraph/MCP로 AI Agent 시스템까지 연결한 과정이었다.

즉,

**이론 → 실습 → 배포 → 비교/발표 → 에이전트 아키텍처**

로 이어지는 비교적 드문 형태의 압축 과정이었다.

---

## 7. 빠르게 보는 핵심 키워드

### Foundations

- NumPy
- Pandas
- Machine Learning
- Regression / Classification / Clustering
- Metrics

### Deep Learning

- CNN
- RNN
- LSTM / GRU
- ResNet
- ViT
- Transformer

### Cloud / DevOps

- Azure
- App Service
- Functions
- Blob Storage
- AI Search
- Azure CLI
- VM / VNet / Load Balancer
- Docker
- Registry
- IaC

### Computer Vision

- OpenCV
- Color / Histogram / Filtering
- Edge Detection
- Morphology
- Perspective Transform
- Optical Flow
- Tracking

### Generative AI / LLM / Agents

- RAG
- LangChain
- LangGraph
- Structured Output
- Memory
- Supervisor
- MCP
- Tool Calling

### Research Literacy

- Attention Is All You Need
- Self-RAG
- Prefix-Tuning
- CoT
- InstructPix2Pix
- Animate Anyone
- YOLO
- U-Net

---

## 8. 남겨둘 메모

이 문서를 다시 쓸 때 중요한 포인트는 다음이다.

1. 이 경험은 “수상”보다 **학습 밀도와 범위**가 강점이다.  
2. 특히 클라우드/DevOps와 AI Agent까지 이어진 점이 흔한 수강 기록과 다르다.  
3. 프로젝트를 빼더라도, 과정 자체만으로도 충분히 서사와 기술 축이 나온다.  
4. 이후 포트폴리오에 반영한다면 “무엇을 만들었나”보다 **무엇을 익혔고 어떤 관점이 생겼나**를 중심으로 풀어내는 편이 맞다.
