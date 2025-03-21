import {test} from '@playwright/test'
test('keyboardactions',async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    await page.fill("[name='text1']",'welcome to automation')

    await page.keyboard.press('Control+A')//windo ('meta+a')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000)
})