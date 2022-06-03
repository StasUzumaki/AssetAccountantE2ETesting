const page = require('./page')

const primaryRoleDropDown = '#idsDropdownTextField2'
const otherPrimaryRoleValue = '//div/div/ul[5]'
const planningDropDown = '#idsDropdownTextField5'
const otherPlanningValue = '//div/div/ul[5]'
const devExperienceDropDown = '#idsDropdownTextField8'
const advancedExperienceValue = '//div/div/ul[3]'
const doneBtn = '//div/div/div[2]/footer/div/button'
const apiDocsAndToolsLink = '[data-name="API Docs & Tools"]'
const sandboxLink = '//*[@id="accordion"]/div[1]/div[2]/div/a[4]'
const countryDropDown = '//div/fieldset/label[1]/span[2]/div/div/div/label/div'
const addSandboxCompany = '[class*="sandbox-add"]'
const australiaCountryValue = '/html/body/div[5]/div/div/div[2]'
const addBtn = '[data-automation-id="add-submit-button"]'
const sandboxCompanyId = '//table/tbody/tr[2]/td[2]/div/div/div/div/span[1]'
const sandboxAuCompanyId = '//table/tbody/tr/td[2]/div/div/div/div/span[1]'
const validationLink = '//div/div/div[1]/div[2]/div/p[2]/a'
const signInAndSecurityLink = '#iam-account-manager-security'
const intuitValidateEmailLink = '//div[2]/div/span[1]/span/div/span/span'
const manageYourAccountForm = '[class="oiam-overview-homepage-hub-buttons-container"]'
const confirmEmailField = '[aria-label="confirmEmailAddress"]'
const saveBtn = '#ius-email-manager-btn-save'
const sendVerificationEmailBtn = '//div[2]/div[2]/div/div[3]/button[1]'
const intuitEmailConfirmationForm = '/html/body/section/div/div/div/section/header'
const intuitProfileIcon = '#blue-dot'
const intuitSignOutBtn = '//div[4]/div[2]/div[2]/div[2]/div/button[2]'
const accountDropDownMenu = '//div[1]/div[5]/button'



class IntuitMainPage {

    async getSandboxAuCompanyIdText(){
        return await page.getElementText(sandboxAuCompanyId)
    }

    async clickIntuitSignOutBtn(){
        return await page.click(intuitSignOutBtn)
    }

    async clickIntuitProfileIcon(){
        return await page.click(intuitProfileIcon)
    }

    async isIntuitEmailConfirmationFormDisplayed(){
        return await page.isElementDisplayed(intuitEmailConfirmationForm)
    }

    async clickSendVerificationEmailBtn(){
        return await page.click(sendVerificationEmailBtn)
    }

    async clickSaveBtn(){
        return await page.click(saveBtn)
    }

    async setConfirmEmailFieldValue(confirmEmailFieldInput){
        return await page.setValue(confirmEmailField, confirmEmailFieldInput)
    }

    async clickIntuitValidateEmailLink(){
        return await page.click(intuitValidateEmailLink)
    }

    async isManageYourAccountFormDisplayed(){
        return await page.isElementDisplayed(manageYourAccountForm)
    }

    async clickSignInAndSecurityLink(){
        return await page.click(signInAndSecurityLink)
    }

    async clickValidationLink(){
        return await page.click(validationLink)
    }

    async getSandboxCompanyIdText(){
        return await page.getElementText(sandboxCompanyId)
    }

    async clickAddBtn(){
        return await page.click(addBtn)
    }

    async clickPrimaryRoleDropDown(){
        return await page.click(primaryRoleDropDown)
    }

    async clickOtherPrimaryRoleValue(){
        return await page.click(otherPrimaryRoleValue)
    }

    async clickPlanningDropDown(){
        return await page.click(planningDropDown)
    }

    async clickOtherPlanningValue(){
        return await page.click(otherPlanningValue)
    }

    async clickDevExperienceDropDown(){
        return await page.click(devExperienceDropDown)
    }

    async clickAdvancedExperienceValue(){
        return await page.click(advancedExperienceValue)
    }

    async clickDoneBtn(){
        return await page.click(doneBtn)
    }

    async clickApiDocsAndToolsLink(){
        return await page.click(apiDocsAndToolsLink)
    }

    async clickSandboxLink(){
        return await page.click(sandboxLink)
    }

    async clickCountryDropDown(){
        return await page.click(countryDropDown)
    }

    async clickAddSandboxBtn(){
        return await page.click(addSandboxCompany)
    }

    async clickAustraliaCountryValue(){
        return await page.click(australiaCountryValue)
    }

}
module.exports = new IntuitMainPage()