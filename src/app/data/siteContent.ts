export interface LocalizedText {
  ko: string;
  en: string;
}

export interface StackCategory {
  category: string;
  items: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export interface CareerEntry {
  period: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  desc: LocalizedText;
}

export interface CredentialEntry {
  date: string;
  title: LocalizedText;
  issuer: LocalizedText;
  detail: LocalizedText;
  anchor?: string;
  proof?: string;
}

export const homeContent = {
  available: {
    ko: "협업 가능 — 2026",
    en: "AVAILABLE FOR WORK — 2026",
  },
  title: {
    ko: "AI · SYSTEMS · BACKEND",
    en: "AI · SYSTEMS · BACKEND",
  },
  description: {
    ko: "새로운 기술을 빠르게 익히고, 이를 실제 서비스 구조로 연결해 반복과 마찰을 줄이는 시스템을 만듭니다.",
    en: "I learn new tools fast, then turn them into service-ready systems that reduce repetitive work and operational friction.",
  },
  cta: {
    ko: "프로젝트 보기 →",
    en: "VIEW PROJECTS →",
  },
  tickerText:
    "BACKEND · AI SYSTEMS · OCR · RAG · AUTOMATION · SERVICE OPERATIONS · OPEN TO COLLABORATE · ",
} as const;

export const aboutContent = {
  quote: {
    ko: '"기술은 새로운 것이라는 이유만으로 가치가 생기지 않습니다. 반복과 마찰을 줄이고 실제 운영을 버틸 수 있는 구조가 될 때 비로소 의미가 커집니다."',
    en: '"Technology is not valuable just because it is new. It matters when it reduces repetition, removes friction, and holds up in real operation."',
  },
  bioTitle: {
    ko: "소개",
    en: "About Me",
  },
  bio: {
    ko: "안녕하세요, 김상엽입니다. 새로운 기술을 빠르게 흡수한 뒤 그것을 실제로 작동하고 운영 가능한 구조로 연결하는 개발자입니다. 백엔드, AI 응용, 시스템 설계를 중심으로 반복적이고 비효율적인 과정을 줄여 사람이 더 중요한 판단과 경험에 집중할 수 있는 흐름을 만드는 데 관심이 있습니다. 현재도 운영 중인 Pickle.plus에서 서비스 운영과 배포 관점을 익혔고, Young Il Young Inc.에서는 상담 흐름과 재고 화면 구조를 실제 사용자 흐름에 맞게 다듬었으며, Music Sense와 비나리 같은 프로젝트에서는 AI를 서비스 가능한 구조와 제품 흐름으로 밀어붙였습니다.",
    en: "Hi, I'm Yeop. I learn new technologies quickly, then turn them into systems that can actually run in production. My focus is backend engineering, applied AI, and system design, especially where technology can remove repetitive work and free people to focus on better judgment and richer experiences. At Pickle.plus, which is still live today, I learned how service operations and deployment shape software, at Young Il Young Inc. I tightened consult flow and stock-page structure around real user journeys, and through projects like Music Sense and BinarI I pushed AI ideas into service-ready product flows.",
  },
  stackTitle: {
    ko: "기술 스택",
    en: "Tech Stack",
  },
  stack: {
    ko: [
      { category: "AI / Applied", items: ["PyTorch", "GPT-4o", "WhisperX", "Computer Vision", "RAG Pipelines"] },
      { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "System Design", "Async Workflows"] },
      { category: "Product / Web", items: ["React", "TypeScript", "Flutter", "API Integration", "Rapid Prototyping"] },
      { category: "DevOps / Ops", items: ["Docker", "CI/CD", "Deployment", "Cloud Infra", "Service Operations"] },
    ],
    en: [
      { category: "AI / Applied", items: ["PyTorch", "GPT-4o", "WhisperX", "Computer Vision", "RAG Pipelines"] },
      { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "System Design", "Async Workflows"] },
      { category: "Product / Web", items: ["React", "TypeScript", "Flutter", "API Integration", "Rapid Prototyping"] },
      { category: "DevOps / Ops", items: ["Docker", "CI/CD", "Deployment", "Cloud Infra", "Service Operations"] },
    ],
  },
  timelineTitle: {
    ko: "여정",
    en: "Journey",
  },
  timeline: {
    ko: [
      { year: "2026", title: "BinarI", desc: "동화책 수어 프로젝트 비나리에서 AI 파이프라인, 인프라, 발표 흐름을 설계하며 빠른 프로토타이핑을 리드" },
      { year: "2025", title: "Music Sense", desc: "난청 아동 교육·재활 현장의 병목을 겨냥해 멀티모달 음악 접근성 제품을 설계하고, 수상 이후에도 검증과 업데이트를 이어감" },
      { year: "2022", title: "Young Il Young Inc.", desc: "상담 흐름 개선과 재고 화면 캐싱으로 사용자 경험과 운영 부담을 함께 다룸" },
      { year: "2020", title: "Pickle.plus", desc: "현재도 운영 중인 Pickle.plus에서 백엔드, 정산, 서비스 운영 구조를 함께 경험" },
    ],
    en: [
      { year: "2026", title: "BinarI", desc: "Led rapid prototyping for BinarI, a storybook-to-KSL project, by shaping the AI pipeline, infrastructure, and demo narrative" },
      { year: "2025", title: "Music Sense", desc: "Built a multimodal music-accessibility product around bottlenecks in education and rehabilitation, then kept iterating after the SKT FLY AI win" },
      { year: "2022", title: "Young Il Young Inc.", desc: "Improved consult flow and stock-page caching in a real commerce product, balancing UX with service stability" },
      { year: "2020", title: "Pickle.plus", desc: "Learned backend, settlement, and service operations inside Pickle.plus, which is still live today" },
    ],
  },
} as const;

