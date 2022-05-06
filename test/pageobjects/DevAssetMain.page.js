const page = require('./page')

const userProfileLink = '#user-profile'
const logoutProfileBtn = '//*[@id="avatar-dropdown-menu"]/button[3]'
const assetsAddBtn = '//app-view-asset-actions/div/button'
const createAssetBtn = '[routerlink="./new"]'
const createFirstRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const createRegisterBtn = '//div/div[2]/div/button[3]'
const createNewRegisterForm = '[class="modal-content"]'
const tableWithRegisters = '//tbody/tr'
const registerName = '[formcontrolname="name"]'
const entityName = '[formcontrolname="entityName"]'
const nextRegisterBtn = '[class="btn btn-primary ms-2"]'
const tryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const demoRegisterBtn = '//div[2]/div/button[2]'
const registerSelection = '#register-selection'
const organisationSelectionDropDown = '#org-selection'
const createNewOrganisationLink = '//*[contains(text(), " Create new organisation")]'
const registersLink = '//nav/section[2]/a'
const organisationSettingsUpgradeBtn = '//app-payment-settings/div[1]/div/button'
const allRegisters = '[class="dropdown-item text-primary"]'
const firstRegisterLink = '//table/tbody/tr/td[2]/a'
const dropDownRegisterMenu = '#dropdownBasic1'
const archiveBtn = '//*[contains(text(), "Archive")]'
const archiveConfirmationOkBtn = `//*[@class='modal-footer']/button[2]`
const successArchivedRegisterMessage = '[aria-label*="Register "]'
const newAssetNameField = '//app-form-control[1]/div/div[2]/input'
const newAssetCodeNumberField = '//app-form-control[2]/div/div[2]/input'
const newAssetDescriptionField = '[formcontrolname="description"]'
const newAssetGroupSelect = '//app-asset-group-selector/select'
const newAssetCostField = '//app-currency-input/div/input'
const newAssetPurchaseDate = '//app-form-control[6]/div/div[2]/app-date-input/div/input'
const newAssetQuantity = '[formcontrolname="quantity"]'
const newAssetQuantityUnitsSelect = '//div/div[2]/div/select'
//
const createNewOrganisationForm = '[class="modal-content"]'
const organisationNameField = '//form/div[1]/app-form-control[1]/div/div[2]/input'
const organisationDescriptionField = '//form/div[1]/app-form-control[2]/div/div[2]/input'
const billingContactNameField = '//form/div[1]/div/app-form-control[1]/div/div[2]/input'
const billingContactEmailField = '//form/div[1]/div/app-form-control[2]/div/div[2]/input'
const billingContactPhoneField = '//form/div[1]/div/app-form-control[3]/div/div[2]/input'
const newOrganisationSaveBtn = '//div[@class="modal-footer"]/button[2]'
const organisationNamesList = '//nav/section[2]/div/div'
const demoRegisterLink = '[class="link ng-star-inserted"]'
const organisationSettingsLink = '//nav/section[3]/div/a[4]'
const settingsHeader = '[class="page-heading ng-star-inserted"] h3'
const settingsHeaderWithExistingReg = '[class="page-heading"] h3' 
const assetsLink = '[href*="/assets"]'
const firstThingsFirstAlertMessage = '[class="alert-message"]'
const createAssetGroupTemplateBtn = '[routerlink*="template"]'
const createAssetGroupBlankBtn = '[routerlink="../assetgroups/new"]'
const assetGroupNameBlankField = '//div/div/div[2]/div[1]/input[1]'
const assetGroupDescriptionBlankField = '//div/div/div[2]/div[1]/input[2]'
const assetGroupBlankSaveBtn = '//div/div[1]/div[2]/div/button'
const buildingsTemplateAssetForm = '//div[1]/label[1]/div'
const buildingsTemplateCheckBox = '//*[@id="check[0]"]'
const capitalWorksTemplateAssetForm = '//div[1]/label[2]/div'
const capitalWorksTemplateCheckBox = '//*[@id="check[1]"]'
const assetsGroupFromTemplateForms = '[class="CheckboxGrid pb-3"]'
const newAssetGroupFromTemplateTitle = '[class="pe-2 me-auto"]'
const newAssetTitle = '[class="pe-2 me-auto"] h3'
const templateSaveBtn = '[class="btn btn-primary mb-3"]'
const successSavedAlertMessage = '[class="alert-message"] p'
const exitBtn = '[routerlink="../../assets"]'
const editGroupBtn = '[title="Edit Group"]'
const deleteGroupBtn = '[name="trash2"]'
const deleteConfirmationOkBtn =`//*[@class='modal-footer']/button[2]`
const nameGroupField = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[1]'
const descriptionGroupFiled = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[2]'
const deleteConfirmationTitle = '//*[contains(text(), "Delete Confirmation")]'
const assetsGroupList = 'div[class="ag-pinned-left-cols-container"] [row-id*="GROUP"]'
const assetGroupBlankAlert = '[role="alertdialog"][aria-live="polite"]'
const assetGroupCardSection = '[class="row view-section"]'
const depreciationForm = '//div/div[2]/app-depreciation-method-selector'
const newAssetSaveBtn = '//form/div/div/button'
const subscriptionAndPaymentLink = '#ngb-nav-8'
const paymentForm = '[class="form-check"]'
const toggleForAccountingFirms = '[class="switch"]'

