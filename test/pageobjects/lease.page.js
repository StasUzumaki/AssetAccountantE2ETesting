const page = require('./page')

const newLeaseAssetForm = '//app-standard-page-content[1]/div/div'
const paymentLeaseAssetForm = '//app-standard-page-content[2]/div/div'
const amountLeaseForm = '//app-standard-page-content[3]/div/div'
const leaseNameField = '[formcontrolname="name"]'
const leaseCodeNumberField = '[formcontrolname="code"]'
const leaseDescrField = '[formcontrolname="description"]'
const hirePurchaseYesBtn = '[for="hirePurchase-yes"]'
const hirePurchaseNoBtn = '[for="hirePurchase-no"]'
const leaseStartDate = '[formcontrolname="acquisitionDate"] input'
const leaseFirstUseDate = '[formcontrolname="firstUseDate"] input'
const leaseQuantityField = '[formcontrolname="quantity"]'
const leaseQuantityUnitsSelect = '//div//div/select'
const paymentDateField = '[formcontrolname="paymentDate"] input'
const paymentPrincipalField = '[formcontrolname="principal"] input'
const paymentInterestField = '[formcontrolname="interest"] input'
const paymentOtherField = '[formcontrolname="other"] input'
const leaseSaveBtn = '//form/div/div/button'
const leaseColumnHeader = '[col-id="LeaseGroup_0"]'
const alertMessageGenerateScheduleBtn = '[class="alert-message"] button'
const generatePaymentScheduleForm = '//app-side-panel/div'
const generatePaymentScheduleTitle = '//app-side-panel/div//h3'
const amountFinancedField = '[formcontrolname="amountFinanced"] input'
const amountCapitalisedField = '[formcontrolname="amountCapitalised"] input'
const addPaymentsBtn = '//form/div[3]/div[1]/button'
const firstLeasePaymentField = '//form/div[2]/div[1]/div[2]//input'
const firstFrequencyDropDown = '//form/div[2]/div[1]/div[4]/div/select'
const secondLeasePaymentField = '//form/div[2]/div[2]/div[2]//input'
const secondFrequencyDropDown = '//form/div[2]/div[2]/div[4]/div/select'
const secondQuantityField = '//form/div[2]/div[2]/div[4]/div[1]/input'
const generateScheduleBtn = '//div[3]/div[2]/button[1]'
const useScheduleBtn = '//div[3]/div[2]/button[2]'
const paymentScheduleTable = '//app-generate-payment-schedule/table'
const leaseGroupSelect = '//app-asset-group-selector/select'

class LeasePage {
    
    async isPaymentScheduleTableDisplayed() {
        return await page.isElementDisplayed(paymentScheduleTable)
    }
    
    async clickUseScheduleBtn() {
        return await page.click(useScheduleBtn)
    }
    
    async clickGenerateScheduleBtn() {
        return await page.click(generateScheduleBtn)
    }
    
    async setSecondQuantityFieldValue(secondQuantityFieldInput) {
        return await page.setValue(secondQuantityField, secondQuantityFieldInput)
    }
    
    async setSecondFrequencyDropDownValue(secondFrequencyDropDownValue) {
        return await page.clickDropdownItemByIndex(secondFrequencyDropDown, secondFrequencyDropDownValue)
    }

    
    async setSecondLeasePaymentFieldValue(secondLeasePaymentFieldInput) {
        return await page.setValue(secondLeasePaymentField, secondLeasePaymentFieldInput)
    }
    
    async setFirstFrequencyDropDownValue(firstFrequencyDropDownValue) {
        return await page.clickDropdownItemByIndex(firstFrequencyDropDown, firstFrequencyDropDownValue)
    }
    
    async setFirstLeasePaymentFieldValue(firstLeasePaymentFieldInput) {
        return await page.setValue(firstLeasePaymentField, firstLeasePaymentFieldInput)
    }
    
    async clickAddPaymentsBtn() {
        return await page.click(addPaymentsBtn)
    }

    async getAmountCapitalisedFieldValue() {
        return await page.getElementValue(amountCapitalisedField)
    }
    
    async setAmountFinancedFieldValue(amountFinancedFieldInput) {
        return await page.setValue(amountFinancedField, amountFinancedFieldInput)
    }
    
    async getGeneratePaymentScheduleTitleText() {
        return await page.getElementText(generatePaymentScheduleTitle)
    }
    
    async isGeneratePaymentScheduleFormDisplayed() {
        return await page.isElementDisplayed(generatePaymentScheduleForm)
    }
    
    async clickAlertMessageGenerateScheduleBtn() {
        return await page.click(alertMessageGenerateScheduleBtn)
    }
    
    async isLeaseColumnHeaderDisplayed() {
        return await (await page.getElement(leaseColumnHeader)).isDisplayed()
    }
    
    async clickLeaseSaveBtn() {
        return await page.click(leaseSaveBtn)
    }
    
    async setPaymentOtherFieldValue(paymentOtherFieldInput) {
        return await page.setValue(paymentOtherField, paymentOtherFieldInput)
    }
    
    async setPaymentInterestFieldValue(paymentInterestFieldInput) {
        return await page.setValue(paymentInterestField, paymentInterestFieldInput)
    }
    
    async setPaymentPrincipalFieldValue(paymentPrincipalFieldInput) {
        return await page.setValue(paymentPrincipalField, paymentPrincipalFieldInput)
    }
    
    async setPaymentDateFieldValue(paymentDateFieldInput) {
        return await page.setValue(paymentDateField, paymentDateFieldInput)
    }
    
    async setLeaseQuantityUnitsSelectValue() {
        return await page.clickDropdownItemByIndex(leaseQuantityUnitsSelect, 1)
    }
    
    async setLeaseQuantityFieldValue(leaseQuantityFieldInput) {
        return await page.setValue(leaseQuantityField, leaseQuantityFieldInput)
    }
    
    async setLeaseFirstUseDateValue(leaseFirstUseDateInput) {
        return await page.setValue(leaseFirstUseDate, leaseFirstUseDateInput)
    }
    
    async setLeaseStartDateValue(leaseStartDateInput) {
        return await page.setValue(leaseStartDate, leaseStartDateInput)
    }
    
    async clickHirePurchaseNoBtn() {
        return await page.click(hirePurchaseNoBtn)
    }
    
    async clickHirePurchaseYesBtn() {
        return await page.click(hirePurchaseYesBtn)
    }
    
    async setLeaseGroupSelectValue() {
        return await page.clickDropdownItemByIndex(leaseGroupSelect, 1)
    }
    
    async setLeaseDescrFieldValue(leaseDescrFieldInput) {
        return await page.setValue(leaseDescrField, leaseDescrFieldInput)
    }
    
    async setLeaseCodeNumberFieldValue(leaseCodeNumberFieldInput) {
        return await page.setValue(leaseCodeNumberField, leaseCodeNumberFieldInput)
    }
    
    async setLeaseNameFieldValue(leaseNameFieldInput) {
        return await page.setValue(leaseNameField, leaseNameFieldInput)
    }
    
    async isAmountLeaseFormDisplayed() {
        return await page.isElementDisplayed(amountLeaseForm)
    }
    
    async isPaymentLeaseAssetFormDisplayed() {
        return await page.isElementDisplayed(paymentLeaseAssetForm)
    }

    async isNewLeaseAssetFormDisplayed() {
        return await page.isElementDisplayed(newLeaseAssetForm)
    }
}

module.exports = new LeasePage();