const {test, expect} = require('@playwright/test')

export class LoginPage {
    #usernameTextbox = '[data-test="username"]';
    #passwordTextbox = '[data-test="password"]';
    #loginButton = '[data-test="login-button"]';
    
    constructor(page) {
        this.page = page;       
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.type(this.#usernameTextbox, username);
        await this.page.type(this.#passwordTextbox, password);
        await this.page.click(this.#loginButton);
        return this;
    }
}