import {chromium, test} from '@playwright/test'

test("launch browser",async ({page}) =>
{
    // const browser= await chromium.launch();
    // const context=await browser.newContext();
    // const page=await context.newPage();
    await page.goto("https://www.gmail.com");
})