const page = require('./page')

const cancelRegisterBtn = '//form/div[2]/button[1]'
const closeBtn = '[class="btn-close"]'
const saveBtn = '[type="submit"]'
const userProfileLink = '#user-profile'
const userProfileName = '//*[@id="user-profile"]/span'
const logoutProfileBtn = '//*[@id="avatar-dropdown-menu"]/button[3]'
const createFirstRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const createARegisterBtn = '//app-alert/div/div[2]/button'
const createNewRegisterForm = '[class="modal-content"]'
const registerName = '[formcontrolname="name"]'
const entityName = '[formcontrolname="entityName"]'
const nextRegisterBtn = '[class="btn btn-primary ms-2"]'
const tryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const registerSelection = '#register-selection'
const organisationSelectionDropDown = '#org-selection'
const createNewOrganisationLink = '//*[contains(text(), " Create new organisation")]'
const registersLink = '//nav/section[2]/a'
const allRegisters = '[class="dropdown-item text-primary"]'
const createNewOrganisationForm = '[class="modal-content"]'
const organisationNameField = '//form/div[1]/app-form-control[1]/div/div[2]/input'
const organisationDescriptionField = '//form/div[1]/app-form-control[2]/div/div[2]/input'
const selectCountry = '//app-form-control[3]/div/div[2]/select'
const billingContactNameField = '//form/div[1]/div/app-form-control[1]/div/div[2]/input'
const billingContactEmailField = '//form/div[1]/div/app-form-control[2]/div/div[2]/input'
const billingContactPhoneField = '//form/div[1]/div/app-form-control[3]/div/div[2]/input'
const newOrganisationSaveBtn = '//div[@class="modal-footer"]/button[2]'
const organisationNamesList = '//nav/section[2]/div/div'
const demoRegisterLink = '//app-header-bar/div/div/div[1]/div'
const settingsHeaderWithExistingReg = '[class="page-heading"] h3'
const assetsLink = '[href*="/assets"]'
const journalLink = '[href*="/journals"]'
const deleteConfirmationOkBtn = `//*[@class='modal-footer']/button[2]`
const deleteConfirmationTitle = '//*[contains(text(), "Delete Confirmation")]'
//register settings link
const registerSettingsLink = `//a[contains(.,'Register Settings')]` //'//nav/section[3]/div/a[5]'
const registerSettingsLinkOnly = '//nav/section[3]/div/a[4]'
const registerSettingsWithXeroLink = '//nav/section[3]/div/a[6]'
//organisation settings link
const organisationSettingsLink = `//a[contains(.,'Organisation Settings')]`//'//nav/section[3]/div/a[4]'
const organisationSettings = '//nav/section[3]/div/a[4] [contains(text(), " Settings")]'
const organisationSettingsWithRegisters = '//*[contains(text(), "Organisation Settings")]'
//users tab
const inviteUserForm = '//div/div//form'// for both 
const emailInviteField = '//div/div[2]/input'// for both 
const inviteBtn = '//form/div[3]/button[2]'// for both
const invintationAlert = '[role="alertdialog"][aria-live="polite"]'//for both

//quickbook connection
const tryAgainBtn = '//div/div/div[1]/div[2]/div/a'
const newOrganisationSelect = '#organisationId'
const quickbooksConnectBtn = '//app-quickbooks-select-register//button[2]'
const quickbooksAlertMessage = '[class="alert-message"]'
const quickbooksDisconnectBtn = '//div/div/app-alert/div/div[2]/div/button'
const disconnectConfirmationForm = '[class="modal-content"]'
const disconnectConfirmationBtn = '//ng-component/div[3]/button[2]'
const externalIntegrationForm = '//app-view-integrations/div'

//need to rework
//integration 
const quickbooksOnlineDropDown = '//*[@id="static-1-header"]/button'
const connectToQuickBooksBtn = '//app-quickbooks-connect/div/input'
const xeroDropDown = '//*[@id="static-3-header"]/button'
const connectToXeroBtn = '//app-xero-connect/input'
const xeroDisconnectBtn = '//app-alert/div/div[2]/div/button'
const xeroAlertMessage = '[class="alert-message"]'
const setUptoUseForm = '//div/div/div/div[2]/form'
const setUpToUseConnectBtn = '//form/div[2]/div[1]/button[2]'

