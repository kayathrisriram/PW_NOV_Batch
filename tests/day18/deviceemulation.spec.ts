import {test,devices,chromium} from'@playwright/test'
test("device emulation",async()=>{
    const mobile=devices['Blackberry PlayBook landscape']
    const browser= await chromium.launch();
    const context=await browser.newContext({...mobile});
    const page=await context.newPage();
    await page.goto("https://www.google.com")
    await page.waitForTimeout(5000)
})