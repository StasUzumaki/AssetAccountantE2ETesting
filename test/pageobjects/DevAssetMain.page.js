const Page = require('./Page')

const CreateRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const RegisterName = '[formcontrolname="name"]'
const EntityName = '[formcontrolname="entityName"]'
const NextRegisterBtn = '[class="btn btn-primary ms-2"]'
const TryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const RegisterSelection = '#register-selection'
const organisationSelectionDropDown = '#org-selection'
const createNewOrganisationLink = '//*[contains(text(), " Create new organisation")]'
const AllRegisters = '[class="dropdown-item text-primary"]'
const FirstRegister = '//*[@class="table ng-star-inserted"]/tbody/tr[1]/td[2]/a'
const organisationDetailsNameField = '//form/div[1]/app-form-control[1]/div/div[2]/input'
const organisationDetailsDescriptionField = '//form/div[1]/app-form-control[2]/div/div[2]/input'
const billingContactDetailsNameField = '//form/div[1]/div/app-form-control[1]/div/div[2]/input'
const billingContactDetailsEmailField = '//form/div[1]/div/app-form-control[2]/div/div[2]/input'
const billingContactDetailsPhoneNumberField = '//form/div[1]/div/app-form-control[3]/div/div[2]/input'
const createNewOrganisationSaveBtn = '//div[@class="modal-footer"]/button[2]'
const currentOrganisationName = '//*[@id="org-selection"]/span'
const organisationNamesList = '//nav/section[2]/div/div'

const CreateAssetGroupTemplateBtn = '[routerlink*="template"]'
const CapitalWorksAsset = '//*[@class="CheckboxGrid pb-3"]/div[2]'
const SaveBtn = '[class="btn btn-primary mb-3"]'
const SuccessSaved = '[class="alert-message"] p'

class DevAssetMainPage {

    async clickCreateCreateRegisterBtn(){
        return await Page.click(CreateRegisterBtn)
    }

    async setRegisterNameValue(registerNameInput){
        return await Page.setValue(RegisterName, registerNameInput)
    }
 
    async setRegisterEntityValue(entityNameInput){
        return await Page.setValue(EntityName, entityNameInput)
    }

    async clickCreateNextRegisterBtn(){
        return await Page.click(NextRegisterBtn)
    }

    async clickCreateTryForFreeBtn(){
        return await Page.click(TryForFreeBtn)
    }
    async clickCreateRegisterSelectionDropDown(){
        return await Page.click(RegisterSelection)
    }
    async clickCreateAllRegistersLink(){
        return await Page.click(AllRegisters)
    }

    async clickCreateFirstRegister(){
        return await Page.click(FirstRegister)
    }
    async clickCreateOrganisationSelectionDropDown(){
        return await Page.click(organisationSelectionDropDown)
    }
    async clickCreateNewOrganisationLink(){
        return await Page.click(createNewOrganisationLink)
    }

    async clickCreateCreateNewOrganisationSaveBtn(){
        return await Page.click(createNewOrganisationSaveBtn)
    }

    async setOrganisationDetailsNameFieldValue(organisationDetailsNameFieldInput){
        return await Page.setValue(organisationDetailsNameField, organisationDetailsNameFieldInput)
    }

    async setOrganisationDetailsDescriptionFieldValue(organisationDetailsDescriptionFieldInput){
        return await Page.setValue(organisationDetailsDescriptionField, organisationDetailsDescriptionFieldInput)
    }
    async setBillingContactDetailsNameFieldValue(billingContactDetailsNameFieldInput){
        return await Page.setValue(billingContactDetailsNameField, billingContactDetailsNameFieldInput)
    }
    
    async setBillingContactDetailsEmailFieldValue(billingContactDetailsEmailFieldInput){
        return await Page.setValue(billingContactDetailsEmailField, billingContactDetailsEmailFieldInput)
    }

    async setbillingContactDetailsPhoneNumberFieldValue(billingContactDetailsPhoneNumberFieldInput){
        return await Page.setValue(billingContactDetailsPhoneNumberField, billingContactDetailsPhoneNumberFieldInput)
    }

    async isFirstRegisterDisplayed(){
        return await Page.isElementDisplayed(FirstRegister)
    }

    async getLinkText(linkSelector){
        return await Page.getElementText(linkSelector);
    }

    async getCurrentOrganisationNamesListText(){
        return await Page.getElementText(organisationNamesList)
    }
}
module.exports = new DevAssetMainPage();