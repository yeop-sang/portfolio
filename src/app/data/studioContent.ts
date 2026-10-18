import type { LocalizedText } from "./siteContent";

// Public copy based on user-confirmed facts (2026-10-19). Keep private working notes out of the app.
export const lineOspoExperience = {
  company: "LINE+ OSPO",
  period: { ko: "2026.07 ~ 현재", en: "2026.07 ~ Present" },
  role: {
    ko: "Engineer, 내부 제품 개발",
    en: "Engineer, Internal Product Development",
  },
  summary: {
    ko: "LINE+ OSPO에서 오픈소스 검토 담당자가 여러 도구의 결과를 대조하던 업무를 자동화하는 내부 제품을 개발했습니다. 필요한 정보를 수집하고 결과 파일을 생성하는 API를 설계하고 구현했습니다.",
    en: "At LINE+ OSPO, I developed an internal product for open-source reviewers who manually compared results from multiple tools. I designed and implemented an API to collect the required information and generate result files.",
  },
  design: {
    ko: "도구마다 다른 입력을 공통 형식으로 바꾸고 기존 처리 로직을 재사용했습니다. 한 항목의 정보가 빠지면 전체 결과를 전달하지 못하던 흐름을 바꿔, 처리 가능한 항목은 끝까지 처리하고 추가 확인이 필요한 항목과 그 이유를 결과에 남겼습니다.",
    en: "I converted inputs from different tools into a common format and reused the existing processing logic. Missing information in one item had prevented delivery of the entire result. I changed the workflow to finish processing the items it could handle and preserve items needing follow-up, along with their reasons, in the result.",
  },
  cloud: {
    ko: "저장소 연동을 막던 신규 클라우드의 통신 제약을 Bash, curl, tcpdump로 진단했습니다. 흩어진 문서와 운영팀의 확인 내용을 실제 진단 결과와 대조하고, 상사와 보안팀 협의를 거쳐 필요한 연결을 구성했습니다. 남은 제약을 반영해 상사와 개발 일정을 산정하고, 여러 저장소의 데이터 수집부터 결과 파일 생성까지 직접 확인했습니다.",
    en: "I diagnosed network constraints blocking repository integration in a new internal cloud using Bash, curl, and tcpdump. I compared test results with scattered documentation and findings from the operations team, then configured the required connections in consultation with my manager and the security team. I estimated the development schedule with my manager based on the remaining constraints and directly verified data collection from multiple repositories through to result-file generation.",
  },
  collection: {
    ko: "사내 저장소에서 오픈소스 정보를 수집하는 문제를 조사하며, 기존 npm과 PyPI 패키지 설치 방식의 특성이 수집 문제와 관련 있음을 파악했습니다. 정보 수집이라는 목적에 맞춰 설치 대신 저장소가 제공하는 파일을 직접 받도록 변경했습니다. Babel 관련 테스트에서 파일 수집 시간을 약 20초에서 약 5초 이내로 줄였습니다.",
    en: "While investigating problems collecting open-source information from internal repositories, I found that characteristics of the existing npm and PyPI package-installation approach were related to the collection issues. Since the task was to collect information, I changed the implementation to download repository-provided files directly instead of installing packages. In a Babel-related test, file collection took about 5 seconds or less, down from about 20 seconds.",
  },
  data: {
    ko: "오픈소스 검사 결과를 보완하기 위해 마련된 내부 DB를 활용해 정보 캐싱 도구를 개발하고 있습니다. 원본 데이터를 AI에 전달하는 것만으로는 원하는 형태를 얻기 어려워, 여러 테이블의 관계를 파악하고 SQL 조인으로 필요한 자료를 모아 정제했습니다. 현업과 데이터의 문제를 확인하고 API 응답 원본도 수집하며 캐싱에 필요한 자료를 정리하고 있습니다.",
    en: "I am developing an information-caching tool using an existing internal database built to supplement open-source scanning results. Passing raw data to AI alone did not produce the required form, so I traced relationships across tables and used SQL joins to collect and clean the needed data. I am reviewing data issues with the staff who use it, collecting raw API responses, and organizing the data needed for caching.",
  },
  validation: {
    ko: "로컬과 개발 환경에서 대표 사례를 검증하고, 여러 저장소에서 정보를 수집해 결과 파일을 생성하는 동작을 확인했습니다.",
    en: "I validated representative cases in local and development environments and confirmed the workflow from collecting information across multiple repositories to generating result files.",
  },
} as const;

