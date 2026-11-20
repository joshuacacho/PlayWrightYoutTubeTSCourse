

// import playwright module
import { test, expect, Locator } from "@playwright/test";



test("Test 1", async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Check if Search Text Box is Visible or Not", async () => {
    await expect.soft(searchBox).toBeVisible();

  });

});

test.only("Test 2", async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Check if Search Text Box is Visible or Not", async () => {
    await expect.soft(searchBox).toBeVisible();

  });

});

test.only("Test 3", async ({ page }) => {

  const searchBox: Locator = page.getByPlaceholder("Search");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to You Tube", async () => {
    await page.goto("https://www.youtube.com");
  });


  await test.step("Check if Search Text Box is Visible or Not", async () => {
    await expect.soft(searchBox).toBeVisible();

  });

});
