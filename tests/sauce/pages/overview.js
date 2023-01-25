const {test, expect} = require('@playwright/test')

export class Overview {

    constructor(page) {
        this.page = page;
    }

    #labelBackpack = '#item_4_title_link > .inventory_item_name';
    #labelBackpackQuantity = ':nth-child(3) > .cart_quantity';
    #labelPriceBackpack = ':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price';
    #labelBoltTShirt = '#item_1_title_link > .inventory_item_name';
    #labelBoltTShirtQuantity = '#checkout_summary_container > div > div.cart_list > div:nth-child(5) > div.cart_quantity';
    #labelPriceBoltTShirt = '#checkout_summary_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label > div.item_pricebar > div';
    #labelBikeLight = '#item_0_title_link > .inventory_item_name';
    #labelBikeLightQuantity = ':nth-child(5) > .cart_quantity';
    #labelPriceBikeLight = '#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div';
    #subTotal = '//*[@id="checkout_summary_container"]/div/div[2]/div[5]';
    #tax = '//*[@id="checkout_summary_container"]/div/div[2]/div[6]';
    #total = '//*[@id="checkout_summary_container"]/div/div[2]/div[7]';
    #finish = '//*[@id="finish"]';

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

    async validateBoltTShirtPrice(price) {
        await expect(this.page.locator(this.#labelPriceBoltTShirt)).toHaveText(price);
    }

    async validateBoltTShirtQuantity(qty) {
        await expect(this.page.locator(this.#labelBoltTShirtQuantity)).toHaveText(qty);
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

    async validateSubtotal(itemTotal) {
        await expect(this.page.locator(this.#subTotal)).toHaveText(itemTotal);
    }

    async validateTax(tax) {
        await expect(this.page.locator(this.#tax)).toHaveText(tax);
    }

    async validateTotal(total) {
        await expect(this.page.locator(this.#total)).toHaveText(total);
    }

    async finishShopping() {
        await this.page.click(this.#finish);
    }
}