import { expect, Page } from '@playwright/test';
import { HomePageObjects } from '../../pages/home-page/home-page.po';
import { LoginComponentObjects } from './auth.po';

export class LoginComponent{
    protected readonly page:Page;
    protected readonly loginComponentObjects:LoginComponentObjects;

    constructor(page: Page)
    {
        this.page = page;
        this.loginComponentObjects = new LoginComponentObjects(page);
    }

    public async visit(){
        const homePageObjects = new HomePageObjects(this.page);
        await homePageObjects.LoginBtn.click();
    }

    public async login(username, password){
        this.visit();
        await this.loginComponentObjects.UsernameInput.click();
        await this.loginComponentObjects.UsernameInput.fill(username);
        await this.loginComponentObjects.PasswordInput.click();
        await this.loginComponentObjects.PasswordInput.fill(password);
        await this.loginComponentObjects.LoginSubmitBtn.click();
    }

    public async badCredentialsMessageExpected(){
        await expect(this.loginComponentObjects.WrongCredencialsTitleErrorMessage).toBeVisible();
        await expect(this.loginComponentObjects.WrongCredencialsDescriptionErrorMessage).toBeVisible();
    }
}