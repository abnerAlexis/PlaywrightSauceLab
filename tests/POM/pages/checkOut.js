const {test, expect} = require('@playwright/test')

export class Checkout {
    constructor(page) {
        this.page = page;
    }

    #firstnameTextBox = '[data-test="firstName"]';
    #lastnameTextBox = '[data-test="lastName"]';
    #zipcodeTextBox = '[data-test="postalCode"]';
    #buttonContinue = '[data-test="continue"]';

    async enterPersonalInfo() {
        await this.page.type
    }
}

//await this.page.type(this.#usernameTextbox, username);
// await this.page.type(this.#passwordTextbox, password);
// await this.page.click(this.#loginButton);