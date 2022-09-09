const page = require('./page')

const orgDetailsName = '//app-general-settings/form/div/div[2]/div[1]//input'
const orgDetailsDescription = '[formcontrolname="description"]'
const billingName = '//form/div/div[2]/div[2]/app-form-control[1]/div/div[2]/input'
const billingEmail = '//form/div/div[2]/div[2]/app-form-control[2]/div/div[2]/input'
const billingPhone = '//form/div/div[2]/div[2]/app-form-control[3]/div/div[2]/input'
const settingsHeader = 'a[class="ng-star-inserted"]'
const usersLink = '//*[contains(text(), "Users") and @class="nav-link"]'

class OrganisationSettingsPage {
    async clickUsersLink() {
        return await page.click(usersLink)
    }

    async isUserLinkDisplayed(){
        return await page.isElementDisplayed(usersLink)
    }

    async isUserLinkClickable(){
        return await page.isElementClickable(usersLink)
    }

    async isSettingsHeaderDisplayed() {
        return await page.isElementDisplayed(settingsHeader)
    }

    async getSettingsHeaderText() {
        return await page.getElementText(settingsHeader)
    }

    async isBillingPhoneDisplayed(){
        return await page.isElementDisplayed(billingPhone)
    }

    async isBillingPhoneClickable(){
        return await page.isElementClickable(billingPhone)
    }

    async isBillingEmailDisplayed(){
        return await page.isElementDisplayed(billingEmail)
    }

    async isBillingEmailClickable(){
        return await page.isElementClickable(billingEmail)
    }

    async isBillingNameDisplayed(){
        return await page.isElementDisplayed(billingName)
    }

    async isBillingNameClickable(){
        return await page.isElementClickable(billingName)
    }

    async isOrgDetailsDescriptionDisplayed(){
        return await page.isElementDisplayed(orgDetailsDescription)
    }

    async isOrgDetailsDescriptionClickable(){
        return await page.isElementClickable(orgDetailsDescription)
    }

    async isOrgDetailsNameDisplayed(){
        return await page.isElementDisplayed(orgDetailsName)
    }

    async isOrgDetailsNameClickable(){
        return await page.isElementClickable(orgDetailsName)
    }

}

module.exports = new OrganisationSettingsPage();