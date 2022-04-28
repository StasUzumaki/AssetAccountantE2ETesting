const authPage =require('../pageobjects/Authentication.page')
const devAssetMainPage = require('../pageobjects/DevAssetMain.page');
const assert = require('assert');
const {expect} = require('chai');

const delimiter = '\n'
before('land to dev asset page and login',async () => {
    await browser.url('https://dev.asset.accountant') 
    await authPage.clickCreateSignInBtn();
    await authPage.setUserNameValue('wixej59631@idurse.com');
    await authPage.clickCreateNextBtn();
    await authPage.setPasswordSignInValue('devAssetTest');
    await authPage.clickCreateSignInSubmitBtn();
  });

describe('dev asset page', () => {

    it('should be created a new organization', async () => {
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown()
        await devAssetMainPage.clickCreateNewOrganisationLink()
        await devAssetMainPage.setOrganisationDetailsNameFieldValue('OrgTestDevAsset123')
        await devAssetMainPage.setOrganisationDetailsDescriptionFieldValue('1234')
        await devAssetMainPage.setBillingContactDetailsNameFieldValue('TestStasOrg')
        await devAssetMainPage.setBillingContactDetailsEmailFieldValue('wixej59631@idurse.com')
        await devAssetMainPage.setbillingContactDetailsPhoneNumberFieldValue('8888888888')
        await devAssetMainPage.clickCreateCreateNewOrganisationSaveBtn()
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown()
        await expect(await devAssetMainPage.getCurrentOrganisationNamesListText()).contain(`${delimiter}OrgTestDevAsset123`);
    });
});


