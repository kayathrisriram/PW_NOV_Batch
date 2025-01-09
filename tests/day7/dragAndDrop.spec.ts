import {expect, test} from '@playwright/test'

test("drag and drop",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/')

 const ele1=await page.locator("#draggable")
 const ele2=await page.locator("#droppable")
 await ele1.dragTo(ele2)

 await page.waitForTimeout(5000)
})

