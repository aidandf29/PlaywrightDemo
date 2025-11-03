import { chromium, expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await expect(page.locator("input[value=Login]")).toHaveCount(1);
  await expect(page.locator("input[value=Login]")).toBeEnabled();
  await expect(page.locator("input[value=Login]")).not.toBeDisabled();
  await expect(page.locator("input[value=Login]")).toBeVisible();
  await expect(page.locator("input[value=Login]")).not.toBeHidden();
  await expect(page.locator("input[value=Login]")).toHaveText("Login");
  await expect(page.locator("input[value=Login]")).toHaveAttribute(
    "name",
    "login-button"
  );
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
  await expect(5).toBe(5);
  await expect(5).toBeLessThan(6);

  await expect(page, "this is custom error message").toHaveTitle("Swag Labs");

  await page.locator("//*[@name='user-name']").fill("standard_user");
  await page.locator("input#password").fill("secret_sauce");
  await page.locator("input[value=Login]").click();
});