class DevAssetMainpage {

    async isPaymentFormDisplayed(){
        return await page.isElementDisplayed(paymentForm)
    }

    async isDepreciationFormDisplayed(){
        return await page.isElementDisplayed(depreciationForm)
    }

    async selectNewAssetQuantityUnitsValue(){
        return await page.clickDropdownItemByIndex(newAssetQuantityUnitsSelect, 1)
    }

    async setNewAssetQuantityValue(newAssetQuantityInput){
        return await page.setValue(newAssetQuantity,newAssetQuantityInput)
    }

    async setNewAssetPurchaseDateValue(newAssetPurchaseDateInput){
        return await page.setValue(newAssetPurchaseDate, newAssetPurchaseDateInput)
    }

    async setNewAssetCostValue(newAssetCostFieldInput){
        return await page.setValue(newAssetCostField, newAssetCostFieldInput)
    }

    async setNewAssetCodeNumberValue(newAssetCodeNumberFieldInput){
        return await page.setValue(newAssetCodeNumberField, newAssetCodeNumberFieldInput)
    }

    async setNewAssetNameValue(newAssetNameFieldInput){
        return await page.setValue(newAssetNameField, newAssetNameFieldInput)
    }

    async setNewAssetDescriptionValue(newAssetDescriptionFieldInput){
        return await page.setValue(newAssetDescriptionField, newAssetDescriptionFieldInput)
    }

    async selectNewAssetGroupValue(){
        return await page.clickDropdownItemByIndex(newAssetGroupSelect, 1)
    }

    async clickToggleForAccountingFirms(){
        return await page.click(toggleForAccountingFirms)
    }

    async clickOrganisationSettingsUpgradeBtn(){
        return await page.click(organisationSettingsUpgradeBtn)
    }

    async clickRegistersLink(){
        return await page.click(registersLink)
    }

    async clickSubscriptionAndPaymentLink(){
        return await page.click(subscriptionAndPaymentLink)
    }

    async clickNewAssetSaveBtn(){
        return await page.click(newAssetSaveBtn)
    }

    async clickCreateFirstRegisterBtn(){
        return await page.click(createFirstRegisterBtn)
    }
    
    async clickUserProfileLink(){
        return await page.click(userProfileLink)
    }

    async clickLogoutProfileBtn(){
        return await page.click(logoutProfileBtn)
    }

    async clickAssetsAddBtn(){
        return await page.click(assetsAddBtn)
    }

    async clickCreateAssetBtn(){
        return await page.click(createAssetBtn)
    }

    async isAssetsAddBtnDisplayed(){
        return await page.isElementDisplayed(assetsAddBtn)
    }

    async isAssetCardSectionDisplayed(){
        return await page.isElementDisplayed(assetGroupCardSection)
    }

    async getAllRegisters(){
        return await page.getAllElements(tableWithRegisters)
    }

    async getRegistersListSize(){
        await (await page.getElement(tableWithRegisters)).waitForDisplayed()
        return await (await this.getAllRegisters()).length
    }

