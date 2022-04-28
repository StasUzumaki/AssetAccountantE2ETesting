const authPage =require('../pageobjects/Authentication.page')
const devAssetMainPage = require('../pageobjects/DevAssetMain.page');
const assert = require('assert');
const {expect} = require('chai');

describe('dev asset page', () => {
    xit('should create account with valid credentials', async () => {
        await browser.url('https://dev.asset.accountant') 
        await authPage.clickCreateCreateAccountBtn();
        await authPage.setFisrtNameValue('Stan')
        await authPage.setLastNameValue('Lavr') 
        await authPage.setEmailValue('wixej59631@idurse.com') 
        await authPage.setPhoneNumberValue('7777777777')
        await authPage.setPasswordCreateAccValue('devAssetTest')
        await authPage.setPasswordCreateAccConfirmValue('devAssetTest')
        await authPage.clickCreateRegisterBtn()
        await expect(await authPage.isEmailVerificationFormDisplayed()).true;
    });
    it('should login with valid credentials, create new register and adding an asset group from a template', async () => {
        await browser.url('https://dev.asset.accountant') 
        await authPage.clickCreateSignInBtn();
        await authPage.setUserNameValue('wixej59631@idurse.com');
        await authPage.clickCreateNextBtn();
        await authPage.setPasswordSignInValue('devAssetTest');
        await authPage.clickCreateSignInSubmitBtn();
        //await authPage.setOrganizationNameFieldValue('OrganizationTestName');
        //await authPage.clickCreateCreateOrganizationBtn();
        await devAssetMainPage.clickCreateCreateRegisterBtn();
        await devAssetMainPage.setRegisterNameValue('TestDevAsset');
        await devAssetMainPage.setRegisterEntityValue('test123');
        await devAssetMainPage.clickCreateNextRegisterBtn();
        await devAssetMainPage.clickCreateTryForFreeBtn();
        await devAssetMainPage.clickCreateRegisterSelectionDropDown();
        await devAssetMainPage.clickCreateAllRegistersLink();
        //await browser.pause(2000)
        await expect(await devAssetMainPage.isFirstRegisterDisplayed()).true;
    });
});


