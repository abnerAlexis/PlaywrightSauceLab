const {test, expect} = require('@playwright/test')

export class Checkout {
    constructor(page) {
        this.page = page;
    }

    #firstnameTextBox = '[data-test="firstName"]';
    #lastnameTextBox = '[data-test="lastName"]';
    #zipcodeTextBox = '[data-test="postalCode"]';
    #buttonContinue = '[data-test="continue"]';

    async enterPersonalInfo(firstname, lastname, zipcode) {
        await this.page.type(this.#firstnameTextBox, firstname);
        await this.page.type(this.#lastnameTextBox, lastname);
        await this.page.type(this.#zipcodeTextBox, zipcode);
    }
    
    async continueToOverview() {
        await this.page.click(this.#buttonContinue);
    }
}