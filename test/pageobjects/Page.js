const defaultTimeout = 30000; // 25sec

class Page {

    async getElement(element) {
        return await $(element);
    }

    async getAllElements(element) {
        return await $$(element);
    }

    async waitUntilDisplayed(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }

    async waitUntilNotDisplayed(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return !(await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }

    async waitUntilClickable(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isClickable();
        }, {timeout: timeout});
    }

    async click(element) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).click();
    }

    async setValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }

    async addValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).addValue(value);
    }

    async getElementText(element) {
        await this.waitUntilDisplayed(element);
        return (await this.getElement(element)).getText();
    }

    async isElementNotDisplayed(element) {
        await this.waitUntilNotDisplayed(element);
        return (await this.getElement(element)).isDisplayed();
    }

    async isElementDisplayed(element) {
        await this.waitUntilDisplayed(element);
        return (await this.getElement(element)).isDisplayed();
    }

    async isElementClickable(element) {
        return (await this.getElement(element)).isClickable();
    }

    async clickDropdownItemByText(element, text) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).selectByVisibleText(text);
    }

    async clickDropdownItemByIndex(element, index) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).selectByIndex(index);
    }
}

module.exports = new Page();