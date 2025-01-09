import { test} from '@playwright/test'

test("Getby ROLE,Tex & Title ",async ({page}) =>{

await page.goto('https://books-pwakit.appspot.com/')
await page.locator('#input').fill('testing books')
//await page.waitForTimeout(10000)
})  



//iframe->shadowdom