const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const assert = require('assert');
const { expect } = require('chai');
const loginData = require('../../data/loginData')
const baseUrl = require('../../data/baseURL')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});

const registerNameSettings = shortUserName + '_TestRegister'

describe('create a new register', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailRegister);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswRegister);
        await authPage.clickSignInSubmitBtn();
    });
    after('delete created registers', async () => {
        await console.log("Register list size: " + await devAssetMainPage.getRegistersListSize())
        const registersCount = await devAssetMainPage.getRegistersListSize()
        for(let i = 0; i < registersCount; i++) {
            await devAssetMainPage.clickDropDownRegisterMenu()
            await devAssetMainPage.clickArchiveBtn()
            await devAssetMainPage.clickArchiveConfirmationOkBtn()
            await expect(await devAssetMainPage.isSuccessArchivedRegisterMessageDisplayed()).true;
        }
        await devAssetMainPage.clickDemoRegisterBtn()
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickUserProfileLink()
        await devAssetMainPage.clickLogoutProfileBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true;
    });
    it('should create a new register', async () => {

        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await devAssetMainPage.clickNextRegisterBtn()
        await devAssetMainPage.clickTryForFreeBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true;
        await expect(await devAssetMainPage.getSettingsHeaderText()).contain(`${registerNameSettings} › Settings`);
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
    });
    it('should create a register with existing register', async () => {
        await devAssetMainPage.clickCreateRegisterBtn()
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await devAssetMainPage.clickNextRegisterBtn()
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
    });
});




