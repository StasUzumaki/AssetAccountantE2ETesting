const page = require('./page')

const paymentForm = '[class="form-check"]'
const subscriptionForm = '[class="modal-content"]'
const toggleForAccountingFirms = '[class="switch"]'
const standartChangePlanBtn = '//div[2]/div[2]/app-pricing-package-actions/div/button'
const standartPlusLeasesChangePlanBtn = '//div[2]/div[2]/div[2]//div/button'
const paymentMethodForm = '//ngb-modal-window[2]/div/div'
const paymentUpgradeSubBtn = '[class="modal-footer"] button'
const currentAccountPlan = '[class="card p-4 border"]'
const currentPaymentMethodAlert = '[class="alert-message"]'
const organisationSettingsUpgradeBtn = '//app-payment-settings/div[1]/div/button'
const cardNumberField = '//*[@id="root"]/form/span[2]/div/div[2]/span/input'
const cardExpiryField = '//*[@id="root"]/form/span[2]/span/input'
const cvcField = '//*[@id="root"]/form/span[2]/span/input'
const cardNumberInput = '//app-form-control[1]/div/div[2]/label'
const cardExpiryInput = '//app-form-control[2]/div/div[2]/label'
const cvcInput = '//app-form-control[3]/div/div[2]/label'

class SubscriptionAndPaymentPage {
    
    async isCvcInputDisplayed() {
        return await page.isElementDisplayed(cvcInput)
    }
    
    async isCardExpiryInputDisplayed() {
        return await page.isElementDisplayed(cardExpiryInput)
    }
    
    async isCardNumberInputDisplayed() {
        return await page.isElementDisplayed(cardNumberInput)
    }
    
    async setCvcFieldValue(cvcFieldInput) {
        return await page.setValue(cvcField, cvcFieldInput)
    }
    
    async setCardExpiryFieldValue(cardExpiryFieldInput) {
        return await page.setValue(cardExpiryField, cardExpiryFieldInput)
    }

    async setCardNumberFieldValue(cardNumberFieldInput) {
        return await page.setValue(cardNumberField, cardNumberFieldInput)
    }

    async isChangePlanBtnDisplayed() {
        return await page.isElementDisplayed(organisationSettingsUpgradeBtn)
    }

    async isChangePlanBtnClickable(){
        return await page.isElementClickable(organisationSettingsUpgradeBtn)
    }

    async clickOrganisationSettingsUpgradeBtn() {
        return await page.click(organisationSettingsUpgradeBtn)
    }
    
    async isCurrentPaymentMethodAlertDisplayed() {
        return await page.isElementDisplayed(currentPaymentMethodAlert)
    }
    
    async isCurrentAccountPlanDispalyed() {
        return await page.isElementDisplayed(currentAccountPlan)
    }
    
    async clickPaymentUpgradeSubBtn() {
        return await page.click(paymentUpgradeSubBtn)
    }

    async isPaymentMethodFormDisplayed() {
        return await page.isElementDisplayed(paymentMethodForm)
    }
    
    async clickStandartPlusLeasesChangePlanBtn(){
        return await page.click(standartPlusLeasesChangePlanBtn)
    }
    
    async clickStandartChangePlanBtn() {
        return await page.click(standartChangePlanBtn)
    }
    
    async clickToggleForAccountingFirms() {
        return await page.click(toggleForAccountingFirms)
    }
    
    async isSubscriptionFormDisplayed() {
        return await page.isElementDisplayed(subscriptionForm)
    }

    async isPaymentFormDisplayed() {
        return await page.isElementDisplayed(paymentForm)
    }

}

module.exports = new SubscriptionAndPaymentPage();