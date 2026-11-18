import {test, expect} from '@playwright/test'

test('Element Screenshot on Page of Any Item', async ({page}) => {

    await test.step('Navigate to Testers Talk YouTube Page', async () => {
        await page.goto("http://youtube.com/@testerstalk");
    });

    //only takes the screenshot of the page at the current location shown, NOT THE ENTIRE PAGE
    await test.step('Page Screenshot of Current Location on Page', async () => {
        await page.screenshot({path: './screenshots/pageScreenshot.jpeg'});
    });

})