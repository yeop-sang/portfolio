import { expect, type Locator, type Page, test } from "@playwright/test";

function collectRuntimeErrors(page: Page) {
  const runtimeErrors: string[] = [];

  page.on("pageerror", (error) => {
    runtimeErrors.push(error.message);
  });

  return async () => {
    expect(runtimeErrors).toEqual([]);
  };
}

async function expectTextOrder(container: Locator, texts: string[]) {
  const content = await container.innerText();
  const positions = texts.map((text) => {
    const index = content.indexOf(text);
    expect(index, `${text} should exist in section text`).toBeGreaterThanOrEqual(0);
    return index;
  });

  expect(positions).toEqual([...positions].sort((a, b) => a - b));
}

test("main navigation loads and language toggle works", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Y.S" })).toBeVisible();

  await page.getByRole("button", { name: "EN" }).click();
  await expect(page.locator(".studio-current").getByText("LINE+ OSPO", { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "WORK", exact: true }).click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.getByRole("heading", { name: "WORK & PROJECTS", exact: true })).toBeVisible();
  await expect(page.locator("#line-ospo")).toContainText("test environment");
  await expect(page.locator("#line-ospo")).toContainText("AI-generated code");

  await page.getByRole("link", { name: "ABOUT", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByText("About Me", { exact: false })).toBeVisible();
  await expect(page.locator(".studio-about-grid")).toContainText("Tribonz");
  await expect(page.getByRole("heading", { name: "LINE+ OSPO" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Young Il Young Inc." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Pickle.plus" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Cardeer" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "BinarI" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Music Sense" })).toHaveCount(0);
  await expect(page.getByText("PROGRAM", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "SKT FLY AI Challenger 8기" })).toHaveCount(0);
  const aboutPhoto = page.locator("img[alt='Yeop Sang']");
  await expect(aboutPhoto).toHaveAttribute("src", /\/photo_yeop\.jpg$/);

  await page.getByRole("link", { name: "CONTACT", exact: true }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { name: "Contact", exact: true })).toBeVisible();

  await assertNoRuntimeErrors();
});

test("project details and 404 states resolve correctly", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work");

  const signLanguageLink = page.getByRole("link", { name: /BINARI/ }).first();
  await signLanguageLink.click();

  await expect(page).toHaveURL(/\/work\/2$/);
  await expect(page.locator("h1", { hasText: "BINARI" })).toBeVisible();

  await page.goto("/work/999");
  await expect(page.getByText("404", { exact: true })).toBeVisible();

  await page.goto("/missing-route");
  await expect(page.getByText("404", { exact: true })).toBeVisible();

  await assertNoRuntimeErrors();
});

test("Cardeer detail renders startup-club narrative and cover", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work/14");

  await expect(page.getByRole("heading", { name: "CARDEER" })).toBeVisible();
  await expect(
    page.getByText("경험을 STAR 블록으로 쌓고 JD와 매칭해 자기소개서 초안을 조립하는 AI 취업 준비 제품", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("숭실대학교 2026 학생 창업동아리 지원사업 선정", { exact: true })).toBeVisible();
  await expect(page.locator("main").getByRole("link", { name: "GitHub", exact: true })).toHaveAttribute(
    "href",
    "https://github.com/yeop-sang/cardeer",
  );

  const coverImage = page.locator("img[alt='Cardeer 발표자료 표지']");
  await expect(coverImage).toBeVisible();
  await expect(coverImage).toHaveAttribute("src", /\/cardeer\/cardeer-hero\.png$/);

  await assertNoRuntimeErrors();
});

