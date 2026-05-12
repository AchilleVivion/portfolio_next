import { expect, test } from "@playwright/test";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

test.describe("portfolio", () => {
  test("default locale shows English hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      en.portfolio.hero.title,
    );
    await expect(page.getByRole("navigation")).toContainText(en.portfolio.nav.about);
  });

  test("French locale shows translated hero", async ({ page }) => {
    await page.goto("/fr");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      fr.portfolio.hero.title,
    );
    await expect(page.getByRole("navigation")).toContainText(fr.portfolio.nav.about);
  });

  test("locale switcher navigates between English and French", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: fr.portfolio.locale.fr }).click();
    await expect(page).toHaveURL(/\/fr\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      fr.portfolio.hero.title,
    );
    await page.getByRole("link", { name: en.portfolio.locale.en }).click();
    expect(new URL(page.url()).pathname).not.toMatch(/\/fr(\/|$)/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      en.portfolio.hero.title,
    );
  });

  test("in-page anchors for projects section", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: en.portfolio.nav.projects }).click();
    await expect(page.locator("#projects")).toBeVisible();
  });
});
