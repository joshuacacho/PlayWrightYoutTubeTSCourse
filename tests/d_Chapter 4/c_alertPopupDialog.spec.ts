import { test, expect, Locator } from "@playwright/test";

test("Playwright Alert", async ({ page }) => {
   
   // link to click to bring up popup
   const alertLink : Locator = page.getByText('See an example alert', { exact: true });
   let alertText : String;
   let alertType : String;
  
   await test.step("Navigate to Page For Alerts", async () => {
      await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");
   });

   await test.step("click Alert Link to Bring up PopUp", async () => {
      // if you do this the alert goes away immeidately so we can never confirm it
         // await alertLink.click();

      // so in playwright documentation you can do the following (YOU CLICK ON THE LINK TO BRING UP THE ALERT AFTER)
         // 1. Listen for the Dialog Event
         // 2. Grab all information you want to gather
         // 3. Accept the alert if you want
         // 4. .... anything else you want
     
      page.once('dialog', async (dialog) => {
         alertText = dialog.message();
         alertType = dialog.type();
         await dialog.accept();  
      });

      // Now click the button to bring up the alert
      await alertLink.click();

      // now log the message grabbed from above
      console.log(alertType,alertText);
   });

   await test.step("Validate alert is present with correct Text", async () => {
      expect(alertText).toBe("Sample alert")
   });


});



test("Playwright Confirm", async ({ page }) => {
   
   // link to click to bring up popup
   const alertWindow : Locator = page.getByText('See a sample confirm', { exact: true });
   let windowText : String;
   let alertType : String;
  
   await test.step("Navigate to Page For Alerts", async () => {
      await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");
   });

   await test.step("click Alert Link to Bring up PopUp", async () => {
      // if you do this the alert goes away immeidately so we can never confirm it
         // await alertLink.click();

      // so in playwright documentation you can do the following (YOU CLICK ON THE LINK TO BRING UP THE ALERT AFTER)
         // 1. Listen for the Dialog Event
         // 2. Grab all information you want to gather
         // 3. Accept the alert if you want
         // 4. .... anything else you want
     
      page.once('dialog', async (dialog) => {
         windowText = dialog.message();
         alertType = dialog.type();
         await dialog.accept();  
      });

      // Now click the button to bring up the alert
      await alertWindow.click();

      // now log the message grabbed from above
      console.log(alertType, windowText);
   });

   await test.step("Validate alert is present with correct Text", async () => {
      expect(windowText).toBe("Are you sure?")
   });


});


test("Playwright Prompt", async ({ page }) => {
   
   // link to click to bring up popup
   const alertPrompt : Locator = page.getByText('See a sample prompt', { exact: true });
   let promptText : String;
   let alertType : String;
  
   await test.step("Navigate to Page For Alerts", async () => {
      await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");
   });

   await test.step("click Alert Link to Bring up PopUp", async () => {
      // if you do this the alert goes away immeidately so we can never confirm it
         // await alertLink.click();

      // so in playwright documentation you can do the following (YOU CLICK ON THE LINK TO BRING UP THE ALERT AFTER)
         // 1. Listen for the Dialog Event
         // 2. Grab all information you want to gather
         // 3. Accept the alert if you want
         // 4. .... anything else you want
     
      page.once('dialog', async (dialog) => {
         promptText = dialog.message();
         alertType = dialog.type();

         // if you DONT DO THIS the page will freeze OR can use await dialog.dismiss() to CANCEL;
            // await dialog.dismiss();  

         //Validate prompt has correct prefilled value
         expect(dialog.defaultValue()).toBe('Netscape');

         // UPDATE prompt value to be "Safari"
         await dialog.accept("Safari"); 

   
      });

      // Now click the button to bring up the alert
      await alertPrompt.click();

      // now log the message grabbed from above
      console.log(alertType,promptText);
   });

 

   await test.step("Validate prompt alert with correct question", async () => {
      expect(promptText).toBe("What is your tool of choice?")
   });

});