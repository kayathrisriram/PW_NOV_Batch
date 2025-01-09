import {chromium, test} from '@playwright/test'
import { clear } from 'console';

test.only("Getby ROLE,Tex & Title ",async () =>
{
    const browser= await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    //await page.locator('[id="Usename"]').fill("kayathri")
    
    await page.getByRole('link',{name:"Forgot login info?"}).click();
    //await page.getByText('Forgot login info?').click()
    await page.getByTitle('ParaBank').click()
    //placeholder - orangehrm ,username 

})

test("Getby Label,alttext ",async () =>
    {
        const browser= await chromium.launch();
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://login.salesforce.com/");
        await page.getByLabel('Password').click();
        await page.getByAltText('Salesforce').click()        
    
    })

//testid -very rare ,if found make use of it 


//locator (and ,or)
test.only("and or locators ",async () =>
    {
        const browser= await chromium.launch();
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://parabank.parasoft.com/parabank/index.htm");
        await page.locator('[name="username"]').and(page.locator('[class="input"]')).fill("xxx")
        
        //placeholder
    
    })