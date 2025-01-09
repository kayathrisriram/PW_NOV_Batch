import {expect, test} from '@playwright/test'

test("pageload time",async({page})=>{
    const start=performance.now()// start timer
    await page.goto('https://testautomationpractice.blogspot.com/')
    const end=performance.now()//stop timer
    console.log(`page load time : ${start-end}`)
})