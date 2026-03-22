export interface LocalizedProjectDetails {
  overview: string;
  role?: string;
  challenge: string;
  solution: string;
  impact?: string;
  highlights?: string[];
  results: string[];
  tech: string[];
}

export interface Project {
  id: number;
  title: string;
  year: string;
  period?: string;
  tags: string;
  description: {
    ko: string;
    en: string;
  };
  color: string;
  details: {
    ko: LocalizedProjectDetails;
    en: LocalizedProjectDetails;
  };
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface Contribution {
  id: string;
  title: string;
  year: string;
  scope: string;
  summary: {
    ko: string;
    en: string;
  };
  details: {
    ko: string;
    en: string;
  };
  results: {
    ko: string[];
    en: string[];
  };
  tech: string[];
  links: {
    repo: string;
    pr?: string;
    commit?: string;
  };
}

export const projects: Project[] = [
  {
    id: 2,
    title: "SIGN LANGUAGE AI",
    year: "2025",
    period: "2025.08 - 2026.02",
    tags: "FastAPI · OCR · Qdrant · Veo 3",
    description: {
      ko: "OCR·LLM·Veo 3를 연결한 수어 비디오 생성 백엔드",
      en: "Backend for OCR-to-sign-language video generation",
    },
    color: "#1A3A2A",
    details: {
      ko: {
        overview:
          "Binary 팀에서 진행한 해커톤 프로젝트와 동일한 수어 번역 프로젝트로, 한국어 텍스트를 수어 영상 생성 파이프라인으로 연결하는 FastAPI 기반 백엔드입니다. OCR로 문장을 추출하고, 수어 사전 semantic search와 LLM 프롬프트 생성을 거쳐 Google Veo 3 영상 생성과 S3 저장까지 하나의 API 흐름으로 구성했습니다.",
        role:
          "FastAPI 백엔드와 프롬프트 엔지니어링을 중심으로, 비동기 비디오 생성 구조·수어 검색 구조·LLM 추상화까지 연결하는 역할을 맡았습니다.",
        challenge:
          "초기 구조에서는 Veo 생성 시간이 길어 동기 요청에서 타임아웃 위험이 있었고, 수어 설명 조회는 외부 공공 API에 의존해 재현성과 안정성이 낮았습니다. 또한 문장 분석과 프롬프트 생성이 Gemini 단일 의존 구조라 개발·운영 환경에 맞는 모델 선택이 제한됐습니다.",
        solution:
          "비디오 생성은 Celery·Redis 기반 비동기 작업으로 분리해 task_id 발급, 상태 조회, 취소, S3 업로드 흐름을 만들었습니다. 수어 설명 조회는 13,950건 CSV를 Qdrant에 임베딩 적재하는 semantic search 구조로 전환했고, 문장 분석과 프롬프트 생성은 Ollama·OpenAI를 공통 인터페이스로 다루는 LLMService로 정리했습니다.",
        impact:
          "단순한 수어 번역 데모가 아니라, OCR·검색·LLM·영상 생성이 이어지는 운영 가능한 백엔드 구조로 정리했다는 점이 핵심입니다. 긴 작업을 비동기로 분리하고 외부 의존성을 줄여 실제 서비스화에 가까운 형태로 개선했습니다.",
        highlights: [
          "숭실대 워런톤 최우수상 수상 프로젝트",
          "Binary 팀 해커톤 프로젝트와 동일한 수어 번역 백엔드 작업",
          "Qdrant 기반 수어 데이터 검색 구조 도입",
          "Ollama·OpenAI 통합 LLMService 도입",
          "Veo 3 비동기 작업과 S3 업로드 흐름 구현",
        ],
        results: [
          "Veo 3 생성을 task_id 기반 비동기 워크플로우로 전환",
          "수어 사전 CSV 13,950건을 Qdrant 인덱스로 적재해 외부 조회 의존을 내부 검색으로 전환",
          "Ollama·OpenAI 통합 LLM 레이어 도입으로 로컬·운영 환경 선택지 확보",
          "LLM 응답 정리 유틸, 오류 분기, 테스트 보강으로 실패 처리 가시성 개선",
        ],
        tech: [
          "FastAPI",
          "Google Vision OCR",
          "Qdrant",
          "OpenAI Embeddings",
          "Ollama",
          "OpenAI API",
          "Google Veo 3",
          "Celery",
          "Redis",
          "AWS S3",
        ],
      },
      en: {
        overview:
          "This is the same sign-language translation project that I carried into the Binary team hackathon, built as a FastAPI backend that turns Korean text into a sign-language video generation workflow. It connects OCR, semantic retrieval over sign-language data, LLM-based prompt generation, Google Veo 3 generation, and S3 delivery inside a single API-driven pipeline.",
        role:
          "I focused on the FastAPI backend and prompt-engineering side, while also shaping the async video-generation flow, sign-language retrieval layer, and LLM abstraction into one working system.",
        challenge:
          "The earlier structure risked timeouts because Veo generation was handled synchronously, relied on an external public API for sign descriptions, and was tightly coupled to Gemini for analysis and prompt generation. That made reproducibility, runtime stability, and deployment flexibility harder to manage.",
        solution:
          "I moved video generation into a Celery and Redis async workflow with task submission, status polling, cancellation, and S3 upload. I replaced the external sign-description lookup with a Qdrant-based semantic search pipeline over 13,950 CSV entries, and unified prompt generation behind an LLMService that supports both Ollama and OpenAI.",
        impact:
          "The value of the project came from turning a demo-like translation flow into a backend that could realistically support operations. By separating long-running work and reducing external dependency, the system became more reproducible and service-ready.",
        highlights: [
          "Award-winning project at the Soongsil Warranton hackathon",
          "The same sign-language backend project carried into the Binary team hackathon",
          "Introduced Qdrant-based sign-language retrieval",
          "Introduced a unified Ollama/OpenAI LLMService",
          "Implemented async Veo 3 processing and S3 upload flow",
        ],
        results: [
          "Converted Veo 3 generation into a task_id-based async workflow",
          "Indexed 13,950 sign-language dictionary rows in Qdrant and replaced external lookup dependency",
          "Added an Ollama/OpenAI abstraction for more flexible local and hosted model usage",
          "Improved failure handling with shared JSON cleanup, clearer error branches, and added tests",
        ],
        tech: [
          "FastAPI",
          "Google Vision OCR",
          "Qdrant",
          "OpenAI Embeddings",
          "Ollama",
          "OpenAI API",
          "Google Veo 3",
          "Celery",
          "Redis",
          "AWS S3",
        ],
      },
    },
    links: {
      github: "https://github.com/FullMoo0n/ai",
    },
  },
  {
    id: 10,
    title: "POWER MONITORING SYSTEM",
    year: "2025",
    period: "2025.06 - 2025.11",
    tags: "IoT · Flask · Vue · Claude API",
    description: {
      ko: "한이음 ICT 멘토링 공모전 장려상 수상 전력 모니터링 및 ESG 리포트 자동화 시스템",
      en: "Encouragement-award-winning power monitoring and ESG reporting system from the Hanium ICT Mentoring competition",
    },
    color: "#19324A",
    details: {
      ko: {
        overview:
          "Arduino·ESP32 센서에서 전력 소비량과 환경 데이터를 수집하고, 이를 Flask 백엔드와 Vue 대시보드, Claude 기반 ESG 리포트 생성으로 연결한 풀스택 시스템입니다. 센서 데이터 수집부터 리포트 자동화까지 전체 흐름을 하나의 서비스로 묶는 데 집중했고, 한이음 ICT 멘토링 공모전 장려상 수상으로 그 완성도를 인정받았습니다.",
        role:
          "풀스택 단독 주도 형태로 센서 수집 흐름, Flask API, 대시보드, AI 리포트 생성을 함께 설계하고 구현했습니다.",
        challenge:
          "센서 데이터가 끊기지 않도록 수집·저장·시각화를 연결해야 했고, 단순 모니터링을 넘어 실제로 읽을 수 있는 ESG 리포트까지 자동 생성해야 했습니다. 실시간성, 데이터 무결성, 운영 편의성을 함께 고려한 구조가 필요했습니다.",
        solution:
          "센서 → MQTT → Flask API → MySQL → Vue 대시보드 흐름으로 아키텍처를 구성하고, WebSocket으로 5초 단위 데이터를 스트리밍했습니다. 탄소 배출량 계산 로직과 Claude API 기반 보고서 생성을 붙였고, Docker Compose로 각 서비스를 컨테이너 기반으로 운영하도록 정리했습니다.",
        impact:
          "하드웨어 데이터 수집과 웹 소프트웨어, AI 리포트 생성을 하나의 제품 흐름으로 연결한 프로젝트였습니다. 단순 수집 도구가 아니라 실제 운영과 리포트 소비까지 고려한 구조를 직접 설계했고, 한이음 ICT 멘토링 공모전 장려상 수상으로 실용성과 완성도를 검증했습니다.",
        highlights: [
          "한이음 ICT 멘토링 공모전 장려상 수상",
          "5초 주기 MQTT 데이터 수집과 WebSocket 대시보드 연결",
          "탄소 배출량 계산 로직과 Claude 기반 ESG 리포트 자동화 결합",
          "Docker Compose 기반 마이크로서비스 구조로 운영 정리",
        ],
        results: [
          "5초 단위 실시간 전력 데이터 스트리밍 대시보드 구축",
          "Claude API 기반 ESG 리포트 자동 생성 파이프라인 구현",
          "센서·백엔드·대시보드 전체 아키텍처를 풀스택으로 주도",
          "한이음 ICT 멘토링 공모전 장려상 수상",
        ],
        tech: [
          "Arduino",
          "ESP32",
          "MQTT",
          "Flask",
          "Vue.js",
          "WebSocket",
          "MySQL",
          "Docker",
          "Claude API",
        ],
      },
      en: {
        overview:
          "A full-stack system that collects power-consumption and environmental data from Arduino and ESP32 devices, streams it through a Flask backend and Vue dashboard, and generates ESG reports with Claude. The focus was on connecting sensing, monitoring, and reporting into one end-to-end service, and the project received an encouragement award in the Hanium ICT Mentoring competition.",
        role:
          "I drove the project end to end across sensor ingestion, Flask APIs, dashboard work, and AI-based report generation.",
        challenge:
          "The system needed to connect sensor ingestion, storage, and visualization without losing data, while also turning raw measurements into readable ESG reports. It required a structure that balanced real-time updates, data integrity, and operational simplicity.",
        solution:
          "I designed a sensor → MQTT → Flask API → MySQL → Vue dashboard architecture and streamed updates every five seconds over WebSocket. I added carbon-emission calculation and Claude-based report generation, then packaged the services with Docker Compose for repeatable local operation.",
        impact:
          "This project mattered because it connected hardware collection, web software, and AI reporting into a single product flow. It was not just a monitoring demo but a fuller system designed for operation and consumption, and the encouragement award from the Hanium ICT Mentoring competition validated that practicality.",
        highlights: [
          "Received an encouragement award in the Hanium ICT Mentoring competition",
          "Connected 5-second MQTT ingestion to a live WebSocket dashboard",
          "Combined carbon-emission calculation with Claude-based ESG reporting",
          "Packaged the stack with Docker Compose for service-level operation",
        ],
        results: [
          "Built a dashboard that streams power data every five seconds",
          "Implemented an automated ESG report pipeline using Claude API",
          "Led the end-to-end sensor, backend, and dashboard architecture as a full-stack project",
          "Received an encouragement award in the Hanium ICT Mentoring competition",
        ],
        tech: [
          "Arduino",
          "ESP32",
          "MQTT",
          "Flask",
          "Vue.js",
          "WebSocket",
          "MySQL",
          "Docker",
          "Claude API",
        ],
      },
    },
    links: {
      github: "https://github.com/yeop-sang/hanium_power_monitor_server",
    },
  },
  {
    id: 11,
    title: "ROAD DAMAGE DETECTION",
    year: "2025",
    period: "2025.07",
    tags: "Computer Vision · U-Net · YOLOv5x",
    description: {
      ko: "U-Net + YOLO 앙상블 기반 도로 파손 탐지 실험",
      en: "Road damage detection with a U-Net + YOLO ensemble",
    },
    color: "#243A1F",
    details: {
      ko: {
        overview:
          "USC Road Damage Detection 대회에서 도로 파손 이미지를 더 정확하게 찾기 위해 배경 제거와 객체 탐지를 결합한 컴퓨터 비전 실험입니다. 제한된 시간 안에 성능과 학습 효율을 함께 확보하는 것이 핵심이었습니다.",
        role:
          "기술 담당으로 배경 제거와 객체 탐지 조합 전략, 전처리 파이프라인, 실험 반복 구조를 설계했습니다.",
        challenge:
          "도로 이미지에는 배경 노이즈와 다양한 파손 형태가 섞여 있어 단일 탐지 모델만으로 안정적인 성능을 내기 어려웠습니다. 대회 환경에서는 학습 시간을 과도하게 늘리지 않으면서도 성능을 끌어올릴 전략이 필요했습니다.",
        solution:
          "U-Net으로 배경을 정리한 뒤 YOLOv5x 기반 객체 탐지를 조합하는 앙상블 접근을 적용했습니다. 데이터 전처리와 학습 파이프라인을 정리해 반복 실험 비용을 낮추고, 제한된 학습 시간 안에서 결과를 비교·개선할 수 있도록 구성했습니다.",
        impact:
          "단순 모델 실험이 아니라, 전처리와 학습 효율까지 포함한 실험 전략을 설계했다는 점이 중요했습니다. 모델 선택보다 전체 파이프라인 품질이 성능과 일정에 큰 영향을 준다는 점을 직접 검증한 프로젝트였습니다.",
        highlights: [
          "USC IMSC Hackathon 3위 수상",
          "숭실대 BRIDGE 3.0 PoC 선정",
          "배경 제거 + 탐지 모델 결합을 통한 앙상블 실험",
          "50 epoch 기준 3~4시간 미만 학습 파이프라인 구성",
        ],
        results: [
          "USC IMSC Hackathon 3위 수상",
          "숭실대 BRIDGE 3.0 PoC 선정",
          "50 epoch 기준 3~4시간 미만의 학습 파이프라인 구성",
          "배경 제거와 객체 탐지를 결합한 앙상블 실험 구조 설계",
        ],
        tech: ["U-Net", "YOLOv5x", "PyTorch", "OpenCV", "Google Colab"],
      },
      en: {
        overview:
          "A computer-vision project for the USC Road Damage Detection competition that combined background removal and object detection to improve road-damage recognition. The main goal was to balance performance and training efficiency under a tight schedule.",
        role:
          "I focused on the technical strategy: combining background removal with detection, shaping the preprocessing flow, and making experiments repeatable under time pressure.",
        challenge:
          "Road images contain noisy backgrounds and highly varied damage patterns, which makes it difficult to rely on a single detector alone. In a competition setting, I needed an approach that improved performance without turning training time into a bottleneck.",
        solution:
          "I used an ensemble strategy that applied U-Net for background cleanup before YOLOv5x-based detection. I also organized the preprocessing and training workflow so experiments could be repeated and compared within a limited training window.",
        impact:
          "The project showed that pipeline quality—not just model choice—can strongly shape both performance and delivery speed. It became a practical exercise in balancing research quality with competition constraints.",
        highlights: [
          "Placed 3rd at the USC IMSC Hackathon",
          "Selected for Soongsil BRIDGE 3.0 PoC",
          "Used an ensemble approach combining segmentation and detection",
          "Kept the 50-epoch training flow within roughly 3–4 hours",
        ],
        results: [
          "Placed 3rd at the USC IMSC Hackathon",
          "Selected for Soongsil BRIDGE 3.0 PoC",
          "Built a training pipeline that stayed under roughly 3–4 hours for 50 epochs",
          "Designed an ensemble workflow combining background removal and object detection",
        ],
        tech: ["U-Net", "YOLOv5x", "PyTorch", "OpenCV", "Google Colab"],
      },
    },
    links: {
      demo: "https://colab.research.google.com/drive/1N0MWTKKxj89MX-CvlMV2xXluNJMrgT9a",
    },
  },
  {
    id: 1,
    title: "MUSIC SENSE",
    year: "2025",
    period: "2025",
    tags: "Audio AI · Backend · Multimodal UX",
    description: {
      ko: "SKT FLY AI 대상 수상 멀티모달 음악 경험 프로젝트",
      en: "Grand-prize-winning multimodal music experience project at SKT FLY AI",
    },
    color: "#2A1A4A",
    details: {
      ko: {
        overview:
          "Music Sense는 SKT FLY AI에서 대상을 수상한 프로젝트로, 음악 음원에서 보컬, 드럼, 베이스 등 주요 요소를 분리·분석하고 이를 바탕으로 사용자가 음악을 더 직관적이고 풍부하게 경험할 수 있도록 설계했습니다. 청각장애인의 음악 접근성 문제에서 출발했으며, 이후 더 넓은 사용자 경험과 서비스 가능성까지 함께 탐색했습니다.",
        role:
          "오디오 분석 파이프라인 방향을 설계하고, 분리된 음원 결과를 어떤 사용자 경험으로 연결할지 제품 관점까지 함께 정리했습니다.",
        challenge:
          "기존의 음악 경험은 대부분 청각 중심으로 설계되어 있어, 음악의 구조나 감정선, 리듬 변화를 다양한 방식으로 이해하거나 경험하기 어렵습니다. 또한 특정 사용자는 음악의 요소를 더 분리해서 인식할 필요가 있었고, 더 직관적인 형태로 음악을 해석할 수 있는 도구가 필요했습니다.",
        solution:
          "음원을 분석해 보컬, 드럼, 베이스 등 개별 요소를 분리하고, 이를 기반으로 음악의 구조와 특징을 해석하는 파이프라인을 설계했습니다. 이후 분석 결과를 사용자 경험으로 연결할 수 있도록 멀티모달 인터랙션 방향을 함께 고민했습니다.",
        impact:
          "모델을 하나 더 붙이는 문제보다, 분석 결과를 실제 사용자 경험으로 어떻게 번역할지에 더 집중한 프로젝트였습니다. 접근성 관점에서 출발해 서비스 방향과 연구 가능성을 함께 탐색했고, SKT FLY AI 대상 수상으로 문제 정의와 방향성의 설득력을 검증했다는 점이 강점입니다.",
        highlights: [
          "SKT FLY AI 대상 수상",
          "청각장애인의 음악 접근성 문제에서 출발",
          "오디오 분석 결과를 멀티모달 경험으로 연결하는 방향 탐색",
          "외부 피드백과 팀 논의를 통해 사업성·연구 가능성 재검토",
        ],
        results: [
          "음악 분석 및 stem separation 기반 파이프라인 설계",
          "멀티모달 음악 경험을 위한 서비스 방향성 구체화",
          "외부 피드백과 팀 회의를 통해 사업성·연구 가능성 재검토",
          "예창패, 논문, 프로젝트 마무리 방향으로 목표 재정의",
        ],
        tech: ["PyTorch", "FastAPI", "React", "PostgreSQL", "WhisperX", "GPT-4o"],
      },
      en: {
        overview:
          "Music Sense is the grand-prize-winning project from SKT FLY AI, designed to separate and analyze key elements in music tracks—such as vocals, drums, and bass—and turn that analysis into a more intuitive and expressive music experience. It began with the accessibility challenge of music for deaf and hard-of-hearing users, then expanded into broader interaction and service possibilities.",
        role:
          "I helped shape both the audio-analysis pipeline direction and the product framing around how those outputs could become a user experience.",
        challenge:
          "Most music experiences are designed primarily around hearing, which makes it difficult to understand musical structure, emotional progression, and rhythmic change through other modalities. Some users also need to perceive musical components in a more separated form, requiring a clearer and more intuitive way to interpret music.",
        solution:
          "We designed a pipeline that analyzes audio tracks, separates individual elements such as vocals, drums, and bass, and interprets musical structure and features from those stems. We then explored how those outputs could be translated into multimodal interactions.",
        impact:
          "The project mattered because it focused not just on another model, but on how analysis could be translated into a usable experience. Starting from accessibility helped clarify both product direction and research opportunity, and winning the grand prize at SKT FLY AI validated the strength of that framing.",
        highlights: [
          "Won the grand prize at SKT FLY AI",
          "Started from the accessibility challenge of music for deaf and hard-of-hearing users",
          "Explored how audio-analysis outputs could become multimodal interaction",
          "Reframed the project through external feedback and team discussion",
        ],
        results: [
          "Designed a music analysis pipeline based on stem separation",
          "Defined a service direction for multimodal music experiences",
          "Reassessed business and research potential through external feedback and team discussions",
          "Refined the project's next goals around competition, research, and wrap-up deliverables",
        ],
        tech: ["PyTorch", "FastAPI", "React", "PostgreSQL", "WhisperX", "GPT-4o"],
      },
    },
  },
  {
    id: 13,
    title: "PDF EXAM PARSER",
    year: "2025",
    period: "2025.06",
    tags: "Python · PyMuPDF · CLI · Regex",
    description: {
      ko: "문제집 PDF를 구조화된 CSV로 변환하는 CLI 도구",
      en: "CLI tool that turns exam PDFs into structured CSV data",
    },
    color: "#3A2A2A",
    details: {
      ko: {
        overview:
          "PDF 형식의 문제집에서 문제와 해설 텍스트를 추출해 구조화된 CSV로 변환하는 Python CLI 도구입니다. 이후 분석이나 NLP 파이프라인에서 재사용할 수 있는 형태로 학습 자료를 정리하는 데 목적이 있었습니다.",
        role:
          "문서 파싱 흐름 설계, 정규식 기반 구조화, 스트리밍 처리, 설정 분리를 포함한 CLI 도구 설계를 맡았습니다.",
        challenge:
          "문제집 PDF는 페이지별 레이아웃과 해설 구조가 일정하지 않아 단순 추출만으로는 바로 활용하기 어렵습니다. 대용량 파일도 메모리 문제 없이 처리해야 했고, 다양한 형식에 맞게 파서 규칙을 바꿀 수 있어야 했습니다.",
        solution:
          "PyMuPDF로 페이지 단위 텍스트를 스트리밍 추출하고, 정규식으로 문제 번호·본문·해설·하위 항목을 분리했습니다. 파싱 규칙은 YAML 설정 파일로 분리해 다른 문제집에도 대응할 수 있도록 만들었고, CSV 출력으로 후속 데이터 처리 흐름에 연결했습니다.",
        impact:
          "이 프로젝트는 반복적인 데이터 전처리 작업을 도구화했다는 점에서 의미가 있습니다. 문서 파싱 결과를 곧바로 분석이나 NLP 작업에 연결할 수 있게 만들면서, 수작업 정리 비용을 줄이는 데 초점을 맞췄습니다.",
        highlights: [
          "PyMuPDF 기반 페이지 스트리밍 처리",
          "Regex + YAML 조합으로 다양한 문제집 레이아웃 대응",
          "CSV 출력으로 후속 NLP 전처리 흐름에 연결",
        ],
        results: [
          "문제와 해설 텍스트를 자동 추출해 CSV로 구조화",
          "대용량 PDF도 처리할 수 있는 스트리밍 기반 CLI 구현",
          "YAML 기반 패턴 설정으로 다양한 레이아웃에 대응할 수 있게 설계",
          "서술형 채점용 NLP 전처리 작업에 재사용 가능한 도구 형태로 정리",
        ],
        tech: ["Python", "PyMuPDF", "Regex", "YAML", "CSV"],
      },
      en: {
        overview:
          "A Python CLI tool that extracts problems and explanations from exam-style PDF files and converts them into structured CSV data. The goal was to turn raw study materials into reusable inputs for downstream analysis and NLP workflows.",
        role:
          "I designed the CLI flow itself, including document parsing, regex-based structuring, streaming processing, and configuration separation.",
        challenge:
          "Exam PDFs tend to have inconsistent page layouts and explanation structures, which makes them difficult to use directly. The tool also needed to handle large files without excessive memory use and remain configurable across different document formats.",
        solution:
          "I used PyMuPDF to stream text page by page, then separated problem numbers, bodies, explanations, and sub-items with regex-based parsing. Parsing rules were externalized into YAML configuration so the tool could be adapted to multiple layouts, and the final output was standardized as CSV.",
        impact:
          "The value of the project was in turning repetitive preprocessing into a reusable tool. It reduced manual document cleanup and made parsed output easier to connect directly to later analysis and NLP work.",
        highlights: [
          "Used page-level streaming with PyMuPDF",
          "Combined regex parsing with YAML-based configuration",
          "Connected the output directly to downstream NLP preprocessing",
        ],
        results: [
          "Automatically extracted problems and explanations into structured CSV output",
          "Implemented a streaming CLI approach for larger PDF files",
          "Made parsing rules configurable through YAML for layout flexibility",
          "Packaged the tool as reusable preprocessing for descriptive-answer NLP work",
        ],
        tech: ["Python", "PyMuPDF", "Regex", "YAML", "CSV"],
      },
    },
    links: {
      github: "https://github.com/yeop-sang/pdf-exam-parser",
    },
  },
  {
    id: 8,
    title: "YOUNGIL YOUNG INC.",
    year: "2023",
    period: "2021.08 - 2022.12",
    tags: "Fullstack · Product Development · Web",
    description: {
      ko: "풀스택 개발 경험",
      en: "Full-stack product development experience",
    },
    color: "#3A241A",
    details: {
      ko: {
        overview:
          "Youngil Young Inc.에서 풀스택 개발자로 참여하며, 실제 서비스/플랫폼 기능을 빠르게 구현하고 사용자 흐름에 맞게 제품을 개선하는 경험을 쌓았습니다. 프론트엔드와 백엔드를 모두 다루며, 아이디어를 작동하는 서비스 형태로 만드는 데 집중했습니다.",
        role:
          "휴대폰 온라인 판매 플랫폼의 서버와 프론트엔드 양쪽을 맡아 기능 구현과 사용자 흐름 개선을 함께 수행했습니다.",
        challenge:
          "초기 서비스 개발 환경에서는 제한된 리소스로 빠르게 기능을 구현하면서도, 실제 사용 가능한 형태로 다듬는 역량이 중요합니다. 단순한 프로토타입이 아니라, 사용자가 실제로 접할 수 있는 제품 수준으로 구현해야 했습니다.",
        solution:
          "프론트엔드와 백엔드를 함께 다루며 기능 단위로 구현했고, 사용자 흐름을 고려하여 서비스가 자연스럽게 동작하도록 설계했습니다. 요구사항을 빠르게 구현 가능한 단위로 나누고, 실제 서비스 구조에 맞게 연결하는 경험을 쌓았습니다.",
        impact:
          "제품 개발에서 중요한 것은 기능 하나보다 전체 흐름이라는 점을 배운 시기였습니다. 빠른 구현과 제품 수준 다듬기를 동시에 경험하면서 풀스택 감각을 키웠습니다.",
        highlights: [
          "휴대폰 온라인 판매 플랫폼 개발 참여",
          "서버와 프론트엔드를 함께 담당한 풀스택 경험",
          "실사용자 흐름에 맞춘 기능 구현과 개선 경험",
        ],
        results: [
          "실사용 가능한 기능을 빠르게 구현하는 경험 확보",
          "프론트엔드와 백엔드를 아우르는 풀스택 개발 역량 강화",
          "문제를 제품 구조로 연결하는 감각 형성",
        ],
        tech: ["Django", "Vue.js", "Python", "Fullstack Development", "API Integration"],
      },
      en: {
        overview:
          "At Youngil Young Inc., I worked as a full-stack developer, quickly shipping real product and platform features while refining the experience around actual user flows. By handling both frontend and backend work, I focused on turning ideas into functioning services.",
        role:
          "I worked across both server and frontend implementation for an online mobile-phone sales platform, covering feature delivery and user-flow improvement together.",
        challenge:
          "In an early-stage product environment, it is critical to ship quickly with limited resources while still shaping features into something users can genuinely use. The goal is not just a prototype, but a product-level experience people can interact with.",
        solution:
          "I implemented features across frontend and backend boundaries and designed them to behave naturally within the overall user flow. The work required breaking requirements into deliverable units and connecting them back into a real service structure.",
        impact:
          "This period taught me that product quality depends on flow, not isolated features. It strengthened my ability to ship quickly while still thinking at a product level.",
        highlights: [
          "Worked on an online mobile-phone sales platform",
          "Handled both server and frontend implementation as a full-stack developer",
          "Built experience refining real user flows rather than only isolated features",
        ],
        results: [
          "Built experience delivering production-usable features quickly",
          "Strengthened full-stack development capability across frontend and backend",
          "Developed a stronger instinct for translating problems into product structure",
        ],
        tech: ["Django", "Vue.js", "Python", "Fullstack Development", "API Integration"],
      },
    },
  },
  {
    id: 7,
    title: "PICKLE.PLUS",
    year: "2020",
    period: "2019.08 - 2020.08",
    tags: "Backend · DevOps · Service Operations",
    description: {
      ko: "백엔드 개발 및 서비스 운영 경험",
      en: "Backend development and service operations experience",
    },
    color: "#24324A",
    details: {
      ko: {
        overview:
          "Pickle.plus에서 백엔드 개발 및 DevOps 관점의 업무를 수행하며, 단순 기능 구현을 넘어 실제 서비스가 운영되는 구조를 이해하고 경험했습니다. 서비스 개발과 운영의 접점을 함께 보며, 안정적인 백엔드 구조와 배포 환경에 대한 감각을 키웠습니다.",
        role:
          "OTT 공유 서비스 개발 과정에서 백엔드와 프론트엔드를 함께 다루고, 실시간 참여자 통계와 자동 정산 같은 운영 기능까지 접했습니다.",
        challenge:
          "서비스는 기능 구현만으로 끝나지 않고, 실제 운영 가능한 구조와 안정성이 함께 확보되어야 합니다. 특히 백엔드와 배포 구조는 서비스 품질과 직결되기 때문에, 구현과 운영을 함께 이해하는 경험이 중요했습니다.",
        solution:
          "백엔드 로직 구현뿐 아니라 서비스 운영 구조를 함께 경험하면서, 개발과 운영이 분리된 일이 아니라는 점을 체감했습니다. 실제 서비스 환경에서 구조를 이해하고, 안정적인 서비스 흐름을 염두에 두고 작업했습니다.",
        impact:
          "초기 실무 경험으로서, 기능 구현과 서비스 운영을 따로 보지 않는 시각을 갖게 해준 프로젝트입니다. 이후 프로젝트들에서 구조와 운영을 같이 보는 기준을 만든 경험이었습니다.",
        highlights: [
          "OTT 공유 서비스 개발 참여",
          "실시간 참여자 통계와 자동 정산 시스템 경험",
          "핀테크 공모전 수상과 연결된 팀 경험",
        ],
        results: [
          "백엔드와 운영 구조를 함께 이해하는 실무 경험 확보",
          "기능 구현을 넘어 서비스 안정성과 운영 관점을 함께 학습",
          "이후 프로젝트에서도 서비스 구조를 더 입체적으로 바라보는 기반 마련",
        ],
        tech: ["Django", "React.js", "Python", "Backend Development", "Service Operations"],
      },
      en: {
        overview:
          "At Pickle.plus, I worked across backend development and DevOps concerns, going beyond feature implementation to understand how a real service is structured and operated. That experience helped me build a stronger sense for stable backend architecture and deployment environments.",
        role:
          "I worked on both backend and frontend aspects of an OTT-sharing service and was exposed to operational features such as live participant statistics and automated settlement flows.",
        challenge:
          "A service does not end with feature delivery; it also needs an operational structure and reliability that can hold up in production. Because backend and deployment architecture directly affect service quality, it was important to understand implementation and operations together.",
        solution:
          "I worked not only on backend logic but also with the surrounding service operation structure, which made it clear that development and operations are not separate concerns. I approached the work with an awareness of real production flow and service stability.",
        impact:
          "As an early practical experience, this project taught me to think about implementation and operation together. It gave me a baseline for evaluating later systems through both code and service structure.",
        highlights: [
          "Worked on an OTT-sharing service",
          "Observed live participation metrics and automated settlement features",
          "Part of the team experience connected to a fintech competition award",
        ],
        results: [
          "Gained hands-on experience understanding backend and operational structures together",
          "Learned to view service stability and operations alongside feature implementation",
          "Built a foundation for evaluating later projects through a fuller service-structure lens",
        ],
        tech: ["Django", "React.js", "Python", "Backend Development", "Service Operations"],
      },
    },
  },
  {
    id: 12,
    title: "DONGBTI",
    year: "2022",
    period: "2022.07",
    tags: "Django · Vue.js · Event Site",
    description: {
      ko: "동아리 행사용 MBTI 추천 웹사이트",
      en: "MBTI-based club recommendation site for a campus event",
    },
    color: "#2B2F4A",
    details: {
      ko: {
        overview:
          "교내 동아리 행사에서 학생들이 동아리 정보를 더 재미있고 빠르게 탐색할 수 있도록 만든 웹사이트입니다. 질문 흐름과 동아리 데이터를 연결해 성향 기반으로 동아리 정보를 보여주는 이벤트 경험을 목표로 했습니다.",
        role:
          "질문 데이터 구조화와 추천 흐름 설계, Django 기반 웹 구현을 중심으로 작업했습니다.",
        challenge:
          "짧은 행사 맥락 안에서 여러 동아리 정보를 한 번에 전달하려면, 단순 목록보다 참여형 인터랙션이 필요했습니다. 질문 데이터와 추천 결과를 웹 흐름으로 연결하면서도 운영자가 관리 가능한 구조가 필요했습니다.",
        solution:
          "동아리·질문 데이터를 CSV로 정리하고 Django 프로젝트 안에서 추천 흐름과 폼 구조를 구성했습니다. 행사 현장에서 사용할 수 있도록 가볍고 빠른 웹 경험에 집중했고, 사용자가 결과를 자연스럽게 확인할 수 있는 페이지 흐름을 만들었습니다.",
        impact:
          "작고 빠른 프로젝트였지만, 실제 행사 맥락에 맞춘 웹 경험을 짧은 일정 안에 정리해내는 연습이 됐습니다. 데이터를 경험 흐름으로 바꾸는 감각을 키우는 데 도움이 된 작업입니다.",
        highlights: [
          "숭실대 동아리 연합회 외주 성격의 프로젝트",
          "질문 데이터와 동아리 데이터를 웹 추천 흐름으로 구조화",
          "행사 현장 사용을 전제로 한 가벼운 웹 경험 구현",
        ],
        results: [
          "숭실대 동아리 연합회 외주 형태로 진행된 프로젝트",
          "질문 데이터와 동아리 정보를 웹 추천 흐름으로 구조화",
          "행사 맥락에 맞는 간단한 참여형 웹 경험 구현",
          "초기 웹 제품을 짧은 일정 안에 정리해 납품한 경험 확보",
        ],
        tech: ["Django", "Vue.js", "Python", "CSV", "Forms"],
      },
      en: {
        overview:
          "A web project built for a campus club event so students could explore club information in a more engaging and faster way. The goal was to connect question flows and club data into an MBTI-style recommendation experience.",
        role:
          "I focused on structuring the question data, shaping the recommendation flow, and implementing the Django-based web experience.",
        challenge:
          "A simple list of clubs was not enough for an event setting where people needed to explore many options quickly. The project needed an interactive recommendation flow while still remaining manageable for content and data updates.",
        solution:
          "I organized club and question data in CSV form and built the recommendation flow and form structure inside a Django project. The site focused on a lightweight event-ready experience that made it easy for users to move through the questions and view the result naturally.",
        impact:
          "Although smaller in scope, the project was useful training in shaping a web experience for a real event under a short timeline. It also helped strengthen the instinct of turning raw data into a user journey.",
        highlights: [
          "Delivered as a commissioned project for the Soongsil club union",
          "Structured club and question data into a recommendation flow",
          "Built for an on-site event context rather than a generic listing page",
        ],
        results: [
          "Delivered as a commissioned project for the Soongsil club union",
          "Structured question and club data into a web-based recommendation flow",
          "Built a lightweight interactive web experience suited for an on-site event",
          "Gained experience shipping an early web product on a short timeline",
        ],
        tech: ["Django", "Vue.js", "Python", "CSV", "Forms"],
      },
    },
    links: {
      github: "https://github.com/yeop-sang/Dongbti",
    },
  },
];

export const contributions: Contribution[] = [
  {
    id: "django-excel-forward-compatibility",
    title: "django-excel Forward Compatibility Fix",
    year: "2024",
    scope: "Python · Django · Open Source Contribution",
    summary: {
      ko: "Youngil Young Inc. 프로젝트에서 사용하던 347-star 오픈소스 라이브러리 django-excel의 Django 호환성 오류를 수정해 upstream에 기여했습니다.",
      en: "After hitting a Django compatibility error in django-excel while using it in a Youngil Young Inc. project, I contributed the fix upstream.",
    },
    details: {
      ko: "Youngil Young Inc. 프로젝트에서 django-excel을 사용하던 중 구형 URL 선언 방식 때문에 Django 호환성 오류가 발생했고, 이를 해결하기 위해 최신 Django 라우팅 방식에 맞게 URL 선언을 바꾸고 요구사항 범위를 정리했습니다. 단발성 우회가 아니라 실제로 내가 쓰던 라이브러리 문제를 upstream에서 바로잡았다는 점에서, 외부 코드베이스의 규칙과 호환성 요구를 이해하고 반영한 경험이었습니다.",
      en: "While using django-excel in a Youngil Young Inc. project, I hit a Django compatibility error caused by its older URL declarations. I fixed it by updating the routing to a forward-compatible Django style and tightening the dependency requirements. The value was not a local workaround, but correcting a library issue at the upstream source while working within an external codebase's compatibility constraints.",
    },
    results: {
      ko: [
        "Youngil Young Inc. 프로젝트에서 발생한 Django 호환성 오류를 upstream 수정으로 해결",
        "url() → re_path() 전환으로 Django URL routing 호환성 보완",
        "Django 및 xlrd 요구사항 정리와 changelog 업데이트 반영",
      ],
      en: [
        "Resolved a Django compatibility error from a Youngil Young Inc. project by landing an upstream fix",
        "Replaced url() usage with re_path() for forward-compatible Django routing",
        "Updated Django/xlrd requirement handling and changelog entries",
      ],
    },
    tech: ["Python", "Django", "OSS Contribution", "Dependency Maintenance"],
    links: {
      repo: "https://github.com/pyexcel-webwares/django-excel",
      pr: "https://github.com/pyexcel-webwares/django-excel/pull/74",
      commit:
        "https://github.com/pyexcel-webwares/django-excel/commit/1ddf73c33446439cc03d7d89074adf44ee10b8c9",
    },
  },
  {
    id: "flutter-vibration-sharpness-pr",
    title: "flutter_vibration Core Haptics Sharpness API",
    year: "2026",
    scope: "Dart · Flutter Plugin · Open Source Contribution",
    summary: {
      ko: "Music Sense를 개발하면서 더 세밀한 iOS Core Haptics 제어가 필요해, 284-star flutter_vibration 플러그인에 `sharpnesses` 파라미터를 추가하는 라이브러리 기여를 제출했습니다.",
      en: "While building Music Sense, I needed finer iOS Core Haptics control, so I submitted an upstream library contribution to the 284-star flutter_vibration plugin to add a `sharpnesses` parameter.",
    },
    details: {
      ko: "Music Sense에서 음악 요소를 촉각적으로 더 정교하게 전달하려면 sharpness 조절이 필요했고, 그래서 benjamindean/flutter_vibration에 `vibrate` 메서드용 `List<double> sharpnesses` 파라미터를 제안했습니다. iOS CoreHaptics 이벤트별 sharpness 매핑과 Android 쪽 안전한 argument parsing을 함께 구현했으며, 제품에서 실제로 필요했던 기능을 업스트림 라이브러리 수준 API로 정리해 기여했다는 점에서 의미가 있었습니다.",
      en: "Music Sense needed more precise haptic expression, so I proposed a `List<double> sharpnesses` parameter for `vibrate` in benjamindean/flutter_vibration. I implemented per-event sharpness mapping on iOS CoreHaptics and safer argument parsing on Android, turning a feature I needed in a real product into an upstream library-level API contribution.",
    },
    results: {
      ko: [
        "Music Sense에 필요했던 haptic sharpness 제어를 업스트림 라이브러리 API로 제안",
        "`sharpnesses` 리스트 기반의 세밀한 iOS haptic texture 제어 제안",
        "iOS CoreHaptics 이벤트별 sharpness 매핑 구현",
        "Android 쪽 인자 파싱 추가로 플랫폼 간 호출 안정성 보완",
      ],
      en: [
        "Turned a Music Sense haptics need into an upstream library API proposal",
        "Proposed list-based `sharpnesses` control for richer iOS haptic textures",
        "Implemented per-event sharpness mapping for iOS CoreHaptics",
        "Added Android-side argument parsing to make cross-platform calls safer",
      ],
    },
    tech: ["Dart", "Flutter", "iOS CoreHaptics", "Android", "Plugin API Design"],
    links: {
      repo: "https://github.com/benjamindean/flutter_vibration",
      pr: "https://github.com/benjamindean/flutter_vibration/pull/147",
    },
  },
];
