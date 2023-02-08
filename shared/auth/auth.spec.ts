import { defineConfig, test, expect, type Page } from '@playwright/test';
import { LoginComponent } from './auth.cmn';


test.beforeEach(async ({ page }) => {
    
    await page.goto('/');
    // Accept GDPR
    await page.getByRole('button', { name: 'ACEPTAR' }).click();
});

test('shows Login popup', async ({ page }) => {

    const loginComponent = new LoginComponent(page);

    await loginComponent.visit();

    await expect(page.locator('login-page')).toBeVisible();;
    
    await expect(page.getByRole('textbox', { name: 'Usuario / Correo electrónico' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Contraseña' })).toBeVisible();
    await expect(page.locator('login-page').getByRole('button', { name: 'Acceder' })).toBeVisible();
     
 });


test('not login with empty credentials', async ({ page }) => {
   const loginComponent = new LoginComponent(page);

   await loginComponent.login("","");

   await expect(page.locator('div').filter({ hasText: 'Login' })).toBeVisible();
   await expect(page.getByText('Revisa que todos los campos estén rellenos')).toBeVisible();
    
});



test('not login with invalid credentials by username', async ({ page }) => {
    const loginComponent = new LoginComponent(page);

    await loginComponent.login("lcontro","123456");

    await loginComponent.badCredentialsMessageExpected();
});

test('login without valid credentials by email', async ({ page }) => {
    const loginComponent = new LoginComponent(page);

    await loginComponent.login("lcontro@gmail.com","123456");

    await expect(await page.locator('div').filter({ hasText: 'Error de inicio de sesión' })).toBeVisible();
    await expect(page.getByText('Por favor, revisa los datos y vuelve a intentarlo. Ten en cuenta el uso de mayús')).toBeVisible();
    await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
});

test('login with valid credentials by username with deposits', async ({ page }) => {

});

test('login with valid credentials by username without deposits', async ({ page }) => {

});

test('login with valid credentials by email with deposits', async ({ page }) => {


});

test('login with valid credentials by email without deposits', async ({ page }) => {

});


test('not login with an account that is force to reset password', async ({ page }) => {

});

test('not login with a user blocked', async ({ page }) => {

});


test('not login with unverified account', async ({ page }) => {


});

test('not login user from country blocked', async ({ page }) => {



});