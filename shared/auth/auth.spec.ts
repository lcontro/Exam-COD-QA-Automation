import { test, expect, type Page } from '@playwright/test';
import { LoginComponent } from './auth.cmn';
import { LoginComponentObjects } from './auth.po';
import { HomePageObjects } from '../../pages/home-page/home-page.po';


test.beforeEach(async ({ page }) => {
    const homePageObjects = new HomePageObjects(page);

    await page.goto('/');

    // Accept GDPR
    await homePageObjects.GDPRAcceptBtn.click();
    
});

test('Should shows Login popup', async ({ page }) => {

    const loginComponent = new LoginComponent(page);
    const loginComponentObjects = new LoginComponentObjects(page);

    await loginComponent.visit();

    await expect(loginComponentObjects.LoginPopup).toBeVisible();
    
    await expect(loginComponentObjects.UsernameInput).toBeVisible();
    await expect(loginComponentObjects.PasswordInput).toBeVisible();
    await expect(loginComponentObjects.LoginSubmitBtn).toBeVisible();
     
 });


test('Should not login with empty credentials', async ({ page }) => {
   const loginComponent = new LoginComponent(page);
   const loginComponentObjects = new LoginComponentObjects(page);

   await loginComponent.login("","");

   await expect(loginComponentObjects.EmptyCredencialsTitleErrorMessage).toBeVisible();
   await expect(loginComponentObjects.EmptyCredencialsDescriptionErrorMessage).toBeVisible();
    
});



test('Should not login with invalid credentials by username', async ({ page }) => {
    const loginComponent = new LoginComponent(page);

    await loginComponent.login(process.env.usernameAccountLoginWithoutDeposit,process.env.invalidpasswordAccountLoginWithoutDeposit);

    //Expected
    await loginComponent.badCredentialsMessageExpected();
});

test('Should not login with invalid credentials by email', async ({ page }) => {
    const loginComponent = new LoginComponent(page);

    await loginComponent.login(process.env.emailAccountLoginWithoutDeposit,process.env.invalidpasswordAccountLoginWithoutDeposit);


    //Expected
    await loginComponent.badCredentialsMessageExpected();
});

test('Should login with valid credentials by username with deposits', async ({ page }) => {
    const loginComponent = new LoginComponent(page);

    await loginComponent.login(process.env.emailAccountLoginWithoutDeposit,process.env.invalidpasswordAccountLoginWithoutDeposit);


    //Expected
    await loginComponent.badCredentialsMessageExpected();
});

test('Should login with valid credentials by username without deposits', async ({ page }) => {
    const loginComponent = new LoginComponent(page);

    await loginComponent.login(process.env.emailAccountLoginWithoutDeposit,process.env.invalidpasswordAccountLoginWithoutDeposit);


    //Expected
    await loginComponent.badCredentialsMessageExpected();
});

test('Should login with valid credentials by email with deposits', async ({ page }) => {


});

test('Should login with valid credentials by email without deposits', async ({ page }) => {

});


test('Should not login with an account that is force to reset password', async ({ page }) => {

});

test('Should not login with a user blocked', async ({ page }) => {

});


test('Should not login with unverified account', async ({ page }) => {


});

test('Should not login user from country blocked', async ({ page }) => {



});