    async getAllAssetsGroup(){
        return await page.getAllElements(assetsGroupList)
    }

    async getAssetsGroupListSize(){
        await (await page.getElement(assetsGroupList)).waitForDisplayed()
        return await (await this.getAllAssetsGroup()).length
    }

    async isCreateRegisterBtnDisplayed(){
        return await page.isElementDisplayed(createRegisterBtn)
    }

    async setRegisterNameValue(registerNameInput){
        return await page.setValue(registerName, registerNameInput)
    }
 
    async setRegisterEntityValue(entityNameInput){
        return await page.setValue(entityName, entityNameInput)
    }

    async clickNextRegisterBtn(){
        return await page.click(nextRegisterBtn)
    }

    async clickTryForFreeBtn(){
        return await page.click(tryForFreeBtn)
    }

    async clickCreateRegisterBtn(){
        return await page.click(createRegisterBtn)
    }

    async clickRegisterSelectionDropDown(){
        return await page.click(registerSelection)
    }

    async clickDemoRegisterBtn(){
        return await page.click(demoRegisterBtn)
    }

    async clickAllRegistersLink(){
        return await page.click(allRegisters)
    }

    async clickFirstRegisterLink(){
        return await page.click(firstRegisterLink)
    }

    async clickCreateOrganisationSelectionDropDown(){
        return await page.click(organisationSelectionDropDown)
    }

    async clickCreateNewOrganisationLink(){
        return await page.click(createNewOrganisationLink)
    }

    async clickNewOrganisationSaveBtn(){
        return await page.click(newOrganisationSaveBtn)
    }

    async clickCreateOrganisationSettingsLink(){
        return await page.click(organisationSettingsLink)
    }

    async clickAssetsLink(){
        return await page.click(assetsLink)
    }

    async clickCreateAssetGroupTemplateBtn(){
        return await page.click(createAssetGroupTemplateBtn)
    }

    async clickBuidlingsTemtplateCheckBox(){
        return await page.click(buildingsTemplateCheckBox)
    }

    async clickCapitalWorksTemtplateCheckBox(){
        return await page.click(capitalWorksTemplateCheckBox)
    }

    async clickDropDownRegisterMenu(){
        return await page.click(dropDownRegisterMenu)
    }

    async clickArchiveBtn(){
        return await page.click(archiveBtn)
    }

    async clickArchiveConfirmationOkBtn(){
        return await page.click(archiveConfirmationOkBtn)
    }

    async clickBuidlingsTemtplateAssetForm(){
        return await page.click(buildingsTemplateAssetForm)
    }

    async clickTemplateSaveBtn(){
        return await page.click(templateSaveBtn)
    }

    async clickExitBtn(){
        return await page.click(exitBtn)
    }

    async clickEditGroupBtn(){
        return await page.click(editGroupBtn)
    }

    async clickDeleteGroupBtn(){
        return await page.click(deleteGroupBtn)
    }

    async clickDeleteCofirmationOkBtn(){
        return await page.click(deleteConfirmationOkBtn)
    }
    async clickCreateAssetGroupBlankBtn(){
        return await page.click(createAssetGroupBlankBtn)
    }

    async clickAssetGroupBlankSaveBtn(){
        return await page.click(assetGroupBlankSaveBtn)
    }

    async setOrganisationNameField(organisationNameFieldInput){
        return await page.setValue(organisationNameField, organisationNameFieldInput)
    }

    async setOrganisationDescriptionField(organisationDescriptionFieldInput){
        return await page.setValue(organisationDescriptionField, organisationDescriptionFieldInput)
    }
    async setBillingContactNameField(billingContactNameFieldInput){
        return await page.setValue(billingContactNameField, billingContactNameFieldInput)
    }
    
    async setBillingContactEmailField(billingContactEmailFieldInput){
        return await page.setValue(billingContactEmailField, billingContactEmailFieldInput)
    }

    async setBillingContactPhoneField(billingContactPhoneFieldInput){
        return await page.setValue(billingContactPhoneField, billingContactPhoneFieldInput)
    }

    async setAssetGroupDescriptionBlankFieldValue(assetGroupDescriptionBlankFieldInput){
        return await page.setValue(assetGroupDescriptionBlankField, assetGroupDescriptionBlankFieldInput)
    }

