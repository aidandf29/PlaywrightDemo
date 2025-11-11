import { defineConfig, devices } from "@playwright/test";
import { TIMEOUT } from "dns";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
dotenv.config({
  path: process.env.TEST_ENV
    ? `./env-files/.env.${process.env.TEST_ENV}`
    : `./env-files/.env.dev`,
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // grep: /UI/,
  // grepInvert:/UI/,
  // globalSetup: "./global-setup",
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [
  //   ["html", { open: "always", outputFolder: "./customFolder" }],
  //   ["line"],
  // ],
  reporter: [
    // 1. Allure Reporter: Gunakan 'resultsDir' untuk menentukan folder hasil
    [
      "allure-playwright",
      {
        resultsDir: "GoogleAllureResults",
      },
    ],
    // 2. Line Reporter
    ["line"],
    ["github"],
    // 3. HTML Reporter
    ["html", { open: "on-failure" }],
  ],
  expect: {
    // toHaveScreenshot: {
    //   maxDiffPixels: 20,
    //   maxDiffPixelRatio: 0.1,
    // },
    timeout: 9000,
  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "on",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    testIdAttribute: "data-test",
    headless: true,
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      accept: "application/json",
      Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=]",
    },
    // storageState: "./playwright/.auth/auth.json",
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "setup",
    //   testMatch: /.*\.setup\.ts/,
    //   // testMatch: "global.setup.ts",
    // },
    {
      name: "chromium",
      // dependencies: ["setup"],

      use: {
        ...devices["Desktop Chrome"],

        // storageState: "./playwright/.auth/auth.json",
      },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   // dependencies: ["setup"],
    //   use: {
    //     ...devices["Desktop Safari"],
    //     // storageState: "./playwright/.auth/auth.json",
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: "Mobile Chrome",
    //   use: { ...devices["Pixel 5"] },
    // },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },

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
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
