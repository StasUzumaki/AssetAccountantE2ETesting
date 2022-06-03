const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const intuitAccounts = require('../../helper/intuitAccounts')
const intuitMainPage = require('../pageobjects/intuitMain.page')
const quickbooksPage = require('../pageobjects/quickbooks.page')
const helper = require('../pageobjects/helper');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const intuitSignUpPage = require('../pageobjects/intuitSignUp.page');

const urlForConnectsTheQboCompany = 'https://dev.asset.accountant/quickbooks/connect?provider=Intuit&realmId='

describe('Create an AA account from QBO / connect to QBO from AA', () => {
    before('land to intuit page', async () => {
        await browser.url(baseUrl.baseUrlIntuitLink)
    });
    after('logout', async () => {
        await helper.logout()
    });
    it('should have create intuit account', async () => {
        await intuitSignUpPage.clickSignInMainPageBtn()
        await intuitAccounts.loginToExistingtIntuitAccount()
        await intuitSignUpPage.clickSkipForNowBtn()
    });
    it('should add a sandbox company for Australia', async () => {
        await intuitMainPage.clickApiDocsAndToolsLink()
        await intuitMainPage.clickSandboxLink()
    });
    it('should follow the URL for connect the QBO company', async () => {
        const sandboxCompId = await intuitMainPage.getSandboxAuCompanyIdText()
        const clearSandboxCompId = await sandboxCompId.slice(12)
        const clearUrlForQboCompany = urlForConnectsTheQboCompany + clearSandboxCompId
        await browser.url(clearUrlForQboCompany)
        //await quickbooksPage.clickAuthorizeBtn()
    });
    it('should connect to AA and create new organisation', async () => {
        // await quickbooksPage.clickSearchForCompanyDropDown()
        // await quickbooksPage.clickAuSandboxCompany()
        // await quickbooksPage.clickNextBtn()
        await expect(await quickbooksPage.isAuthorizeConnectFormDisplayed()).true
        await quickbooksPage.clickConnectBtn()
        await expect(await devAssetMainPage.isNewOrganisationSelectDisplayed()).true
        await devAssetMainPage.selectNewOrganisationValue(0)
        await devAssetMainPage.clickQuickbooksConnectBtn()
        await expect(await devAssetMainPage.isQuickbooksAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getQuickbooksAlertMessageText()).contain('(Sandbox Company_AU_2)')
    }); 
    it('should disconnect from QuickBooks', async () => {
        await devAssetMainPage.clickQuickbooksDisconnectBtn()
        await expect(await devAssetMainPage.isDisconnectConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDisconnectConfirmationBtn()
        await expect(await devAssetMainPage.isExternalIntegrationFormDisplayed()).true
    });
    it('should sign out from QuickBooks account', async () => {
        await browser.newWindow('https://accounts.intuit.com/account-manager.html')
        await intuitAccounts.logoutFromIntuitAcc()
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    }); 
    it('should connect and sign in to QuickBooks account', async () => {
        await devAssetMainPage.clickQuickbooksOnlineDropDown()
        await devAssetMainPage.clickConnectToQuickBooksBtn()
        await intuitAccounts.loginToExistingtIntuitAccount()
        await intuitSignUpPage.clickSkipForNowBtn()
    }); 
    it('should add AU company and connect QuickBooks to AA', async () => {
        // await quickbooksPage.clickSearchForCompanyDropDown()
        // await quickbooksPage.clickAuSandboxCompany()
        // await quickbooksPage.clickNextBtn()
        await expect(await quickbooksPage.isAuthorizeConnectFormDisplayed()).true
        await quickbooksPage.clickConnectBtn()
        await expect(await devAssetMainPage.isQuickbooksAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getQuickbooksAlertMessageText()).contain('(Sandbox Company_AU_2)')
    });
    it('should disconnect from QuickBooks again', async () => {
        await devAssetMainPage.clickQuickbooksDisconnectBtn()
        await expect(await devAssetMainPage.isDisconnectConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDisconnectConfirmationBtn()
        await expect(await devAssetMainPage.isExternalIntegrationFormDisplayed()).true
    });
    it('should sign out from QuickBooks account again', async () => {
        await browser.newWindow('https://accounts.intuit.com/account-manager.html')
        await intuitAccounts.logoutFromIntuitAcc()
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    }); 
});