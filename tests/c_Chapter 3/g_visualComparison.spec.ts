// import playwright module
import { test, expect, Locator } from "@playwright/test";


test("Visual Comparison Screenshots",  async ({ page }) => {


  // CANT use google search because its asking for Captcha
  await test.step("Navigate to github Login", async () => {
    await page.goto("https://www.github.com/login");
  });

  // PASSS Take FULL PAGE screenshot of github.com/login
  await test.step("Take screenshot of log in Page", async () => {
    await expect.soft(page).toHaveScreenshot("GithHubLoginPage.png")
  })

  // PASS Take Screenshot of Log in username and password elements
  await test.step("Take screenshot of usernmae / password Encompassing Element", async () => {
    const authenticationSection = page.locator(".authentication");
    await expect.soft(authenticationSection).toHaveScreenshot("GitHubAuthenticiationPiece.png")
  })

  // Fail of screnshot NOT matching when we put something in the username field and then do the comparison against the GitHubAuthenticiationPiece.png again
  await test.step("Failed Screenshot Take screenshot of log in Page", async () => {

    const username =  page.locator("#login_field");
    await username.fill("notmatchingscreenshots@test.com");

    await expect.soft(page).toHaveScreenshot("GithHubLoginPage.png")
  })

});

