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

interface ProjectAsset {
  src: string;
  alt: {
    ko: string;
    en: string;
  };
}
interface ProjectResource {
  href: string;
  label: {
    ko: string;
    en: string;
  };
  icon: "github" | "external";
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
  heroImage?: ProjectAsset;
  gallery?: ProjectAsset[];
  details: {
    ko: LocalizedProjectDetails;
    en: LocalizedProjectDetails;
  };
  resources?: ProjectResource[];
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
    title: "BINARI",
    year: "2025",
    period: "2025.08 - 2026.02",
    tags: "AI Pipeline · OCR · Qdrant · Async Video",
    description: {
      ko: "촬영한 동화책 이미지를 한국수어 시나리오와 영상 생성 흐름으로 연결한 프로젝트",
      en: "Project that turns photographed storybooks into KSL scenarios and video-generation workflows",
    },
    color: "#1A3A2A",
    heroImage: {
      src: "/binari/binari-cover.png",
      alt: {
        ko: "비나리 표지 슬라이드",
        en: "BinarI cover slide",
      },
    },
    gallery: [
      {
        src: "/binari/binari-problem.png",
        alt: {
          ko: "비나리 문제 정의 슬라이드",
          en: "BinarI problem-definition slide",
        },
      },
      {
        src: "/binari/binari-solution.png",
        alt: {
          ko: "비나리 차별점 슬라이드",
          en: "BinarI differentiation slide",
        },
      },
    ],
    details: {
      ko: {
        overview:
          "비나리는 촬영한 동화책 페이지에서 시작해 OCR, 삽화·캐릭터 인식, 검색, 영상 생성을 연결하는 동화책 수어 프로젝트입니다. 공모전 제출용 프로토타입으로 만들었고, 한국수어 콘텐츠 제작 병목을 줄일 수 있는 구조를 검증하는 데 초점을 맞췄습니다.",
        role:
          "Flutter와 인증을 제외한 대부분의 구조를 맡아 AI 파이프라인, 인프라, 전체 아키텍처, CI/CD, 발표 메시지와 데모 구성을 주도했습니다.",
        challenge:
          "한국에서는 매년 1,882종의 그림책이 출판되지만 수어 영상은 13년 평균 165종, 전체의 8.8% 수준에 머물러 있습니다. 기존 제작 방식은 한 권당 약 38시간과 331만 원이 들어 확장성이 낮았고, 기존 서비스도 텍스트 번역이나 해외 수어 중심이라 동화의 맥락과 한국수어 환경을 함께 다루기 어려웠습니다.",
        solution:
          "입력은 텍스트 파일이 아니라 촬영한 동화책 페이지에서 시작하도록 설계했습니다. OCR로 문장을 추출하고 삽화와 캐릭터 정보를 함께 해석한 뒤, Qdrant 기반 검색과 LLM 조합으로 동화 맥락이 살아 있는 한국수어 시나리오를 생성했습니다. 영상 생성은 Celery·Redis 비동기 처리로 분리해 timeout 문제를 줄였고, AWS/Veo 계열 구조를 Azure/Sora 방향으로도 전환 가능한 형태로 정리했습니다.",
        impact:
          "이 프로젝트의 핵심은 단순 번역 데모가 아니라, 반복적으로 비효율적인 제작 과정을 줄이고 더 많은 판단을 콘텐츠 기획과 검수에 남길 수 있는 구조를 만든 점입니다. 아직 실사용 배포까지 이어지지는 않았지만, Qdrant 도입으로 토큰 사용량을 줄이고 대기시간을 약 10초 단축했으며, 코사인 유사도 기반 재검증 루틴으로 생성 품질을 더 안정적으로 관리할 수 있게 했습니다.",
        highlights: [
          "촬영한 동화책 페이지에서 바로 시작하는 KSL 파이프라인",
          "삽화·캐릭터 정보를 반영한 수어 시나리오 생성",
          "Qdrant와 재검증 루틴으로 비용·대기시간·품질을 함께 개선",
          "클라우드와 영상 모델 전환 가능성을 고려한 구조 설계",
        ],
        results: [
          "Qdrant 도입으로 토큰 사용량을 줄이고 대기시간을 약 10초 단축",
          "코사인 유사도 기반 재검증 루틴으로 생성 전 품질 점검 단계 추가",
          "Celery·Redis 비동기 처리로 영상 생성 timeout 문제 완화",
          "AWS/Veo 계열에서 Azure/Sora 방향으로 전환 가능한 구조 설계",
        ],
        tech: [
          "FastAPI",
          "Google Vision OCR",
          "Qdrant",
          "GPT-4o",
          "OpenAI API",
          "Google Veo 3",
          "Celery",
          "Redis",
          "AWS S3",
        ],
      },
      en: {
        overview:
          "BinarI is a storybook sign-language project that starts from photographed book pages and connects OCR, illustration and character understanding, retrieval, and video generation into one pipeline. It was built as a competition prototype to validate a structure that could reduce the production bottleneck around Korean Sign Language content.",
        role:
          "I owned most of the system except Flutter and auth, covering the AI pipeline, infrastructure, overall architecture, CI/CD, and the presentation and demo narrative.",
        challenge:
          "In Korea, 1,882 picture books are published each year, but sign-language video content averages only 165 titles over 13 years, about 8.8% of that supply. The traditional workflow costs about 38 hours and KRW 3.31 million per book, which makes scale difficult. Existing products also lean toward text-only translation or non-KSL sign systems, making it hard to preserve story context in Korean Sign Language.",
        solution:
          "I designed the pipeline to start from photographed storybook pages rather than pre-digitized text. OCR extracts the text, illustration and character cues are interpreted alongside it, and Qdrant-backed retrieval plus LLM prompting generate a KSL scenario that keeps the story world intact. Video generation was moved into Celery and Redis async processing to avoid timeout-prone synchronous flows, and the structure was kept loose enough to pivot from AWS and Veo-style components toward Azure and Sora-style components.",
        impact:
          "The project mattered because it turned a repetitive and expensive manual process into a system that can leave more human effort for editorial judgment and quality review. It did not reach public distribution, but adding Qdrant reduced token usage and cut wait time by roughly 10 seconds, while a cosine-similarity revalidation routine made the output pipeline easier to control.",
        highlights: [
          "A KSL pipeline that starts directly from photographed storybook pages",
          "Generated sign-language scenarios that preserve illustration and character context",
          "Improved cost, latency, and quality with Qdrant plus a revalidation routine",
          "Designed the system to stay adaptable across cloud and video-model choices",
        ],
        results: [
          "Reduced token usage and cut wait time by about 10 seconds after introducing Qdrant retrieval",
          "Added cosine-similarity revalidation to check quality before generation",
          "Moved video generation into Celery and Redis async jobs to avoid timeout-heavy synchronous requests",
          "Kept the architecture portable enough to move from AWS and Veo-style components toward Azure and Sora-style components",
        ],
        tech: [
          "FastAPI",
          "Google Vision OCR",
          "Qdrant",
          "GPT-4o",
          "OpenAI API",
          "Google Veo 3",
          "Celery",
          "Redis",
          "AWS S3",
        ],
      },
    },
    resources: [
      { href: "https://github.com/FullMoo0n/ai", label: { ko: "GitHub", en: "GitHub" }, icon: "github" },
      { href: "https://docs.google.com/presentation/d/10er26Coogyj7ZeC4-Qc8A8sAd-uPZQK_wvNTib8N5qU/preview", label: { ko: "발표 자료", en: "Slides" }, icon: "external" },
      { href: "https://www.youtube.com/live/CAUkNSF-aQs?si=Z-YM3c6rLaH-Du5Q&t=6774", label: { ko: "발표 영상", en: "Talk" }, icon: "external" },
    ],
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
          "탄소 배출량 계산 로직을 포함한 분석 흐름 구성",
          "센서 수집부터 리포트 생성까지 end-to-end 시스템 통합",
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
          "Added carbon-emission calculation into the analysis flow",
          "Integrated sensing, backend, dashboard, and reporting into one end-to-end system",
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
    resources: [
      { href: "https://github.com/yeop-sang/hanium_power_monitor_server", label: { ko: "GitHub", en: "GitHub" }, icon: "github" },
    ],
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
          "배경 제거와 객체 탐지를 결합한 앙상블 실험 구조 설계",
          "50 epoch 기준 3~4시간 미만의 학습 파이프라인 구성",
          "반복 가능한 전처리·실험 workflow 정리",
          "제한된 대회 일정 안에서 성능 개선 전략 검증",
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
          "Designed an ensemble workflow combining background removal and object detection",
          "Built a training pipeline that stayed under roughly 3–4 hours for 50 epochs",
          "Structured a repeatable preprocessing and experiment workflow",
          "Validated a performance-improvement strategy under tight competition constraints",
        ],
        tech: ["U-Net", "YOLOv5x", "PyTorch", "OpenCV", "Google Colab"],
      },
    },
    resources: [
      { href: "https://colab.research.google.com/drive/1N0MWTKKxj89MX-CvlMV2xXluNJMrgT9a", label: { ko: "데모", en: "Demo" }, icon: "external" },
    ],
  },
  {
    id: 1,
    title: "MUSIC SENSE",
    year: "2025",
    period: "2025 -",
    tags: "Audio AI · Backend · Multimodal UX",
    description: {
      ko: "SKT FLY AI 대상 이후에도 제품 업데이트를 이어가는 접근성 기반 음악 경험 프로젝트",
      en: "Accessibility-driven music product still evolving after winning the grand prize at SKT FLY AI",
    },
    color: "#2A1A4A",
    details: {
      ko: {
        overview:
          "Music Sense는 SKT FLY AI 대상 수상으로 끝난 프로젝트가 아니라, 지금도 이어가고 있는 접근성 기반 음악 경험 프로젝트입니다. 청각장애인의 음악 접근성 문제를 실제 제품 문제로 보고, 음원에서 보컬·드럼·베이스를 분리·분석한 결과를 촉각·시각 중심의 앱 경험으로 번역하는 흐름을 만들었습니다. 수상 이후에도 사용자와 직접 소통하며 Flutter 업데이트를 이어가고 있고, 청각장애인 복지기관과 연결된 맥락에서 다음 적용 방향을 검토하고 있습니다.",
        role:
          "PM과 개발을 사실상 분리하지 않고 프로젝트 전반을 밀었습니다. 오디오 분석 파이프라인, 백엔드 구조, 앱 경험 방향, 데모와 발표 메시지, 후속 Flutter 업데이트 우선순위까지 거의 모든 핵심 의사결정과 구현 흐름을 직접 연결했습니다.",
        challenge:
          "기존의 음악 경험은 대부분 청각 중심으로 설계되어 있어, 음악의 구조나 감정선, 리듬 변화를 다양한 방식으로 이해하거나 경험하기 어렵습니다. 또한 특정 사용자는 음악의 요소를 더 분리해서 인식할 필요가 있었고, 더 직관적인 형태로 음악을 해석할 수 있는 도구가 필요했습니다.",
        solution:
          "음원에서 주요 stem을 분리하고 pitch·timing 등 특징을 뽑아낸 뒤, 그 결과를 앱 안에서 촉각·시각 피드백으로 재해석하는 구조를 설계했습니다. 분석 결과를 보여주는 데서 멈추지 않고, 실제 사용자 경험과 다음 업데이트로 이어질 수 있게 Flutter 중심의 제품 흐름까지 함께 다듬었습니다.",
        impact:
          "이 프로젝트의 설득력은 대상 수상 자체보다, 접근성 문제를 제품 업데이트와 후속 적용 검토로 계속 밀어붙이고 있다는 데 있습니다. SKT FLY AI 대상은 방향성을 검증한 사건이었고, 그 이후에도 사용자 소통, Flutter 업데이트, 청각장애인 복지기관과 연결된 맥락을 통해 프로젝트를 살아 있는 제품 흐름으로 유지하고 있습니다.",
        highlights: [
          "SKT FLY AI 대상 수상",
          "청각장애인의 음악 접근성 문제를 제품 문제로 재정의",
          "오디오 분석 결과를 앱 기반 멀티모달 경험으로 번역하는 구조 설계",
          "사용자 소통과 Flutter 업데이트로 수상 이후에도 프로젝트 지속",
        ],
        results: [
          "stem separation, pitch, timing 흐름을 잇는 오디오 분석 구조 설계",
          "분석 결과를 촉각·시각 앱 경험으로 연결하는 제품 흐름 정리",
          "사용자 소통 기반으로 Flutter 업데이트 우선순위 정리 및 후속 반영",
          "청각장애인 복지기관과 연결된 맥락에서 다음 적용 시나리오 검토",
        ],
        tech: ["PyTorch", "FastAPI", "Flutter", "Demucs", "WhisperX", "ONNX"],
      },
      en: {
        overview:
          "Music Sense did not end with its SKT FLY AI grand-prize win. It is an accessibility-driven music product that treats music access for deaf and hard-of-hearing users as a real product problem, then translates separated and analyzed elements such as vocals, drums, and bass into an app experience centered on touch and visual feedback. Since the award, I have kept the project moving through direct user conversations, follow-up Flutter updates, and next-step review in a context connected to a deaf-welfare organization.",
        role:
          "I pushed the project across both PM and development instead of treating them as separate lanes. I connected the core decisions and implementation flow across the audio-analysis pipeline, backend structure, app experience direction, demo and presentation narrative, and the priorities for follow-up Flutter updates.",
        challenge:
          "Most music experiences are designed primarily around hearing, which makes it difficult to understand musical structure, emotional progression, and rhythmic change through other modalities. Some users also need to perceive musical components in a more separated form, requiring a clearer and more intuitive way to interpret music.",
        solution:
          "We separated major stems from the track, extracted features such as pitch and timing, and designed a structure that reinterprets those outputs as touch and visual feedback inside the app. The point was not to stop at analysis output, but to shape a Flutter-centered product flow that could keep evolving through real user feedback and later updates.",
        impact:
          "The real strength of the project is not the award itself, but the fact that the accessibility problem is still being pushed forward through product updates and follow-up application paths. The SKT FLY AI grand prize validated the direction, and the project has stayed alive through user conversations, Flutter updates, and next-step review in a context connected to a deaf-welfare organization.",
        highlights: [
          "Won the grand prize at SKT FLY AI",
          "Reframed music accessibility for deaf and hard-of-hearing users as a product problem",
          "Designed a structure that turns audio-analysis outputs into app-side multimodal experience",
          "Kept the project moving after the award through user conversations and Flutter updates",
        ],
        results: [
          "Shaped the audio-analysis structure across stem separation, pitch, and timing flows",
          "Defined a product flow that turns analysis outputs into touch- and visual-centered app experiences",
          "Prioritized and shipped follow-up Flutter updates based on user conversations",
          "Reviewed next-step application scenarios in a context connected to a deaf-welfare organization",
        ],
        tech: ["PyTorch", "FastAPI", "Flutter", "Demucs", "WhisperX", "ONNX"],
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
    resources: [
      { href: "https://github.com/yeop-sang/pdf-exam-parser", label: { ko: "GitHub", en: "GitHub" }, icon: "github" },
    ],
  },
  {
    id: 8,
    title: "YOUNG IL YOUNG INC.",
    year: "2022",
    period: "2021.12 - 2022.08",
    tags: "Fullstack · Product Development · Web",
    description: {
      ko: "Django 기반 온라인 판매·상담 서비스에서 `Consult` 흐름과 `StockList` 성능을 직접 손본 풀스택 실무 경험",
      en: "Full-stack product work tightening `Consult` UX and `StockList` performance in a Django-based commerce service",
    },
    color: "#3A241A",
    details: {
      ko: {
        overview:
          "Young Il Young Inc.에서는 Django 기반 온라인 휴대폰 판매·상담 서비스에서 `Consult` 흐름과 `StockList` 화면을 중심으로 제품 경험과 운영 부담을 함께 다뤘습니다. 상담 입력 플로우를 다듬고, 무거운 재고 화면에 캐싱을 도입하고, 알림·로깅·테스트 안전장치까지 손보면서 '돌아가는 기능'이 아니라 '버티는 서비스'를 만드는 감각을 익혔습니다.",
        role:
          "서버와 프론트엔드를 함께 보며 `Consult`, `StockList`, `Landing`, `Post` 영역의 기능 구현과 개선을 맡았습니다. 특히 상담 흐름 사용성, 재고 화면 캐싱, 운영성 보완처럼 사용자 경험과 서비스 비용이 만나는 지점을 직접 손봤습니다.",
        challenge:
          "초기 서비스에서는 기능을 빨리 붙이는 것만으로는 부족했고, 실제 사용자 흐름과 운영 안정성을 함께 맞춰야 했습니다. 재고 화면은 많은 데이터를 처리해 렌더링 부담이 있었고, 상담 플로우는 색상 선택·모바일 레이아웃·입력 검증 같은 디테일이 서비스 품질을 좌우했습니다.",
        solution:
          "`Feature/stocklist/cache` PR에서 `stockList` 뷰의 과도한 HTML 처리 문제를 페이지 캐싱과 캐시 키 정리, 관리자 업로드 이후 무효화 흐름으로 완화했습니다. 동시에 `Consult` 흐름에서는 색상 선택, 모바일 UI, 입력 오류 메시지 같은 사용성 개선을 진행했고, Slack 알림·로거 설정·테스트 환경 SMS 대응 같은 운영 안정화 작업도 함께 다뤘습니다.",
        impact:
          "이 경험의 핵심은 풀스택이라는 말이 아니라, 실제 제품에서 어디를 손대야 체감이 달라지는지 배운 점이었습니다. `Consult` 흐름과 `StockList` 캐싱처럼 사용자 흐름과 운영 부담이 겹치는 지점을 직접 다루면서, 이후 프로젝트에서도 문제를 기능 단위가 아니라 제품 구조 단위로 보게 됐습니다.",
        highlights: [
          "`StockList` 화면의 캐싱 전략과 캐시 무효화 흐름 구현",
          "`Consult` 입력 흐름의 색상 선택, 모바일 UI, 입력 검증 개선",
          "Slack 알림, 로거 설정, 테스트 환경 SMS 대응 등 운영 안정화 작업",
          "코드 리뷰 과정에서 주석·포맷팅·개행 같은 협업 품질 기준까지 함께 반영",
        ],
        results: [
          "무거운 재고 화면에 캐싱 전략과 무효화 흐름을 붙여 응답 부담을 완화",
          "상담 입력 흐름과 모바일 UI를 정리해 실제 사용 흐름을 더 매끄럽게 개선",
          "Slack 알림, 로깅, 테스트 환경 SMS 대응으로 운영 안전장치 보강",
          "프론트엔드와 백엔드를 한 흐름으로 보는 실서비스형 제품 감각 축적",
        ],
        tech: ["Django", "Vue.js", "Python", "Caching", "Slack", "Logger"],
      },
      en: {
        overview:
          "At Young Il Young Inc., I worked on a Django-based online mobile commerce and consult service, with the biggest leverage points sitting in the `Consult` flow and `StockList` pages. I tightened the consult input journey, added caching around the heaviest stock screens, and improved alerts, logging, and test safeguards, which taught me how to build not just working features but a service that can hold up under use.",
        role:
          "I worked across backend and frontend boundaries on `Consult`, `StockList`, `Landing`, and `Post`, with the most important work happening where user experience and service cost met. That meant refining consult usability, reducing pressure on stock pages with caching, and adding operational guardrails around the service.",
        challenge:
          "The product needed more than fast feature work. Heavy stock pages created rendering pressure, consult flows needed better validation and mobile usability, and the service also needed guardrails around alerts, logging, and test-environment behavior.",
        solution:
          "In the `Feature/stocklist/cache` work, I helped reduce heavy HTML processing on stock pages through page caching, cache-key cleanup, and cache invalidation after admin uploads. I also improved the consult flow through color selection, mobile UI and validation changes, and worked on operational pieces such as Slack alerts, logger setup, and safer SMS behavior in test contexts.",
        impact:
          "The important part of this period was not the label of full-stack work, but learning where a real product changes when you touch the right leverage point. Working directly on consult flow, stock-page caching, and operational safeguards trained me to see problems as product-structure issues, not isolated feature tickets.",
        highlights: [
          "Implemented caching and cache-invalidation work around `StockList` pages",
          "Improved consult UX through color selection, mobile UI refinement, and validation flow updates",
          "Contributed operational improvements such as Slack alerts, logger setup, and safer test-environment behavior",
          "Used review feedback to reinforce code quality details such as formatting, comments, and file hygiene",
        ],
        results: [
          "Reduced pressure on heavy stock screens through explicit caching and invalidation strategy",
          "Made the consult journey feel cleaner on real mobile screens through UX and validation updates",
          "Strengthened operational safety with alerts, logging, and safer SMS behavior in test contexts",
          "Built a more product-grounded full-stack view across frontend, backend, and service operations",
        ],
        tech: ["Django", "Vue.js", "Python", "Caching", "Slack", "Logger"],
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
      ko: "현재도 운영 중인 Pickle.plus 공동구독 플랫폼에서 백엔드·정산·운영 구조를 익힌 초기 실무",
      en: "Early product work on Pickle.plus, a live subscription platform, across backend, settlement, and operations",
    },
    color: "#24324A",
    details: {
      ko: {
        overview:
          "Pickle.plus는 지금도 운영 중인 공동구독 플랫폼입니다. 이 시기에는 백엔드와 DevOps 관점의 업무를 맡으며, 기능 하나를 붙이는 일보다 서비스가 실제로 굴러가는 구조를 몸으로 배웠습니다. 운영 중인 플랫폼 안에서 배포 환경, 정산 흐름, 실시간 참여자 통계 같은 운영 기능을 보며 라이브 서비스의 기준을 처음 체감했습니다.",
        role:
          "운영 중인 공동구독 서비스에서 백엔드와 프론트엔드를 함께 다루며, 실시간 참여자 통계와 자동 정산처럼 운영 비용과 직접 맞닿는 기능 구조를 경험했습니다.",
        challenge:
          "서비스는 기능 구현만으로 끝나지 않고, 실제 운영 가능한 구조와 안정성이 함께 확보되어야 합니다. 특히 백엔드와 배포 구조는 서비스 품질과 직결되기 때문에, 구현과 운영을 함께 이해하는 경험이 중요했습니다.",
        solution:
          "백엔드 로직 구현뿐 아니라 서비스 운영 구조를 함께 경험하면서, 개발과 운영이 분리된 일이 아니라는 점을 체감했습니다. 실제 서비스 환경에서 구조를 이해하고, 안정적인 서비스 흐름을 염두에 두고 작업했습니다.",
        impact:
          "이 경험이 중요했던 이유는 지금도 운영되는 서비스의 구조를 안쪽에서 보고, 그 문제의식이 핀테크 공모전 우수상으로 이어지는 팀 맥락까지 함께 겪었기 때문입니다. 이후 프로젝트에서도 구조와 운영을 같이 보는 기준이 여기서 생겼습니다.",
        highlights: [
          "현재도 운영 중인 Pickle.plus 플랫폼 경험",
          "실시간 참여자 통계와 자동 정산 흐름 경험",
          "핀테크 공모전 우수상으로 이어진 초기 팀 문제의식 경험",
        ],
        results: [
          "운영 중인 서비스의 백엔드·정산·운영 구조를 함께 이해하는 실무 경험 확보",
          "기능 구현과 서비스 안정성을 함께 보는 관점 형성",
          "후속 프로젝트들에서 구조와 운영을 같이 보는 기준 마련",
        ],
        tech: ["Django", "React.js", "Python", "Backend Development", "Service Operations"],
      },
      en: {
        overview:
          "Pickle.plus is a subscription-sharing platform that is still live today. During this period, I worked across backend and DevOps concerns and learned what makes a live service actually hold together, not just how to ship one more feature. Seeing deployment environments, settlement flow, and live participation metrics inside an operating platform gave me an early production baseline.",
        role:
          "I worked across backend and frontend boundaries in a live subscription service and saw the structure behind operating-cost-sensitive features such as live participation metrics and automated settlement.",
        challenge:
          "A service does not end with feature delivery; it also needs an operational structure and reliability that can hold up in production. Because backend and deployment architecture directly affect service quality, it was important to understand implementation and operations together.",
        solution:
          "I worked not only on backend logic but also with the surrounding service operation structure, which made it clear that development and operations are not separate concerns. I approached the work with an awareness of real production flow and service stability.",
        impact:
          "This period mattered because I got to see the inside of a service that is still live and the early team problem framing that also led into a fintech contest award. It became an early baseline for how I judge later systems through both operations and service structure.",
        highlights: [
          "Worked on Pickle.plus while the service stayed live",
          "Observed live participation metrics and automated settlement flow",
          "Part of the early team problem framing connected to a fintech contest award",
        ],
        results: [
          "Gained hands-on experience understanding backend, settlement, and operations in a live service",
          "Learned to evaluate feature work alongside service stability and operations",
          "Built an early baseline for later projects through a fuller service-structure lens",
        ],
        tech: ["Django", "React.js", "Python", "Backend Development", "Service Operations"],
      },
    },
    resources: [
      { href: "https://pickle.plus/", label: { ko: "서비스", en: "Live Site" }, icon: "external" },
      { href: "/credentials#pickle-plus-fintech-award", label: { ko: "관련 수상", en: "Related Award" }, icon: "external" },
    ],
  },
  {
    id: 12,
    title: "DONGBTI",
    year: "2021",
    period: "2021.09",
    tags: "Django · Python · Event Site",
    description: {
      ko: "동아리연합회 외주 MBTI형 동아리 추천 웹서비스",
      en: "Commissioned MBTI-style club recommendation web service",
    },
    color: "#2B2F4A",
    details: {
      ko: {
        overview:
          "숭실대 동아리연합회 외주로 진행한 웹 프로젝트로, 교내 행사에서 학생들이 질문 흐름을 따라 자신과 맞는 동아리를 빠르게 탐색할 수 있도록 설계했습니다. 단순 홍보 페이지가 아니라 전교생 유입과 약 4,000명 동시 접속 가능성을 염두에 둔 행사성 추천 서비스로 정리했습니다.",
        role:
          "질문·동아리 데이터 구조화, 추천 흐름 설계, Django 기반 웹 구현 전반을 맡았습니다.",
        challenge:
          "행사 현장에서는 짧은 시간 안에 많은 학생이 한꺼번에 접속해도 흐름이 끊기지 않아야 했습니다. 여러 동아리 정보를 단순 목록으로 나열하는 대신, 운영 가능한 데이터 구조와 빠른 응답을 갖춘 추천형 경험이 필요했습니다.",
        solution:
          "동아리·질문 데이터를 CSV로 정리해 운영자가 수정 가능한 구조로 만들고, Django에서 질문-분기-결과 흐름을 JSON 응답 중심으로 구현했습니다. 페이지를 가볍게 유지해 행사성 트래픽에 대응할 수 있도록 했고, 사용자가 몇 번의 선택만으로 결과를 확인할 수 있게 동선을 단순화했습니다.",
        impact:
          "외주 성격의 실제 행사 서비스를 짧은 일정 안에 설계하고 구현한 경험이었습니다. 데이터 구조, 사용자 흐름, 트래픽 가정이 함께 맞물려야 서비스가 버틴다는 점을 배웠고, 이후 트래픽을 염두에 둔 제품 설계 감각의 출발점이 됐습니다.",
        highlights: [
          "숭실대 동아리연합회 외주 프로젝트",
          "전교생 대상 행사 유입과 약 4,000명 동시 접속을 고려한 서비스 설계",
          "질문 데이터와 동아리 데이터를 추천 흐름으로 구조화",
        ],
        results: [
          "Django 기반 MBTI형 동아리 추천 웹서비스 구현",
          "CSV 기반 동아리·질문 데이터 관리 구조 정리",
          "행사 현장에서 빠르게 사용할 수 있는 가벼운 추천 흐름 설계",
          "실제 외주 환경에서 트래픽 가정을 반영한 초기 서비스 납품 경험 확보",
        ],
        tech: ["Django", "Python", "CSV", "Forms", "SQLite"],
      },
      en: {
        overview:
          "A commissioned web project for the Soongsil University club union, built so students at a campus event could move through a short question flow and quickly discover matching clubs. Rather than a static listing page, it was framed as an event-ready recommendation service designed with campus-wide traffic and roughly 4,000 concurrent users in mind.",
        role:
          "I handled the end-to-end structure of the service: organizing the club and question data, designing the recommendation flow, and implementing the Django-based web experience.",
        challenge:
          "The service needed to stay simple and responsive even if many students accessed it at once during the event. That meant turning a large set of club information into a recommendation flow while keeping the content model easy to operate and update.",
        solution:
          "I organized club and question data in CSV form, then implemented the question-branch-result flow around lightweight Django JSON endpoints and form pages. The flow was kept intentionally small and fast so users could reach a recommendation quickly under event-style traffic.",
        impact:
          "This was an early commissioned delivery where product flow, data structure, and traffic assumptions had to line up under a short schedule. It became a useful starting point for thinking about lightweight services that still need to hold up under real user load.",
        highlights: [
          "Commissioned by the Soongsil University club union",
          "Designed with campus-wide event traffic and roughly 4,000 concurrent users in mind",
          "Structured club and questionnaire data into a recommendation flow",
        ],
        results: [
          "Built a Django-based MBTI-style club recommendation web service",
          "Organized club and questionnaire data into a maintainable CSV-backed structure",
          "Shipped a lightweight recommendation flow suited for on-site event use",
          "Gained early delivery experience building around real traffic assumptions",
        ],
        tech: ["Django", "Python", "CSV", "Forms", "SQLite"],
      },
    },
    resources: [
      { href: "https://github.com/yeop-sang/Dongbti", label: { ko: "GitHub", en: "GitHub" }, icon: "github" },
    ],
  },
];

export const contributions: Contribution[] = [
  {
    id: "django-excel-forward-compatibility",
    title: "django-excel Forward Compatibility Fix",
    year: "2024",
    scope: "Python · Django · Open Source Contribution",
    summary: {
      ko: "Young Il Young Inc. 서비스에서 부딪힌 Django 호환성 오류를 로컬 우회가 아니라 `django-excel` upstream fix로 해결한 기여입니다.",
      en: "Instead of patching around a Django compatibility error in a Young Il Young Inc. service, I fixed it upstream in `django-excel`.",
    },
    details: {
      ko: "Young Il Young Inc. 서비스에서 `django-excel`이 구형 URL 선언 때문에 막히자, 증상을 우회하지 않고 원인을 dependency 레벨까지 추적했습니다. `url()` 기반 선언을 `re_path()`로 바꾸고 Django/xlrd 요구사항을 정리해, 실제 서비스 blocker를 upstream PR과 commit으로 해결했습니다. 핵심은 외부 라이브러리 문제를 프로젝트 내부 패치로 묻지 않고, 원인이 있는 곳에서 바로잡았다는 점입니다.",
      en: "When `django-excel` blocked part of a Young Il Young Inc. service because of older URL declarations, I traced the issue back to the dependency instead of patching around the symptom. I replaced `url()`-based routing with `re_path()`, cleaned up the Django/xlrd requirements, and resolved the service blocker with an upstream PR and commit. The important part was fixing the problem where it actually lived instead of burying it inside a local project patch.",
    },
    results: {
      ko: [
        "서비스 진행을 막던 Django 호환성 오류를 upstream 수정으로 제거",
        "`url()` → `re_path()` 전환으로 forward-compatible routing 반영",
        "Django/xlrd 요구사항과 changelog 정리까지 포함해 실제 릴리스 가능한 변경으로 마무리",
      ],
      en: [
        "Removed a service-blocking Django compatibility issue by landing the fix upstream",
        "Replaced `url()` with `re_path()` for forward-compatible routing",
        "Finished the change as a releaseable update, including Django/xlrd requirement cleanup and changelog edits",
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
      ko: "Music Sense의 햅틱 표현 한계를 프로젝트 내부 해킹으로 두지 않고 `flutter_vibration` API 확장 PR로 끌어올린 기여입니다.",
      en: "Instead of leaving Music Sense's haptics limit as a local hack, I pushed it into a `flutter_vibration` API expansion PR.",
    },
    details: {
      ko: "Music Sense에서 음악 요소를 촉각적으로 구분해 전달하려면 진동 세기만으로는 부족했고, 햅틱의 질감을 조절하는 `sharpness`가 필요했습니다. 그래서 benjamindean/flutter_vibration의 `vibrate` API에 `List<double> sharpnesses` 파라미터를 제안하고, iOS CoreHaptics 이벤트별 sharpness 매핑과 Android argument parsing까지 직접 구현했습니다. 제품에서 드러난 한계를 라이브러리 수준 API로 끌어올려, 같은 문제가 반복되지 않게 만든 기여였습니다.",
      en: "Music Sense needed more than vibration intensity to distinguish musical elements through touch, it needed control over haptic texture through `sharpness`. I proposed a `List<double> sharpnesses` parameter for the `vibrate` API in benjamindean/flutter_vibration, then implemented per-event sharpness mapping for iOS CoreHaptics and Android argument parsing myself. The value was taking a limitation exposed by a real product and turning it into a library-level API so the same constraint would not keep reappearing as a local hack.",
    },
    results: {
      ko: [
        "Music Sense의 실제 제품 요구를 라이브러리 API 제안으로 승격",
        "`sharpnesses` 리스트 기반 iOS 햅틱 텍스처 제어 추가",
        "iOS CoreHaptics 이벤트별 sharpness 매핑 구현",
        "Android 인자 파싱 보강으로 cross-platform API 안정성 개선",
      ],
      en: [
        "Turned a real Music Sense product need into a library API proposal",
        "Added list-based `sharpnesses` control for richer iOS haptic textures",
        "Implemented per-event sharpness mapping for iOS CoreHaptics",
        "Improved cross-platform API safety with stronger Android argument parsing",
      ],
    },
    tech: ["Dart", "Flutter", "iOS CoreHaptics", "Android", "Plugin API Design"],
    links: {
      repo: "https://github.com/benjamindean/flutter_vibration",
      pr: "https://github.com/benjamindean/flutter_vibration/pull/147",
    },
  },
];
