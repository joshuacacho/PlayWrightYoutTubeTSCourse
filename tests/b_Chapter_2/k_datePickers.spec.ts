

// import playwright module
import { test, FrameLocator, Locator } from "@playwright/test";


test("Playwright Date Pickers", async ({ page }) => {

  const iFrame: FrameLocator = page.frameLocator(".demo-frame"); //DONT FORGET TO VIEW THE OANRET
  const datePicker: Locator = iFrame.locator("#datepicker");
  const datePickToday: Locator = iFrame.locator(".ui-datepicker-today");
  const prevMonthArrow: Locator = iFrame.locator("[title='Prev']"); //left arrow 
  const nextMonthArrow: Locator = iFrame.locator("[title='Next']"); //right arrow 
  // reusable function with backticks to find any date and click on it
    //date-date has all numeric values on the calendar for the month
  const dateNum = (c: number | string) => iFrame.locator(`a[data-date="${c}"]`);  

   // CANT use google search because its asking for Captcha
  await test.step("Navigate to JQuery Date Picker", async () => {
    await page.goto("https://jqueryui.com/datepicker/");
  });

  await test.step("Hardcoded Date'", async () => {
    // typing in date hardcoded
    await datePicker.fill("09/17/2026");
    
  })

  await test.step("Dynamic Date", async () => {
    // always select current date
    await datePicker.click();
    await datePickToday.click();
    await page.pause();
   
  });

  await test.step("Date in Past", async () => {
     // click date picker then month then day
    await datePicker.click();
    await prevMonthArrow.click(); 
    await dateNum(15).click();  // click the 15th 
      // if i wasnt doing this date selection more than once i could do
        // await iFrame.locator('text="15"').click();
    await page.pause();
  });

  await test.step("Date in Future", async () => {
     // click date picker then month then day
    await datePicker.click();
    await nextMonthArrow.click(); 
    await dateNum(30).click();  // click the 30th
    await page.pause();
  });

});
