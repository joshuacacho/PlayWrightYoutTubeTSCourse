// import playwright module
import { test, expect, chromium } from "@playwright/test";

// Scenario
// Go to google.com
// Enter text in search ‘playwright by testers talk’
// Wait for list of hits to be returned
// Click on Playwright by Testers Talk Link that goes to youtube channel
// Verify URL Page Title

test("Validate Playwright Testers Talk YouTube Page Title", async ({
  page,
}) => {
  //CANT use google because its asking for Captcha
  await test.step("Navigate to Duck Duck Go", async () => {
    await page.goto("https://duckduckgo.com");
  });

  await test.step("Search for playwright by testers talk", async () => {
    await page
      .getByRole("combobox", { name: "Search" })
      .fill("playwright by testers talk");
    await page.keyboard.press("Enter");
  });

  await test.step("Click Playwright by Testers Talk link", async () => {
    await page
      .getByRole("link", {
        name: "Playwright by Testers Talk - YouTube",
        exact: true,
      })
      .click();
  });

  await test.step("Vaidate Title Is Playwright by Testers Talk ✅ - YouTube", async () => {
    //wait for page to loag via the away to verify the title has loaded
    await expect(page).toHaveTitle("Playwright by Testers Talk ✅ - YouTube");

    //now you can log the title name since it was validated above to load
    const title: string = await page.title();
    console.log(title);
    expect(title).toBe("Playwright by Testers Talk ✅ - YouTube");
  });
});
