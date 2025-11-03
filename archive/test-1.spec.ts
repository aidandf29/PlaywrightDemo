import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.google.com/?gws_rd=ssl&zx=1759574329445&no_sw_cr=1"
  );
  await page
    .getByRole("dialog")
    .locator("div")
    .filter({ hasText: "Pilih Chrome, browser yang" })
    .nth(1)
    .click();
  await page.getByRole("button", { name: "Tidak tertarik" }).click();
  await page.getByRole("combobox", { name: "Cari" }).click();
  await page.getByRole("combobox", { name: "Cari" }).fill("aidan daffa");
  await page
    .locator('iframe[name="a-w9omn24o3tzt"]')
    .contentFrame()
    .getByRole("checkbox", { name: "I'm not a robot" })
    .click();
});
