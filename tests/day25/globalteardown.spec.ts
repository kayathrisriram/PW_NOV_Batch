import {test} from "@playwright/test"

test("global tear down ",async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
await page.waitForTimeout(5000)

})