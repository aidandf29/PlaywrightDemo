import { test } from "@playwright/test";

test("Practice Different Type of click operations", async ({ page }) => {
  await page.goto("https://ultimateqa.com/filling-out-forms/");
  await page.locator("#et_pb_contact_name_0").click();
  await page.locator("#et_pb_contact_name_0").dblclick();
  await page.locator("#et_pb_contact_name_0").click({ button: "right" });

  await page.waitForTimeout(3000);
  await page.locator("#et_pb_contact_name_0").dispatchEvent("click");

  // await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  // await page.getByRole('button', { name: 'Add Element' }).dblclick();

  // await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  // // await page.getByText('right click me', { exact: true }).click({button:'right'});
  // await page.getByRole('heading', { name: 'Example code: Simple Context' }).click({button:'right'});
});
