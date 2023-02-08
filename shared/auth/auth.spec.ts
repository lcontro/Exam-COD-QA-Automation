import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://m.apuestas.codere.es/deportes/index.htm#/HomePage');
});


test('not login with empty credentials', async ({ page }) => {


    
});

test('login with valid credentials by username with deposits', async ({ page }) => {

});

test('login with valid credentials by username without deposits', async ({ page }) => {

});

test('login with valid credentials by email with deposits', async ({ page }) => {


});

test('login with valid credentials by email without deposits', async ({ page }) => {

});

test('not login with invalid credentials by username', async ({ page }) => {

});

test('login without valid credentials by email', async ({ page }) => {

});


test('not login with an account that is force to reset password', async ({ page }) => {

});

test('not login with a user blocked', async ({ page }) => {

});


test('not login with unverified account', async ({ page }) => {


});