export const credentialsContent = {
  label: {
    ko: "CREDENTIALS",
    en: "CREDENTIALS",
  },
  title: {
    ko: "경력과 자격",
    en: "Experience & Credentials",
  },
  intro: {
    ko: "프로젝트 외에도 경력, 수상, 수료, 자격을 시간 순과 확인 가능한 기록 중심으로 정리했습니다.",
    en: "Beyond project work, this page collects my experience, awards, programs, and certifications around a verified timeline.",
  },
  timelineTitle: {
    ko: "시간순 요약",
    en: "Timeline",
  },
  awardsTitle: {
    ko: "수상 및 검증",
    en: "Awards & Proof",
  },
  programsTitle: {
    ko: "교육 / 프로그램",
    en: "Programs & Courses",
  },
  certificationsTitle: {
    ko: "자격",
    en: "Certifications",
  },
  proofLabel: {
    ko: "증빙 보기",
    en: "View Proof",
  },
  proofNote: {
    ko: "날짜가 확정되지 않은 항목은 공개 페이지에서 제외했습니다.",
    en: "Items without a confirmed date are intentionally omitted from the public page.",
  },
  timeline: [
    {
      period: "2019.08 - 2020.08",
      title: { ko: "Pickle.plus", en: "Pickle.plus" },
      subtitle: { ko: "기술 파트", en: "Technical team" },
      desc: {
        ko: "현재도 운영 중인 Pickle.plus에서 백엔드, 정산, 서비스 운영 관점을 함께 익힌 초기 실무·창업 경험입니다.",
        en: "An early startup experience inside Pickle.plus, still live today, where I learned backend, settlement, and service operations together.",
      },
    },
    {
      period: "2019.07 - 2019.08",
      title: { ko: "트라이본즈 디자인 인턴", en: "Tribonz Design Intern" },
      subtitle: { ko: "도구 개발", en: "Tooling" },
      desc: {
        ko: "Photoshop 파일 정리 도구와 HTML 파일 생성 도구를 개발했습니다.",
        en: "Built a Photoshop file cleanup tool and an HTML file generator.",
      },
    },
    {
      period: "2021.12 - 2022.08",
      title: { ko: "Young Il Young Inc.", en: "Young Il Young Inc." },
      subtitle: { ko: "기술 파트", en: "Technical team" },
      desc: {
        ko: "`Consult` 흐름 개선, `StockList` 캐싱, 외부 라이브러리 호환성 문제 해결을 함께 다뤘습니다.",
        en: "Worked on consult-flow improvements, stock-page caching, and external library compatibility fixes.",
      },
    },
    {
      period: "2023.01 - 2024.10",
      title: { ko: "공군 전산 정비병", en: "Republic of Korea Air Force" },
      subtitle: { ko: "전산 정비", en: "Computer Maintenance Specialist" },
      desc: {
        ko: "시스템 운영과 인프라 관점의 실무 감각을 넓힌 시기입니다.",
        en: "A period that deepened my operational understanding of systems and infrastructure.",
      },
    },
    {
      period: "2025.07",
      title: { ko: "USC AI & Data Science / IMSC Hackathon", en: "USC AI & Data Science / IMSC Hackathon" },
      desc: {
        ko: "USC Viterbi와 IMSC에서 AI·Data Science 과정을 수료하고 IMSC Hackathon에서 3위를 수상했습니다.",
        en: "Completed USC Viterbi's AI and Data Science program and placed third at the IMSC Hackathon.",
      },
    },
    {
      period: "2025.08 - 2026.02",
      title: { ko: "비나리", en: "BinarI" },
      subtitle: { ko: "동화책 수어 프로젝트", en: "Storybook-to-KSL project" },
      desc: {
        ko: "촬영한 동화책 페이지에서 시작하는 한국수어 시나리오·영상 생성 파이프라인을 설계하고 후속 업데이트까지 이어갔습니다.",
        en: "Built and iterated on a KSL scenario and video-generation pipeline that starts from photographed storybook pages.",
      },
    },
    {
      period: "2026.02",
      title: { ko: "Music Sense", en: "Music Sense" },
      subtitle: { ko: "SKT FLY AI Challenger 8기 프로젝트 부문 대상", en: "SKT FLY AI Challenger 8th, Project Grand Prize" },
      desc: {
        ko: "Music Sense로 프로젝트 부문 대상을 수상했고, 이후에도 난청 아동 교육·재활 현장 검증과 Flutter 업데이트를 바탕으로 제품 방향을 계속 다듬고 있습니다.",
        en: "Won the project grand prize with Music Sense and have kept refining the product through field validation in education and rehabilitation settings plus follow-up Flutter updates.",
      },
    },
    {
      period: "2026.03",
      title: { ko: "조코딩 x OpenAI x 프라이머 AI 해커톤", en: "Jocoding x OpenAI x Primer AI Hackathon" },
      subtitle: { ko: "비나리, 장려상", en: "BinarI, Encouragement Prize" },
      desc: {
        ko: "비나리 발표와 데모로 장려상을 수상했습니다.",
        en: "Received an encouragement prize for presenting BinarI and its demo.",
      },
    },
    {
      period: "2026.03",
      title: { ko: "ADsP", en: "ADsP" },
      desc: {
        ko: "데이터 분석 준전문가를 취득했습니다.",
        en: "Earned the Advanced Data Analytics Semi-Professional certification.",
      },
    },
  ] satisfies CareerEntry[],
  awards: [
    {
      date: "2019.10.13",
      title: { ko: "제2회 핀테크 아이디어 공모전 우수상", en: "2nd Fintech Idea Contest, Excellence Award" },
      issuer: { ko: "금융위원회 · 한국핀테크지원센터", en: "Financial Services Commission · Korea Fintech Support Center" },
      detail: {
        ko: "Pickle.plus 초기 팀의 문제 정의와 연결된 핀테크 아이디어 공모전 우수상입니다.",
        en: "An excellence award from a fintech idea contest tied to the early problem framing behind Pickle.plus.",
      },
      anchor: "pickle-plus-fintech-award",
      proof: "/credentials/2019-fintech-idea-contest-excellence.jpeg",
    },
    {
      date: "2025.07.26",
      title: { ko: "USC IMSC Hackathon 3위", en: "USC IMSC Hackathon, Third Place" },
      issuer: { ko: "University of Southern California · IMSC", en: "University of Southern California · IMSC" },
      detail: {
        ko: "USC Integrated Media Systems Center 해커톤에서 3위를 수상했습니다.",
        en: "Placed third at the USC Integrated Media Systems Center hackathon.",
      },
      proof: "/credentials/2025-usc-imsc-hackathon-third-place.png",
    },
    {
      date: "2025.08.23",
      title: { ko: "숭실×덕성 워런톤 Hack it Your Way 최우수상", en: "Soongsil x Duksung Warranton Hack it Your Way, Grand Prize" },
      issuer: { ko: "숭실대학교 · 덕성여자대학교", en: "Soongsil University · Duksung Women's University" },
      detail: {
        ko: "팀 FullMoon으로 워런톤 최우수상을 수상했습니다.",
        en: "Received the grand prize at Warranton as part of Team FullMoon.",
      },
      proof: "/credentials/2025-warranton-grand-prize.jpeg",
    },
    {
      date: "2026.02.27",
      title: { ko: "SK텔레콤 FLY AI Challenger 8기 프로젝트 부문 대상", en: "SK Telecom FLY AI Challenger 8th, Project Grand Prize" },
      issuer: { ko: "SK텔레콤", en: "SK Telecom" },
      detail: {
        ko: "Music Sense로 프로젝트 부문 대상을 수상했습니다.",
        en: "Won the project grand prize with Music Sense.",
      },
      proof: "/credentials/2026-skt-fly-ai-project-grand-prize.jpeg",
    },
    {
      date: "2026.02.27",
      title: { ko: "SK텔레콤 FLY AI Challenger 8기 과정 개인 부문 최우수상", en: "SK Telecom FLY AI Challenger 8th, Individual Division Top Prize" },
      issuer: { ko: "SK텔레콤", en: "SK Telecom" },
      detail: {
        ko: "SK텔레콤 FLY AI Challenger 8기 과정에서 개인 부문 최우수상을 수상했습니다.",
        en: "Received the individual division top prize in the SK Telecom FLY AI Challenger 8th program.",
      },
    },
    {
      date: "2026.03.07",
      title: { ko: "조코딩 x OpenAI x 프라이머 AI 해커톤 장려상", en: "Jocoding x OpenAI x Primer AI Hackathon, Encouragement Prize" },
      issuer: { ko: "조코딩 · OpenAI · Primer", en: "Jocoding · OpenAI · Primer" },
      detail: {
        ko: "비나리 발표와 데모로 장려상을 수상했습니다.",
        en: "Received an encouragement prize for BinarI and its final presentation demo.",
      },
      proof: "/credentials/2026-jocoding-openai-primer-ai-hackathon-encouragement.jpeg",
    },
  ] satisfies CredentialEntry[],
  programs: [
    {
      date: "2025.07.25",
      title: { ko: "USC Artificial Intelligence and Data Science", en: "USC Artificial Intelligence and Data Science" },
      issuer: { ko: "USC Viterbi School of Engineering · IMSC", en: "USC Viterbi School of Engineering · IMSC" },
      detail: {
        ko: "USC Viterbi와 IMSC 연계 과정 수료 기록입니다.",
        en: "Completion record for the USC Viterbi and IMSC program.",
      },
      proof: "/credentials/2025-usc-ai-data-science-certificate.jpeg",
    },
    {
      date: "2025.09 - 2025.12",
      title: { ko: "SAP ABAP 교육 이수", en: "SAP ABAP Training" },
      issuer: { ko: "SAP ABAP Program", en: "SAP ABAP Program" },
      detail: {
        ko: "ABAP 개발 교육 과정을 이수했습니다.",
        en: "Completed ABAP development training.",
      },
    },
  ] satisfies CredentialEntry[],
  certifications: [
    {
      date: "2025.12",
      title: { ko: "C_ABAPD Backend Developer - ABAP Cloud", en: "C_ABAPD Backend Developer - ABAP Cloud" },
      issuer: { ko: "SAP", en: "SAP" },
      detail: {
        ko: "SAP의 ABAP Cloud 백엔드 개발 자격을 취득했습니다.",
        en: "Earned SAP's C_ABAPD Backend Developer - ABAP Cloud certification.",
      },
    },
    {
      date: "2026.03",
      title: { ko: "ADsP", en: "ADsP" },
      issuer: { ko: "한국데이터산업진흥원", en: "Korea Data Agency" },
      detail: {
        ko: "데이터 분석 준전문가를 취득했습니다.",
        en: "Earned the Advanced Data Analytics Semi-Professional certification.",
      },
    },
  ] satisfies CredentialEntry[],
} as const;

