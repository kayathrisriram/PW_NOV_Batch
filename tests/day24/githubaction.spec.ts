import {test} from "@playwright/test"
test("sauce lab",async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.getByPlaceholder('Username').fill('standard_user');
    
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();})