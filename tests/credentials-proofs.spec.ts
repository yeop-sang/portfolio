import { expect, test } from "@playwright/test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const cases = {
  ko: {
    proof: "증빙 보기",
    timeline: "약력",
    publications: "학술 활동",
    publicationTitles: ["Music Sense: A Mobile Platform for Multimodal Music Perception for Individuals with Hearing Impairment", "교통 인프라 안전 강화를 위한 AI 기반 도로 위험 요소 및 싱크홀 탐지 기법 연구"],
    paper: "논문 PDF",
    project: "프로젝트 보기",
    timelineTitles: ["LINE+ OSPO", "청음복지관", "서울런 멘토링", "생물교육 자료와 웹앱 개발", "공군 전산 정비병", "코드클럽 코딩 교육", "영일영", "온드림스쿨 다빈치교실", "Pickle.plus", "트라이본즈 디자인 인턴", "숭실대학교 컴퓨터학부"],
    certificationTitles: ["정보처리기사", "ADsP", "C_ABAPD Backend Developer - ABAP Cloud", "네트워크관리사 2급"],
    awards: "수상 내역",
    programs: "교육 / 프로그램",
    certifications: "자격",
    awardTitles: [
      "조코딩 x OpenAI x 프라이머 AI 해커톤 장려상",
      "SK텔레콤 FLY AI Challenger 8기 프로젝트 부문 대상",
      "SK텔레콤 FLY AI Challenger 8기 과정 개인 부문 최우수상",
      "한이음 드림업 공모전 창의도전형 장려상",
      "숭실×덕성 워런톤 Hack it Your Way 최우수상",
      "스파르탄 머슬 캠프 솔브드 코드 페스티벌 우수상",
      "USC IMSC Hackathon 3위",
      "제2회 핀테크 아이디어 공모전 우수상",
    ],
    programTitles: ["숭실대학교 학생 창업동아리 지원사업 선정", "SKT FLY AI Challenger 8기", "SAP ABAP 교육 이수", "USC Artificial Intelligence and Data Science"],
  },
  en: {
    proof: "View Proof",
    timeline: "Background",
    publications: "Publications",
    publicationTitles: ["Music Sense: A Mobile Platform for Multimodal Music Perception for Individuals with Hearing Impairment", "A Study on AI-Based Road Hazard and Sinkhole Detection Techniques for Enhancing Transportation Infrastructure Safety"],
    paper: "Paper PDF",
    project: "View Project",
    timelineTitles: ["LINE+ OSPO", "CheongEum Welfare Center", "Seoul Learn Mentoring", "Biology Education Tools", "Republic of Korea Air Force", "Code Club Coding Education", "Young Il Young Inc.", "Ondream School Da Vinci Classroom", "Pickle.plus", "Tribonz Design Intern", "Soongsil University, School of Computer Science and Engineering"],
    certificationTitles: ["Engineer Information Processing", "ADsP", "C_ABAPD Backend Developer - ABAP Cloud", "Network Manager Level 2"],
    awards: "Awards",
    programs: "Programs & Courses",
    certifications: "Certifications",
    awardTitles: [
      "Jocoding x OpenAI x Primer AI Hackathon, Encouragement Prize",
      "SK Telecom FLY AI Challenger 8th, Project Grand Prize",
      "SK Telecom FLY AI Challenger 8th, Individual Division Top Prize",
      "Hanium DreamUp Contest, Creative Challenge Encouragement Prize",
      "Soongsil x Duksung Warranton Hack it Your Way, Grand Prize",
      "Spartan Muscle Camp Solved Code Festival, Excellence Award",
      "USC IMSC Hackathon, Third Place",
      "2nd Fintech Idea Contest, Excellence Award",
    ],
    programTitles: ["Soongsil University Student Startup Club Selection", "SKT FLY AI Challenger 8th", "SAP ABAP Training", "USC Artificial Intelligence and Data Science"],
  },
};

test("credentials qualification proof is excluded from public assets", () => {
  expect(existsSync(resolve("public/credentials/adsp-certificate-public.png"))).toBe(false);
});

