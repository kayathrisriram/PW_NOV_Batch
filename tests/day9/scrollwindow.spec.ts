import {test} from '@playwright/test'

test("mouseactions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.evaluate(()=>{
    //   window.scrollBy(0,100)
    //   //window.scrollBy(2,0)
    // })

    // const ele=page.locator('#country')
    // ele.scrollIntoViewIfNeeded();
  
//bounding box
    let val=page.locator('#country')
    const box=await val.boundingBox();
    if(box){
    console.log(box.x);
    console.log(box.y);
    await page.mouse.wheel(0,box.y);
    }
    await page.waitForTimeout(10000)

})