const {test, expect} = require('@playwright/test')

export class Overview {
    #itemnumberlabelShoppingCart = '.shopping_cart_badge';
    #labelBackpack = '#item_4_title_link > .inventory_item_name';
    #labelBackpackQuantity = ':nth-child(3) > .cart_quantity';
    #labelPriceBackpack = ':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price';
    #labelBoltTShirt = '#item_1_title_link > .inventory_item_name';
    #labelBoltTShirtQuantity = ':nth-child(4) > .cart_quantity';
    #labelPriceBoltTShirt = ':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price';
    #labelBikeLight = '#item_0_title_link > .inventory_item_name';
    #labelBikeLightQuantity = ':nth-child(5) > .cart_quantity';
    #labelPriceBikeLight = ':nth-child(5) > .cart_item_label > .item_pricebar > .inventory_item_price';
    #buttonCheckOut = '#checkout';

    constructor(page) {
        this.page = page;
    }

    async validateBackpackLabel(txt) {
        await expect(this.page.locator(this.#labelBackpack)).toHaveText(txt);
    }

    async validateBackpackQuantity(qty) {
        await expect(this.page.locator(this.#labelBackpackQuantity)).toHaveText(qty);
    }

    async validateBackpackPrice(price) {
        await expect(this.page.locator(this.#labelPriceBackpack)).toHaveText(price);
    }

    async validateBoltTShirtLabel(txt) {
        await expect(this.page.locator(this.#labelBoltTShirt)).toHaveText(txt);
    }

    async validateBikeLightLabel(txt) {
        await expect(this.page.locator(this.#labelBikeLight)).toHaveText(txt);
    }

    async validateBikeLightQuantity(qty) {
        await expect(this.page.locator(this.#labelBikeLightQuantity)).toHaveText(qty);
    }

    async  validateBikeLigthPrice(price) {
        await expect(this.page.locator(this.#labelPriceBikeLight)).toHaveText(price);
    }

    async checkOut() {
        await this.page.click(this.#buttonCheckOut);
    }
}