

// import playwright module
import { test, expect, Locator } from "@playwright/test";


test("Playwright with Keyboard Actions ", async ({ page }) => {

  const search: Locator = page.getByPlaceholder("Search privately");
  const googSearch: Locator = page.getByLabel("Search", { exact: true }).first();

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to Duck Duck Go", async () => {
    await page.goto("https://www.duckduckgo.com/");
  });

  await test.step("Search for text 'playwright by testers talk'", async () => {
    await search.fill("playwright by testers talk")
    
    // use enter button to confirm search
    await search.press("Enter"); //press enter button

 
  })

  await test.step("Select all Text in the Search Box Using Cmd + A On Keyboard + Delete All Text", async () => {
    await search.press('ControlOrMeta+A');
    await search.press('Delete');
    
  });

  await test.step("Navigate to google.com and tab to microphone and press Space bar to Activate", async () => {
    await page.goto("https://www.google.com");
    await googSearch.press("Tab"); // press tab from the google search box
    await page.keyboard.press("Space"); // press on the keyboard not within the Search

    await page.pause();
  });

});
