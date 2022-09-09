const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper');
const intuitAccounts = require('../../helper/intuitAccounts');
const dashboardPage = require('../pageobjects/dashboard.page');
const assetsPage = require('../pageobjects/assets.page');
const registerSettingsPage = require('../pageobjects/registerSettings.page')


describe('Map Chart of Accounts to QBO and post a Journal', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountRegister()
    });
    after('delete created registers and logout', async () => {
        await console.log("Register list size: " + await devAssetMainPage.getRegistersListSize())
        const registersCount = await devAssetMainPage.getRegistersListSize()
        for(let i = 0; i < registersCount; i++) {
            await dashboardPage.clickDropDownRegisterMenu()
            await dashboardPage.clickArchiveBtn()
            await dashboardPage.clickArchiveConfirmationOkBtn()
            await expect(await dashboardPage.isSuccessArchivedRegisterMessageDisplayed()).true
        }
        await dashboardPage.clickDemoRegisterBtn()
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
        await helper.logout()
    });
    it('should create a new register', async () => {
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    });
    it('should connect to QBO account', async () => {
        await devAssetMainPage.clickRegisterSettingsLink()
        await registerSettingsPage.clickIntegrationsLink()
        await devAssetMainPage.clickQuickbooksOnlineDropDown()
        await devAssetMainPage.clickConnectToQuickBooksBtn()
        await intuitAccounts.loginToExistingtIntuitAccount()
        await browser.pause(10000)
    });
});

