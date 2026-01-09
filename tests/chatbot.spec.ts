import { test, expect } from "@playwright/test"

test("chat widget opens and closes", async ({ page }) => {
  await page.goto("http://localhost:3000")

  // bouton emoji (adapté à ton sélecteur)
  const button = page.getByRole("button").first()
  await button.click()

  // fenêtre chat visible
  await expect(page.getByText(/envoyez|message|chat/i)).toBeVisible()

  // fermer
  await button.click()
  // selon ton UI, adapte : fenêtre doit disparaître
})
