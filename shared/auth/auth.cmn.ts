import { expect, Page } from '@playwright/test';

export class LoginComponent{
    protected readonly page:Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    public async visit(){
        await this.page.getByRole('button', { name: 'Acceder' }).click();
    }

    public async login(username:string, password:string){
        this.visit();
        await this.page.getByRole('textbox', { name: 'Usuario / Correo electrónico' }).click();
        await this.page.getByRole('textbox', { name: 'Usuario / Correo electrónico' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Contraseña' }).click();
        await this.page.getByRole('textbox', { name: 'Contraseña' }).fill(password);
        await this.page.locator('login-page').getByRole('button', { name: 'Acceder' }).click();
    }


    public async badCredentialsMessageExpected(){
        await expect(await this.page.locator('div').filter({ hasText: 'Error de inicio de sesión' })).toBeVisible();
        await expect(this.page.getByText('Por favor, revisa los datos y vuelve a intentarlo. Ten en cuenta el uso de mayús')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'OK' })).toBeVisible();
    }
}