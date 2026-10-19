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
  approach: {
    ko: "대학교 1학년 때 트라이본즈 디자인 인턴으로 일하며 Photoshop 파일 정리와 HTML 생성을 돕는 Python 도구를 만들었습니다. 작은 도구가 제작 이후에도 계속 사용되는 경험을 바탕으로, 반복 업무를 줄이고 실제 업무에서 쓰이는 도구를 만드는 데 관심을 이어오고 있습니다.",
    en: "During a design internship at Tribonz in my first year of university, I built Python tools to help organize Photoshop files and generate HTML. Seeing these small tools remain in use after I built them shaped my interest in reducing repetitive work and building tools people use in their day-to-day work.",
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
    ko: "개발 경력과 학력, 멘토링과 봉사활동, 학술 활동, 수상 및 자격을 정리했습니다.",
    en: "Development experience, education, mentoring, volunteering, publications, awards, and certifications.",
  },
  timelineTitle: {
    ko: "약력",
    en: "Background",
  },
  awardsTitle: {
    ko: "수상 내역",
    en: "Awards",
  },
  publicationsTitle: {
    ko: "학술 활동",
    en: "Publications",
  },
  publicationPdfLabel: {
    ko: "논문 PDF",
    en: "Paper PDF",
  },
  publicationProjectLabel: {
    ko: "프로젝트 보기",
    en: "View Project",
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
  // Timeline ranges are ordered by their start month.
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
      period: "2026.04 - 2026.05",
      title: { ko: "청음복지관", en: "CheongEum Welfare Center" },
      subtitle: { ko: "프로그램 및 공연 지원 봉사", en: "Program and performance volunteer" },
      desc: {
        ko: "Music Sense를 도와준 복지관과 인연을 이어가며 봉사에 참여했습니다. 4월에는 성인 음악청능 그룹프로그램을, 5월에는 DMZ Music Festival 합창공연을 지원했습니다.",
        en: "Continued volunteering with the welfare center that supported Music Sense. Helped with an adult music-based auditory training group in April and a choir performance at DMZ Music Festival in May.",
      },
    },
    {
      period: "2025.03 - Present",
      title: { ko: "서울런 멘토링", en: "Seoul Learn Mentoring" },
      subtitle: { ko: "학생 멘토", en: "Student mentor" },
      desc: {
        ko: "학생 멘토링을 이어가고 있습니다. 우수 멘토로 선정돼 서울런 5주년 기념행사 영상 인터뷰에 참여했습니다.",
        en: "Mentor students through Seoul Learn. Selected as an outstanding mentor and interviewed for the program's fifth-anniversary video.",
      },
    },
    {
      period: "2025.01 - 2025.04",
      title: { ko: "생물교육 자료와 웹앱 개발", en: "Biology Education Tools" },
      subtitle: { ko: "서울대학교 생물교육과 외주 개발", en: "Freelance development for SNU Biology Education" },
      desc: {
        ko: "서울대학교 생물교육과와 협업해 PDF 학습자료의 문제와 해설을 CSV로 변환하는 Python 도구를 만들었습니다. 유전학 교육용 웹앱을 한국어 환경에 맞게 수정했습니다.",
        en: "Built a Python tool that converts questions and explanations from learning PDFs into CSV files for Seoul National University's Department of Biology Education. Adapted a genetics education web app for Korean-language use.",
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
      period: "2022.09 - 2022.10",
      title: { ko: "코드클럽 코딩 교육", en: "Code Club Coding Education" },
      subtitle: { ko: "교육 봉사", en: "Education volunteer" },
      desc: {
        ko: "부천북초등학교 5개 학급에서 마인크래프트를 활용한 코딩 교육을 진행했습니다.",
        en: "Taught coding with Minecraft to five classes at Bucheon Buk Elementary School.",
      },
    },
    {
      period: youngIlYoungExperience.period,
      title: youngIlYoungExperience.company,
      subtitle: youngIlYoungExperience.role,
      desc: youngIlYoungExperience.summary,
    },
    {
      period: "2020.01",
      title: { ko: "온드림스쿨 다빈치교실", en: "Ondream School Da Vinci Classroom" },
      subtitle: { ko: "교육 봉사팀 팀장", en: "Education volunteer team lead" },
      desc: {
        ko: "현대차 정몽구재단의 농산어촌 초등학생 대상 교육 봉사에 참여했습니다. 동실동실 팀의 팀장을 맡았습니다.",
        en: "Led the Dongsil Dongsil team in the Hyundai Motor Chung Mong-Koo Foundation's education volunteer program for elementary students in rural communities.",
      },
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
    {
      period: "2019.03 - 2026.08",
      title: { ko: "숭실대학교 컴퓨터학부", en: "Soongsil University, School of Computer Science and Engineering" },
      subtitle: { ko: "공학사", en: "Bachelor's degree" },
      desc: {
        ko: "컴퓨터학부에서 학사 과정을 마치고 2026년 8월 졸업했습니다.",
        en: "Completed a bachelor's degree in the School of Computer Science and Engineering, graduating in August 2026.",
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
      proof: "/credentials/2026-skt-fly-ai-individual-excellence-award.jpeg",
    },
    {
      date: "2025.11.19",
      title: { ko: "한이음 드림업 공모전 창의도전형 장려상", en: "Hanium DreamUp Contest, Creative Challenge Encouragement Prize" },
      issuer: { ko: "한국정보산업연합회", en: "Federation of Korean Information Industries" },
      detail: {
        ko: "NetZeroX 팀으로 2025 한이음 드림업 공모전 창의도전형에서 장려상을 수상했습니다.",
        en: "Received an encouragement prize in the Creative Challenge category of the 2025 Hanium DreamUp contest as part of Team NetZeroX.",
      },
      proof: "/credentials/2025-hanium-dreamup-creative-challenge-encouragement.jpeg",
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
      date: "2025.08.22",
      title: { ko: "스파르탄 머슬 캠프 솔브드 코드 페스티벌 우수상", en: "Spartan Muscle Camp Solved Code Festival, Excellence Award" },
      issuer: { ko: "숭실대학교 스파르탄SW교육원", en: "Soongsil University, Spartan SW Education Institute" },
      detail: {
        ko: "team006 팀으로 솔브드 코드 페스티벌 우수상을 수상했습니다.",
        en: "Received an excellence award at the Solved Code Festival as part of team006.",
      },
      proof: "/credentials/2025-solved-code-festival-award.jpeg",
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
  publications: [
    {
      date: "2026.06",
      title: {
        ko: "Music Sense: A Mobile Platform for Multimodal Music Perception for Individuals with Hearing Impairment",
        en: "Music Sense: A Mobile Platform for Multimodal Music Perception for Individuals with Hearing Impairment",
      },
      venue: { ko: "한국컴퓨터정보학회논문지 제31권 제6호, 175–184쪽", en: "Journal of The Korea Society of Computer and Information, Vol. 31, No. 6, pp. 175–184" },
      contribution: { ko: "제1저자", en: "First author" },
      pdf: "/music-sense/music-sense-ksci-paper.pdf",
      project: "/work/1",
    },
    {
      // The PDF identifies the winter conference but does not state its exact date.
      date: "2026",
      title: {
        ko: "교통 인프라 안전 강화를 위한 AI 기반 도로 위험 요소 및 싱크홀 탐지 기법 연구",
        en: "A Study on AI-Based Road Hazard and Sinkhole Detection Techniques for Enhancing Transportation Infrastructure Safety",
      },
      venue: { ko: "2026년도 KICS 한국통신학회 동계종합학술발표회", en: "2026 KICS Winter Conference" },
      contribution: { ko: "공동저자", en: "Co-author" },
      pdf: "/road-damage/road-damage-kics-2026-paper.pdf",
      project: "/work/11",
    },
  ],
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
        ko: "400시간의 교육을 이수하며 데이터 처리, 머신러닝, 클라우드와 컴퓨터 비전을 배웠습니다. RAG로 문서를 검색하고 LangGraph로 작업 상태와 분기를 다루며, MCP로 외부 도구를 연결하는 예제를 따라 작성했습니다. 팀 실습에서는 역할과 입출력, 완료 기준을 조율했고, 과정 프로젝트로 Music Sense를 개발했습니다.",
        en: "Completed 400 hours of training in data processing, machine learning, cloud computing, and computer vision. Followed course examples to retrieve documents with RAG, manage workflow state and branching with LangGraph, and connect external tools through MCP. Coordinated roles, inputs, outputs, and completion criteria in team exercises, and developed Music Sense as the course project.",
      },
      proof: "/credentials/2026-skt-fly-ai-challenger-8-completion.jpeg",
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
  // Qualifications are text-only: keep certificate IDs, scans, and verification links private.
  certifications: [
    {
      date: "2026.09",
      title: { ko: "정보처리기사", en: "Engineer Information Processing" },
      issuer: { ko: "과학기술정보통신부 / 한국산업인력공단", en: "MSIT / Human Resources Development Service of Korea" },
      detail: {
        ko: "프로그램 설계와 개발, 데이터베이스, 테스트 방법을 배웠습니다. LINE Plus에서는 필요한 기능을 정리해 API를 개발하고, 정상 입력과 오류 입력을 넣어 결과를 확인하는 데 활용했습니다.",
        en: "Studied program design, development, databases, and testing. Applied this at LINE Plus by identifying required features, building APIs, and checking results with valid and invalid inputs.",
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
      date: "2019.04",
      title: { ko: "네트워크관리사 2급", en: "Network Manager Level 2" },
      issuer: { ko: "한국정보통신자격협회", en: "ICQA" },
      detail: {
        ko: "TCP/IP와 IP 주소, 서브넷과 라우팅 등 네트워크 통신 원리를 배웠습니다. 군 복무 중에는 스위치 장비를 직접 다루는 실습에 배운 내용을 활용했습니다.",
        en: "Studied TCP/IP, IP addressing, subnetting, and routing. Applied this knowledge in hands-on exercises with network switches during military service.",
      },
    },
  ] satisfies Omit<CredentialEntry, "proof">[],
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