class DevAssetMainpage {
    async isXeroAlertMessageDisplayed() {
        return await page.isElementDisplayed(xeroAlertMessage)
    }

    async getXeroAlertMessageText() {
        return await page.getElementText(xeroAlertMessage)
    }

    async clickXeroDisconnectBtn() {
        return await page.click(xeroDisconnectBtn)
    }
    //integration
    async clickSetUpToUseConnectBtn() {
        return await page.click(setUpToUseConnectBtn)
    }

    async isSetUptoUseFormDisplayed() {
        return await page.isElementDisplayed(setUptoUseForm)
    }

    async clickConnectToXeroBtn() {
        return await page.click(connectToXeroBtn)
    }

    async clickXeroDropDown() {
        return await page.click(xeroDropDown)
    }

    async clickConnectToQuickBooksBtn() {
        return await page.click(connectToQuickBooksBtn)
    }

    async clickQuickbooksOnlineDropDown() {
        return await page.click(quickbooksOnlineDropDown)
    }

    //quickbook connection
    async selectNewOrganisationValue(newOrganisationSelectValue) {
        return await page.clickDropdownItemByIndex(newOrganisationSelect, newOrganisationSelectValue)
    }

    async isExternalIntegrationFormDisplayed() {
        return await page.isElementDisplayed(externalIntegrationForm)
    }

    async clickDisconnectConfirmationBtn() {
        return await page.click(disconnectConfirmationBtn)
    }

    async isDisconnectConfirmationFormDisplayed() {
        return await page.isElementDisplayed(disconnectConfirmationForm)
    }

    async clickQuickbooksDisconnectBtn() {
        return await page.click(quickbooksDisconnectBtn)
    }

    async isQuickbooksAlertMessageDisplayed() {
        return await page.isElementDisplayed(quickbooksAlertMessage)
    }

    async getQuickbooksAlertMessageText() {
        return await page.getElementText(quickbooksAlertMessage)
    }

    async clickQuickbooksConnectBtn() {
        return await page.click(quickbooksConnectBtn)
    }

    async isNewOrganisationSelectDisplayed() {
        return await page.isElementDisplayed(newOrganisationSelect)
    }

    async clickTryAgainBtn() {
        return await page.click(tryAgainBtn)
    }
    //profile
    async getUserProfileNameText() {
        return await page.getElementText(userProfileName)
    }

    async clickSaveBtn() {
        return await page.click(saveBtn)
    }
    //

    async clickRegisterSettingsLink() {
        return await page.click(registerSettingsLink)
    }

    async clickRegisterSettingsLinkOnly(){
        return await page.click(registerSettingsLinkOnly)
    }

    async clickRegisterSettingsWithXeroLink() {
        return await page.click(registerSettingsWithXeroLink)
    }

    async isRegisterSettingsDisplayed() {
        return await page.isElementDisplayed(registerSettingsLink)
    }

    async isRegisterSettingsLinkOnly(){
        return await page.isElementDisplayed(registerSettingsLinkOnly)
    }

    async isOrganisationSettingsExisting(){
        return await page.isElementExisting(organisationSettings)
    }

    async isOrganisationSettingsDisplayed(){
        return await page.isElementDisplayed(organisationSettings)
    }
        
    async isOrganisationSettingsClickable() {
        return await page.isElementClickable(organisationSettings)
    }

    async isOrganisationSettingsWithRegistersDisplayed(){
        return await page.isElementDisplayed(organisationSettingsWithRegisters)
    }

    async isInvintationAlertDisplayed() {
        return await page.isElementDisplayed(invintationAlert)
    }

    async getInvintationAlertText() {
        return await page.getElementText(invintationAlert)
    }

    async setEmailInviteFieldValue(emailInviteFieldInput) {
        return await page.setValue(emailInviteField, emailInviteFieldInput)
    }

    async isInviteUserFormDisplayed() {
        return await page.isElementDisplayed(inviteUserForm)
    }

    async clickInviteBtn() {
        return await page.click(inviteBtn)
    }

    async clickJournalLink() {
        return await page.click(journalLink)
    }

