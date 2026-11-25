import { test, expect } from "@playwright/test";

test("Multiple Browser Contexts and Tabs", async ({ page, context, browser }) => {

  await test.step("Navigate to YouTube", async () => {
    await page.goto("https://www.youtube.com");
    await expect(page.getByPlaceholder("Search")).toBeVisible();
  });


  // Create new browser tab within same page session as ABOVE
  await test.step("Create new TAB", async () => {
    const newTab = await context.newPage(); // same context as `page`

    await newTab.goto("https://www.youtube.com");
    await expect(newTab.getByPlaceholder("Search")).toBeVisible();

    // both tabs belong to the same context
    expect(context.pages()).toHaveLength(2);

    await page.bringToFront();   // switch back to the first tab
    await newTab.bringToFront(); // and to the new one again
    // await newTab.pause();     // uncomment to stop here and look
  });

  // Create new browser session
  await test.step("Create new browser session", async () => {
    const newContext = await browser.newContext();
    const page2 = await newContext.newPage();

    await page2.goto("https://www.youtube.com");
    await expect(page2.getByPlaceholder("Search")).toBeVisible(); // page2, not page

    await newContext.close();
  });

});