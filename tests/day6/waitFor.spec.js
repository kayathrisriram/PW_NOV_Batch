import {test} from '@playwright/test'
/*
test("toast msg",async({page})=>{
    await page.goto("https://letcode.in/")
    await page.click("'Log in'");

    await page.fill("input[name='email']","kayathri1311@gmail.com")
    await page.fill("input[name='password']","test1234")
    await page.click("button:has-text('LOGIN')");
    const toast=page.locator('#toast-container div.toast-info')
    await toast.waitFor({state: "visible"});
    await toast.waitFor({state: "hidden"})
    await page.click("'Sign out'");

})
*/


test("snapdeal-toast",async({page})=>{
    //test.setTimeout(60000)
    await page.goto("https://www.snapdeal.com");
    //await page.pause()
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector(".push-container",{state :'visible'})
    await page.waitForSelector(".push-container",{state :'hidden'})
}
)


