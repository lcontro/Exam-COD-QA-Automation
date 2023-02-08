import { Page } from '@playwright/test';

export class HomePage{
    protected readonly page:Page;

    constructor(page: Page)
    {
        this.page = page;
    }
    
}