export const youngIlYoungExperience = {
  company: { ko: "영일영", en: "Young Il Young Inc." },
  period: "2021.12 ~ 2022.08",
  role: { ko: "풀스택 개발", en: "Full-stack development" },
  summary: {
    ko: "온라인 휴대폰 판매와 상담 서비스에서 관리자 엑셀 업로드를 확장하고, 외부 API의 단말과 가격 정보를 내부 데이터로 연결했습니다. 재고 화면에는 페이지 캐시와 업로드 후 무효화를 적용해 새 데이터 반영과 로딩 속도를 함께 개선했습니다.",
    en: "For an online phone sales and consultation service, I extended admin spreadsheet uploads and integrated device and pricing data from an external API. I combined page caching with invalidation after uploads to improve both stock-page freshness and loading speed.",
  },
  context: {
    ko: "Django 기반 온라인 휴대폰 판매와 상담 서비스의 서버와 프론트엔드를 개발했습니다. 여러 기능을 직접 담당하며 요구사항 정리와 우선순위 판단부터 구현과 운영 확인까지 맡았습니다.",
    en: "I developed backend and frontend features for a Django-based online phone sales and consultation service. I owned several features from clarifying requirements and priorities through implementation and operational checks.",
  },
  uploads: {
    ko: "관리자가 올린 엑셀 자료를 내부 데이터에 연결하도록 django-import-export의 Widget과 Resource를 확장했습니다. 통신사와 모델명으로 기종을 찾고, 계약 조건의 표시값과 DB 코드를 양방향으로 변환했습니다. 별도의 견적 완료 안내 업로드에는 카카오 알림 요청을 연결하고 관리자 미리보기에서는 발송하지 않도록 구현했습니다.",
    en: "I extended django-import-export Widgets and Resources to map admin spreadsheet uploads to internal data. I used carrier and model names to look up devices and converted contract labels and database codes in both directions. For a separate quote-completion upload, I connected Kakao notification requests and prevented sends during the admin preview.",
  },
  collection: {
    ko: "휴대폰 판매에 필요한 단말과 가격 정보를 가져오기 위해 외부 API를 분석하고 기존 연동 코드를 확장했습니다. 검색 조건을 구성하고 응답을 기종, 통신사별 모델, 요금제와 공시지원금 데이터로 변환해 Django 모델에 저장했습니다. 요청 제한에는 서버가 안내한 시간만큼 기다린 뒤 다시 요청하고, 인증 오류에는 토큰을 갱신해 다시 요청하도록 구현했습니다.",
    en: "I analyzed an external API and extended the existing integration to collect device and pricing information for phone sales. I built search conditions and mapped responses into Django models for devices, carrier-specific models, plans, and published subsidies. I added retries after the server-specified delay for rate limits, and token refresh followed by retries for authentication errors.",
  },
  caching: {
    ko: "관리자 업로드 뒤 이전 데이터가 남는 문제를 해결하려 요청마다 값을 계산했지만 화면이 느려졌습니다. 반복되는 HTML 처리를 찾아 페이지 캐시와 일관된 캐시 키를 적용하고, 업로드 뒤 관련 캐시를 지우도록 구현했습니다. 업로드 직후 새 데이터가 반영됐고, 로딩이 체감상 빨라지면서 느리다는 피드백도 줄었습니다.",
    en: "To fix stale data after admin uploads, I first calculated values on each request, but this slowed the page down. I identified repeated HTML processing, added page caching with consistent cache keys, and invalidated related caches after uploads. New data appeared immediately after uploads, loading felt faster, and complaints about slowness decreased.",
  },
  consultation: {
    ko: "상담 기능의 모델, 뷰, 템플릿과 모바일 화면을 함께 수정해 색상 선택과 입력 누락 안내를 개선했습니다. 공시가 변경 Slack 알림과 Django 로깅을 추가하고, 테스트 환경에서는 SMS가 실제로 발송되지 않도록 처리했습니다.",
    en: "I updated consultation models, views, templates, and mobile screens to improve color selection and missing-input guidance. I added Slack alerts for published price changes and Django logging, and prevented real SMS sends in the test environment.",
  },
} as const;

export const studioContent = {
  title: { ko: ["제품을 만드는", "개발자 김상엽입니다."], en: ["Hi, I’m", "Sangyeop Kim."] },
  intro: {
    ko: "AI 기능과 백엔드를 개발하며, 시스템 설계와 구현을 함께 맡아왔습니다. 팀의 개발 방향을 조율하고 사용자 피드백을 제품에 반영하는 개발자입니다.",
    en: "I design systems and build AI features and backends. I also coordinate development across the team and turn user feedback into product improvements.",
  },
} as const;

export const featuredWork: { id: number; role: LocalizedText; outcome: LocalizedText; scope: LocalizedText; summary: LocalizedText; image: string; alt: LocalizedText; category: string }[] = [
  {
    id: 1,
    category: "AUDIO AI / ACCESSIBILITY",
    role: { ko: "팀장 · 시스템 설계 · GPU 서버 관리 · 그림 악보 구현", en: "Team lead · System design · GPU server management · Visual sheet music" },
    summary: { ko: "난청 사용자가 음악의 리듬과 멜로디를 화면과 진동으로 느낄 수 있도록 만든 앱.", en: "An accessibility project translating rhythm and melody into visual and tactile cues." },
    outcome: { ko: "SKT FLY AI 프로젝트 대상 · KSCI 논문 게재", en: "SKT FLY AI project grand prize · KSCI publication" },
    scope: { ko: "청각장애 아동 3명·한 곡·단일 세션의 팀 평가입니다. 서버 결과는 앱에 직접 옮겼으며, 자동 연동은 미완성입니다.", en: "Team evaluation with three children, one song, and one session. Server outputs transferred manually; automatic integration unfinished." },
    image: "/music-sense/music-sense-cover.png",
    alt: { ko: "Music Sense 프로젝트 표지", en: "Music Sense project cover" },
  },
  {
    id: 2,
    category: "GENERATIVE AI / CONTENT WORKFLOW",
    role: { ko: "AI 파이프라인 · 검색과 비동기 영상 생성 구조", en: "AI pipeline · Retrieval and asynchronous video workflow" },
    summary: { ko: "동화책을 촬영하면 한국수어 시나리오와 영상을 생성하는 프로토타입.", en: "A prototype connecting photographed storybooks to Korean Sign Language scenarios and video generation." },
    outcome: { ko: "조코딩 × OpenAI × 프라이머 AI 해커톤 장려상", en: "Jocoding × OpenAI × Primer AI Hackathon encouragement prize" },
    scope: { ko: "동시 실행을 2개로 제한한 테스트에서 요청 15개를 완료했습니다. 통역사 검수는 한 차례였고, 최종 결과 일부만 적절해 정확도 문제를 해결하지 못했습니다.", en: "15 requests completed with two concurrent jobs. One interpreter review; sign accuracy unresolved." },
    image: "/binari/binari-cover.png",
    alt: { ko: "비나리 프로젝트 표지", en: "BinarI project cover" },
  },
];
