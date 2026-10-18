import { expect, test } from "@playwright/test";

test("homepage exposes product work and individual roles without hover", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("개발자 김상엽입니다.");
  await page.getByRole("link", { name: "대표 작업 보기" }).click();
  await expect(page).toHaveURL(/#selected-work$/);
  await expect(page.locator(".studio-project")).toHaveCount(2);
  await expect(page.locator(".studio-project").first()).toContainText("내 역할");
  await expect(page.locator(".studio-project").first()).toContainText("팀장");
  const firstImage = page.locator(".studio-project img").first();
  await expect(firstImage).toBeVisible();
  expect(await firstImage.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBeTruthy();
  await page.getByRole("link", { name: "MUSIC SENSE — 프로젝트 상세", exact: true }).click();
  await expect(page).toHaveURL(/\/work\/1$/);
  await expect(page.getByRole("heading", { name: "역할", exact: true })).toBeVisible();
});

test("About presents experience in both languages without a target job title", async ({ page }) => {
  await page.goto("/about");
  await expect(page.locator("main")).not.toContainText(/FDE|Forward Deployed/);
  await expect(page.getByRole("heading", { name: "경력", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await expect(page.locator("main")).not.toContainText(/FDE|Forward Deployed/);
  await expect(page.getByRole("heading", { name: "Experience", exact: true })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("link", { name: "WORK", exact: true }).click();
  await expect(page.getByRole("heading", { name: "WORK & PROJECTS", exact: true })).toBeVisible();
});

for (const width of [320, 375]) {
  test(`mobile navigation, focus and page width work at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 812 });
    await page.goto("/");
    const menu = page.getByRole("button", { name: "메뉴 열기" });
    await menu.click();
    await expect(page.getByRole("navigation")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await menu.click();
    await page.getByRole("link", { name: "WORK", exact: true }).click();
    await expect(page).toHaveURL(/\/work$/);
    await expect(page.getByRole("button", { name: "메뉴 열기" })).toHaveAttribute("aria-expanded", "false");
    for (const route of ["/", "/work", "/work/1", "/about", "/contact", "/credentials"]) {
      await page.goto(route);
      const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
      expect(fits, `${route} should fit ${width}px`).toBeTruthy();
    }
  });
}

test("case-study evidence is not cropped and resource links remain present", async ({ page }) => {
  await page.goto("/work/1");
  await expect(page.getByRole("link", { name: "KSCI 논문 PDF", exact: true })).toHaveAttribute("href", "/music-sense/music-sense-ksci-paper.pdf");
  const evidence = page.locator(".studio-evidence-grid img").first();
  await expect(evidence).toHaveCSS("object-fit", "contain");
  const text = await page.locator("main").innerText();
  expect(text.indexOf("역할")).toBeLessThan(text.indexOf("화면과 검증 자료"));
});


test("contact links appear once and the shared footer returns after navigation", async ({ page }) => {
  for (const route of ["/contact", "/contact/"]) {
    await page.goto(route);
    for (const language of ["ko", "en"] as const) {
      if (await page.locator("html").getAttribute("lang") !== language) {
        await page.getByRole("button", { name: language === "ko" ? "KR" : "EN", exact: true }).click();
      }
      await expect(page.locator('a[href="mailto:career@yeop.kr"]')).toHaveCount(1);
      await expect(page.locator('a[href="https://github.com/yeop-sang"]')).toHaveCount(1);
      await expect(page.locator('a[href="https://linkedin.com/in/yeop-kr/"]')).toHaveCount(1);
      await expect(page.locator("footer a[href^='mailto:']")).toHaveCount(0);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(language === "ko" ? "연락처" : "Contact");
    }
  }
  await page.getByRole("link", { name: "ABOUT", exact: true }).click();
  await expect(page.locator("footer a[href^='mailto:']")).toHaveCount(1);
  await page.getByRole("link", { name: "CONTACT", exact: true }).click();
  await expect(page.locator('a[href="mailto:career@yeop.kr"]')).toHaveCount(1);
});
