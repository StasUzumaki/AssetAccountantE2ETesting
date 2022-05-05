const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const assert = require('assert');
const { expect } = require('chai');
const loginData = require('../../data/loginData')
const baseUrl = require('../../data/baseURL')

describe('login to account', () => {
  after('logout', async () => {
    await devAssetMainPage.clickUserProfileLink()
    await devAssetMainPage.clickLogoutProfileBtn()
    await expect(await authPage.isSignInBtnDisplayed()).true;
  });
  it('should login to existing account', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await authPage.clickSignInBtn();
    await authPage.isUserNameLoginFieldDisplayed();
    await authPage.setUserNameValue(loginData.userEmail);
    await authPage.clickNextBtn();
    await authPage.isPasswordLoginFieldDisplayed();
    await authPage.setPasswordSignInValue(loginData.userPassw);
    await authPage.clickSignInSubmitBtn();
    await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
    await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
  });
});




