// import playwright module
import { test, expect, Locator } from "@playwright/test";


// HERE for parameterization we want to SEARCH with multiple key words
  //not just the HARDCODED value "playwright by testers talk""

const searchKeyWords = ['playwright by testers talk','cypress by testers talk','api testing by testers talk']


// create for loop to repeat everything
  // if your loop is const keyword in searchKeyWords
    // where the in is used you get array indices
  // if your loop is const keyword of searchKeyWord
    // where the of is used you get the values within the array themselves (string values here)
for (const keyword of searchKeyWords) {

    // The error here is because if we run this test in a loop it will have the SAME NAME EACH TIME
      //to get around this we need to then use the keyword as the NAME of the test
        // using string literals
    test(`Parameterization Tests Using searchKeyWords Array ${keyword}`, async ({ page }) => {

    const search: Locator = page.getByPlaceholder("Search privately");

    // CANT use google search because its asking for Captcha
    await test.step("Navigate to Duck Duck Go", async () => {
      await page.goto("https://www.duckduckgo.com/");
    });

    await test.step("Search for text 'playwright by testers talk'", async () => {

      // HERE for parameterization we pass the searchKeyWords from ourside the test scope
        //we now need to pass each value to this tests
      await search.fill(keyword)
      
      // use enter button to confirm search
      await search.press("Enter"); //press enter button

    })

    await test.step("Check If Title Is Correct", async () => {

      await expect(page).toHaveTitle(keyword +  " at DuckDuckGo");

    });


  });

}




