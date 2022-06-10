const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper');
const intuitAccounts = require('../../helper/intuitAccounts');


describe('Map Chart of Accounts to QBO and post a Journal', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountRegister()
    });
    after('delete created registers and logout', async () => {
        await console.log("Register list size: " + await devAssetMainPage.getRegistersListSize())
        const registersCount = await devAssetMainPage.getRegistersListSize()
        for(let i = 0; i < registersCount; i++) {
            await devAssetMainPage.clickDropDownRegisterMenu()
            await devAssetMainPage.clickArchiveBtn()
            await devAssetMainPage.clickArchiveConfirmationOkBtn()
            await expect(await devAssetMainPage.isSuccessArchivedRegisterMessageDisplayed()).true
        }
        await devAssetMainPage.clickDemoRegisterBtn()
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
        await helper.logout()
    });
    it('should create a new register', async () => {
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    });
    it('should connect to QBO account', async () => {
        await devAssetMainPage.clickRegisterSettingsLink()
        await devAssetMainPage.clickIntegrationsLink()
        await devAssetMainPage.clickQuickbooksOnlineDropDown()
        await devAssetMainPage.clickConnectToQuickBooksBtn()
        await intuitAccounts.loginToExistingtIntuitAccount()
        await browser.pause(10000)
    });
});

