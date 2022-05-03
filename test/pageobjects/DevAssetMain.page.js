const page = require('./page')

const createRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const createNewRegisterForm = '[class="modal-content"]'
const registerName = '[formcontrolname="name"]'
const entityName = '[formcontrolname="entityName"]'
const nextRegisterBtn = '[class="btn btn-primary ms-2"]'
const tryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const registerSelection = '#register-selection'
const organisationSelectionDropDown = '#org-selection'
const createNewOrganisationLink = '//*[contains(text(), " Create new organisation")]'
const allRegisters = '[class="dropdown-item text-primary"]'
const firstRegisterLink = '//*[@class="table ng-star-inserted"]/tbody/tr[1]/td[2]/a'
const dropDownRegisterMenu = '#dropdownBasic1'
const archiveBtn = '//*[contains(text(), "Archive")]'
const archiveConfirmationOkBtn = `//*[@class='modal-footer']/button[2]`
const successArchivedRegisterMessage = '[aria-label*="Register "]'
const createNewOrganisationForm = '[class="modal-content"]'
const organisationNameField = '//form/div[1]/app-form-control[1]/div/div[2]/input'
const organisationDescriptionField = '//form/div[1]/app-form-control[2]/div/div[2]/input'
const billingContactNameField = '//form/div[1]/div/app-form-control[1]/div/div[2]/input'
const billingContactEmailField = '//form/div[1]/div/app-form-control[2]/div/div[2]/input'
const billingContactPhoneField = '//form/div[1]/div/app-form-control[3]/div/div[2]/input'
const newOrganisationSaveBtn = '//div[@class="modal-footer"]/button[2]'
const organisationNamesList = '//nav/section[2]/div/div'
const demoRegisterLink = '[class="link ng-star-inserted"]'
const organisationSettingsLink = '[name="settings"]'
const settingsHeader = '[class="page-heading ng-star-inserted"] h3'
const assetsLink = '[href*="/assets"]'
const firstThingsFirstAlertMessage = '[class="alert-message"]'
const createAssetGroupTemplateBtn = '[routerlink*="template"]'
const buildingsTemplateAssetForm = '//div[1]/label[1]/div'
const buildingsTemplateCheckBox = '//*[@id="check[0]"]'
const assetsGroupFromTemplateForms = '[class="CheckboxGrid pb-3"]'
const newAssetGroupFromTemplateTitle = '[class="pe-2 me-auto"]'
const templateSaveBtn = '[class="btn btn-primary mb-3"]'
const successSavedAlertMessage = '[class="alert-message"] p'
const exitBtn = '[routerlink="../../assets"]'
const editGroupBtn = '[title="Edit Group"]'
const deleteGroupBtn = '[name="trash2"]'
const deleteConfirmationOkBtn =`//*[@class='modal-footer']/button[2]`
const nameGroupField = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[1]'
const descriptionGroupFiled = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[2]'
const deleteConfirmationTitle = '//*[contains(text(), "Delete Confirmation")]'

class DevAssetMainpage {

    async clickCreateRegisterBtn(){
        return await page.click(createRegisterBtn)
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
    async clickRegisterSelectionDropDown(){
        return await page.click(registerSelection)
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

    async getDemoRegisterText(){
        return await page.getElementText(demoRegisterLink)
    }
}
module.exports = new DevAssetMainpage();