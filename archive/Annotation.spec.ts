import { test, expect } from "@playwright/test";

test.describe("Practice of Describe", async () => {
  test.slow(({ browserName }) => browserName === "chromium");
  test("Test 1", async ({ page }) => {
    console.log("Starting Test 1");
  });

  test.fail("Test 2", async ({ page }) => {
    console.log("Starting Test 2");
  });

  test.fixme("Test 3", async ({ page }) => {
    console.log("Starting Test 3");
  });
});

test("Test 4", async ({ page, browserName }) => {
  test.setTimeout(5000);
  test.skip(browserName === "firefox");
  console.log("Starting Test 4");
});

test("Test 5", async ({ page }) => {
  console.log("Starting tipu 5");
  test.skip();
  console.log("Starting Test 5");
});

test("Test 6", async ({ page }) => {
  console.log("Starting Test 6");
});
