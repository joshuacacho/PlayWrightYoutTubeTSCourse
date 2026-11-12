import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('navigate to github and attempt to sign in using dummy creds', async ({ page }) => {
  

  await test.step("Navigating to Github URL Sign in Page", async() => {
    await page.goto('https://github.com');
    //click on link Sign In
    await page.getByRole('link', { name: 'Sign in'}).click();
  });


  await test.step("Enter Dummy Username and Password ", async() => {
    //enter dummy username nad password
    await page.getByRole("textbox", { name: 'Username or email address'}).fill("test");
    await page.getByRole("textbox", { name: 'Password'}).fill("test");
  });

 
  await test.step("Click on Sign In Button ", async() => {
    //Click on Sign In bUtton 
    await page.getByRole("button", { name: 'Sign in', exact: true}).click();
  });

   await test.step("Validate Error Message ", async() => {
     
    //validate error message
    console.log(await page.getByRole("alert").textContent());
    await expect(page.getByRole("alert")).toHaveText("Incorrect username or password.");
  });



});

