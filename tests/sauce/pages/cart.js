const {test, expect} = require('@playwright/test')

export class Cart {
    constructor(page) {
        this.page = page;
    }
    
    #title = '.title';
    #buttonContinueShopping = '[data-test="continue-shopping"';
    #buttonCheckout = '[data-test="checkout"]';
    #buttonRemoveTestAllThingsShirt = '[data-test="remove-test.allthethings()-t-shirt-(red)"]';
    #buttonRemoveBackPack = '[data-test="remove-sauce-labs-backpack"]';
    #buttonRemoveBikeLight = '[data-test="remove-sauce-labs-bike-light"]';
    #buttonRemoveBoltTShirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
    #buttonRemoveFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';
    #buttonRemoveOnesie = '[data-test="remove-sauce-labs-onesie"]';

    async removeTestAllTheThingsShirt() {
        await this.page.click(this.#buttonRemoveTestAllThingsShirt);
    }

    async removeBackpack() {
        await this.page.click(this.#buttonRemoveBackPack);
    }

    async removeBikeLight() {
        await this.page.click(this.#buttonRemoveBikeLight);
    }

    async removeBoltTShirt() {
        await this.page.click(this.#buttonRemoveBoltTShirt);
    }

    async removeFleeceJacket() {
        await this.page.click(this.#buttonRemoveFleeceJacket);
    }

    async removeOnesie() {
        await this.page.click(this.#buttonRemoveOnesie);
    }

    async continueShopping() {
        await this.page.click(this.#buttonContinueShopping);
    }

    async checkOut() {
        await this.page.click(this.#buttonCheckout);
    }
}