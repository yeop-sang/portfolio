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
    tags: "IoT · MQTT · Flask · Vue · ESG Automation",
    description: {
      ko: "스마트 플러그와 FMS 사이의 간극을 겨냥한 실시간 전력 모니터링·ESG 자동화 시스템",
      en: "Real-time power monitoring and ESG automation system aimed at the gap between smart plugs and full FMS products",
    },
    color: "#19324A",
    heroImage: {
      src: "/power-monitoring/power-monitoring-hardware-hero.png",
      alt: {
        ko: "Power Monitoring 전류·전원 제어 하드웨어 사진",
        en: "Power Monitoring current and power-control hardware photo",
      },
    },
    gallery: [
      {
        src: "/power-monitoring/power-monitoring-report.png",
        alt: {
          ko: "Power Monitoring 대시보드와 ESG 보고서 화면",
          en: "Power Monitoring dashboard and ESG report view",
        },
      },
      {
        src: "/power-monitoring/power-monitoring-market.png",
        alt: {
          ko: "Power Monitoring 시장 포지셔닝 슬라이드",
          en: "Power Monitoring market-positioning slide",
        },
      },
      {
        src: "/power-monitoring/power-monitoring-architecture.png",
        alt: {
          ko: "Power Monitoring 서비스 구성도 슬라이드",
          en: "Power Monitoring architecture slide",
        },
      },
      {
        src: "/power-monitoring/power-monitoring-hardware.png",
        alt: {
          ko: "Power Monitoring 하드웨어 및 모니터링 화면",
          en: "Power Monitoring hardware and monitoring screen",
        },
      },
    ],
    details: {
      ko: {
        overview:
          "Power Monitoring System은 단순한 전력 확인 대시보드가 아니라, 중소규모 환경에서도 현실적으로 도입 가능한 에너지 관리 제품을 목표로 만든 프로젝트입니다. 직접 제작한 IoT 전력 제어 하드웨어로 데이터를 수집하고, MQTT·Flask·MySQL·Vue 흐름으로 실시간 모니터링과 분석을 연결했으며, 그 결과를 ESG 환경 보고서까지 이어 붙였습니다. 핵심은 '센서 데이터 수집'과 '운영에 쓰이는 보고서' 사이를 하나의 제품 흐름으로 묶어 스마트 플러그와 대형 FMS 사이의 간극을 메우는 것이었습니다.",
        role:
          "풀스택 단독 주도에 가깝게 하드웨어 데이터 흐름, MQTT 수집, Flask API, MySQL 저장 구조, Vue 대시보드, WebSocket 실시간 반영, Claude 기반 리포트 자동화를 함께 설계하고 구현했습니다.",
        challenge:
          "기존 선택지는 양극단이었습니다. 스마트 플러그는 설치는 쉽지만 분석·통합 관리·ESG 대응이 약했고, FMS는 기능은 강하지만 구축 비용과 운영 부담이 커서 중소규모 조직에는 과했습니다. 그래서 별도 대공사 없이 붙일 수 있는 IoT 하드웨어, 끊기지 않는 실시간 수집, 비용·탄소배출 통합 관리, 그리고 실제 제출 가능한 ESG 보고서 자동화까지 한 번에 다루는 구조가 필요했습니다.",
        solution:
          "직접 만든 전류·전원 제어 하드웨어와 환경 센서를 ESP32에 연결하고, 센서 데이터를 MQTT 브로커를 통해 백엔드로 수집했습니다. Flask API는 실시간 수신 데이터를 파싱해 MySQL에 저장하고, Vue 대시보드는 WebSocket으로 5초 단위 사용량·환경 수치를 갱신했습니다. 여기에 탄소배출량 계산과 사용 패턴 분석, Claude API 기반 ESG 요약·PDF 리포트 생성을 붙였고, Docker Compose와 NCP 배포 흐름까지 정리해 운영 가능한 서비스 구조로 만들었습니다.",
        impact:
          "이 프로젝트의 의미는 에너지 절감을 추상적인 캠페인이 아니라 반복 운영 가능한 데이터 제품으로 바꿨다는 데 있습니다. 사용자는 실시간 사용량, 요금, 탄소배출량을 한 화면에서 보고, 운영자는 자동 생성된 ESG 보고서를 바로 검토할 수 있으며, 하드웨어 레이어까지 직접 제어 가능한 구조를 확보했습니다. 결과적으로 Power Monitoring은 '측정만 하는 IoT'가 아니라, 수집·분석·시각화·리포트까지 닫힌 루프를 가진 서비스로 정리되었고 한이음 ICT 멘토링 공모전 장려상으로 그 완성도를 검증받았습니다.",
        highlights: [
          "한이음 ICT 멘토링 공모전 장려상 수상",
          "스마트 플러그와 FMS 사이의 중간 시장을 겨냥한 제품 포지셔닝",
          "MQTT·WebSocket 기반 실시간 모니터링과 Claude 기반 ESG 자동화 결합",
          "직접 제작한 전류·전원 제어 하드웨어부터 보고서까지 end-to-end 구현",
        ],
        results: [
          "5초 단위 실시간 전력·환경 데이터 스트리밍 대시보드 구축",
          "ESG 환경 보고서 조회 및 PDF 생성 흐름 구현",
          "탄소배출량·전기요금·이상 감지 데이터를 묶은 운영 화면 구성",
          "MQTT 수집부터 WebSocket 시각화, 리포트 자동화까지 end-to-end 통합",
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
          "NCP",
        ],
      },
      en: {
        overview:
          "Power Monitoring System was not just a dashboard for checking electricity usage. It was built as a realistic energy-management product for small and mid-sized environments that sit between cheap smart plugs and heavyweight FMS products. I connected custom IoT hardware, MQTT ingestion, a Flask and MySQL backend, a Vue monitoring dashboard, and ESG report generation so that sensing and reporting would live inside one product flow rather than in separate tools.",
        role:
          "I drove the stack almost end to end across hardware data flow, MQTT ingestion, Flask APIs, MySQL modeling, the Vue dashboard, WebSocket updates, and Claude-based report automation.",
        challenge:
          "The market gap was clear: smart plugs are easy to install but weak on analysis, integrated management, and ESG readiness, while FMS products are powerful but expensive and too heavy for smaller organizations. The project needed a structure that could attach to existing equipment without major retrofits, keep real-time data flowing reliably, combine energy cost with carbon metrics, and produce reports that were actually usable by operators.",
        solution:
          "I connected custom current and power-control hardware plus environmental sensors to ESP32 devices, then routed the data through MQTT into a Flask backend. The backend parsed incoming measurements, stored them in MySQL, and exposed them to a Vue dashboard that refreshed every five seconds through WebSocket. On top of that, I added carbon-emission and cost calculations, usage-pattern analysis, Claude-based ESG summaries, and PDF report generation, then packaged the stack with Docker Compose and an NCP deployment path.",
        impact:
          "What made the project meaningful was turning energy saving from a vague idea into a closed product loop: collect, analyze, visualize, and report. Users could monitor live power, cost, and carbon metrics in one place, operators could review generated ESG reports, and the hardware layer remained directly controllable. That made the system more than an IoT demo, it became an operational product flow that was validated with an encouragement award in the Hanium ICT Mentoring competition.",
        highlights: [
          "Received an encouragement award in the Hanium ICT Mentoring competition",
          "Positioned the product between simple smart plugs and heavyweight FMS systems",
          "Combined MQTT and WebSocket monitoring with Claude-based ESG automation",
          "Implemented the flow end to end from custom hardware to reports",
        ],
        results: [
          "Built a dashboard that streams power and environmental data every five seconds",
          "Implemented ESG report viewing and PDF-generation flows",
          "Combined carbon, cost, and anomaly data into one operational interface",
          "Integrated MQTT ingestion, WebSocket visualization, and reporting into one end-to-end system",
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
          "NCP",
        ],
      },
    },
    resources: [
      { href: "https://github.com/yeop-sang/hanium_power_monitor_server", label: { ko: "GitHub", en: "GitHub" }, icon: "github" },
      { href: "/power-monitoring/power-monitoring-result-report.pdf", label: { ko: "결과 보고서", en: "Result Report" }, icon: "external" },
      { href: "/power-monitoring/power-monitoring-design-doc.pdf", label: { ko: "설계서", en: "Design Doc" }, icon: "external" },
    ],
  },
  {
    id: 11,
    title: "ROAD DAMAGE DETECTION",
    year: "2025",
    period: "2025.07",
    tags: "Computer Vision · Segmentation · Ensemble Detection",
    description: {
      ko: "U-Net + YOLO 앙상블 기반 도로 파손 탐지를 BRIDGE 3.0·2026 KICS 발표까지 확장한 프로젝트",
      en: "Road damage detection with a U-Net + YOLO ensemble, later extended into BRIDGE 3.0 and a 2026 KICS presentation",
    },
    color: "#243A1F",
    heroImage: {
      src: "/road-damage/road-damage-hero.png",
      alt: {
        ko: "Road Damage Detection 샘플 탐지 결과",
        en: "Road Damage Detection sample predictions",
      },
    },
    gallery: [
      {
        src: "/road-damage/kics-page-2.png",
        alt: {
          ko: "후속 연구 확장 흐름",
          en: "Follow-up research extension flow",
        },
      },
      {
        src: "/road-damage/road-damage-report-page-2.png",
        alt: {
          ko: "실험 구조와 적용 방향",
          en: "Experiment structure and application direction",
        },
      },
    ],
    details: {
      ko: {
        overview:
          "USC Road Damage Detection 대회에서 도로 파손 이미지를 더 정확하게 찾기 위해 배경 제거와 객체 탐지를 결합한 컴퓨터 비전 실험입니다. 제한된 시간 안에 성능과 학습 효율을 함께 확보하는 것이 핵심이었고, 이후 BRIDGE 3.0 후속 연구와 2026년도 KICS 한국통신학회 동계종합학술발표회 발표자료로까지 확장했습니다.",
        role:
          "기술 담당으로 배경 제거와 객체 탐지 조합 전략, 전처리 파이프라인, 실험 반복 구조를 설계했습니다. 이후 결과 보고서와 KICS 발표자료에서 핵심 판단 흐름이 드러나도록 내용을 정리했습니다.",
        challenge:
          "도로 이미지에는 배경 노이즈와 다양한 파손 형태가 섞여 있어 단일 탐지 모델만으로 안정적인 성능을 내기 어려웠습니다. 대회 환경에서는 학습 시간을 과도하게 늘리지 않으면서도 성능을 끌어올릴 전략이 필요했고, 후속 단계에서는 이 실험 구조를 보고서와 발표로 설명 가능한 형태로 정리해야 했습니다.",
        solution:
          "U-Net으로 배경을 정리한 뒤 YOLO 기반 객체 탐지를 조합하는 앙상블 접근을 적용했습니다. 데이터 전처리와 학습 파이프라인을 정리해 반복 실험 비용을 낮추고, 제한된 학습 시간 안에서 결과를 비교·개선할 수 있도록 구성했습니다. 이후 BRIDGE 3.0 단계에서는 grayscale 기반 증강을 포함한 후속 실험으로 위험 요소 탐지 방향까지 확장했고, 이를 결과 보고서와 KICS 발표자료로 정리했습니다.",
        impact:
          "단순 모델 실험이 아니라, 전처리와 학습 효율까지 포함한 실험 전략을 설계했다는 점이 중요했습니다. 모델 선택보다 전체 파이프라인 품질이 성능과 일정에 큰 영향을 준다는 점을 검증했고, 그 결과를 BRIDGE 3.0 후속 연구와 2026 KICS 발표까지 연결했습니다.",
        highlights: [
          "USC IMSC Hackathon 3위 수상",
          "숭실대 BRIDGE 3.0 PoC 선정",
          "2026년도 KICS 한국통신학회 동계종합학술발표회 제출 및 발표",
          "배경 제거 + 탐지 모델 결합을 통한 앙상블 실험",
          "결과 보고서와 KICS 발표자료로 후속 연구 흐름 문서화",
        ],
        results: [
          "배경 제거와 객체 탐지를 결합한 앙상블 실험 구조 설계",
          "50 epoch 기준 3~4시간 미만의 학습 파이프라인 구성",
          "반복 가능한 전처리·실험 workflow 정리",
          "결과 보고서와 2026 KICS 발표자료까지 연결되는 후속 산출물 구성",
        ],
        tech: ["U-Net", "YOLOv5x", "PyTorch", "OpenCV", "Google Colab", "Grayscale Augmentation"],
      },
      en: {
        overview:
          "A computer-vision project for the USC Road Damage Detection competition that combined background removal and object detection to improve road-damage recognition. The main goal was to balance performance and training efficiency under a tight schedule, then carry the strongest direction into BRIDGE 3.0 follow-up work and a 2026 KICS winter conference presentation.",
        role:
          "I focused on the technical strategy: combining background removal with detection, shaping the preprocessing flow, and making experiments repeatable under time pressure. I later organized the core decisions into the report and the KICS presentation.",
        challenge:
          "Road images contain noisy backgrounds and highly varied damage patterns, which makes it difficult to rely on a single detector alone. In a competition setting, I needed an approach that improved performance without turning training time into a bottleneck, while still being explainable in later documentation and presentation.",
        solution:
          "I used an ensemble strategy that applied U-Net for background cleanup before YOLO-based detection. I also organized the preprocessing and training workflow so experiments could be repeated and compared within a limited training window. In the BRIDGE 3.0 follow-up, grayscale-oriented augmentation was added for road-risk and sinkhole-related cues, and that extension was documented in both the final report and the KICS deck.",
        impact:
          "The project showed that pipeline quality—not just model choice—can strongly shape both performance and delivery speed. It also became a practical example of how a competition experiment can mature into BRIDGE 3.0 follow-up work and a public-facing KICS presentation.",
        highlights: [
          "Placed 3rd at the USC IMSC Hackathon",
          "Selected for Soongsil BRIDGE 3.0 PoC",
          "Submitted and presented at the 2026 KICS Winter Conference",
          "Used an ensemble approach combining segmentation and detection",
          "Documented the follow-up flow through both a report and a KICS slide deck",
        ],
        results: [
          "Designed an ensemble workflow combining background removal and object detection",
          "Built a training pipeline that stayed under roughly 3–4 hours for 50 epochs",
          "Structured a repeatable preprocessing and experiment workflow",
          "Extended the work into both a final report and a 2026 KICS presentation artifact",
        ],
        tech: ["U-Net", "YOLOv5x", "PyTorch", "OpenCV", "Google Colab", "Grayscale Augmentation"],
      },
    },
    resources: [
      { href: "/road-damage/road-damage-kics-2026-paper.pdf", label: { ko: "2026 KICS 발표자료 (PDF)", en: "2026 KICS Slides (PDF)" }, icon: "external" },
      { href: "/road-damage/road-damage-report.pdf", label: { ko: "결과 보고서", en: "Report" }, icon: "external" },
      { href: "https://imsc-hackathon-2025.github.io/pages/college-consolidated.html", label: { ko: "공식 챌린지", en: "Official Challenge" }, icon: "external" },
      { href: "https://colab.research.google.com/drive/1N0MWTKKxj89MX-CvlMV2xXluNJMrgT9a", label: { ko: "데모", en: "Demo" }, icon: "external" },
      { href: "/credentials/2025-usc-imsc-hackathon-third-place.png", label: { ko: "수상 증빙", en: "Award" }, icon: "external" },
    ],
  },
  {
    id: 1,
    title: "MUSIC SENSE",
    year: "2025",
    period: "2025 -",
    tags: "Accessibility · Audio AI · Haptics · Flutter",
    description: {
      ko: "난청 아동 교육·재활 현장의 병목에서 출발한 멀티모달 음악 접근성 프로젝트",
      en: "Multimodal music-accessibility project shaped around bottlenecks in deaf and hard-of-hearing education and rehabilitation",
    },
    color: "#2A1A4A",
    heroImage: {
      src: "/music-sense/music-sense-cover.png",
      alt: {
        ko: "Music Sense 표지 슬라이드",
        en: "Music Sense cover slide",
      },
    },
    gallery: [
      {
        src: "/music-sense/music-sense-problem.png",
        alt: {
          ko: "Music Sense 문제 정의 슬라이드",
          en: "Music Sense problem-definition slide",
        },
      },
      {
        src: "/music-sense/music-sense-demo.png",
        alt: {
          ko: "Music Sense 앱 데모 슬라이드",
          en: "Music Sense app demo slide",
        },
      },
      {
        src: "/music-sense/music-sense-validation.png",
        alt: {
          ko: "Music Sense 서비스 검증 결과 슬라이드",
          en: "Music Sense validation-result slide",
        },
      },
    ],
    details: {
      ko: {
        overview:
          "Music Sense는 SKT FLY AI 대상 수상으로 끝난 데모가 아니라, 난청 아동 교육·재활 현장의 병목에서 출발한 멀티모달 음악 접근성 프로젝트입니다. 복지기관과 음악치료 현장에서 확인한 문제는 아이들이 음악을 원하지 않는 것이 아니라, 멜로디와 리듬을 해석할 단서가 부족하고 이를 보완할 교구는 여전히 수작업에 크게 의존한다는 점이었습니다. 그래서 보컬·가사·박자·음정을 분리 분석한 결과를 자막, 시각 단서, 햅틱으로 번역해 앱과 교육용 콘텐츠로 연결하는 흐름을 만들었고, 수상 이후에도 사용자 피드백과 Flutter 업데이트를 이어가며 제품 방향을 다듬고 있습니다.",
        role:
          "프로젝트를 PM과 개발로 나누지 않고 사실상 전체 흐름을 이어붙였습니다. 문제 정의와 현장 인터뷰, 오디오 분석 파이프라인 방향, FastAPI·Flutter 구조, 데모 시나리오, 발표 메시지, 후속 업데이트 우선순위까지 핵심 판단과 구현 연결을 맡았습니다.",
        challenge:
          "기존의 음악 경험은 대부분 청각 중심으로 설계되어 있어, 난청 사용자가 음악의 구조와 감정선, 리듬 변화를 다른 감각으로 이해하기 어렵습니다. 특히 교육·재활 현장에서는 시각 자료와 리듬 단서를 치료사가 수작업으로 만들고 있어 곡을 바꿀 때마다 시간이 오래 걸리고 확장성이 낮았습니다. 인터뷰와 설문에서도 멜로디 변화를 느끼고 싶다는 응답이 70.1%, 음악을 멀리하는 이유로 전달 수단 부족이 87.5%로 나타나 미충족 수요가 분명했습니다.",
        solution:
          "음원을 stem separation으로 분리한 뒤 가사·timestamp·pitch·rhythm을 개별 파이프라인으로 뽑아냈습니다. 타임스탬프는 WhisperX의 한계를 넘기 위해 Lyrics-Aligner 기반 음절 정렬 흐름으로 바꾸고, 보컬 pitch와 드럼 onset을 시각 자막과 Core Haptics용 profile로 재구성했습니다. 그 결과를 Flutter 앱과 교육용 악보 생성 흐름까지 묶어, 한 곡의 음악을 '듣는 정보'가 아니라 '느끼고 따라갈 수 있는 단서'로 바꾸는 구조를 만들었습니다.",
        impact:
          "이 프로젝트의 의미는 접근성 문제를 추상적인 선의가 아니라 현장의 반복 병목과 제품 경험의 문제로 다뤘다는 데 있습니다. 실제 난청 아동 검증에서 리듬 정확도는 44→63, 44→81, 69→88로 개선됐고, 멜로디 정확도도 33→55, 31→50, 50→63으로 올라갔습니다. 덕분에 Music Sense는 단순 공모전 앱이 아니라 교육·재활 현장에 먼저 들어가고 이후 공연·OTT·웨어러블로 확장 가능한 멀티모달 접근성 엔진으로 설명할 수 있게 됐습니다.",
        highlights: [
          "SKT FLY AI Challenger 프로젝트 부문 대상 수상",
          "난청인의 음악 접근성 문제를 '더 크게 듣는 보조'가 아니라 멀티모달 번역 문제로 재정의",
          "Lyrics-Aligner 기반 음절 정렬로 자막 정밀도를 크게 끌어올린 구조 설계",
          "복지기관·음악치료 현장 검증과 후속 Flutter 업데이트까지 이어진 제품 흐름",
        ],
        results: [
          "음절 단위 정렬로 timestamp 평균 오차를 1.70초에서 0.04초까지 축소",
          "난청 아동 3명 사전·사후 비교에서 리듬 정확도 19~37%p 개선",
          "동일 검증에서 멜로디 정확도 13~22%p 개선",
          "수작업 교구 의존도를 낮추는 앱·교육 콘텐츠 생성 흐름 정리",
        ],
        tech: ["FastAPI", "Flutter", "Demucs", "Lyrics-Aligner", "Torchcrepe", "madmom", "Core Haptics"],
      },
      en: {
        overview:
          "Music Sense was not just a grand-prize demo at SKT FLY AI. It became a multimodal music-accessibility project shaped around real bottlenecks in education and rehabilitation for deaf and hard-of-hearing children. What we saw in the field was not a lack of interest in music, but a lack of cues for reading melody and rhythm, while the supporting materials used in therapy were still heavily manual. I helped turn separated vocals, lyrics, rhythm, and pitch into subtitles, visual cues, and haptic feedback that connect the app to educational content, and I have kept refining the direction through user feedback and follow-up Flutter updates.",
        role:
          "I treated PM and development as one connected lane and stitched together the full flow. That covered problem framing and field interviews, the audio-analysis direction, the FastAPI and Flutter structure, the demo narrative, the presentation message, and the priorities for follow-up product updates.",
        challenge:
          "Most music products are designed around hearing, which makes musical structure, emotional movement, and rhythmic change hard to access through other senses. In education and rehabilitation settings, therapists still spend manual effort producing visual and rhythmic cues, which makes each new song costly to adapt and hard to scale. Interviews and survey data also showed unmet demand: 70.1% wanted to feel melodic change more clearly, while 87.5% cited the lack of a delivery method as a reason for not engaging with music.",
        solution:
          "We split the track into stems, extracted lyrics, timestamps, pitch, and rhythm through separate pipelines, and then reassembled those outputs into visual subtitles and Core Haptics profiles. To move past the limitations of WhisperX, I shifted timestamping toward a Lyrics-Aligner-based syllable alignment flow, then mapped vocal pitch and drum onsets into cues users could feel and follow. The result was not just analysis output, but a Flutter-based product flow that translates one song into a multimodal set of guides for both the app and educational content.",
        impact:
          "What makes the project matter is that it treated accessibility as a repeatable product and workflow problem rather than a vague social good. In field validation with three children, rhythm accuracy improved from 44→63, 44→81, and 69→88, while melody accuracy rose from 33→55, 31→50, and 50→63. That gave the project a stronger identity: not just a competition app, but a multimodal accessibility engine that can enter education and rehabilitation first, then grow toward concerts, OTT, and wearables.",
        highlights: [
          "Won the project grand prize at SKT FLY AI Challenger",
          "Reframed music accessibility as a multimodal translation problem rather than a louder-audio problem",
          "Designed a syllable-level alignment and haptic-translation structure around actual field use",
          "Kept the work alive through field validation, user feedback, and follow-up Flutter updates",
        ],
        results: [
          "Cut average timestamp error from 1.70 seconds to 0.04 seconds with syllable-level alignment",
          "Improved rhythm accuracy by 19–37 percentage points in before-and-after validation with three children",
          "Improved melody accuracy by 13–22 percentage points in the same validation flow",
          "Defined an app and educational-content pipeline that reduces dependence on fully manual therapy materials",
        ],
        tech: ["FastAPI", "Flutter", "Demucs", "Lyrics-Aligner", "Torchcrepe", "madmom", "Core Haptics"],
      },
    },
    resources: [
      { href: "/music-sense/music_sense_pitch_deck.pdf", label: { ko: "발표 자료", en: "Slides" }, icon: "external" },
      { href: "/credentials/2026-skt-fly-ai-project-grand-prize.jpeg", label: { ko: "수상 증빙", en: "Award" }, icon: "external" },
    ],
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
