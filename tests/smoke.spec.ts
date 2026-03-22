import { expect, Page, test } from "@playwright/test";

function collectRuntimeErrors(page: Page) {
  const runtimeErrors: string[] = [];

  page.on("pageerror", (error) => {
    runtimeErrors.push(error.message);
  });

  page.on("console", (message) => {
    if (message.type() !== "error") {
      return;
    }

    const text = message.text();
    if (text.startsWith("Failed to load resource")) {
      return;
    }

    runtimeErrors.push(text);
  });

  return runtimeErrors;
}

test("main navigation renders core pages without runtime errors", async ({ page }) => {
  const runtimeErrors = collectRuntimeErrors(page);

  await page.goto("/");

  await expect(page.getByRole("heading", { name: "AI · ML · DEV" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Y.K" })).toBeVisible();

  await page.getByRole("button", { name: "EN" }).click();
  await expect(page.getByText("AVAILABLE FOR WORK", { exact: false })).toBeVisible();

  await page.getByRole("link", { name: "WORK" }).click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.getByRole("heading", { name: "PROJECTS" })).toBeVisible();

  await page.getByRole("link", { name: "ABOUT" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();

  await expect(page.getByText("Binary Hackathon Project", { exact: false })).toBeVisible();

  await page.getByRole("link", { name: "CONTACT" }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { name: "Let's Build Together." })).toBeVisible();

  expect(runtimeErrors).toEqual([]);
});

test("project details and 404 states resolve correctly", async ({ page }) => {
  const runtimeErrors = collectRuntimeErrors(page);

  await page.goto("/work");

  await expect(page.getByRole("heading", { name: "오픈소스 기여" })).toBeVisible();

  const signLanguageLink = page.getByRole("link", { name: /SIGN LANGUAGE AI/ }).first();
  await signLanguageLink.click();
  await expect(page).toHaveURL(/\/work\/2$/);
  await expect(page.getByRole("heading", { name: "SIGN LANGUAGE AI" })).toBeVisible();
  await expect(
    page.getByText("Veo 3 생성을 task_id 기반 비동기 워크플로우로 전환", { exact: false }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible();

  await page.goto("/work/1");
  await expect(page.getByRole("heading", { name: "MUSIC SENSE" })).toBeVisible();
  await expect(page.getByText("음원 분석 기반 멀티모달 음악 경험 프로젝트", { exact: false })).toBeVisible();
  await expect(page.getByText("음악 분석 및 stem separation 기반 파이프라인 설계", { exact: false })).toBeVisible();
  await expect(page.getByRole("heading", { name: "결과" })).toBeVisible();

  await page.goto("/work/999");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  await expect(page.getByText("페이지를 찾을 수 없습니다")).toBeVisible();

  await page.goto("/missing-route");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  expect(runtimeErrors).toEqual([]);
});
