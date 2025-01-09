import {chromium, test} from '@playwright/test'
test.only("geolocation",async () =>
    {
     const browser= await chromium.launch({headless:false});
     const context=await browser.newContext({
            geolocation:{
              latitude: 31.264231, 
              longitude: -98.671841
             },
            permissions:['geolocation']
         })
       const page=await context.newPage()
        //await page.goto(""');
        await page.goto('https://www.gmail.com')
        await page.waitForTimeout(20000)
        await browser.close()
    })

    test("without geolocation",async ({page}) =>
      {
      
          await page.goto("https://www.amazon.in");
          //await page.goto('https://www.swiggy')
          await page.waitForTimeout(10000)
      })