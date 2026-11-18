// import playwright module
import { test, expect, Locator } from "@playwright/test";



test("Playwright with iFrames and Drag and Drop ", async ({ page }) => {

  const iFrameParent = page.frameLocator(".demo-frame");

  // now i can perform the actions within tbe iFrame by chaning page. with .iFrame
  const dragElement: Locator = iFrameParent.locator("#draggable");
  const dropElement: Locator = iFrameParent.locator("#droppable");

  // CANT use google search because its asking for Captcha
  await test.step("Navigate to JQuery", async () => {
    await page.goto("https://jqueryui.com/droppable/");
  });

  // identify the drag element and the drop element
    // both items are within an iframe so the code will fail if you DONT identify the iFrame FIRST 
      //<iframe src="/resources/demos/droppable/default.html" class="demo-frame"></iframe>


  await test.step("Identify Drag and Drop elements", async () => {

    //Drag and Drop
    await dragElement.dragTo(dropElement);

  })

  await test.step("Validate text changes to Dropped After Drag and Drop Completes", async () => {

    //Playwright's .toHaveText() is built specifically to query the browser's live DOM for the text inside whatever element the Locator points to
    await expect(dropElement).toHaveText("Dropped!");

    await page.pause();
  })


});

