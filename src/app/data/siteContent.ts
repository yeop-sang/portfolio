import { lineOspoExperience, youngIlYoungExperience } from "./studioContent";

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
    ko: "LINE+ OSPO 업무 중 — 2026",
    en: "WORKING AT LINE+ OSPO — 2026",
  },
  title: {
    ko: "AI · SYSTEMS · BACKEND",
    en: "AI · SYSTEMS · BACKEND",
  },
  description: {
    ko: "AI 기능과 백엔드를 개발하며, 시스템 설계와 구현을 함께 맡아왔습니다. 팀의 개발 방향을 조율하고 사용자 피드백을 제품에 반영하는 개발자입니다.",
    en: "I design systems and build AI features and backends. I also coordinate development across the team and turn user feedback into product improvements.",
  },
  cta: {
    ko: "프로젝트 보기 →",
    en: "VIEW PROJECTS →",
  },
  tickerText:
    "BACKEND · AI SYSTEMS · OPEN SOURCE PROGRAM OFFICE · INTERNAL AUTOMATION · SERVICE OPERATIONS · ",
} as const;

export const aboutContent = {
  bioTitle: {
    ko: "소개",
    en: "About Me",
  },
  bio: {
    ko: `${lineOspoExperience.summary.ko} 이전에는 Pickle.plus에서 백엔드 개발과 정산 및 운영 업무를 했고, 영일영에서는 관리자 업로드와 외부 API 수집, 재고 화면 캐싱을 구현했습니다.`,
    en: `${lineOspoExperience.summary.en} Previously, I worked on backend development, settlement, and service operations at Pickle.plus, and implemented admin uploads, external API collection, and stock-page caching at Young Il Young Inc.`,
  },
  stackTitle: {
    ko: "기술 스택",
    en: "Tech Stack",
  },
  stack: {
    ko: [
      { category: "AI / Applied", items: ["PyTorch", "GPT-4o", "WhisperX", "Computer Vision", "RAG Pipelines"] },
      { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Async Workflows"] },
      { category: "Product / Web", items: ["React", "TypeScript", "Flutter", "API Integration", "Rapid Prototyping"] },
      { category: "DevOps / Ops", items: ["Docker", "CI/CD", "Deployment", "Cloud Infra", "Open Source Ops"] },
    ],
    en: [
      { category: "AI / Applied", items: ["PyTorch", "GPT-4o", "WhisperX", "Computer Vision", "RAG Pipelines"] },
      { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Async Workflows"] },
      { category: "Product / Web", items: ["React", "TypeScript", "Flutter", "API Integration", "Rapid Prototyping"] },
      { category: "DevOps / Ops", items: ["Docker", "CI/CD", "Deployment", "Cloud Infra", "Open Source Ops"] },
    ],
  },
  timelineTitle: {
    ko: "경력",
    en: "Experience",
  },
  timeline: {
    ko: [
      { year: "2026", title: lineOspoExperience.company, desc: lineOspoExperience.summary.ko },
      { year: "2022", title: youngIlYoungExperience.company.ko, desc: youngIlYoungExperience.summary.ko },
      { year: "2020", title: "Pickle.plus", desc: "백엔드 개발과 정산·서비스 운영 업무" },
    ],
    en: [
      { year: "2026", title: lineOspoExperience.company, desc: lineOspoExperience.summary.en },
      { year: "2022", title: youngIlYoungExperience.company.en, desc: youngIlYoungExperience.summary.en },
      { year: "2020", title: "Pickle.plus", desc: "Worked on backend development, settlement, and service operations" },
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
    ko: "경력과 수상 내역, 교육 이력, 자격증을 정리했습니다.",
    en: "Work experience, awards, education, and certifications.",
  },
  timelineTitle: {
    ko: "약력",
    en: "Background",
  },
  awardsTitle: {
    ko: "수상 내역",
    en: "Awards",
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
  // Credentials page convention: keep every dated list newest-first in the source data.
  // Do not rely on render-time `.reverse()` calls; update tests when adding dated items.
  timeline: [
    {
      period: "2026.07 - Present",
      title: { ko: "LINE+ OSPO", en: "LINE+ OSPO" },
      subtitle: lineOspoExperience.role,
      desc: {
        ko: [lineOspoExperience.summary.ko, lineOspoExperience.design.ko, lineOspoExperience.validation.ko].join(" "),
        en: [lineOspoExperience.summary.en, lineOspoExperience.design.en, lineOspoExperience.validation.en].join(" "),
      },
    },
    {
      period: "2023.01 - 2024.10",
      title: { ko: "공군 전산 정비병", en: "Republic of Korea Air Force" },
      subtitle: { ko: "전산 정비", en: "Computer Maintenance Specialist" },
      desc: {
        ko: "공군에서 전산 정비병으로 복무했습니다.",
        en: "Served as a computer maintenance specialist in the Republic of Korea Air Force.",
      },
    },
    {
      period: youngIlYoungExperience.period,
      title: youngIlYoungExperience.company,
      subtitle: youngIlYoungExperience.role,
      desc: youngIlYoungExperience.summary,
    },
    {
      period: "2019.08 - 2020.08",
      title: { ko: "Pickle.plus", en: "Pickle.plus" },
      subtitle: { ko: "기술 파트", en: "Technical team" },
      desc: {
        ko: "Pickle.plus 초기 팀에서 백엔드 개발과 정산·서비스 운영 업무를 했습니다.",
        en: "Worked on backend development, settlement, and service operations in the early Pickle.plus team.",
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
  ] satisfies CareerEntry[],
  awards: [
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
    {
      date: "2026.02.27",
      title: { ko: "SK텔레콤 FLY AI Challenger 8기 프로젝트 부문 대상", en: "SK Telecom FLY AI Challenger 8th, Project Grand Prize" },
      issuer: { ko: "SK텔레콤", en: "SK Telecom" },
      detail: {
        ko: "SKT FLY AI Challenger 8기 내부 프로젝트로 진행한 Music Sense로 프로젝트 부문 대상을 수상했습니다.",
        en: "Won the project grand prize with Music Sense, built as an internal project in SKT FLY AI Challenger 8th.",
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
  ] satisfies CredentialEntry[],
  programs: [
    {
      date: "2026.05",
      title: { ko: "숭실대학교 학생 창업동아리 지원사업 선정", en: "Soongsil University Student Startup Club Selection" },
      issuer: { ko: "숭실대학교 창업지원단", en: "Soongsil University Startup Support Foundation" },
      detail: {
        ko: "Cardeer가 2026 학생 창업동아리 지원사업에 선정되었습니다. 지원 내용은 최대 300만 원 규모의 아이템개발비, 창업동아리실, 맞춤형 멘토링, 창업중점교원 전담 멘토링, 창업 교육, 창업동아리실습 3학점 연계 가능성을 포함합니다.",
        en: "Cardeer was selected for the 2026 student startup-club support program. The support track can include up to KRW 3 million in item-development funding, startup-club space, tailored mentoring, dedicated faculty mentoring, startup education, and a possible three-credit startup practicum link.",
      },
    },
    {
      date: "2025.12 - 2026.02",
      title: { ko: "SKT FLY AI Challenger 8기", en: "SKT FLY AI Challenger 8th" },
      issuer: { ko: "SK텔레콤", en: "SK Telecom" },
      detail: {
        ko: "데이터 처리, 머신러닝, 클라우드·DevOps와 컴퓨터 비전을 학습했습니다. 과정 프로젝트로 Music Sense를 개발했습니다.",
        en: "Studied data processing, machine learning, cloud computing, DevOps, and computer vision. Developed Music Sense as the course project.",
      },
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
    {
      date: "2025.07.25",
      title: { ko: "USC Artificial Intelligence and Data Science", en: "USC Artificial Intelligence and Data Science" },
      issuer: { ko: "USC Viterbi School of Engineering · IMSC", en: "USC Viterbi School of Engineering · IMSC" },
      detail: {
        ko: "USC Viterbi와 IMSC 연계 과정을 수료했습니다.",
        en: "Completed the USC Viterbi and IMSC program.",
      },
      proof: "/credentials/2025-usc-ai-data-science-certificate.jpeg",
    },
  ] satisfies CredentialEntry[],
  certifications: [
    {
      date: "2026.03",
      title: { ko: "ADsP", en: "ADsP" },
      issuer: { ko: "한국데이터산업진흥원", en: "Korea Data Agency" },
      detail: {
        ko: "데이터 분석 준전문가를 취득했습니다.",
        en: "Earned the Advanced Data Analytics Semi-Professional certification.",
      },
    },
    {
      date: "2025.12",
      title: { ko: "C_ABAPD Backend Developer - ABAP Cloud", en: "C_ABAPD Backend Developer - ABAP Cloud" },
      issuer: { ko: "SAP", en: "SAP" },
      detail: {
        ko: "SAP의 ABAP Cloud 백엔드 개발 자격을 취득했습니다.",
        en: "Earned SAP's C_ABAPD Backend Developer - ABAP Cloud certification.",
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
    ko: "연락처",
    en: "Contact",
  },
  footer: {
    ko: "© 2026 김상엽 — 서울, 한국",
    en: "© 2026 Sangyeop Kim — Seoul, Korea",
  },
  email: "career@yeop.kr",
  githubUrl: "https://github.com/yeop-sang",
  linkedInUrl: "https://linkedin.com/in/yeop-kr/",
} as const;

export const workPageContent = {
  projectsTitle: {
    ko: "업무와 프로젝트",
    en: "WORK & PROJECTS",
  },
  projectsIntro: {
    ko: "회사 업무와 프로젝트에서 맡은 일, 개발 과정과 결과를 소개합니다.",
    en: "My responsibilities, implementation decisions, and results across company work and projects.",
  },
  contributionsTitle: {
    ko: "오픈소스 기여",
    en: "OPEN SOURCE CONTRIBUTIONS",
  },
  contributionsIntro: {
    ko: "프로젝트에서 사용한 라이브러리의 오류를 수정하고 기능을 추가했습니다.",
    en: "Bug fixes and features for libraries I used in my projects.",
  },
  morePublicWorkLabel: {
    ko: "GitHub에서 더 보기",
    en: "More on GitHub",
  },
} as const;
