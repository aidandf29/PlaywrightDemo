import { test, expect } from "@playwright/test";

test("Practice Drag and Drop", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  // Approach 1 - Manual way to Drag and Drop
  await page.getByText("Drag me", { exact: true }).hover();
  await page.mouse.down();
  await page.getByLabel("Simple").locator("#droppable").hover();
  await page.mouse.up();
  await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText(
    "Dropped!"
  );
});

test("Practice Drag and Drop2", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  //Approach 2 - dragTo()
  await page
    .getByText("Drag me", { exact: true })
    .dragTo(page.getByLabel("Simple").locator("#droppable"));
  await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText(
    "Dropped!"
  );
});

test("Practice Drag and Drop3", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  //Approach 2 - dragTo()
  await page
    .getByText("Drag me", { exact: true })
    .dragTo(page.getByLabel("Simple").locator("#droppable"), {
      sourcePosition: { x: 1, y: 1 },
      targetPosition: { x: 1, y: 1 },
    });
  await expect(page.getByLabel("Simple").locator("#droppable")).toHaveText(
    "Dropped!"
  );
});
