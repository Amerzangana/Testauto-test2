import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests (VRT)', () => {
  test('Test Case 01 - VRT Clients Pages', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}`);
    await expect(page).toHaveScreenshot("login-page.png");
    await page.locator('input[type="text"]').fill(`${process.env.TEST_USERNAME}`);
    await page.locator('input[type="password"]').fill(`${process.env.TEST_PASSWORD}`);
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  //  Dashbooard
    await expect(page).toHaveScreenshot('dashboard-page.png');

//Clients-View-Create-Update
    await page.goto(`${process.env.VIEW_CLIENTS_URL}`);
    await expect(page).toHaveScreenshot('view-page.png');
    await expect(page.getByText('Clients')).toBeVisible();
    await page.goto(`${process.env.CREATE_CLIENTS_URL}`);
    await expect(page).toHaveScreenshot('create-page.png');
    await expect(page.getByText('New Client')).toBeVisible();
    await page.goto(`${process.env.EDIT_CLIENTS_URL}`);
    await expect(page).toHaveScreenshot('edit-page.png');

  await page.waitForTimeout(1000);

});
});