test("Music Sense detail renders published KSCI paper content and assets", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work/1");

  await expect(page.getByRole("heading", { name: "MUSIC SENSE" })).toBeVisible();
  await expect(
    page.getByText("음악을 화면과 진동으로 전달하고, 아동 3명의 단일 세션 평가를 논문으로 기록한 접근성 프로젝트", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "발표 자료" })).toHaveAttribute(
    "href",
    "/music-sense/music_sense_pitch_deck.pdf",
  );
  await expect(page.getByRole("link", { name: "KCI 논문 페이지" })).toHaveAttribute(
    "href",
    "https://journal.kci.go.kr/jksci/archive/articleView?artiId=ART003349366",
  );
  await expect(page.getByRole("link", { name: "KSCI 논문 PDF" })).toHaveAttribute(
    "href",
    "/music-sense/music-sense-ksci-paper.pdf",
  );
  await expect(page.getByRole("link", { name: "수상 증빙" })).toHaveAttribute(
    "href",
    "/credentials/2026-skt-fly-ai-project-grand-prize.jpeg",
  );

  const coverImage = page.locator("img[alt='Music Sense 표지 슬라이드']");
  await expect(coverImage).toBeVisible();
  await expect(coverImage).toHaveAttribute("src", /\/music-sense\/music-sense-cover\.png$/);

  await expect(page.locator("img[alt='Music Sense KSCI 게재 논문 첫 페이지']")).toBeVisible();
  await expect(page.locator("img[alt='Music Sense KSCI 논문 시스템 아키텍처 도식']")).toBeVisible();
  await expect(
    page.getByText("한국컴퓨터정보학회논문지 Vol.31 No.6 게재", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("0.04초는 가장 잘 맞은 구간의 값이며 전체 평균이 아님", { exact: false })).toBeVisible();
  await expect(page.getByRole("heading", { name: "연구 맥락" })).toBeVisible();
  await expect(page.getByText("서울대 MARG와의 짧은 연구실 접점", { exact: false })).toBeVisible();
  await expect(page.getByText("독립 연구 주제로 크게 확장하기보다는", { exact: false })).toBeVisible();

  for (const href of [
    "/music-sense/music-sense-ksci-paper.pdf",
    "/music-sense/music-sense-ksci-paper-cover.png",
    "/music-sense/music-sense-ksci-architecture.png",
  ]) {
    const response = await page.request.get(href);
    expect(response.ok(), `${href} should resolve`).toBeTruthy();
  }

  await assertNoRuntimeErrors();
});

test("Power Monitoring detail renders richer visuals and documents", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work/10");

  await expect(page.getByRole("heading", { name: "POWER MONITORING SYSTEM" })).toBeVisible();
  await expect(
    page.getByText("스마트 플러그와 FMS 사이의 간극을 겨냥한 실시간 전력 모니터링·ESG 자동화 시스템", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "결과 보고서" })).toHaveAttribute(
    "href",
    "/power-monitoring/power-monitoring-result-report.pdf",
  );
  await expect(page.getByRole("link", { name: "설계서" })).toHaveAttribute(
    "href",
    "/power-monitoring/power-monitoring-design-doc.pdf",
  );

  const heroImage = page.locator("img[alt='Power Monitoring 전류·전원 제어 하드웨어 사진']");
  await expect(heroImage).toBeVisible();
  await expect(heroImage).toHaveAttribute("src", /\/power-monitoring\/power-monitoring-hardware-hero\.png$/);

  await expect(page.getByText("스마트 플러그와 FMS 사이의 중간 시장", { exact: false })).toBeVisible();

  await assertNoRuntimeErrors();
});

test("Road Damage Detection detail renders report assets and stronger narrative", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work/11");

  await expect(page.getByRole("heading", { name: "ROAD DAMAGE DETECTION" })).toBeVisible();
  await expect(
    page.getByText(
      "세그멘테이션과 탐지, pseudo labeling 실험을 비교해 U-Net 전처리와 YOLO 앙상블에 집중한 도로 파손 탐지 프로젝트",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "결과 보고서", exact: true })).toHaveAttribute(
    "href",
    "/road-damage/road-damage-report.pdf",
  );
  await expect(page.getByRole("link", { name: "2026 KICS 학술대회 논문" })).toHaveAttribute(
    "href",
    "/road-damage/road-damage-kics-2026-paper.pdf",
  );
  await expect(page.getByRole("link", { name: "공식 챌린지" })).toHaveAttribute(
    "href",
    "https://imsc-hackathon-2025.github.io/pages/college-consolidated.html",
  );
  await expect(page.getByRole("link", { name: "수상 증빙" })).toHaveAttribute(
    "href",
    "/credentials/2025-usc-imsc-hackathon-third-place.png",
  );

  const heroImage = page.locator("img[alt='Road Damage Detection 샘플 탐지 결과']");
  await expect(heroImage).toBeVisible();
  await expect(heroImage).toHaveAttribute("src", /\/road-damage\/road-damage-hero\.png$/);

  await expect(page.getByText("2026년도 KICS 한국통신학회 동계종합학술발표회 제출 및 발표", { exact: true })).toBeVisible();
  await expect(page.locator("img[alt='Road Damage Detection 데이터셋 분포 차트']")).toHaveCount(0);
  await expect(page.locator("img[alt='Road Damage Detection 국가별 학습 이미지 수 차트']")).toHaveCount(0);
  await expect(page.locator("img[alt='Road Damage Detection 2026 KICS 발표자료 표지']")).toHaveCount(0);
  await expect(page.locator("img[alt='Road Damage Detection 결과 보고서 1페이지']")).toHaveCount(0);
  await expect(page.locator("img[alt='후속 연구 확장 흐름']")).toBeVisible();
  await expect(page.locator("img[alt='실험 구조와 적용 방향']")).toBeVisible();

  await assertNoRuntimeErrors();
});

