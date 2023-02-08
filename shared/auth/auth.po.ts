import { Page, Locator } from '@playwright/test';
import { HomePageObjects } from '../../pages/home-page/home-page.po';

export class LoginComponentObjects{
    protected readonly page:Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    public get LoginPopup():Locator
    {
        return this.page.locator('login-page');
    }

    public get UsernameInput():Locator
    {
        return this.page.getByRole('textbox', { name: 'Usuario / Correo electrónico' })
    }

    public get PasswordInput():Locator
    {
        return this.page.getByRole('textbox', { name: 'Contraseña' })
    }

    public get LoginSubmitBtn():Locator
    {
        return  this.page.locator('login-page').getByRole('button', { name: 'Acceder' })
    }

    // -------------   Messages Error --------------- //

    public get WrongCredencialsTitleErrorMessage():Locator
    {
        return this.page.locator('ion-alert > div').filter({ hasText: 'Error de inicio de sesión' })
    }

    public get WrongCredencialsDescriptionErrorMessage():Locator
    {
        return this.page.locator('ion-alert').getByText('Por favor, revisa los datos y vuelve a intentarlo. Ten en cuenta el uso de mayús')
    }




    public get EmptyCredencialsTitleErrorMessage():Locator
    {
        return this.page.locator('ion-alert > div').filter({ hasText: 'Login' })
    }

    public get EmptyCredencialsDescriptionErrorMessage():Locator
    {
        return this.page.locator('ion-alert').getByText('Revisa que todos los campos estén rellenos')
    }




}