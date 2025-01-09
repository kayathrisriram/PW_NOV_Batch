import {test} from '@playwright/test'
test('Mouse hover',async({page})=>{

    await page.goto('https://www.snapdeal.com')
    const fashion =await page.locator('//span[text()="Home & Kitchen"]')
  
    fashion.hover()

    await page.waitForTimeout(5000)
   
})

test('right click',async({page})=>{

    await page.goto('https://www.snapdeal.com')
    const fashion =await page.locator('//span[text()="Home & Kitchen"]')
  
    await fashion.click({button:'right'})

    await page.waitForTimeout(5000)
   
})

test.only('double click',async({page})=>{

    await page.goto('https://www.snapdeal.com')
    const fashion =await page.locator('//span[text()="Home & Kitchen"]')
  
    fashion.hover()

    await page.waitForTimeout(5000)
     const ele=await page.locator("//span[text()='Electric Cookers']");
     ele.dblclick()
     await page.waitForTimeout(10000)
   
})



//asssignment-https://testautomationpractice.blogspot.com/