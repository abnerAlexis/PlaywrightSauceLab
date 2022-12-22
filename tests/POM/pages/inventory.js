const {test, expect} = require('@playwright/test')

export class Inventory {

    #buttonAddBackPack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    #buttonRemoveBackPack = '[data-test="remove-sauce-labs-backpack"]';
    #buttonAddBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    #buttonremoveBikeLight = '[data-test="remove-sauce-labs-bike-light"]';
    #buttonAddBoltTShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'; 
    #buttonRemoveBoltShirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]';  
    #buttonAddFleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
    #buttonRemoveFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';
    #buttonAddOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]';
    #buttonRemoveOnesie = '[data-test="remove-sauce-labs-onesie"]';
    #buttonAddTestAllThingsRedTShirt = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]';
    #buttonRemoveTestAllThingsRedShirt = '[data-test="remove-test.allthethings()-t-shirt-(red)"]';
    #numOfItemsInShoppingCart = '.shopping_cart_badge';
    #shoppingCartLink = '.shopping_cart_link';

    constructor(page) {
        this.page = page;
    }

    async validateRemoveBackpackBtnText() {
        await expect(this.page.locator(this.#buttonAddBackPack)).toHaveText('Add to cart');
        return this;
    }

    async addBackPack(){
        await this.page.click(this.#buttonAddBackPack);
    }

    async validateRemoveBackpackBtnText() {
        await expect(this.page.locator(this.#buttonRemoveBackPack)).toHaveText('Remove');
        return this;
    }

    async removeBackpack() {
        await this.page.click(this.#buttonRemoveBackPack).click();
        return this;
    }

    async addBikeLight() {
        await this.page.click(this.#buttonAddBikeLight);
    }

    async removeBikeLight() {
        await this.page.click(this.#buttonremoveBikeLight);
    }
}