for (const language of ["ko", "en"] as const) {
  for (const width of [375, 1440]) {
    test(`credentials keep qualifications private, proofs working, and newest-first order (${language}, ${width}px)`, async ({ page, request }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/credentials");
      if (language === "en") await page.getByRole("button", { name: "EN", exact: true }).click();
      const labels = cases[language];
      const section = (name: string) => page.locator("section").filter({ has: page.getByRole("heading", { name, exact: true, level: 2 }) });
      const card = (name: string) => page.locator("article").filter({ has: page.getByRole("heading", { name, exact: true, level: 3 }) });

      await expect(section(labels.timeline).getByRole("heading", { level: 3 })).toHaveText(labels.timelineTitles);
      await expect(section(labels.timeline).locator("div.flex-shrink-0")).toHaveText([
        "2026.07 - Present", "2026.04 - 2026.05", "2025.03 - Present", "2025.01 - 2025.04",
        "2023.01 - 2024.10", "2022.09 - 2022.10", "2021.12 ~ 2022.08", "2020.01",
        "2019.08 - 2020.08", "2019.07 - 2019.08", "2019.03 - 2026.08",
      ]);
      await expect(section(labels.awards).getByRole("heading", { level: 3 })).toHaveText(labels.awardTitles);
      await expect(section(labels.programs).getByRole("heading", { level: 3 })).toHaveText(labels.programTitles);
      await expect(section(labels.certifications).getByRole("heading", { level: 3 })).toHaveText(labels.certificationTitles);
      await expect(section(labels.certifications).locator("img, a")).toHaveCount(0);
      const publications = section(labels.publications);
      await expect(publications.getByRole("heading", { level: 3 })).toHaveText(labels.publicationTitles);
      await expect(publications.locator("article > p:first-child")).toHaveText(language === "ko" ? ["2026.06 / 제1저자", "2026 / 공동저자"] : ["2026.06 / First author", "2026 / Co-author"]);
      await expect(publications.locator("article > p:first-child > span")).toHaveText(["2026.06", "2026"]);
      for (const [index, [pdf, project]] of [
        ["/music-sense/music-sense-ksci-paper.pdf", "/work/1"],
        ["/road-damage/road-damage-kics-2026-paper.pdf", "/work/11"],
      ].entries()) {
        const publication = card(labels.publicationTitles[index]);
        const paper = publication.getByRole("link", { name: `${labels.paper}: ${labels.publicationTitles[index]}`, exact: true });
        await expect(paper).toHaveAttribute("href", pdf);
        await expect(paper).toHaveAttribute("target", "_blank");
        await expect(paper).toHaveAttribute("rel", "noopener noreferrer");
        await expect(publication.getByRole("link", { name: `${labels.project}: ${labels.publicationTitles[index]}`, exact: true })).toHaveAttribute("href", project);
        if (language === "ko" && width === 1440) {
          const response = await request.get(pdf);
          expect(response.status()).toBe(200);
          expect(response.headers()["content-type"]).toMatch(/^application\/pdf/);
          expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
        }
      }
      await expect(card(labels.programTitles[1])).toContainText("400");

      for (const [title, path] of [
        [labels.awardTitles[2], "/credentials/2026-skt-fly-ai-individual-excellence-award.jpeg"],
        [labels.programTitles[1], "/credentials/2026-skt-fly-ai-challenger-8-completion.jpeg"],
        [labels.awardTitles[3], "/credentials/2025-hanium-dreamup-creative-challenge-encouragement.jpeg"],
        [labels.awardTitles[5], "/credentials/2025-solved-code-festival-award.jpeg"],
      ]) {
        const evidence = card(title);
        const link = evidence.getByRole("link", { name: labels.proof, exact: true });
        await expect(link).toHaveAttribute("href", path);
        await expect(link).toHaveAttribute("target", "_blank");
        await expect(link).toHaveAttribute("rel", "noopener noreferrer");
        const preview = evidence.getByRole("img", { name: title, exact: true });
        await preview.scrollIntoViewIfNeeded();
        await expect(preview).toHaveAttribute("src", path);
        await expect(preview).toHaveCSS("object-fit", "contain");
        await expect.poll(() => preview.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
        const response = await request.get(path);
        expect(response.status()).toBe(200);
        expect(response.headers()["content-type"]).toMatch(/^image\//);
        expect((await response.body()).byteLength).toBeLessThan(1_100_000);
      }

      await expect(page.getByRole("link", { name: labels.proof, exact: true })).toHaveCount(10);
      // No substitute documents for entries whose official evidence was not found.
      await expect(card(labels.programTitles[0]).getByRole("link", { name: labels.proof })).toHaveCount(0);
      await expect(card(labels.programTitles[2]).getByRole("link", { name: labels.proof })).toHaveCount(0);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      expect(errors).toEqual([]);
    });
  }
}
