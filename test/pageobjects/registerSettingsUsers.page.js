const page = require('./page')

const registerInvitePanel = '[class="table ng-star-inserted"]'
const registerSettingsRoleDropDownMenu = '//div/div[2]/div/button'
const registerSettingsUserRoleBtn = '//div/div[2]/div/div/button[2]'

class RegisterSettingsUsersPage {
    
    async clickRegisterSettingsUserRoleBtn() {
        return await page.click(registerSettingsUserRoleBtn)
    }
    
    async clickRegisterSettingsRoleDropDownMenu() {
        return await page.click(registerSettingsRoleDropDownMenu)
    }

    async isRegisterInvitePanelDispalayed() {
        return await page.isElementDisplayed(registerInvitePanel)
    }

}

module.exports = new RegisterSettingsUsersPage();