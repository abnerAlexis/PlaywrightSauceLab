const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/login.page';
import { Inventory } from '../pages/inventory';
import { Cart } from '../pages/cart';
import { Overview } from '../pages/overview';

test('test sauce lab', async ({ page }) => {
    let loginPage = new LoginPage(page);
    let inventory = new Inventory(page);
    let cart = new Cart(page);
    let overview = new Overview(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventory.validateHiddenCartItem();
    await inventory.addBackPack();
    await inventory.validateRemoveBackpackBtnText();
    await inventory.addBikeLight();
    await inventory.addBoltTShirt();
    await inventory.addTestAllTheThingsShirt();
    await inventory.validateCartItem('4');
    await inventory.goToShoppingCart();

    await cart.removeTestAllTheThingsShirt();
    await cart.checkOut();
    await page.pause();
});