import { chromium, test } from "@playwright/test";
// test.skip("kick start with Playwright", async ({ page }) => {
//   await page.goto("https://www.google.com");
//   console.log("My First Test");
// });

test("kick start with Playwright", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.google.com");
  console.log("My First Test");
});

test("2nd start with Playwright", async ({ page }) => {
  console.log("My Second Script");
  await page.goto("https://www.saucedemo.com/");
  await page.locator("//*[@name='user-name']").fill("standard_user");
  await page.locator("input#password").fill("secret_sauce");
  // await page.locator(`.submit-button`).click();
  await page.locator("input[value=Login]").click();
  await page.locator("text =' Sauce Labs Backpack' ").click();
  await page.locator("id=add-to-cart").click();
  await page.locator("data-test=remove").click();
});

test("Practice of Locator method with Option", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator("//*[@name='user-name']").click();
  await page
    .locator(".form_group", { has: page.locator("input#user-name") })
    .pressSequentially("standard_user");
  await page
    .locator(".form_group", { hasNot: page.locator("input#user-name") })
    .click();
  await page
    .locator(".form_group", { hasNot: page.locator("input#user-name") })
    .pressSequentially("secret_sauce");
  await page.locator("input[value=Login]").click();
  // await page.locator("//a", { hasText: "Sauce Labs Backpack" }).click();
  await page.locator(".inventory_item_name", { hasNotText: /Sauce.*/ }).click();
});

test("Practice of getBy methods", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/login");
  await page
    .getByLabel("Email:", { exact: true })
    .fill("testcodeautomate@gmail.com");

  await page.getByText("New Cust").textContent();
  await page.getByAltText("nopCommerce demo store").click();
  await page
    .getByTitle("Show products in category Electronics")
    .first()
    .click();
  await page
    .getByPlaceholder("Search store", { exact: true })
    .fill("Iphone 16");
  await page.getByRole("button", { name: "search" });
  await page.goto("https://www.saucedemo.com/");
  await page.getByTestId("username").fill("standard_user");
});
