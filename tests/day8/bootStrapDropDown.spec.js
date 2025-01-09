import {chromium, test} from '@playwright/test'

test("bootstrap dropdown ",async () =>
{
    const browser= await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    await page.locator('.multiselect').click()//page.$ same like page.locator
    const option=await page.$$('ul>li label')
    for (let opt of option){
        let textvalue=await opt.textContent()
            if(textvalue.includes('jQuery') || textvalue.includes('Java'))
            {
                await opt.check();
            }
    
        }
        await page.waitForTimeout(5000)
    }
)