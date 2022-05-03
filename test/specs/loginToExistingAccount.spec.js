const authPage =require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const assert = require('assert');
const {expect} = require('chai');
const loginData = require('../../data/loginData')

  describe('login to account', () => {
    it('should login to existing account', async () => {
      await browser.url('https://dev.asset.accountant')
      await authPage.clickSignInBtn();
      await authPage.isUserNameLoginFieldDisplayed();
      await authPage.setUserNameValue(loginData.userEmail);
      await authPage.clickNextBtn();
      await authPage.isPasswordLoginFieldDisplayed();
      await authPage.setPasswordSignInValue(loginData.userPassw);
      await authPage.clickSignInSubmitBtn();
        
    });
});




