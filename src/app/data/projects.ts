export interface LocalizedProjectDetails {
  overview: string;
  role?: string;
  teamRole?: string;
  decision?: string;
  validationNote?: string;
  workflow?: { title: string; steps: string[]; note: string };
  challenge: string;
  solution: string;
  impact?: string;
  researchContext?: string;
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
  video?: { youtubeId: string; start: number };
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
    id: 1,
    title: "MUSIC SENSE",
    year: "2025",
    period: "2025 - 2026",
    tags: "Accessibility · Audio AI · Haptics · KSCI Published Paper",
    description: {
      ko: "음악을 화면과 진동으로 전달하고, 아동 3명의 단일 세션 평가를 논문으로 기록한 접근성 프로젝트",
      en: "Music accessibility through visual and tactile cues, with a published single-session evaluation involving three children",
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
      {
        src: "/music-sense/music-sense-ksci-paper-cover.png",
        alt: {
          ko: "Music Sense KSCI 게재 논문 첫 페이지",
          en: "First page of the published Music Sense KSCI paper",
        },
      },
      {
        src: "/music-sense/music-sense-ksci-architecture.png",
        alt: {
          ko: "Music Sense KSCI 논문 시스템 아키텍처 도식",
          en: "Music Sense KSCI paper system architecture diagram",
        },
      },
    ],
    details: {
      ko: {
        overview:
          "Music Sense는 음악의 리듬과 멜로디를 화면과 진동으로 전달하는 앱입니다. 음악 접근성 아이디어를 들고 청음복지관을 찾아가 현장 평가를 진행했고, 교육에 쓰는 그림 악보 생성 기능도 만들었습니다. SKT FLY AI 프로젝트 부문 대상을 받았으며, 시스템과 평가 결과를 한국컴퓨터정보학회논문지 31권 6호(2026.06, pp.175-184)에 발표했습니다.",
        role:
          "팀장으로 전체 구조와 Python 함수 연결 흐름을 설계하고 공용 Linux GPU 서버·VPN·개발 환경을 관리했습니다. 그림 악보는 요구 확인부터 설계·구현까지 맡았고, Flutter 라이브러리와 iOS 네이티브 연동 문제를 직접 해결했습니다. 모델 실험 결과 검토와 역할·일정 조율도 담당했습니다.",
        challenge:
          "팀이 WhisperX에 음원과 가사를 함께 넣어 테스트했을 때, 말이 없는 간주 구간을 말로 추정하는 문제가 있었습니다. 비전공 팀원들이 함께 개발하면서 Python 환경과 CUDA 의존성 문제도 자주 생겼습니다. 일정이 제한돼 있어, 앱에서 분석을 요청하고 결과를 받는 기능보다 실제 현장에서 도움이 되는지 확인하는 평가를 먼저 진행하기로 했습니다.",
        solution:
          "서버는 음원 분리 → 음높이 추출 → 가사 정렬 → 햅틱 생성을 같은 프로세스의 순차 함수 호출로 실행합니다. 단계 사이에는 WAV·JSON 파일을 전달했습니다. RTX 4090 노트북을 Linux GPU 서버로 구성하고 계정별 개발 환경과 VPN을 설정했습니다. CUDA 변경으로 GPU 접근이 막혔을 때 재설치로 복구한 뒤 sudo 권한과 변경 절차를 정리했습니다.\n\n분석 결과를 활용하는 그림 악보 생성 기능을 직접 구현했습니다. Flutter 햅틱 라이브러리는 수정 PR을 제출하고 앱에서 Git 의존성으로 사용했습니다. 팀의 모델 비교에서는 Lyrics-Aligner가 선택됐고, 저는 결과를 검토하고 수정 방향을 조율했습니다.",
        impact:
          "실제로 도움이 되는지 확인해야 개발을 이어갈 근거가 생긴다고 판단해 현장 평가를 우선했습니다. 다만 앱에서 분석을 요청하고 결과를 받는 기능까지 완성하지 못했습니다. 서버에서 만든 파일을 앱에 직접 옮겨야 했고, 평가 이후 활발한 사용으로 이어지지는 못했습니다. 이후 혼자 가사 정렬 모델 개발도 시도했지만 완성하지 못했습니다.",
        researchContext:
          "서울대 MARG와의 짧은 연구실 접점을 통해 Music Sense가 audio-language learning, music tagging, ASR timestamp 오류 분석과 어떻게 연결될 수 있는지 탐색했습니다. 이를 독립 연구 주제로 크게 확장하기보다는, timestamped music cue와 접근성 관점의 오류 분석이라는 작은 산출물로 좁히는 방향을 정리했습니다.",
        highlights: [
          "SKT FLY AI Challenger 프로젝트 부문 대상 수상",
          "비전공 팀원의 개발 환경 설정, 코드 검토, 공용 GPU 서버 관리",
          "기존 음원 분석 결과를 활용하는 그림 악보 기능 직접 설계·구현",
          "일정 내 우선순위를 정해 청음복지관 현장 평가 진행",
          "한국컴퓨터정보학회논문지 Vol.31 No.6 게재",
        ],
        results: [
          "청음복지관 아동 3명에게 같은 날 피아노 반주와 앱의 진동·시각 단서를 활용해 노래하게 한 탐색 평가에서, 리듬 정확도 7/16→10/16, 7/16→13/16, 11/16→14/16 관찰 — 팀 결과",
          "같은 평가에서 멜로디 정확도 33%→55%, 31%→50%, 50%→62.55% 관찰. 특정 곡·단일 세션의 결과로 일반적인 치료 효과를 입증하지 않음",
          "서버 결과 파일을 앱에 직접 옮겨 실제 기기에서 음악에 맞춘 진동 확인",
          "발표 자료의 가사 정렬 오차 1.70초→0.04초는 같은 곡의 같은 구간 비교. 0.04초는 가장 잘 맞은 구간의 값이며 전체 평균이 아님",
          "그림 악보 생성 기능과 현장 평가 결과를 포함한 시스템을 학술 논문으로 발표",
        ],
        teamRole: "Flutter 화면 구현과 모델 비교·튜닝은 팀원이 맡았습니다. 가사 화면의 최종안은 제가 사용자·교수님 피드백을 모아 조율하고, Flutter 팀원이 구현했습니다.",
        decision: "실제로 도움이 되는지 확인해야 다음 개발의 근거가 생긴다고 판단해, 앱–서버 자동 연동보다 현장 평가를 우선했습니다.\n\n가사 화면은 5~6개 데모를 비교했습니다. 사용자는 음계별 색상을 한눈에 읽기 어렵다고 했고, 파스텔 톤에서도 같은 반응이었습니다. 이 피드백을 근거로 색상 구분을 빼고 상대적인 Y좌표로 음높이를 표현하도록 조율했습니다. 그림 악보의 색상 표현과는 별개의 결정입니다.",
        validationNote: "근거: KSCI 논문 PDF 7–8쪽, Table 2·3. 청각장애 아동 3명, 같은 곡·같은 날의 탐색 평가입니다. 색상안과 Y좌표안의 정량 비교나 장기 효과 검증은 아닙니다.",
        workflow: {"title": "실제 시연 흐름", "steps": ["서버에서 순차 분석", "결과 파일을 직접 이동", "앱에서 화면·진동 재생"], "note": "앱에서 분석을 요청하고 결과를 받아오는 연결은 미완성입니다. WAV·JSON은 서버 내부 단계의 중간 데이터 형식입니다."},
        tech: ["FastAPI", "Flutter", "Demucs", "Lyrics-Aligner", "Torchcrepe", "madmom", "Core Haptics"],
      },
      en: {
        overview:
          "Music Sense is an app that conveys musical rhythm and melody through visual and tactile cues. We brought the idea to Cheong-Eum Welfare Center, conducted a field evaluation, and added visual sheet music for educational use. The project won the SKT FLY AI project grand prize. Its system and evaluation were published in the Journal of The Korea Society of Computer and Information, Vol.31 No.6 (June 2026), pp.175-184.",
        role:
          "As team lead, I designed the system and Python function flow and managed the shared Linux GPU server, VPN, and development environments. I owned visual sheet music from requirements to implementation and resolved Flutter library and iOS native integration issues. I also reviewed model experiments and coordinated roles and priorities.",
        challenge:
          "When the team tested WhisperX with audio and supplied lyrics, it inferred speech during instrumental passages. Teammates without a computer science background also encountered Python and CUDA dependency issues. With limited time, I prioritized checking whether the product helped users in the field before completing in-app analysis requests and result retrieval.",
        solution:
          "The server runs source separation, pitch extraction, lyric alignment, and haptic generation as sequential function calls in one process, passing WAV and JSON files between stages. I configured an RTX 4090 laptop as a Linux GPU server with per-account environments and VPN access. After a CUDA change broke GPU access, I reinstalled CUDA and clarified sudo permissions and the change process.\n\nI implemented visual sheet music using the analysis outputs. I submitted a Flutter haptics library change as a PR and used it in the app through a Git dependency. The team selected Lyrics-Aligner after model comparisons; I reviewed the findings and coordinated revisions.",
        impact:
          "I prioritized the field evaluation because evidence of usefulness would justify further development. In-app analysis requests and result retrieval remained unfinished. Server output files had to be transferred into the app manually, and use after the evaluation remained limited. I later attempted to develop a lyric alignment model independently, but did not complete it.",
        researchContext:
          "Through a short research-lab exposure at SNU MARG, I explored how Music Sense could connect to audio-language learning, music tagging, and ASR timestamp failure cases. Rather than expanding it into a full independent research track, I narrowed the direction into a lightweight artifact: timestamped music cues and accessibility-oriented error analysis.",
        highlights: [
          "Won the SKT FLY AI project grand prize",
          "Set up development environments, reviewed code, and managed a shared GPU server for the team",
          "Designed and implemented visual sheet music generation using existing audio analysis outputs",
          "Prioritized the Cheong-Eum Welfare Center evaluation within the deadline",
          "Published in the Journal of The Korea Society of Computer and Information, Vol.31 No.6",
        ],
        results: [
          "In a same-day exploratory evaluation with three children at Cheong-Eum Welfare Center, rhythm accuracy changed from 7/16 to 10/16, 7/16 to 13/16, and 11/16 to 14/16 when comparing singing with piano accompaniment and the app’s tactile and visual cues; a team result",
          "Melody accuracy changed from 33% to 55%, 31% to 50%, and 50% to 62.55%. This single-session, single-song evaluation does not establish general therapeutic efficacy",
          "Verified music-synchronized vibration on a physical device after manually transferring server output files into the app",
          "The presentation’s 1.70-second to 0.04-second lyric alignment error comparison concerns the same segment of one song. The 0.04-second result was the best-aligned segment, not an overall average",
          "Published the system, including visual sheet music generation and the field evaluation, in a journal paper",
        ],
        teamRole: "Teammates implemented the Flutter screens and ran model comparisons and tuning. I gathered user and professor feedback and coordinated the final lyric-display direction; the Flutter teammate implemented it.",
        decision: "I prioritized the field evaluation over automatic app–server integration because evidence of usefulness would justify further development.\n\nWe compared five or six lyric-display demos. Users found pitch-specific colors hard to read, including in pastel tones. I used that feedback to coordinate a change to relative vertical position instead of color. This decision was separate from the colors in the visual sheet music.",
        validationNote: "Source: KSCI paper PDF, pages 7–8, Tables 2 and 3. Three children with hearing loss, one song, one session. This was not a quantitative comparison of the color and vertical-position interfaces or a long-term study.",
        workflow: {"title": "The actual demonstration", "steps": ["Sequential analysis on the server", "Manual transfer of output files", "Visual and tactile playback in the app"], "note": "In-app analysis requests and result retrieval remained unfinished. WAV and JSON describe intermediate files within the server pipeline."},
        tech: ["FastAPI", "Flutter", "Demucs", "Lyrics-Aligner", "Torchcrepe", "madmom", "Core Haptics"],
      },
    },
    resources: [
      { href: "/music-sense/music_sense_pitch_deck.pdf", label: { ko: "발표 자료", en: "Slides" }, icon: "external" },
      { href: "https://journal.kci.go.kr/jksci/archive/articleView?artiId=ART003349366", label: { ko: "KCI 논문 페이지", en: "KCI Article Page" }, icon: "external" },
      { href: "/music-sense/music-sense-ksci-paper.pdf", label: { ko: "KSCI 논문 PDF", en: "KSCI Paper PDF" }, icon: "external" },
      { href: "/credentials/2026-skt-fly-ai-project-grand-prize.jpeg", label: { ko: "수상 증빙", en: "Award" }, icon: "external" },
    ],
  },
{
    id: 2,
    title: "BINARI",
    year: "2025",
    period: "2025.08 - 2026.03",
    tags: "AI Pipeline · OCR · Qdrant · Async Video",
    description: {
      ko: "촬영한 동화책에서 한국수어 시나리오와 영상을 생성하는 프로토타입",
      en: "Prototype that generates KSL scenarios and videos from photographed storybooks",
    },
    color: "#1A3A2A",
    video: { youtubeId: "CAUkNSF-aQs", start: 6774 },
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
          "비나리는 동화책 페이지의 문장과 삽화·캐릭터 정보를 읽어 한국수어 시나리오와 영상을 생성하는 공모전용 프로토타입입니다.",
        role:
          "AI 저장소의 파이프라인·검색·영상 생성과 인프라·전체 아키텍처를 맡았습니다. Celery·Redis 작업 큐, 동시 실행 2개 제한, 완료 콜백을 직접 구현했고, Sora 프롬프트 수정과 발표·데모를 담당했습니다.",
        challenge:
          "영상이 만들어지는 동안 화면에는 로딩 표시만 떠 있어, 사용자가 오류인지 처리 중인지 구분하기 어려웠습니다. 서버는 계속 작업하고 있었지만 사용자가 떠난 뒤 결과가 DB에 저장돼도 완료를 알리기 어려웠습니다. 4~5개 요청을 동시에 처리하면 메모리 초과로 서버 프로세스가 종료되는 것도 로그에서 확인했습니다.",
        solution:
          "OCR로 동화책 문장을 추출하고, 삽화·캐릭터 정보와 Qdrant에서 검색한 수어 동작 설명을 한국수어 시나리오·영상 프롬프트에 반영했습니다. Qdrant는 코사인 유사도와 점수 임계값으로 설명을 검색하며, 생성된 영상을 재사용하는 캐시는 아닙니다.\n\n영상 생성은 Celery·Redis 큐에서 비동기로 처리하고 동시 실행을 2개로 제한했습니다. 제가 구현한 완료 콜백에 팀원이 앱의 알림과 영상 이동을 연결했습니다.\n\n첫 숭실대 해커톤에는 Veo 3를 사용했습니다. 이후 조코딩 해커톤에서는 Sora 결과에 대한 수어 통역사의 피드백을 반영해 손가락 표현·표정·정면 상반신 구도·양손 노출을 프롬프트에 명시하고, 정확도가 낮은 영상은 다시 생성했습니다.",
        impact:
          "수어 통역사 검수는 한 차례였고, 최종 결과도 일부만 적절하다는 평가를 받았습니다. 손 모양과 표정에 대한 프롬프트를 수정했어도 수어 정확도는 해결되지 않았습니다. 최종 제출에도 이 한계를 밝혔고, 이후에도 통역사 검수가 필요하다고 판단했습니다.\n\n복지관 이용자 대상 영상 평가와 공공기관의 도입 의향 확인은 진행하지 못했습니다. 발표 당시의 시장 규모·가격은 사업 가설입니다. 이후 시장이 좁다는 커피챗 피드백을 듣고 개발을 멈췄으며, 실사용 배포로 이어지지 않았습니다.",
        highlights: [
          "촬영한 동화책 페이지에서 시작하는 한국수어 시나리오·영상 생성",
          "메모리 초과에 대응해 작업을 큐에 저장하고 동시 실행을 2개로 제한",
          "서버 완료 콜백 구현과 팀원의 앱 알림 기능 연결",
          "Qdrant 코사인 검색과 점수 임계값으로 수어 동작 설명을 조회해 영상 프롬프트에 반영",
        ],
        results: [
          "동시 실행을 2개로 제한한 뒤 15개 요청이 모두 완료되는 것을 확인 — 해당 테스트 범위의 관찰",
          "서버의 작업 큐·동시 실행 제한·완료 콜백 직접 구현",
          "앱 이탈·화면 꺼짐 상태의 완료 알림과 알림 선택 시 영상 이동 확인 — 앱 기능은 팀원이 구현",
          "Qdrant 코사인 검색과 점수 임계값으로 수어 동작 설명을 조회해 영상 프롬프트에 반영",
        ],
        teamRole: "팀원은 Flutter 앱·인증·알림 표시, 백그라운드 및 화면 꺼짐 상태의 알림 수신과 생성 영상 이동을 구현했습니다. 조코딩 제출 때 앱의 서버 주소를 변경한 작업도 팀원이 담당했습니다.",
        decision: "4~5개 동시 작업에서 메모리 초과로 프로세스가 종료되는 로그를 확인했습니다. 제한된 자원에서 작업을 완료하도록 큐에 저장하고 동시 실행을 2개로 제한했습니다. 최적 동시성 값을 증명한 것은 아닙니다.\n\n기존 API는 조사가 붙은 표현에서 수어 설명을 찾지 못했습니다. 정확히 일치하는 단어 조회 대신, 임베딩한 단어로 수어 동작 설명을 찾는 Qdrant 검색을 선택했습니다.",
        validationNote: "15개 요청 완료는 당시 테스트의 관찰입니다. 대규모 처리량이나 항상 같은 완료 순서를 보장하지 않습니다. 검색 정확도와 프롬프트 수정 전후의 수어 정확도는 정량 측정하지 않았습니다.",
        workflow: {"title": "설명 검색에서 영상 검수까지", "steps": ["단어를 임베딩", "Qdrant에서 수어 설명 검색", "Sora 프롬프트에 반영", "생성 영상 검수·재생성"], "note": "검색된 설명을 프롬프트에 넣는 단계와, 최종 수어 영상이 정확한지 확인하는 단계는 구분합니다."},
        tech: [
          "FastAPI",
          "Google Vision OCR",
          "Qdrant",
          "GPT-4o",
          "OpenAI API",
          "Google Veo 3",
          "Sora",
          "Celery",
          "Redis",
          "AWS S3",
        ],
      },
      en: {
        overview:
          "BinarI is a storybook sign-language project that starts from photographed book pages and connects OCR, illustration and character understanding, retrieval, and video generation into one pipeline. It was built as a competition prototype to validate a structure that could reduce the production bottleneck around Korean Sign Language content.",
        role:
          "I implemented the AI repository’s pipeline, retrieval, and video generation and owned infrastructure and architecture. I built the Celery and Redis queue, two-job concurrency limit, and completion callback, and handled Sora prompt revisions, the presentation, and demo.",
        challenge:
          "The app showed only a spinner during video generation, so users could not distinguish ongoing processing from failure. The server continued working and saved completed videos to the database, but notifying users after they left was difficult. Logs also showed the server process terminating because of memory exhaustion when four or five requests ran concurrently.",
        solution:
          "The pipeline extracts storybook text with OCR and combines illustration and character information with sign-motion descriptions retrieved from Qdrant for KSL scenarios and video prompts. Qdrant retrieves descriptions using cosine similarity and a score threshold; it is not a cache of generated videos.\n\nI moved video generation into a Celery and Redis queue with a two-job concurrency limit. A teammate connected my completion callback to app notifications and video navigation.\n\nThe first Soongsil University hackathon used Veo 3. For the later Jocoding hackathon, I revised Sora prompts after interpreter feedback, specifying finger rendering, facial expressions, a front-facing upper-body view, and both hands in frame. I regenerated inaccurate outputs.",
        impact:
          "A sign-language interpreter reviewed the outputs on one occasion, and only some final outputs were judged acceptable. Prompt revisions for hands and facial expressions did not resolve sign-language accuracy. I disclosed this limitation in the submission and concluded that further interpreter review would still be necessary.\n\nWe did not evaluate the videos with welfare center users or validate public institutions’ willingness to adopt them. Market sizing and pricing in the presentation were business hypotheses. I stopped development after a coffee chat raised concerns about the narrow market; the prototype did not reach production use.",
        highlights: [
          "Generated KSL scenarios and videos from photographed storybook pages",
          "Queued jobs and capped concurrency at two in response to memory exhaustion",
          "Implemented the server completion callback connected to a teammate’s app notifications",
          "Retrieved sign descriptions from Qdrant with cosine similarity and a score threshold for the video prompt",
        ],
        results: [
          "Verified completion of all 15 submitted requests with concurrency capped at two; an observation limited to that test",
          "Implemented the server job queue, concurrency limit, and completion callback",
          "Verified background and screen-off notifications and navigation to generated videos; app behavior implemented by a teammate",
          "Retrieved sign descriptions from Qdrant with cosine similarity and a score threshold for the video prompt",
        ],
        teamRole: "A teammate built the Flutter app, authentication, notifications in the background and with the screen off, and navigation to the generated video. A teammate also changed the app’s server URL for the Jocoding submission.",
        decision: "Logs showed memory exhaustion terminating the process with four or five concurrent jobs. I queued work and capped concurrency at two so jobs could complete within the available resources. This was not a proven optimal concurrency setting.\n\nThe previous API failed to find sign descriptions for words with Korean particles. I chose Qdrant retrieval over exact-word lookup to search sign-motion descriptions using embedded words.",
        validationNote: "Completion of 15 requests was an observation from that test, not a large-scale throughput benchmark or a completion-order guarantee. Retrieval accuracy and before/after sign-language accuracy were not measured quantitatively.",
        workflow: {"title": "From description retrieval to video review", "steps": ["Embed words", "Retrieve sign descriptions from Qdrant", "Include descriptions in Sora prompts", "Review and regenerate video"], "note": "Including retrieved descriptions in a prompt and verifying the final sign-language video are separate steps."},
        tech: [
          "FastAPI",
          "Google Vision OCR",
          "Qdrant",
          "GPT-4o",
          "OpenAI API",
          "Google Veo 3",
          "Sora",
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
    id: 14,
    title: "CARDEER",
    year: "2026",
    period: "2026.03 - 2026.06",
    tags: "Flutter · FastAPI · pgvector · AI Cover Letter",
    description: {
      ko: "경험을 STAR 블록으로 쌓고 JD와 매칭해 자기소개서 초안을 조립하는 AI 취업 준비 제품",
      en: "AI job-prep product that turns reusable STAR experience blocks into JD-matched cover-letter drafts",
    },
    color: "#006CFF",
    heroImage: {
      src: "/cardeer/cardeer-hero.png",
      alt: {
        ko: "Cardeer 발표자료 표지",
        en: "Cardeer pitch deck cover",
      },
    },
    details: {
      ko: {
        overview:
          "Cardeer는 취업 준비자가 한 번 정리한 경험을 여러 지원서에 활용할 수 있도록 만든 프로젝트입니다. 대화형 질문으로 경험을 STAR 구조로 저장하고, 채용공고와 매칭해 기업·문항별 자기소개서 초안을 조립합니다.",
        role:
          "아이디어와 제품 컨셉, 피치 메시지, MVP 구조, Flutter 앱, FastAPI 백엔드, pgvector 기반 매칭, AI 조립 흐름, 배포 준비와 사업화 진행을 주도했습니다. 제 명의로 숭실대학교 창업동아리 선정 이후의 사업화와 멘토링 흐름까지 정리했습니다.",
        challenge:
          "지원할 때마다 같은 경험을 기업별 문항과 채용공고에 맞게 다시 정리해야 했습니다. 한 번 입력한 경험을 저장하고, 다음 지원에서 필요한 내용을 찾아 재사용할 수 있는 도구가 필요했습니다.",
        solution:
          "Flutter 기반 모바일 앱과 FastAPI 백엔드를 하나의 제품 흐름으로 설계했습니다. 백엔드는 경험 블록 CRUD, STAR 분해, JD 파싱, pgvector 임베딩·유사도 검색, WorkNet 기반 기업 카드, 자기소개서 초안 조립과 버전 저장을 처리합니다. PostgreSQL RLS와 JWT 인증으로 사용자 데이터를 분리하고, OpenAI 호환 AI provider와 deterministic fallback을 함께 둬 로컬 개발과 실사용 경로를 모두 유지했습니다. 앱에서는 대화형 storyboard 입력, 경험 블록 라이브러리, 회사 카드 스와이프, 에디터와 DOCX/PDF export 흐름을 연결했습니다.",
        impact:
          "Cardeer는 숭실대학교 2026 학생 창업동아리 지원사업에 선정됐습니다. 지원 내용에는 최대 300만 원의 아이템개발비, 창업동아리실, 맞춤형·전담교원 멘토링, 창업 교육과 창업동아리실습 3학점 연계가 포함됩니다.",
        highlights: [
          "숭실대학교 2026 학생 창업동아리 지원사업 선정",
          "경험 입력 → STAR 블록화 → JD 매칭 → 자기소개서 조립으로 이어지는 end-to-end 제품 흐름",
          "Flutter 앱과 FastAPI·PostgreSQL·pgvector 백엔드를 함께 설계",
          "대화형 storyboard, 회사 카드 스와이프, DOCX/PDF export까지 MVP 범위를 확장",
        ],
        results: [
          "FastAPI + PostgreSQL 16 + pgvector 기반 경험 블록·JD 매칭 백엔드 구축",
          "Flutter/Riverpod/Dio 기반 모바일 클라이언트 구현",
          "JWT 인증, PostgreSQL RLS, Alembic migration, Docker Compose 로컬 실행 구조 정리",
          "OpenAI 호환 AI provider, mock fallback, DOCX/PDF export, 관리자 provider 설정 흐름 구현",
          "창업동아리 선정 후 멘토링과 아이템개발비를 활용한 MVP 검증 단계로 전환",
        ],
        tech: [
          "Flutter",
          "Riverpod",
          "Dio",
          "FastAPI",
          "PostgreSQL",
          "pgvector",
          "SQLAlchemy",
          "Alembic",
          "OpenAI-compatible API",
          "Docker Compose",
        ],
      },
      en: {
        overview:
          "Cardeer is a project for reusing personal experience across job applications. It captures experience through conversational questions, stores it as STAR blocks, and matches those blocks to job descriptions to assemble company-specific cover-letter drafts.",
        role:
          "I led the idea, product concept, pitch narrative, MVP architecture, Flutter app, FastAPI backend, pgvector matching flow, AI draft assembly, deployment preparation, and commercialization path. I also carried Cardeer under my name through Soongsil University's student startup-club program and mentoring track.",
        challenge:
          "Each application required reorganizing the same experiences for a different company, question, and job description. I wanted a tool that could store those experiences and retrieve relevant material for the next application.",
        solution:
          "I designed the product as a Flutter mobile app backed by a FastAPI service. The backend handles experience-block CRUD, STAR decomposition, JD parsing, pgvector embedding search, WorkNet-style company cards, cover-letter assembly, and version history. JWT auth and PostgreSQL RLS isolate user data, while OpenAI-compatible providers and deterministic fallbacks keep both local development and real AI paths available. The app connects interactive storyboard input, the block library, company-card swiping, draft editing, and DOCX/PDF export into one flow.",
        impact:
          "Cardeer was selected for Soongsil University's 2026 student startup-club support program. The program can provide up to KRW 3 million in item-development funding, startup-club space, tailored and faculty mentoring, startup education, and a possible three-credit startup practicum link.",
        highlights: [
          "Selected for Soongsil University's 2026 student startup-club support program",
          "End-to-end flow from experience capture to STAR blocks, JD matching, and cover-letter assembly",
          "Designed both the Flutter app and FastAPI/PostgreSQL/pgvector backend",
          "Expanded the MVP into storyboard input, company-card swiping, and DOCX/PDF export",
        ],
        results: [
          "Built the FastAPI + PostgreSQL 16 + pgvector backend for experience-block and JD matching",
          "Implemented a Flutter/Riverpod/Dio mobile client",
          "Set up JWT auth, PostgreSQL RLS, Alembic migrations, and a Docker Compose local runtime",
          "Added OpenAI-compatible providers, mock fallback behavior, DOCX/PDF export, and admin provider configuration",
          "Moved into MVP validation through startup-club mentoring and item-development support",
        ],
        tech: [
          "Flutter",
          "Riverpod",
          "Dio",
          "FastAPI",
          "PostgreSQL",
          "pgvector",
          "SQLAlchemy",
          "Alembic",
          "OpenAI-compatible API",
          "Docker Compose",
        ],
      },
    },
    resources: [
      { href: "https://github.com/yeop-sang/cardeer", label: { ko: "GitHub", en: "GitHub" }, icon: "github" },
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
          "Power Monitoring System은 중소규모 환경을 위한 에너지 관리 프로젝트입니다. 직접 제작한 IoT 전력 제어 하드웨어로 데이터를 수집하고, MQTT·Flask·MySQL·Vue를 이용해 실시간 대시보드와 ESG 보고서 생성을 구현했습니다.",
        role:
          "풀스택 단독 주도에 가깝게 하드웨어 데이터 흐름, MQTT 수집, Flask API, MySQL 저장 구조, Vue 대시보드, WebSocket 실시간 반영, Claude 기반 리포트 자동화를 함께 설계하고 구현했습니다.",
        challenge:
          "기존 선택지는 양극단이었습니다. 스마트 플러그는 설치는 쉽지만 분석·통합 관리·ESG 대응이 약했고, FMS는 기능은 강하지만 구축 비용과 운영 부담이 커서 중소규모 조직에는 과했습니다. 그래서 별도 대공사 없이 붙일 수 있는 IoT 하드웨어, 끊기지 않는 실시간 수집, 비용·탄소배출 통합 관리, 그리고 실제 제출 가능한 ESG 보고서 자동화까지 한 번에 다루는 구조가 필요했습니다.",
        solution:
          "직접 만든 전류·전원 제어 하드웨어와 환경 센서를 ESP32에 연결하고, 센서 데이터를 MQTT 브로커를 통해 백엔드로 수집했습니다. Flask API는 실시간 수신 데이터를 파싱해 MySQL에 저장하고, Vue 대시보드는 WebSocket으로 5초 단위 사용량·환경 수치를 갱신했습니다. 여기에 탄소배출량 계산과 사용 패턴 분석, Claude API 기반 ESG 요약·PDF 리포트 생성을 붙였고, Docker Compose와 NCP 배포 흐름까지 정리해 운영 가능한 서비스 구조로 만들었습니다.",
        impact:
          "사용량·요금·탄소배출량을 한 화면에서 조회하고, ESG 보고서를 생성할 수 있도록 구현했습니다. 전력 제어 하드웨어부터 데이터 수집·분석·시각화·리포트 생성까지 다뤘으며, 한이음 ICT 멘토링 공모전에서 장려상을 받았습니다.",
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
          "Power Monitoring System is an energy-management project for small and mid-sized environments. I connected custom IoT power-control hardware, MQTT ingestion, a Flask and MySQL backend, a Vue dashboard, and ESG report generation.",
        role:
          "I drove the stack almost end to end across hardware data flow, MQTT ingestion, Flask APIs, MySQL modeling, the Vue dashboard, WebSocket updates, and Claude-based report automation.",
        challenge:
          "The market gap was clear: smart plugs are easy to install but weak on analysis, integrated management, and ESG readiness, while FMS products are powerful but expensive and too heavy for smaller organizations. The project needed a structure that could attach to existing equipment without major retrofits, keep real-time data flowing reliably, combine energy cost with carbon metrics, and produce reports that were actually usable by operators.",
        solution:
          "I connected custom current and power-control hardware plus environmental sensors to ESP32 devices, then routed the data through MQTT into a Flask backend. The backend parsed incoming measurements, stored them in MySQL, and exposed them to a Vue dashboard that refreshed every five seconds through WebSocket. On top of that, I added carbon-emission and cost calculations, usage-pattern analysis, Claude-based ESG summaries, and PDF report generation, then packaged the stack with Docker Compose and an NCP deployment path.",
        impact:
          "The system supports live power, cost, and carbon monitoring alongside ESG report generation. The work covered power-control hardware, data collection, analysis, visualization, and reporting, and received an encouragement award in the Hanium ICT Mentoring competition.",
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
      ko: "세그멘테이션과 탐지, pseudo labeling 실험을 비교해 U-Net 전처리와 YOLO 앙상블에 집중한 도로 파손 탐지 프로젝트",
      en: "A road-damage detection project that compared segmentation, detection, and pseudo-labeling experiments before focusing on U-Net preprocessing and a YOLO ensemble",
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
          "USC Road Damage Detection 대회에서 제한된 시간 안에 YOLO 기본 모델, segmentation, YOLO+DETR, pseudo labeling 실험을 빠르게 비교한 컴퓨터 비전 프로젝트입니다. 팀은 성능과 실험 비용을 함께 검토해 U-Net 배경 제거와 YOLO 앙상블에 집중했고, 이후 BRIDGE 3.0 후속 연구와 2026년도 KICS 한국통신학회 동계종합학술발표회 논문으로 확장했습니다.",
        role:
          "팀의 실험 방향 설계와 전처리 파이프라인 구성에 참여하고, YOLO 기본 제출부터 segmentation, YOLO+DETR, pseudo labeling까지 실험 가지와 제출 순서를 정리했습니다. 이후 결과 보고서와 KICS 학술대회 논문에서 팀의 판단 흐름이 드러나도록 내용을 정리했습니다.",
        challenge:
          "도로 이미지에는 배경 노이즈와 다양한 파손 형태가 섞여 있어 단일 탐지 모델만 오래 튜닝하기보다 여러 가설을 빠르게 비교할 필요가 있었습니다. 해커톤 시간 안에 성능이 기대에 못 미치는 실험을 중단하고, 가능성이 있는 방향에 학습 시간과 계산 자원을 재배분해야 했습니다.",
        solution:
          "팀은 YOLO+DETR 조합이 성능 대비 시간 효율이 낮다고 판단해 추가 탐색을 중단하고, U-Net으로 건물, 나무, 하늘을 마스킹한 뒤 YOLOv5x와 YOLOv11x를 조합하는 방향에 시간을 재배분했습니다. 저는 이 판단과 후속 실험에 참여하고, hue transformation과 rotation augmentation을 포함해 전처리하고 학습한 뒤 제출하는 흐름을 정리했습니다. 이후 BRIDGE 3.0 단계에서는 grayscale 기반 증강을 포함한 후속 실험으로 확장했습니다.",
        impact:
          "팀은 LastDance를 최고 제출물로 확보했고 USC IMSC Hackathon 3위를 기록했습니다. 저는 해당 실험 흐름 구성에 참여하고, 이후 BRIDGE 3.0 후속 연구 결과를 보고서와 2026 KICS 학술대회 논문으로 정리했습니다.",
        highlights: [
          "USC IMSC Hackathon 3위 수상",
          "숭실대 BRIDGE 3.0 PoC 선정",
          "2026년도 KICS 한국통신학회 동계종합학술발표회 제출 및 발표",
          "성능 대비 시간 효율이 낮은 YOLO+DETR 탐색을 중단하고 유망한 실험에 자원 재배분",
          "결과 보고서와 KICS 학술대회 논문으로 후속 연구 흐름 문서화",
        ],
        results: [
          "YOLO와 segmentation, YOLO+DETR, pseudo labeling 실험 비교에 참여",
          "50 epoch 기준 3~4시간 미만의 학습 파이프라인 구성에 참여",
          "U-Net 배경 마스킹과 YOLOv5x, YOLOv11x 앙상블을 적용한 LastDance 제출 흐름 구성에 참여",
          "결과 보고서와 2026 KICS 학술대회 논문까지 연결되는 후속 산출물 구성",
        ],
        tech: ["U-Net", "YOLOv5x", "YOLOv11x", "DETR", "WBF", "Pseudo Labeling", "PyTorch", "OpenCV", "Google Colab"],
      },
      en: {
        overview:
          "A computer-vision project for the USC Road Damage Detection competition that rapidly compared YOLO baselines, segmentation, YOLO+DETR, and pseudo-labeling experiments under a tight schedule. The team evaluated both performance and experiment cost, focused on U-Net background removal with a YOLO ensemble, and later extended the work into BRIDGE 3.0 follow-up research and a 2026 KICS Winter Conference paper.",
        role:
          "I contributed to the team's experiment planning and preprocessing pipeline, organizing branches and submission order across YOLO baselines, segmentation, YOLO+DETR, and pseudo labeling. I later documented the team's decision process in the report and KICS conference paper.",
        challenge:
          "Road images contain noisy backgrounds and varied damage patterns, so the team needed to compare several hypotheses instead of spending the entire hackathon tuning one detector. We also needed to stop underperforming branches early and move training time and compute toward more promising directions.",
        solution:
          "The team stopped further YOLO+DETR exploration after finding that its performance did not justify the time cost, then reallocated effort to masking buildings, trees, and sky with U-Net before combining YOLOv5x and YOLOv11x. I participated in that decision and the follow-up experiments, and organized the preprocessing, training, and submission flow including hue transformation and rotation augmentation. The later BRIDGE 3.0 work added grayscale-oriented augmentation.",
        impact:
          "The team secured LastDance as its strongest submission and placed 3rd at the USC IMSC Hackathon. I contributed to that experiment flow and later documented the BRIDGE 3.0 follow-up research in a report and a 2026 KICS conference paper.",
        highlights: [
          "Placed 3rd at the USC IMSC Hackathon",
          "Selected for Soongsil BRIDGE 3.0 PoC",
          "Submitted and presented at the 2026 KICS Winter Conference",
          "Stopped the low-efficiency YOLO+DETR branch and reallocated resources to more promising experiments",
          "Documented the follow-up flow through both a report and a KICS conference paper",
        ],
        results: [
          "Contributed to comparisons across YOLO, segmentation, YOLO+DETR, and pseudo-labeling experiments",
          "Contributed to a training pipeline that stayed under roughly 3–4 hours for 50 epochs",
          "Contributed to the LastDance submission flow around U-Net background masking and a YOLOv5x/YOLOv11x ensemble",
          "Extended the work into both a final report and a 2026 KICS conference paper",
        ],
        tech: ["U-Net", "YOLOv5x", "YOLOv11x", "DETR", "WBF", "Pseudo Labeling", "PyTorch", "OpenCV", "Google Colab"],
      },
    },
    resources: [
      { href: "/road-damage/road-damage-kics-2026-paper.pdf", label: { ko: "2026 KICS 학술대회 논문", en: "2026 KICS Conference Paper" }, icon: "external" },
      { href: "/road-damage/road-damage-report.pdf", label: { ko: "결과 보고서", en: "Report" }, icon: "external" },
      { href: "https://imsc-hackathon-2025.github.io/pages/college-consolidated.html", label: { ko: "공식 챌린지", en: "Official Challenge" }, icon: "external" },
      { href: "https://colab.research.google.com/drive/1N0MWTKKxj89MX-CvlMV2xXluNJMrgT9a", label: { ko: "데모", en: "Demo" }, icon: "external" },
      { href: "/credentials/2025-usc-imsc-hackathon-third-place.png", label: { ko: "수상 증빙", en: "Award" }, icon: "external" },
    ],
  },
{
    id: 13,
    title: "서울대 생물교육과 협업 프로젝트",
    year: "2025",
    period: "2025.01 - 2025.04",
    tags: "Education AI · Python · NLP/ML · React · Firebase",
    description: {
      ko: "서울대학교 사범대학 생물교육과와 협업한 교육 평가 도구 개발 프로젝트",
      en: "Education-assessment tools developed in collaboration with SNU Biology Education",
    },
    color: "#3A2A2A",
    details: {
      ko: {
        overview:
          "서울대학교 사범대학 생물교육과와 함께 교육 평가 도구를 개발한 프로젝트입니다. PDF 학습자료에서 문제와 해설을 추출해 CSV 데이터로 구조화하고, 생물 서술형 답안 데이터를 대상으로 한국어 전처리와 자동채점 가능성을 실험했습니다. 또한 유전학 교육용 React/Redux 웹앱을 한국어 교육 환경에 맞게 커스터마이징하고 Firebase와 GitHub Actions 기반 배포 흐름을 정비했습니다. 이 작업은 이후 Solvy의 AI 기반 서·논술형 자동 채점 플랫폼 맥락으로 이어졌습니다.",
        role:
          "PDF 문제·해설 추출 Python CLI 구현, 서술형 답안 데이터 전처리와 NLP/ML 실험, React/Redux 교육용 웹앱 한국어화, Firebase authoring data 및 GitHub Actions 배포 흐름 정비를 맡았습니다.",
        challenge:
          "교육 현장의 자료는 PDF 학습자료, 서술형 답안, 교육용 웹 콘텐츠처럼 서로 다른 형태로 흩어져 있어 바로 AI 평가나 웹서비스에 활용하기 어려웠습니다. 반복 활용 가능한 데이터 구조와 운영 가능한 웹도구 흐름으로 바꾸는 작업이 필요했습니다.",
        solution:
          "PyMuPDF 기반 CLI로 PDF 문항과 해설을 추출해 CSV로 변환하고, 생물 서술형 답안에 대해 한국어 전처리, 형태소 분석, TF-IDF·벡터화, 분류·회귀 모델 실험을 진행했습니다. React/Redux 기반 유전학 교육 웹앱은 한국어 콘텐츠와 폰트/스타일을 조정하고, Firebase 설정과 GitHub Actions 배포 흐름을 정비했습니다.",
        impact:
          "PDF 문제·해설을 CSV로 바꾸는 CLI를 구현하고 교육용 웹앱을 한국어화했습니다. 서술형 자동채점은 한국어 전처리와 모델 실험을 진행한 단계입니다.",
        highlights: [
          "서울대학교 사범대학 생물교육과 협업 프로젝트",
          "PDF 학습자료를 구조화된 CSV 데이터로 변환하는 Python CLI 구현",
          "생물 서술형 답안 데이터의 한국어 전처리와 자동채점 가능성 실험",
          "유전학 교육용 React/Redux 웹앱 한국어화 및 Firebase/GitHub Actions 배포 정비",
          "Solvy의 AI 기반 서·논술형 자동 채점 플랫폼 맥락으로 이어진 교육 평가 도구 개발 흐름",
        ],
        results: [
          "PyMuPDF, regex, YAML 설정 기반 PDF 문항 파싱 도구 구현",
          "서술형 답안 데이터에 형태소 분석, TF-IDF/벡터화, 분류·회귀 실험 적용",
          "Geniventure/GeniBlocks 기반 교육용 웹앱의 한국어 콘텐츠, 폰트, Firebase authoring 흐름 수정",
          "GitHub Actions와 Firebase secret injection을 포함한 배포 흐름 정비",
        ],
        tech: ["Python", "PyMuPDF", "NLP/ML", "React", "Redux", "Firebase", "GitHub Actions"],
      },
      en: {
        overview:
          "I collaborated with SNU Biology Education to develop education-assessment tools. I structured PDF learning materials into CSV data, explored Korean preprocessing and automated-scoring experiments on biology descriptive-answer data, and customized a genetics education React/Redux web app for Korean classroom use. The work also included Firebase authoring data and GitHub Actions deployment maintenance, and connected into the Solvy context of AI-based descriptive and essay-answer scoring.",
        role:
          "I worked on the Python CLI for extracting questions and explanations from PDF materials, NLP/ML preprocessing experiments for descriptive-answer data, Korean localization of a React/Redux education web app, Firebase authoring data, and GitHub Actions deployment flow maintenance.",
        challenge:
          "Education materials were spread across PDFs, descriptive answers, and web content, which made them hard to reuse directly for AI evaluation or web services. The work needed to turn those materials into structured data and maintainable web-tool workflows.",
        solution:
          "I used a PyMuPDF-based CLI to extract questions and explanations from PDFs into CSV, then worked with Korean preprocessing, morphological analysis, TF-IDF/vectorization, and classification/regression experiments for biology descriptive-answer scoring. For the React/Redux genetics education app, I adjusted Korean content, fonts, and styles, and maintained Firebase configuration plus GitHub Actions deployment flow.",
        impact:
          "I built a CLI for converting PDF questions and explanations into CSV and localized an education web app into Korean. The automated-scoring work covered Korean preprocessing and model experiments.",
        highlights: [
          "Collaborative project with SNU Biology Education",
          "Built a Python CLI that converts PDF learning materials into structured CSV data",
          "Explored Korean preprocessing and automated-scoring experiments for biology descriptive answers",
          "Localized a genetics education React/Redux web app and maintained Firebase/GitHub Actions deployment flow",
          "Connected into the Solvy context of AI-based descriptive and essay-answer scoring",
        ],
        results: [
          "Implemented PDF question parsing with PyMuPDF, regex, and YAML configuration",
          "Applied morphological analysis, TF-IDF/vectorization, and classification/regression experiments to descriptive-answer data",
          "Adjusted Korean content, fonts, and Firebase authoring flow in a Geniventure/GeniBlocks-based education app",
          "Maintained deployment flow with GitHub Actions and Firebase secret injection",
        ],
        tech: ["Python", "PyMuPDF", "NLP/ML", "React", "Redux", "Firebase", "GitHub Actions"],
      },
    },
    resources: [
      { href: "https://www.solvy.co.kr/main", label: { ko: "Solvy", en: "Solvy" }, icon: "external" },
      { href: "https://github.com/yeop-sang/pdf-exam-parser", label: { ko: "PDF Parser", en: "PDF Parser" }, icon: "github" },
      { href: "https://github.com/yeop-sang/geniblocks_korean", label: { ko: "GeniBlocks Korean", en: "GeniBlocks Korean" }, icon: "github" },
    ],
  },
{
    id: 7,
    title: "PICKLE.PLUS",
    year: "2020",
    period: "2019.08 - 2020.08",
    tags: "Backend · DevOps · Service Operations",
    description: {
      ko: "Pickle.plus 초기 팀에서 맡은 백엔드 개발과 정산·서비스 운영 업무",
      en: "Backend development, settlement, and service operations in the early Pickle.plus team",
    },
    color: "#24324A",
    details: {
      ko: {
        overview:
          "Pickle.plus 초기 팀에서 공동구독 서비스의 백엔드 개발과 정산·운영 업무를 맡았습니다. 배포 환경과 실시간 참여자 통계, 자동 정산 흐름을 경험했습니다.",
        role:
          "백엔드와 프론트엔드 작업에 참여하고, 실시간 참여자 통계와 자동 정산 등 서비스 운영 기능의 구조를 익혔습니다.",
        challenge:
          "참여자 현황과 정산은 서비스 운영 중에 계속 관리해야 하는 정보였습니다. 관련 백엔드 기능과 운영 절차를 함께 이해해야 했습니다.",
        solution:
          "백엔드 로직 구현과 정산·서비스 운영 업무에 참여했습니다. 배포 환경, 실시간 참여자 통계와 자동 정산 흐름이 작동하는 방식을 익혔습니다.",
        impact:
          "운영 중인 공동구독 서비스에서 백엔드 개발과 운영 업무를 경험했습니다. 초기 팀은 제2회 핀테크 아이디어 공모전에서 우수상을 받았습니다.",
        highlights: [
          "Pickle.plus 초기 팀의 서비스 개발·운영 참여",
          "실시간 참여자 통계와 자동 정산 흐름 경험",
          "제2회 핀테크 아이디어 공모전 우수상 — 팀 수상",
        ],
        results: [
          "운영 중인 서비스의 백엔드·정산·운영 구조를 함께 이해하는 실무 경험 확보",
        ],
        tech: ["Django", "React.js", "Python", "Backend Development", "Service Operations"],
      },
      en: {
        overview:
          "In the early Pickle.plus team, I worked on backend development, settlement, and operations for the subscription-sharing service. I gained experience with deployment environments, live participation metrics, and automated settlement flows.",
        role:
          "I participated in backend and frontend work and learned how operational features such as live participation metrics and automated settlement were structured.",
        challenge:
          "Participant information and settlement required ongoing management while the service was running. The work required understanding both the backend features and the operational procedures.",
        solution:
          "I participated in backend implementation, settlement, and service operations. I learned how the deployment environment, live participation metrics, and automated settlement flow worked.",
        impact:
          "I gained experience with backend development and operations in a live subscription-sharing service. The early team received an excellence award in the 2nd Fintech Idea Contest.",
        highlights: [
          "Worked on Pickle.plus while the service stayed live",
          "Observed live participation metrics and automated settlement flow",
          "Team excellence award in the 2nd Fintech Idea Contest",
        ],
        results: [
          "Gained hands-on experience understanding backend, settlement, and operations in a live service",
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
          "숭실대 동아리연합회 외주로, 교내 행사에서 질문에 답하면 동아리를 추천받는 웹서비스를 개발했습니다. 약 4,000명 동시 접속은 설계할 때 고려한 예상 규모입니다.",
        role:
          "질문·동아리 데이터 구조화, 추천 흐름 설계, Django 기반 웹 구현 전반을 맡았습니다.",
        challenge:
          "행사 현장에서는 짧은 시간 안에 많은 학생이 한꺼번에 접속해도 흐름이 끊기지 않아야 했습니다. 여러 동아리 정보를 단순 목록으로 나열하는 대신, 운영 가능한 데이터 구조와 빠른 응답을 갖춘 추천형 경험이 필요했습니다.",
        solution:
          "동아리·질문 데이터를 CSV로 정리해 운영자가 수정 가능한 구조로 만들고, Django에서 질문-분기-결과 흐름을 JSON 응답 중심으로 구현했습니다. 페이지를 가볍게 유지해 행사성 트래픽에 대응할 수 있도록 했고, 사용자가 몇 번의 선택만으로 결과를 확인할 수 있게 동선을 단순화했습니다.",
        impact:
          "동아리·질문 데이터를 관리하는 CSV 구조와 Django 추천 화면을 구현해 행사 서비스로 납품했습니다.",
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
          "A commissioned web service for the Soongsil University club union that recommends clubs from a short questionnaire at a campus event. Roughly 4,000 concurrent users was a traffic assumption used during design.",
        role:
          "I handled the end-to-end structure of the service: organizing the club and question data, designing the recommendation flow, and implementing the Django-based web experience.",
        challenge:
          "The service needed to stay simple and responsive even if many students accessed it at once during the event. That meant turning a large set of club information into a recommendation flow while keeping the content model easy to operate and update.",
        solution:
          "I organized club and question data in CSV form, then implemented the question-branch-result flow around lightweight Django JSON endpoints and form pages. The flow was kept intentionally small and fast so users could reach a recommendation quickly under event-style traffic.",
        impact:
          "I delivered the event service with CSV-based club and question data management and a Django recommendation interface.",
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
      ko: "영일영에서 Django 문제의 원인을 추적한 경험을 바탕으로, 이후 django-excel의 구형 URL 선언을 수정하는 PR을 제출했습니다.",
      en: "Building on my experience investigating Django issues at Young Il Young Inc., I later submitted a PR to update outdated URL declarations in django-excel.",
    },
    details: {
      ko: "django-excel의 구형 URL 선언을 확인하고, Django 호환성을 위해 `url()`을 `re_path()`로 바꿨습니다. Django/xlrd 요구사항과 changelog도 함께 수정해 PR을 제출했습니다.",
      en: "I identified outdated URL declarations in django-excel and replaced `url()` with `re_path()` for Django compatibility. I also updated the Django/xlrd requirements and changelog and submitted the changes as a PR.",
    },
    results: {
      ko: [
        "구형 URL 선언과 의존성 요구사항을 수정하는 PR 제출",
        "`url()` → `re_path()` 전환으로 forward-compatible routing 반영",
        "Django/xlrd 요구사항과 changelog 수정",
      ],
      en: [
        "Submitted a PR updating outdated URL declarations and dependency requirements",
        "Replaced `url()` with `re_path()` for forward-compatible routing",
        "Updated Django/xlrd requirements and the changelog",
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
      ko: "Music Sense에서 진동 질감을 조절할 수 있도록 `flutter_vibration`에 sharpness 제어를 추가하는 PR을 제출했습니다.",
      en: "I submitted a `flutter_vibration` PR to add sharpness control for haptic feedback in Music Sense.",
    },
    details: {
      ko: "Music Sense에서 음악 요소를 촉각적으로 구분해 전달하려면 진동 세기만으로는 부족했고, 햅틱의 질감을 조절하는 `sharpness`가 필요했습니다. 그래서 benjamindean/flutter_vibration의 `vibrate` API에 `List<double> sharpnesses` 파라미터를 제안하고, iOS CoreHaptics 이벤트별 sharpness 매핑과 Android argument parsing까지 직접 구현했습니다. 수정한 공개 코드는 Music Sense 앱의 Git 의존성으로 등록해 사용했습니다.",
      en: "Music Sense needed more than vibration intensity to distinguish musical elements through touch, it needed control over haptic texture through `sharpness`. I proposed a `List<double> sharpnesses` parameter for the `vibrate` API in benjamindean/flutter_vibration, then implemented per-event sharpness mapping for iOS CoreHaptics and Android argument parsing myself. I used the modified public code in Music Sense through a Git dependency.",
    },
    results: {
      ko: [
        "Music Sense에 필요한 sharpness 제어를 API 확장 PR로 제출",
        "`sharpnesses` 리스트 기반 iOS 햅틱 텍스처 제어 추가",
        "iOS CoreHaptics 이벤트별 sharpness 매핑 구현",
        "Android 인자 파싱 보강으로 cross-platform API 안정성 개선",
      ],
      en: [
        "Submitted an API extension PR for the sharpness control needed by Music Sense",
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
