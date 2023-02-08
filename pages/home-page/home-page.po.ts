import { Page, Locator } from '@playwright/test';

export class HomePageObjects{
    protected readonly page:Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    public get LoginBtn():Locator
    {
        return  this.page.getByRole('button', { name: 'Acceder' });
    }

    public get GDPRAcceptBtn():Locator
    {
        return  this.page.getByRole('button', { name: 'ACEPTAR' })
    }



}