const page = require('./page')

const integrationsLink = '//form/div/ul/li[4]/a'
const classificationLink = '//form/div/ul/li[3]/a'

class RegisterSettingsPage {

    async clickIntegrationsLink() {
        return await page.click(integrationsLink)
    }

    async clickClassificationLink(){
        return await page.click(classificationLink)
    }

}

module.exports = new RegisterSettingsPage();