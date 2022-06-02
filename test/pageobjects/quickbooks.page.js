const page = require('./page')

const searchForCompanyDropDown = '#idsDropdownTypeaheadTextField2'
const auSandboxCompany = '[title="Sandbox Company_AU_2"]'
const authorizeBtn = '[class*="btn-connect"]'
const nextBtn = '//div/div[4]/div/button[2]'
const connectBtn = '//div/div/div[4]/form/button'
const authorizeConnectForm = '[class="authorize-visual-update"]'

class QuickbooksPage{

    async clickAuthorizeBtn(){
        return await page.click(authorizeBtn)
    }

    async clickSearchForCompanyDropDown(){
        return await page.click(searchForCompanyDropDown)
    }

    async clickAuSandboxCompany(){
        return await page.click(auSandboxCompany)
    }

    async clickNextBtn(){
        return await page.click(nextBtn)
    }

    async clickConnectBtn(){
        return await page.click(connectBtn)
    }

    async isAuthorizeConnectFormDisplayed(){
        return await page.isElementDisplayed(authorizeConnectForm)
    }


}
module.exports = new QuickbooksPage()