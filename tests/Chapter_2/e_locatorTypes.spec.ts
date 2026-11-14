import {test, expect} from '@playwright/test'

test('Identify Different Page Objects on Page With Locators', async ( {page} ) => {

    //CANT use google because its asking for Captcha
    await test.step('Navigate to Instructors GitHub Page', async () => {
        await page.goto("https://github.com/BakkappaN");
    });


    // Example By Locator
        // await page.getByRole("link", { name: 'value'}).click()
    await test.step('Locator By Role', async () => {
       //click sign in link on github page to go to sign in page
       await page.getByRole("link", { name : 'Sign In'}).click();
    });

    // Example By Label
        // await page.getByLabel('value', { exact: true}).fill('value')
    await test.step('Locator by Label By Name', async () => {
        // note the label is ABOVE the textbox of the actual textbox for username field
            //label will work also if the textbox is within the same <div>.....</div>
        await page.getByLabel("Username or email address").fill("joshcacho2@hotmail.com");
        await page.goBack(); // go back to main page
        
    });

    // ANOTHER Example By Label
          // attribtue of aria-label in DOM HTML Element can also be used
          // <a href="/" aria-label="Homepage" </href>
          // await page.getByLabel('value', { exact: true}).fill('value')
    await test.step('Locator by Label By Aria-Label', async () => {
      
        let HomePageImage = await page.getByLabel("Homepage", {exact: true}).getAttribute("data-analytics-event");
        //this will also work using .first() in this case
            // let HomePageImage = await page.getByLabel("Homepage").first().getAttribute("data-analytics-event");
        console.log(HomePageImage);

    });

    // Example by Alt Attribute - FOR IMAGES
        // await page.getByAltText('alt attribute value').click()
            // there will be a alt-attribute value in the DOM HTML Elements
    await test.step("Locator by Alt Attribute", async () => {
        await page.getByAltText("View BakkappaN's full-sized avatar").click();
        await page.goBack();
    });

    // Example by Test Id - FOR CUSTOM ATTRIBUTES
        //await page.getByTestId("value").fill("value")
            // there will be a test-id value in the DOM HTML Elements
        // To do this you can follow the below steps
            // find common attribute between a bucket of items (like sub tabs within a page)
            // in your playwright.config.ts file add that test id ensuring the following
                // testIdAttribute: '<locator param>',
                 // using the common data-test-tab config value we can now call any objects that share that locator
    await test.step("Locator by Test ID", async () => {
        await page.getByTestId('repositories').first().click();  
        await page.getByTestId('projects').first().click();  
        await page.getByTestId('packages').first().click(); 
        await page.getByTestId('stars').first().click(); 
    })

    // Examople By Text
        // await page.getByText("any text").click() //partial
        // await page.getByText("any test", { exact: true}).click();
    await test.step("Locator by Text", async () => {
        await page.getByTestId('overview').first().click(); 
        let achievmentsText = await page.getByText("Achievements").first().textContent();
        console.log("Text is " + achievmentsText)
        await page.getByText("2025", { exact: true}).click(); // full lookup
        
        await page.pause();
       
    });

    // Examply by Placeholder
        // await page.getByPlaceholder("value").click();
            // there will be a placeholder value in the DOM HTML Elements
    await test.step("Locator By Placeholder", async () => {
        await page.goto("https://www.youtube.com/@testerstalk")
        await page.getByPlaceholder("Search").fill("This is by placeholder locator");
        await page.pause();
    });

    // Example by XPath
        // await page.locator("xpath=//*[@attr='value']").click()
        // await page.locator("//*[@attr='value']").click()
    await test.step("Locator By xPath", async () => {
        await page.locator("//input[@name='search_query']").fill("Xpath testers talk");
        await page.pause();
    });

    // Example by CSS Selector
        // await page.locator("css=tagname[attr='value']").click()
        // await page.locator("tagname[@attr='value']").click()
    await test.step("Locator By CSS", async () => {
        await page.locator("input[name='search_query']").fill("CSS Testers Talk");
        await page.pause();
    });

    // Example by Title
        // await page.getByTitle('value').click()
            // there will be a Title value in the DOM HTML Elements
    await test.step("Locator By Title", async () => {

    });
 
 
});