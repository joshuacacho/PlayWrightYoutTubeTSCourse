

// import playwright module
import { test, expect, Locator } from "@playwright/test";


test("Playwright with Mouse Actions ", async ({ page }) => {

  const playwrightTestersLink = page.getByRole("link", { name: "Playwright by Testers Talk - YouTube"});
  const settingsIcon = page.locator(".dropdown--settings");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to Playwright Testers Talk", async () => {
    await page.goto("https://www.duckduckgo.com/search?q=playwright+testers+talk");
  });


  // left mouse click on testers talk link
    // will go to testers talk website within same page
  await test.step("Left Mouse Click on Link", async () => {

    // left mouse click
    await playwrightTestersLink.click( { button: "left"});

    // go back to page
    await page.goBack();
  
  });

  // middle mouse click on testers talk link
    // will go to testers talk website within new tab page
    // in mac this does nothing physically but programmtically it opens page in new tab
  await test.step("Middle Mouse Click on Link", async () => {
    
    // middle mouse click
    await playwrightTestersLink.click( { button: "middle"});
    
    // no need to go back since this open new tab
  });

  // right mouse click on testers talk link
    // will NOT go to testers talk website and bring up context menu options for link
  await test.step("Right Mouse Click on Link", async () => {
    
    // right click on mouse
    await playwrightTestersLink.click( { button: "right"}); 
  });

  // Mouse Hover over settings Icon
  await test.step("Mouse Hover Over Voice Icon", async () => {

    //hover over specified element
    await settingsIcon.hover();
  });

  // Double Click Settings
  await test.step("Double Click on Settings Icon", async () => {

    //hover over specified element
    await settingsIcon.dblclick();

    await page.pause()
  });


});
