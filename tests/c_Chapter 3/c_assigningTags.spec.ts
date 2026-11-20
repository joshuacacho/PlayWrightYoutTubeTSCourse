

// import playwright module
import { test, expect, Locator } from "@playwright/test";



test("Test 1", {tag : ['@RegressionTest']}, async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Check if Search Text Box is Visible or Not", async () => {
    await expect.soft(searchBox).toBeVisible();

  });

});

// can have more than 1 tag name per test as some you 
  //may want to run as Smoke and also a Core test
test("Test 2", {tag : ['@SmokeTest', '@CoreTest']},async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Check if Search Text Box is Visible or Not", async () => {
    await expect.soft(searchBox).toBeVisible();

  });

});

test("Test 3", {tag : ['@CoreTest']},async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Check if Search Text Box is Visible or Not", async () => {
    await expect.soft(searchBox).toBeVisible();

  });

});
