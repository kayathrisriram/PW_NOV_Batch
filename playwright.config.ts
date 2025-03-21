import { defineConfig, devices } from '@playwright/test';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
  
/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  //grep:/UI/,
  //grepInvert:/Smoke/,
  testDir: './tests',
expect:{
    timeout:10000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter:[['html',{open:'always'}]],
  //reporter:[['./customreport.ts']],
  //reporter:"allure-playwright",
  //reporter:[['allure-playwright',{outputFolder:"MyAllureResult"}]],
  //reporter:[['json',{outputFile:'myjson.json'}]],
  //reporter:process.enc.CI?'github':'list',
  //reporter:[['list'],['html',{open:'always'}]],
  reporter:[['html',{open:'always'}]],
  //globalTeardown:'./globalTeardown.spec.ts',
  timeout:60000,
 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://automationexercise.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
   viewport:{width:400,height:700},
    screenshot : 'on',
    video:'on',
    headless :false,
    

    //actionTimeout:5000,//this will settimeout for individual PW Actions like page.click,page.goto.
    
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name:'globalsetup',
    //   testDir:'./',
    //   testMatch:'global.spec.ts',
    //   teardown:'globalTeardown'
    // },
    // {
    //   name:'globalTeardown',
    //   testDir:'./',
    //   testMatch:'globaltear.spec.ts'
    // },
    {
      name: 'chromium',
      //dependencies:['globalsetup'],
      use: { ...devices['Desktop Chrome']
        ,viewport:{width:1920,height:1080} 
        }
    },
  /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //     name: 'Mobile Chrome',
    //     use: { ...devices['iPhone 11 Pro']},
    // },
    
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
