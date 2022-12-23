const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/login.page';
import { Inventory } from '../pages/inventory';

test('test sauce lab', async ({ page }) => {
    let loginPage = new LoginPage(page);
    let inventory = new Inventory(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventory.validateHiddenCartItem();
    await inventory.addBackPack();
    await inventory.validateRemoveBackpackBtnText();
    await inventory.addBikeLight();
    await inventory.addBoltTShirt();
    await inventory.validateCartItem('3');
});