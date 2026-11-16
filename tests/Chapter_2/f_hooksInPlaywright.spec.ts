// import playwright module
import { test, expect, chromium } from '@playwright/test';


// hooks implementation
 //beforeAll
 //beforeEach
 //afterAll
 //afterEach

 // will run only one time before all tests
 test.beforeAll (async () => {
    console.log("Hook beforeAll running before All Tests");
 });

// will run before each test
 test.beforeEach (async ( {page}) => {
    console.log("Hook beforeEach running before each test where i go to duckduckgo");
    await page.goto("https://duckduckgo.com");
 });


// will run only one time after all tests
test.afterAll (async () => {
    console.log("Hook afterAll running after All Tests");
 });

 // will run after each test
 test.afterEach (async () => {
    console.log("Hook afterEach running after each test");
 });



test('Test 1 - Playwright Hooks', async ( {page} ) => {

    console.log("Test 1 execution started....");

    //CANT use google because its asking for Captcha
    // await test.step('Navigate to Duck Duck Go', async () => {
    //     await page.goto("https://duckduckgo.com");
    // });

    await test.step('Search for playwright by testers talk', async () => {
        await page.getByRole("combobox", { name: 'Search' }).fill("playwright by testers talk");
        await page.keyboard.press("Enter");
    });

    await test.step('Click Playwright by Testers Talk link', async () => {
        await page.getByRole("link", {name: "Playwright by Testers Talk - YouTube", exact: true}).click(); 
    });

    await test.step('Vaidate Title Is Playwright by Testers Talk ✅ - YouTube', async () => {
        
        //wait for page to loag via the away to verify the title has loaded
         await expect(page).toHaveTitle("Playwright by Testers Talk ✅ - YouTube");
        
        //now you can log the title name since it was validated above to load
        const title: string = await page.title();
        expect(title).toBe("Playwright by Testers Talk ✅ - YouTube");
       
    });
});



test('Test 2 - Playwright Hooks', async ( {page} ) => {


    console.log("Test 2 execution started....");

    //CANT use google because its asking for Captcha
    // await test.step('Navigate to Duck Duck Go', async () => {
    //     await page.goto("https://duckduckgo.com");
    // });

    await test.step('Search for playwright by testers talk', async () => {
        await page.getByRole("combobox", { name: 'Search' }).fill("playwright by testers talk");
        await page.keyboard.press("Enter");
    });

    await test.step('Click Playwright by Testers Talk link', async () => {
        await page.getByRole("link", {name: "Playwright by Testers Talk - YouTube", exact: true}).click(); 
    });

    await test.step('Vaidate Title Is Playwright by Testers Talk ✅ - YouTube', async () => {
        
        //wait for page to loag via the away to verify the title has loaded
         await expect(page).toHaveTitle("Playwright by Testers Talk ✅ - YouTube");
        
        //now you can log the title name since it was validated above to load
        const title: string = await page.title();
        expect(title).toBe("Playwright by Testers Talk ✅ - YouTube");
       
    });
});

