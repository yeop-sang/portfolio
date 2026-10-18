import { expect, test } from "@playwright/test";

// Keep the rendered account within the user-confirmed facts and their individual result boundaries.
const approved = {
  ko: [
    "Engineer, 내부 제품 개발",
    "LINE+ OSPO에서 오픈소스 검토 담당자가 여러 도구의 결과를 대조하던 업무를 자동화하는 내부 제품을 개발했습니다. 필요한 정보를 수집하고 결과 파일을 생성하는 API를 설계하고 구현했습니다.",
    "도구마다 다른 입력을 공통 형식으로 바꾸고 기존 처리 로직을 재사용했습니다. 한 항목의 정보가 빠지면 전체 결과를 전달하지 못하던 흐름을 바꿔, 처리 가능한 항목은 끝까지 처리하고 추가 확인이 필요한 항목과 그 이유를 결과에 남겼습니다.",
    "저장소 연동을 막던 신규 클라우드의 통신 제약을 Bash, curl, tcpdump로 진단했습니다. 흩어진 문서와 운영팀의 확인 내용을 실제 진단 결과와 대조하고, 상사와 보안팀 협의를 거쳐 필요한 연결을 구성했습니다. 남은 제약을 반영해 상사와 개발 일정을 산정하고, 여러 저장소의 데이터 수집부터 결과 파일 생성까지 직접 확인했습니다.",
    "사내 저장소에서 오픈소스 정보를 수집하는 문제를 조사하며, 기존 npm과 PyPI 패키지 설치 방식의 특성이 수집 문제와 관련 있음을 파악했습니다. 정보 수집이라는 목적에 맞춰 설치 대신 저장소가 제공하는 파일을 직접 받도록 변경했습니다. Babel 관련 테스트에서 파일 수집 시간을 약 20초에서 약 5초 이내로 줄였습니다.",
    "오픈소스 검사 결과를 보완하기 위해 마련된 내부 DB를 활용해 정보 캐싱 도구를 개발하고 있습니다. 원본 데이터를 AI에 전달하는 것만으로는 원하는 형태를 얻기 어려워, 여러 테이블의 관계를 파악하고 SQL 조인으로 필요한 자료를 모아 정제했습니다. 현업과 데이터의 문제를 확인하고 API 응답 원본도 수집하며 캐싱에 필요한 자료를 정리하고 있습니다.",
    "로컬과 개발 환경에서 대표 사례를 검증하고, 여러 저장소에서 정보를 수집해 결과 파일을 생성하는 동작을 확인했습니다.",
  ],
  en: [
    "Engineer, Internal Product Development",
    "At LINE+ OSPO, I developed an internal product for open-source reviewers who manually compared results from multiple tools. I designed and implemented an API to collect the required information and generate result files.",
    "I converted inputs from different tools into a common format and reused the existing processing logic. Missing information in one item had prevented delivery of the entire result. I changed the workflow to finish processing the items it could handle and preserve items needing follow-up, along with their reasons, in the result.",
    "I diagnosed network constraints blocking repository integration in a new internal cloud using Bash, curl, and tcpdump. I compared test results with scattered documentation and findings from the operations team, then configured the required connections in consultation with my manager and the security team. I estimated the development schedule with my manager based on the remaining constraints and directly verified data collection from multiple repositories through to result-file generation.",
    "While investigating problems collecting open-source information from internal repositories, I found that characteristics of the existing npm and PyPI package-installation approach were related to the collection issues. Since the task was to collect information, I changed the implementation to download repository-provided files directly instead of installing packages. In a Babel-related test, file collection took about 5 seconds or less, down from about 20 seconds.",
    "I am developing an information-caching tool using an existing internal database built to supplement open-source scanning results. Passing raw data to AI alone did not produce the required form, so I traced relationships across tables and used SQL joins to collect and clean the needed data. I am reviewing data issues with the staff who use it, collecting raw API responses, and organizing the data needed for caching.",
    "I validated representative cases in local and development environments and confirmed the workflow from collecting information across multiple repositories to generating result files.",
  ],
};

for (const width of [320, 375, 768, 1280]) {
  for (const route of ["/", "/work"]) {
    test(`LINE+ public case stays readable and bounded on ${route} at ${width}px`, async ({ page }, testInfo) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(`${message.text()} (${message.location().url})`);
      });
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const companyCase = page.getByRole("region", { name: "LINE+ OSPO", exact: true });
      for (const language of ["ko", "en"] as const) {
        if (language === "en") await page.getByRole("button", { name: "EN", exact: true }).click();
        await expect(companyCase).toBeVisible();
        await expect(companyCase.locator("dt")).toHaveText(
          language === "ko" ? ["역할", "업무와 구현", "입력과 오류", "클라우드 연동", "수집 방식", "데이터 정제", "동작 확인"] : ["Role", "Work and implementation", "Inputs and errors", "Cloud integration", "Collection approach", "Data preparation", "Verified behavior"],
        );
        await expect(companyCase.locator("dd")).toHaveText(approved[language]);
        for (const fact of await companyCase.locator("dd").all()) {
          await expect(fact).toBeVisible();
          const fit = await fact.evaluate((element) => {
            const range = document.createRange();
            range.selectNodeContents(element);
            const container = element.getBoundingClientRect();
            const lines = Array.from(range.getClientRects());
            return {
              horizontal: element.scrollWidth <= element.clientWidth + 1,
              vertical: element.scrollHeight <= element.clientHeight + 1,
              text: lines.every((line) => line.left >= container.left - 1 && line.right <= container.right + 1 && line.top >= container.top - 1 && line.bottom <= container.bottom + 1),
            };
          });
          expect(fit, `${language} text must wrap without clipping at ${width}px`).toEqual({ horizontal: true, vertical: true, text: true });
        }
        await expect(companyCase).not.toContainText(/[·ㆍ‧・]|FDE|Forward Deployed|에코마케팅|Ecomarketing/i);
        await expect(companyCase.locator("img, video, iframe, a, details")).toHaveCount(0);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
        await expect(page.locator(".studio-project")).toHaveCount(2);
        await expect(page.locator(".studio-project h3 a").nth(0)).toHaveAttribute("href", "/work/1");
        await expect(page.locator(".studio-project h3 a").nth(1)).toHaveAttribute("href", "/work/2");
        if (route === "/work") {
          await expect(page.locator(".studio-work-list > a")).toHaveCount(6);
          await expect(page.locator(".studio-oss-list article")).toHaveCount(2);
        }
        await companyCase.screenshot({ path: testInfo.outputPath(`line-ospo-${language}.png`) });
      }
      expect(errors).toEqual([]);
    });
  }
}

for (const width of [320, 1280]) {
  for (const route of ["/about", "/credentials"]) {
    test(`LINE+ summary uses the approved public copy on ${route} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      for (const language of ["ko", "en"] as const) {
        if (language === "en") await page.getByRole("button", { name: "EN", exact: true }).click();
        await expect(page.locator("main")).toContainText(approved[language][1]);
        if (route === "/credentials") {
          await expect(page.locator("main")).toContainText(approved[language][2]);
          await expect(page.locator("main")).toContainText(approved[language][6]);
        }
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
      }
    });
  }
}
