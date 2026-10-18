import { expect, test, type Locator, type Page } from "@playwright/test";

const labels = {
  ko: ["역할", "업무와 구현", "관리자 업로드", "외부 API 연동", "재고 화면", "상담과 운영"],
  en: ["Role", "Work and implementation", "Admin uploads", "External API integration", "Stock pages", "Consultation and operations"],
} as const;

const keyCopy = {
  ko: [
    /django-import-export/,
    /통신사와 모델명/,
    /외부 API를 분석/,
    /기존 연동 코드/,
    /토큰을 갱신/,
    /요청 제한/,
    /페이지 캐시/,
    /관리자 업로드 뒤.*캐시/,
    /새 데이터가.*반영/,
    /느리다는 피드백.*줄/,
  ],
  en: [
    /django-import-export/,
    /carrier and model/i,
    /analyzed an external API/i,
    /extended the existing integration/i,
    /token refresh.*retr(?:y|ies)/i,
    /rate limits?/i,
    /page caching/i,
    /invalidat(?:e|ed).*related caches?.*after uploads?/i,
    /new data.*(?:appeared|reflected)/i,
    /(?:complaints|feedback).*slowness.*decreased/i,
  ],
} as const;

async function useLanguage(page: Page, language: "ko" | "en") {
  if (await page.locator("html").getAttribute("lang") === language) return;
  await page.getByRole("button", { name: language === "ko" ? "KR" : "EN", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", language);
}

async function expectTextToFit(locator: Locator, width: number, language: "ko" | "en") {
  await expect(locator).toBeVisible();
  const fit = await locator.evaluate((element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    const container = element.getBoundingClientRect();
    const lines = Array.from(range.getClientRects());
    return {
      horizontal: element.scrollWidth <= element.clientWidth + 1,
      vertical: element.scrollHeight <= element.clientHeight + 1,
      text: lines.every(
        (line) =>
          line.left >= container.left - 1 &&
          line.right <= container.right + 1 &&
          line.top >= container.top - 1 &&
          line.bottom <= container.bottom + 1,
      ),
    };
  });
  expect(fit, `${language} company copy must wrap without clipping at ${width}px`).toEqual({
    horizontal: true,
    vertical: true,
    text: true,
  });
}

for (const width of [320, 375, 768, 1280]) {
  test(`company work stays distinct and readable at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/work");

    const line = page.locator("section#line-ospo");
    const young = page.locator("section#young-il-young");
    await expect(line).toBeVisible();
    await expect(young).toBeVisible();
    const companySections = page.locator("section#line-ospo, section#young-il-young");
    await expect(companySections).toHaveCount(2);
    expect(await companySections.evaluateAll((elements) => elements.map((element) => element.id))).toEqual(["line-ospo", "young-il-young"]);

    for (const language of ["ko", "en"] as const) {
      await useLanguage(page, language);
      const linePeriod = line.locator(".studio-company-context").first();
      const youngHeading = young.getByRole("heading", { level: 2 });
      const youngPeriod = young.locator(".studio-company-context").first();
      await expect(linePeriod).toHaveText(language === "ko" ? "2026.07 ~ 현재" : "2026.07 ~ Present");
      await expect(youngHeading).toHaveText(language === "ko" ? "영일영" : "Young Il Young Inc.");
      await expect(youngPeriod).toHaveText("2021.12 ~ 2022.08");
      await expect(young.locator("dt")).toHaveText(labels[language]);
      await expect(young.locator("dd")).toHaveCount(6);

      for (const copy of keyCopy[language]) await expect(young).toContainText(copy);
      await expectTextToFit(youngHeading, width, language);
      await expectTextToFit(youngPeriod, width, language);
      for (const fact of await young.locator("dd").all()) await expectTextToFit(fact, width, language);

      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
      await expect(page.locator(".studio-project")).toHaveCount(2);
      await expect(page.locator(".studio-work-list > a")).toHaveCount(6);
      await expect(page.locator('.studio-work-list a[href="/work/8"]')).toHaveCount(0);
      await expect(page.locator(".studio-oss-list article")).toHaveCount(2);
      await young.screenshot({ path: testInfo.outputPath(`young-il-young-${language}-${width}.png`) });
    }
  });
}

for (const language of ["ko", "en"] as const) {
  test(`/work/8 redirects ${language} visitors to Young Il Young company work`, async ({ page }) => {
    await page.goto("/work/8");
    await expect(page).toHaveURL(/\/work#young-il-young$/);
    await useLanguage(page, language);
    const young = page.locator("section#young-il-young");
    await expect(young).toBeInViewport();
    await expect(young.getByRole("heading", { level: 2 })).toHaveText(language === "ko" ? "영일영" : "Young Il Young Inc.");
    await expect(young.locator(".studio-company-context").first()).toHaveText("2021.12 ~ 2022.08");
  });
}
