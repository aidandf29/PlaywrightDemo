import { Locator, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly backpackItemLink: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackItemLink = page.getByRole("link", {
      name: "Sauce Labs Backpack",
    });
    this.removeButton = page.locator("#remove-sauce-labs-backpack");
  }

  async removeItem() {
    await this.removeButton.click();
  }
}
