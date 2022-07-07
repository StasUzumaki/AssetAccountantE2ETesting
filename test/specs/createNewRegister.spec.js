const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper');

describe('create a new register', () => {
    before('land to dev asset page and login', async () => {
        await helper.platformLink()
        await helper.loginToAccountRegister()
        await helper.checkingExistingRegisters()
    });
    after('delete created registers and logout', async () => {
        await helper.deleteAllRegisters()
        await helper.logout()
    });
    it('should create a new register', async () => {
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
    });
    it('should create a register with existing register', async () => {
        await devAssetMainPage.clickCreateRegisterBtn()
        await helper.createRegisterWithExistingRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
    });
});