export const contactContent = {
  label: {
    ko: "CONTACT",
    en: "CONTACT",
  },
  title: {
    ko: "함께 만들어요.",
    en: "Let's Build Together.",
  },
  footer: {
    ko: "© 2026 김상엽 — 서울, 한국",
    en: "© 2026 Sangyeop(Yup) Kim — Seoul, Korea",
  },
  email: "yeop@yeop.kr",
  githubUrl: "https://github.com/yeop-sang",
  linkedInUrl: "https://linkedin.com/in/yeop-kr/",
} as const;

export const workPageContent = {
  projectsTitle: {
    ko: "프로젝트",
    en: "PROJECTS",
  },
  projectsIntro: {
    ko: "프로젝트는 문제 정의, 구조적 해결, 반복 개선이 잘 드러나도록 배치했습니다. 각 상세 페이지에서는 역할, 설계 판단, 결과를 중심으로 정리했습니다.",
    en: "Projects are ordered to make the problem, structural solution, and iteration path easy to see. Each detail page focuses on role, design decisions, and outcomes.",
  },
  contributionsTitle: {
    ko: "오픈소스 기여",
    en: "OPEN SOURCE CONTRIBUTIONS",
  },
  contributionsIntro: {
    ko: "개인 프로젝트 외에도 외부 코드베이스에 직접 수정과 호환성 개선을 기여한 기록을 따로 정리했습니다.",
    en: "Beyond personal projects, I keep a separate record of fixes and compatibility improvements contributed to external codebases.",
  },
  morePublicWorkLabel: {
    ko: "다른 공개 작업 보기",
    en: "More public work",
  },
} as const;
