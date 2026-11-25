// import playwright module
import { test, expect, Locator } from "@playwright/test";

test("Timeouts in Playwright",  async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");  // setup to not be found

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Click in Search Box", async () => {
    await searchBox.click( { timeout: 5000 });

  });

});

