// import playwright module
import { test, expect, Locator } from "@playwright/test";

test("Test 1 - Playwright Hooks", async ({ page }) => {
  const dropdownExample: Locator = page.locator("#dropdown-class-example");

  // CANT use google because its asking for Captcha
  await test.step("Navigate to Facebook", async () => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  });

  await test.step("Select Option 1 from dropdown by value", async () => {
    await dropdownExample.isVisible();
    await dropdownExample.selectOption("option1"); // <option value="option1" xpath="1">Option1</option>
  });

  await test.step("Select Option 2 from dropdown by text", async () => {
    await dropdownExample.selectOption("Option2"); // <option value="option2" xpath="1">Option2</option>
  });

  await test.step("Vaidate all options in the DropDown", async () => {
    
    const optionsDropdownExpectedResult: string[] = ['Select', 'Option1', 'Option2', 'Option3']
    //grab all text contents (by default returns array of string values)
    const allDropDownItems: string[] = await page.locator("#dropdown-class-example option").allTextContents();
    console.log(allDropDownItems);
    //now we can compare string[]'s
    expect(allDropDownItems).toEqual(optionsDropdownExpectedResult);

  });
});
