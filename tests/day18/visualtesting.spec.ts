import {expect,test} from '@playwright/test'

test('visual testing',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.waitForTimeout(5000)
await page.getByPlaceholder('Username').fill('Admin')
//expect(page).toHaveScreenshot('orange-hrm-1.png')
expect(await page.screenshot({fullPage:true})).toMatchSnapshot('orangehrm.png')
})