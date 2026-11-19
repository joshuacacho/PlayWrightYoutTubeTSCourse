

// import playwright module
import { test, expect, Locator } from "@playwright/test";



test("Playwright Soft Assertions", async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Check if Search Text Box is Visible or Not", async () => {
    await expect.soft(searchBox).toBeVisible();

  });

  await test.step("Check if Search Text Box is Enabled or Not", async () => {
    await expect.soft(searchBox).toBeEnabled();
  });


  await test.step("Check if Search Text Box is Editable or Not", async () => {
    await expect.soft(searchBox).toBeEditable();
  });


  await test.step("Check if Search Text Box is Empty or Not", async () => {
    await expect.soft(searchBox).toBeEmpty();
  });


  await test.step("Check Post Search If URL Has playwright by testers talk In It", async () => {
    await searchBox.fill("playwright by testers talk");
    await searchBox.press("Enter");

    await expect.soft(page).toHaveURL("https://www.youtube.com/results?search_query=playwright+by+testers+talk");
  });

  await test.step("Check If Title Is Correct", async () => {
    await expect.soft(page).toHaveTitle("playwright by testers talk - YouTube");
  }); 
  

  await test.step("Check that Widget Title Has Correct Text On idownloadblog.com", async () => {
    await page.goto("https://www.idownloadblog.com/");
    const idownWidTitle = page.locator(".widget-title");
    //console.log(await idownWidTitle.textContent())

    await expect.soft(idownWidTitle).toHaveText("Featured Stories");
  })

  await test.step("Ensure 10 Buttons Exist On Main rahulshettyacademy.com/AutomationPractice/ Home Page", async () => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const butCount =  page.getByRole("button");
    //console.log(butCount);
    expect.soft(butCount).toHaveCount(10);
  });

  await test.step("Ensure Open Tab Button is Not Disabled from rahulshettyacademy.com/AutomationPractice/ Home Page.", async() => {
    const openTabBut = page.getByRole("link", { name : "Open Tab"});
    await expect.soft(openTabBut).not.toBeDisabled();
  })


});
