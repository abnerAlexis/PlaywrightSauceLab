const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/login.page';
import { Inventory } from '../pages/inventory';
import { Cart } from '../pages/cart';
import { Checkout } from '../pages/checkOut';
import { Overview } from '../pages/overview';

test('test sauce lab', async ({ page }) => {
    let loginPage = new LoginPage(page);
    let inventory = new Inventory(page);
    let cart = new Cart(page);
    let checkOut = new Checkout(page);
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

    await checkOut.enterPersonalInfo('Shae', 'Schlage','12456');
    await checkOut.continueToOverview();

    await overview.validateBackpackLabel('Sauce Labs Backpack');
    await overview.validateBackpackPrice('$29.99');
    await overview.validateBackpackQuantity('1');

    await overview.validateBikeLightLabel('Sauce Labs Bike Light');
    await overview.validateBikeLigthPrice('$9.99');
    await overview.validateBikeLightQuantity('1');

    await overview.validateBoltTShirtLabel('Sauce Labs Bolt T-Shirt');
    await overview.validateBoltTShirtPrice('$15.99');
    await overview.validateBoltTShirtQuantity('1');
    
    await overview.validateSubtotal('Item total: $55.97');
    await overview.validateTax('Tax: $4.48');
    await overview.validateTotal('Total: $60.45');
    // await page.pause();
});