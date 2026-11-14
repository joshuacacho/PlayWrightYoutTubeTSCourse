import {test, expect, Locator} from '@playwright/test'

test('Element Screenshot on Page of Any Item', async ({page}) => {

    let myButton: Locator;

    await test.step('Navigate to Testers Talk YouTube Page', async () => {
        await page.goto("http://youtube.com/@testerstalk");
    });

    await test.step('Identify Subscribe Button on Page', async () => {
       myButton =  page.getByRole("button",  { name: "Subscribe"});
    //    await myButton.click()
    //    await page.pause();
    });

    await test.step('Element Screenshot of Button', async () => {
         await myButton.screenshot( {path: './screenshots/elementSubscribeButtonSS.png'});
    });

})