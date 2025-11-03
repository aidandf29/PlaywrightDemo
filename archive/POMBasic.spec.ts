import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { HomePage } from "../pages/HomePage.ts";
import { CartPage } from "../pages/CartPage.ts";

test("Verification of Cart", async ({ page }) => {
  const loginPageObj = new LoginPage(page);
  await loginPageObj.openApplication();
  await loginPageObj.login("standard_user", "secret_sauce");
  const homePageObj = new HomePage(page);
  await expect(homePageObj.homePageHeading).toHaveText("Swag Labs");
  await homePageObj.backPackAddToCart();
  await expect(homePageObj.cartIcon).toHaveText("1");
  await expect(homePageObj.backpackRemoveButton).toBeVisible();
  await homePageObj.gotoCart();
  const cartPageObj = new CartPage(page);
  await expect(cartPageObj.backpackItemLink).toHaveText("Sauce Labs Backpack");
  await cartPageObj.removeItem();
});
