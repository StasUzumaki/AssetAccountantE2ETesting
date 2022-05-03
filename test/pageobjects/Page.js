const defaultTimeout = 35000; // 20sec

class Page {

    async getElement(element) {
        return await $(element);
    }

    async waitForDisplayed(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }

    async waitForClickable(element, timeout = defaultTimeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isClickable();
        }, {timeout: timeout});
    }

    async click(element) {
        await this.waitForClickable(element);
        await (await this.getElement(element)).click();
    }

    async setValue(element, value) {
        await this.waitForDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }

    async addValue(element, value) {
        await this.waitForDisplayed(element);
        await (await this.getElement(element)).addValue(value);
    }

    async getElementText(element) {
        await this.waitForDisplayed(element);
        return (await this.getElement(element)).getText();
    }

    async isElementDisplayed(element) {
        await this.waitForDisplayed(element);
        return (await this.getElement(element)).isDisplayed();
    }

    async isElementClickable(element) {
        return (await this.getElement(element)).isClickable();
    }
}

module.exports = new Page();