import { test, expect } from '@playwright/test';

test('testing', async ({ page }) => {
  await page.goto('file:///D:/Files/sheetal/mailAndMedia/index.html');
  await page.getByPlaceholder('Enter a new task').click();
  await page.getByPlaceholder('Enter a new task').fill('Wakeup!!');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.getByPlaceholder('Enter a new task').click();
  await page.getByPlaceholder('Enter a new task').fill('Exercise');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.getByPlaceholder('Enter a new task').click();
  await page.getByPlaceholder('Enter a new task').fill('Shower');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.getByPlaceholder('Enter a new task').click();
  await page.getByPlaceholder('Enter a new task').fill('Prepare breakfast');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.close()
});

test('Another test',async()=>{
  
})