    async clickCloseBtn() {
        return await page.click(closeBtn)
    }

    async clickCancelRegisterBtn(){
        return await page.click(cancelRegisterBtn)
    }

    async clickRegistersLink() {
        return await page.click(registersLink)
    }

    async clickCreateFirstRegisterBtn() {
        return await page.click(createFirstRegisterBtn)
    }

    async isCreateFirstRegisterBtnDisplayed(){
        return await page.isElementDisplayed(createFirstRegisterBtn)
    }

    async clickUserProfileLink() {
        return await page.click(userProfileLink)
    }

    async clickLogoutProfileBtn() {
        return await page.click(logoutProfileBtn)
    }

    async setRegisterNameValue(registerNameInput) {
        return await page.setValue(registerName, registerNameInput)
    }

    async setRegisterEntityValue(entityNameInput) {
        return await page.setValue(entityName, entityNameInput)
    }

    async clickNextRegisterBtn() {
        return await page.click(nextRegisterBtn)
    }

    async clickTryForFreeBtn() {
        return await page.click(tryForFreeBtn)
    }

    async clickCreateARegisterBtn(){
        return await page.click(createARegisterBtn)
    }

    async clickRegisterSelectionDropDown() {
        return await page.click(registerSelection)
    }

    async clickAllRegistersLink() {
        return await page.click(allRegisters)
    }

    async clickCreateOrganisationSelectionDropDown() {
        return await page.click(organisationSelectionDropDown)
    }

    async clickCreateNewOrganisationLink() {
        return await page.click(createNewOrganisationLink)
    }

    async clickNewOrganisationSaveBtn() {
        return await page.click(newOrganisationSaveBtn)
    }

    async clickOrganisationSettingsLink() {
        return await page.click(organisationSettingsLink)
    }

    async isOrganisationSettingsLinkDisplayed(){
        return await page.isElementDisplayed(organisationSettingsLink)
    }

    async clickAssetsLink() {
        return await page.click(assetsLink)
    }

    async clickDeleteCofirmationOkBtn() {
        return await page.click(deleteConfirmationOkBtn)
    }

    async selectCountryValue() {
        return await page.clickDropdownItemByIndex(selectCountry, 1)
    }

    async setOrganisationNameField(organisationNameFieldInput) {
        return await page.setValue(organisationNameField, organisationNameFieldInput)
    }

    async setOrganisationDescriptionField(organisationDescriptionFieldInput) {
        return await page.setValue(organisationDescriptionField, organisationDescriptionFieldInput)
    }

    async setBillingContactNameField(billingContactNameFieldInput) {
        return await page.setValue(billingContactNameField, billingContactNameFieldInput)
    }

    async setBillingContactEmailField(billingContactEmailFieldInput) {
        return await page.setValue(billingContactEmailField, billingContactEmailFieldInput)
    }

    async setBillingContactPhoneField(billingContactPhoneFieldInput) {
        return await page.setValue(billingContactPhoneField, billingContactPhoneFieldInput)
    }

    async isCreateNewOrganisationFormDisplayed() {
        return await page.isElementDisplayed(createNewOrganisationForm)
    }

    async isCreateNewRegisterFormDisplayed() {
        return await page.isElementDisplayed(createNewRegisterForm)
    }

    async isRegisterNameFieldDisplayed() {
        return await page.isElementDisplayed(registerName)
    }

    async isEntityNameFieldDisplayed() {
        return await page.isElementDisplayed(entityName)
    }

    async isDeleteConfirmationTitleDisplayed() {
        return await page.isElementDisplayed(deleteConfirmationTitle)
    }

    async getCurrentOrganisationNamesListText() {
        return await page.getElementText(organisationNamesList)
    }

    async isDemoRegisterLinkDisplayed() {
        return await page.isElementDisplayed(demoRegisterLink)
    }

    async isSettingsHeaderWithExistingRegDisplayed() {
        return await page.isElementDisplayed(settingsHeaderWithExistingReg)
    }

    async getSettingsHeaderWithExistingRegText() {
        return await page.getElementText(settingsHeaderWithExistingReg)
    }

    async getDemoRegisterText() {
        return await page.getElementText(demoRegisterLink)
    }
}
module.exports = new DevAssetMainpage();