    async setAssetGroupNameBlankFieldValue(assetGroupNameBlankFieldInput){
        return await page.setValue(assetGroupNameBlankField, assetGroupNameBlankFieldInput)
    }

    async isNewAssetTitleDisplayed(){
        return await page.isElementDisplayed(newAssetTitle)
    }

    async isAssetGroupBlankAlertDisplayed(){
        return await page.isElementDisplayed(assetGroupBlankAlert)
    }

    async isNameGroupFieldDisplayed(){
        return await page.isElementDisplayed(nameGroupField)
    }

    async isDescriptionGroupFieldDisplayed(){
        return await page.isElementDisplayed(descriptionGroupFiled)
    }

    async isFirstRegisterLinkDisplayed(){
        return await page.isElementDisplayed(firstRegisterLink)
    }

    async isCreateNewOrganisationFormDisplayed(){
        return await page.isElementDisplayed(createNewOrganisationForm)
    }

    async isCreateNewRegisterFormDisplayed(){
        return await page.isElementDisplayed(createNewRegisterForm)
    }
    async isCreateAssetGroupTemplateBtnDisplayed(){
        return await page.isElementDisplayed(createAssetGroupTemplateBtn)
    }

    async isSuccessArchivedRegisterMessageDisplayed(){
        return await page.isElementDisplayed(successArchivedRegisterMessage)
    }

    async isRegisterNameFieldDisplayed(){
        return await page.isElementDisplayed(registerName)
    }

    async isEntityNameFieldDisplayed(){
        return await page.isElementDisplayed(entityName)
    }

    async isAssetGroupNameFieldDisplayed(){
        return await page.isElementDisplayed(assetGroupNameBlankField)
    }

    async isAssetGroupDescriptionFieldDisplayed(){
        return await page.isElementDisplayed(assetGroupDescriptionBlankField)
    }

    async isAssetsGroupFromTemplateFormsDisplayed(){
        return await page.isElementDisplayed(assetsGroupFromTemplateForms)
    }

    async isNewAssetGroupFromTemplateTitleDisplayed(){
        return await page.isElementDisplayed(newAssetGroupFromTemplateTitle)
    }

    async isDeleteConfirmationTitleDisplayed(){
        return await page.isElementDisplayed(deleteConfirmationTitle)
    }

    async getNewAssetGroupFromTemplateTitleText(){
        return await page.getElementText(newAssetGroupFromTemplateTitle)
    }

    async getLinkText(linkSelector){
        return await page.getElementText(linkSelector);
    }

    async getSuccessfullySavedAlertMessageText(){
        return await page.getElementText(successSavedAlertMessage)
    }

    async getCurrentOrganisationNamesListText(){
        return await page.getElementText(organisationNamesList)
    }

    async getAssetGroupBlankAlertText(){
        return await page.getElementText(assetGroupBlankAlert)
    }

    async isBuildingsTemplateAssetFormClickable(){
        return await page.isElementClickable(buildingsTemplateAssetForm)
    }

    async isSuccessfullySavedAlertMessageDisplayed(){
        return await page.isElementDisplayed(successSavedAlertMessage)
    }

    async isDemoRegisterLinkDisplayed(){
        return await page.isElementDisplayed(demoRegisterLink)
    }

    async isFirstThingsFirstAlertMessageDisplayed(){
        return await page.isElementDisplayed(firstThingsFirstAlertMessage)
    }

    async getFirstThingsFirstAlertMessageText(){
        return await page.getElementText(firstThingsFirstAlertMessage)
    }

    async isSettingsHeaderDisplayed(){
        return await page.isElementDisplayed(settingsHeader)
    }

    async getSettingsHeaderText(){
        return await page.getElementText(settingsHeader)
    }
//
    async isSettingsHeaderWithExistingRegDisplayed(){
        return await page.isElementDisplayed(settingsHeaderWithExistingReg)
    }

    async getSettingsHeaderWithExistingRegText(){
        return await page.getElementText(settingsHeaderWithExistingReg)
    }

    async getDemoRegisterText(){
        return await page.getElementText(demoRegisterLink)
    }
}
module.exports = new DevAssetMainpage();