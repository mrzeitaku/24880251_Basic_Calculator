import { test, expect } from '@playwright/test';

const url = 'https://testsheepnz.github.io/BasicCalculator.html';

test.describe('Basic Calculator smoke workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('adds two positive integers', async ({ page }) => {
    await page.locator('#number1Field').fill('5');
    await page.locator('#number2Field').fill('10');
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Add' });
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('15');
  });

  test('rejects non-numeric First number', async ({ page }) => {
    await page.locator('#number1Field').fill('abc');
    await page.locator('#number2Field').fill('10');
    await page.locator('#calculateButton').click();
    await expect(page.locator('h3')).toContainText('Number 1 is not a number');
  });

  test('concatenates text and disables integer mode', async ({ page }) => {
    await page.locator('#number1Field').fill('Hello');
    await page.locator('#number2Field').fill('World');
    await page.locator('#selectOperationDropdown').selectOption({ label: 'Concatenate' });
    await expect(page.locator('#integerSelect')).toBeDisabled();
    await page.locator('#calculateButton').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('HelloWorld');
  });
});
