import { expect, Page, test } from "@playwright/test";

function collectRuntimeErrors(page: Page) {
  const runtimeErrors: string[] = [];

  page.on("pageerror", (error) => {
    runtimeErrors.push(error.message);
  });

  return async () => {
    expect(runtimeErrors).toEqual([]);
  };
}

test("main navigation loads and language toggle works", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/");

  await expect(page.getByRole("heading", { name: "AI · SYSTEMS · BACKEND" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Y.S" })).toBeVisible();

  await page.getByRole("button", { name: "EN" }).click();
  await expect(page.getByText("AVAILABLE FOR WORK", { exact: false })).toBeVisible();

  await page.getByRole("link", { name: "WORK" }).click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.getByRole("heading", { name: "PROJECTS" })).toBeVisible();

  await page.getByRole("link", { name: "ABOUT" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByText("About Me", { exact: false })).toBeVisible();
  const aboutPhoto = page.locator("img[alt='Yeop Sang']");
  await expect(aboutPhoto).toHaveAttribute("src", /\/photo_yeop\.jpg$/);

  await page.getByRole("link", { name: "CONTACT" }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByText("Let's Build Together.", { exact: false })).toBeVisible();

  await assertNoRuntimeErrors();
});

test("project details and 404 states resolve correctly", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work");

  const signLanguageLink = page.getByRole("link", { name: /BINARI/ }).first();
  await signLanguageLink.click();

  await expect(page).toHaveURL(/\/work\/2$/);
  await expect(page.getByRole("heading", { name: "BINARI" })).toBeVisible();

  await page.goto("/work/999");
  await expect(page.getByText("404", { exact: true })).toBeVisible();

  await page.goto("/missing-route");
  await expect(page.getByText("404", { exact: true })).toBeVisible();

  await assertNoRuntimeErrors();
});

test("Music Sense detail renders strengthened content and local assets", async ({ page }) => {
  const assertNoRuntimeErrors = collectRuntimeErrors(page);

  await page.goto("/work/1");

  await expect(page.getByRole("heading", { name: "MUSIC SENSE" })).toBeVisible();
  await expect(
    page.getByText("난청 아동 교육·재활 현장의 병목에서 출발한 멀티모달 음악 접근성 프로젝트", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "발표 자료" })).toHaveAttribute(
    "href",
    "/music-sense/music_sense_pitch_deck.pdf",
  );
  await expect(page.getByRole("link", { name: "수상 증빙" })).toHaveAttribute(
    "href",
    "/credentials/2026-skt-fly-ai-project-grand-prize.jpeg",
  );

  const coverImage = page.locator("img[alt='Music Sense 표지 슬라이드']");
  await expect(coverImage).toBeVisible();
  await expect(coverImage).toHaveAttribute("src", /\/music-sense\/music-sense-cover\.png$/);

  await expect(page.getByText("1.70초에서 0.04초", { exact: false })).toBeVisible();

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
      "U-Net + YOLO 앙상블 기반 도로 파손 탐지를 BRIDGE 3.0·2026 KICS 발표까지 확장한 프로젝트",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "결과 보고서", exact: true })).toHaveAttribute(
    "href",
    "/road-damage/road-damage-report.pdf",
  );
  await expect(page.getByRole("link", { name: "2026 KICS 발표자료 (PDF)" })).toHaveAttribute(
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
