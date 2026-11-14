import {test, expect} from '@playwright/test'

test('Element Screenshot on Page of Any Item', async ({page}) => {

    await test.step('Navigate to Testers Talk YouTube Page', async () => {
        await page.goto("http://youtube.com/@testerstalk");
    });

    await test.step('Full Page Screenshot', async () => {
        await page.screenshot({path: './screenshots/fullPageScreenshot.jpg', fullPage: true});
    });

})