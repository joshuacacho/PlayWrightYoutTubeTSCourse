

// import playwright module
import { test, expect, Locator } from "@playwright/test";



test("Stability Test to ensure Search Can Be Performed 50 Times Successfully", {tag : ['@RegressionTest']}, async ({ page }) => {

  const search: Locator = page.getByPlaceholder("Search privately");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to Duck Duck Go", async () => {
    await page.goto("https://www.duckduckgo.com/");
  });

  await test.step("Search for text 'playwright by testers talk'", async () => {
    await search.fill("playwright by testers talk")
    
    // use enter button to confirm search
    await search.press("Enter"); //press enter button

  })

  await test.step("Search for text 'playwright by testers talk'", async () => {
    
    await expect(page).toHaveURL("https://duckduckgo.com/?ia=web&origin=funnel_home_website&t=h_&q=playwright+by+testers+talk");

  })


   
  


});

