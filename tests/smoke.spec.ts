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
  await expect(aboutPhoto).toHaveAttribute("src", /avatars\.githubusercontent\.com/);

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
