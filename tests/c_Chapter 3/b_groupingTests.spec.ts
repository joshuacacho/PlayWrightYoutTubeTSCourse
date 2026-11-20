

// import playwright module
import { test, expect, Locator } from "@playwright/test";

// create grouping

// Has Test 1 within it
test.describe("You Tube Video Tests", () => {

  

  test("Test 1", async ({ page }) => {

    console.log("Running Regression Tests ONLY");

    const searchBox: Locator = page.getByPlaceholder("Search");

    // CANT use google search because its asking for Captcha
    await test.step("Navigate to You Tube", async () => {
      await page.goto("https://www.youtube.com");
    });


      await test.step("Check if Search Text Box is Visible or Not", async () => {
        await expect.soft(searchBox).toBeVisible();

      });

    });
});

// Has Test 2 within it
test.describe("TikTok Video Tests", () => {

  

  test("Test 2", async ({ page }) => {

    console.log("Running Smoke Tests ONLY");

      const searchBox: Locator = page.getByPlaceholder("Search");

      // CANT use google search because its asking for Captcha
      await test.step("Navigate to You Tube", async () => {
        await page.goto("https://www.youtube.com");
      });


      await test.step("Check if Search Text Box is Visible or Not", async () => {
        await expect.soft(searchBox).toBeVisible();

      });

  });
});

// Has Test 3 within it
test.describe("Twitch Video Tests", () => {

 

  test("Test 3", async ({ page }) => {

     console.log("Running Core Tests ONLY");

    const searchBox: Locator = page.getByPlaceholder("Search");

    // CANT use google search because its asking for Captcha
      await test.step("Navigate to You Tube", async () => {
        await page.goto("https://www.youtube.com");
      });


      await test.step("Check if Search Text Box is Visible or Not", async () => {
        await expect.soft(searchBox).toBeVisible();

      });

    });
});