test("SNU Biology Education collaboration detail and resources render", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work/13");

  await expect(page.getByRole("heading", { name: "서울대 생물교육과 협업 프로젝트" })).toBeVisible();
  await expect(
    page.getByText("서울대학교 사범대학 생물교육과와 협업한 교육 평가 도구 개발 프로젝트", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByText("서울대학교 사범대학 생물교육과 협업 프로젝트", { exact: true })).toBeVisible();
  await expect(page.getByText("Solvy의 AI 기반 서·논술형 자동 채점 플랫폼 맥락으로 이어진 교육 평가 도구 개발 흐름", { exact: true })).toBeVisible();
  await expect(page.getByText("GitHub Actions와 Firebase secret injection", { exact: false })).toBeVisible();

  await expect(page.getByRole("link", { name: "Solvy" })).toHaveAttribute(
    "href",
    "https://www.solvy.co.kr/main",
  );
  await expect(page.getByRole("link", { name: "PDF Parser" })).toHaveAttribute(
    "href",
    "https://github.com/yeop-sang/pdf-exam-parser",
  );
  await expect(page.getByRole("link", { name: "GeniBlocks Korean" })).toHaveAttribute(
    "href",
    "https://github.com/yeop-sang/geniblocks_korean",
  );

  await assertNoRuntimeErrors();
});

test("credentials dated sections stay newest-first and exclude certifications from summary", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/credentials");

  await expect(page.getByRole("heading", { name: "약력" })).toBeVisible();
  const timeline = page.locator("section").filter({ has: page.getByRole("heading", { name: "약력" }) });
  await expect(timeline.getByText("2026.07 - Present", { exact: true })).toBeVisible();
  await expect(timeline).toContainText("Engineer, 내부 제품 개발");
  await expect(timeline).toContainText("여러 저장소에서 정보를 수집해 결과 파일을 생성하는 동작을 확인했습니다.");
  await expect(timeline.getByText("2023.01 - 2024.10", { exact: true })).toBeVisible();
  await expect(timeline.getByText("영일영", { exact: true })).toBeVisible();
  await expect(timeline.getByText("Pickle.plus", { exact: true })).toBeVisible();
  await expect(timeline.getByText("Cardeer", { exact: true })).toHaveCount(0);
  await expect(timeline.getByText("조코딩 x OpenAI x 프라이머 AI 해커톤", { exact: true })).toHaveCount(0);
  await expect(timeline.getByText("SKT FLY AI Challenger 8기", { exact: true })).toHaveCount(0);
  await expect(timeline.getByText("비나리", { exact: true })).toHaveCount(0);
  await expect(timeline.getByText("USC AI & Data Science / IMSC Hackathon", { exact: true })).toHaveCount(0);
  await expect(timeline.getByText("ADsP", { exact: true })).toHaveCount(0);

  const periods = ["2026.07 - Present", "2023.01 - 2024.10", "2021.12 ~ 2022.08", "2019.08 - 2020.08"];
  const tops = await Promise.all(
    periods.map(async (period) => {
      const box = await timeline.getByText(period, { exact: true }).first().boundingBox();
      expect(box).not.toBeNull();
      return box!.y;
    }),
  );
  expect(tops).toEqual([...tops].sort((a, b) => a - b));

  const awards = page.locator("section").filter({ has: page.getByRole("heading", { name: "수상 내역" }) });
  await expectTextOrder(awards, [
    "2026.03.07",
    "2026.02.27",
    "2025.08.23",
    "2025.07.26",
    "2019.10.13",
  ]);

  const programs = page.locator("section").filter({ has: page.getByRole("heading", { name: "교육 / 프로그램" }) });
  await expectTextOrder(programs, ["2026.05", "2025.12 - 2026.02", "2025.09 - 2025.12", "2025.07.25"]);

  const certifications = page.locator("section").filter({ has: page.getByRole("heading", { name: "자격" }) });
  await expectTextOrder(certifications, ["2026.03", "2025.12"]);

  await assertNoRuntimeErrors();
});

test("Pickle.plus detail links to the live site and related award", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work/7");

  await expect(page.getByRole("heading", { name: "PICKLE.PLUS" })).toBeVisible();
  await expect(page.getByRole("link", { name: "서비스" })).toHaveAttribute("href", "https://pickle.plus/");

  const relatedAwardLink = page.getByRole("link", { name: "관련 수상" });
  await expect(relatedAwardLink).toHaveAttribute("href", "/credentials#pickle-plus-fintech-award");
  await relatedAwardLink.click();

  await expect(page).toHaveURL(/\/credentials#pickle-plus-fintech-award$/);
  const relatedAwardCard = page.locator("#pickle-plus-fintech-award");
  await expect(relatedAwardCard).toBeVisible();
  await expect(relatedAwardCard.getByRole("heading", { name: "제2회 핀테크 아이디어 공모전 우수상" })).toBeVisible();

  await assertNoRuntimeErrors();
});
