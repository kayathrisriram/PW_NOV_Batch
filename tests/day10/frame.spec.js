import {FrameLocator, Locator, test} from '@playwright/test'

test('frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames');
    const all_frames=await page.frames()
    console.log(all_frames.length)

    //using frame name or link -handling frames using frame objects
    // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // frame1.fill('[name="mytext1"]','HI')
    // await page.waitForTimeout(5000)
     //using frame locator
     await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]').fill('HI')
})

test.only("nested frames",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames');
    const outerframe=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    // outerframe.fill('[name="mytext3"]','HI')
    //   const inner=await outerframe.frameLocator("//iframe")
    //   await page.waitForTimeout(5000)
    //   const inner_element=await inner.locator("div[aria-label='Web Testing']")
    //   await inner_element.click()
    //   await page.waitForTimeout(10000)

    //inner frames
    const inner_frame=await outerframe.childFrames()
    console.log(inner_frame.length)
    await inner_frame[0].locator("div[aria-label='Web Testing']").check()
})





