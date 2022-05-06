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

const assetGroupName = shortUserName + '_TestGroup'

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await authPage.clickSignInBtn();
    await authPage.isUserNameLoginFieldDisplayed();
    await authPage.setUserNameValue(loginData.userEmailAssetGrp);
    await authPage.clickNextBtn();
    await authPage.isPasswordLoginFieldDisplayed();
    await authPage.setPasswordSignInValue(loginData.userPasswAssetGrp);
    await authPage.clickSignInSubmitBtn();
  });
  after('land to assets and delete created asset group (Blank)', async () => {
    await devAssetMainPage.clickAssetsLink()
    await devAssetMainPage.clickEditGroupBtn()
    await expect(await devAssetMainPage.isNameGroupFieldDisplayed()).true;
    await expect(await devAssetMainPage.isDescriptionGroupFieldDisplayed()).true;
    await devAssetMainPage.clickDeleteGroupBtn()
    await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
    await devAssetMainPage.clickDeleteCofirmationOkBtn()
    await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
    await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    await devAssetMainPage.clickUserProfileLink()
    await devAssetMainPage.clickLogoutProfileBtn()
    await expect(await authPage.isSignInBtnDisplayed()).true;
  });
  it('should create asset group (Blank) if no groups have been created', async () => {
    await devAssetMainPage.clickFirstRegisterLink()
    await devAssetMainPage.clickCreateAssetGroupBlankBtn()
    await expect(await devAssetMainPage.isAssetGroupNameFieldDisplayed()).true;
    await devAssetMainPage.setAssetGroupNameBlankFieldValue(assetGroupName)
    await expect(await devAssetMainPage.isAssetGroupDescriptionFieldDisplayed()).true;
    await devAssetMainPage.setAssetGroupDescriptionBlankFieldValue('TestGroupDescription')
    await devAssetMainPage.clickAssetGroupBlankSaveBtn()
    await expect(await devAssetMainPage.isAssetGroupBlankAlertDisplayed()).true;
    await expect(await devAssetMainPage.isAssetCardSectionDisplayed()).true;
  });
});

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await authPage.clickSignInBtn();
    await authPage.isUserNameLoginFieldDisplayed();
    await authPage.setUserNameValue(loginData.userEmailAssetGrp);
    await authPage.clickNextBtn();
    await authPage.isPasswordLoginFieldDisplayed();
    await authPage.setPasswordSignInValue(loginData.userPasswAssetGrp);
    await authPage.clickSignInSubmitBtn();
  })
  after('land to current register and delete all created asset groups (Blank)', async () => {
    await devAssetMainPage.clickAssetsLink()
    await console.log("Assets Group list size: " + await devAssetMainPage.getAssetsGroupListSize())
    const assetsGroupCount = await devAssetMainPage.getAssetsGroupListSize()
    for (let i = 0; i < assetsGroupCount; i++) {
      await devAssetMainPage.clickEditGroupBtn()
      await expect(await devAssetMainPage.isNameGroupFieldDisplayed()).true;
      await expect(await devAssetMainPage.isDescriptionGroupFieldDisplayed()).true;
      await devAssetMainPage.clickDeleteGroupBtn()
      await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
      await devAssetMainPage.clickDeleteCofirmationOkBtn()
    }
    await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
    await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    await devAssetMainPage.clickUserProfileLink()
    await devAssetMainPage.clickLogoutProfileBtn()
    await expect(await authPage.isSignInBtnDisplayed()).true;
  })
  it('should create asset group (Blank) if no groups have been created', async () => {
    await devAssetMainPage.clickFirstRegisterLink()
    await devAssetMainPage.clickCreateAssetGroupBlankBtn()
    await expect(await devAssetMainPage.isAssetGroupNameFieldDisplayed()).true;
    await devAssetMainPage.setAssetGroupNameBlankFieldValue(assetGroupName)
    await expect(await devAssetMainPage.isAssetGroupDescriptionFieldDisplayed()).true;
    await devAssetMainPage.setAssetGroupDescriptionBlankFieldValue('TestGroupDescription')
    await devAssetMainPage.clickAssetGroupBlankSaveBtn()
    await expect(await devAssetMainPage.isAssetGroupBlankAlertDisplayed()).true;
    await expect(await devAssetMainPage.isAssetCardSectionDisplayed()).true;
  });
  it('should create asset group (Blank) with existing group', async () => {
    await devAssetMainPage.clickAssetsLink()
    await devAssetMainPage.clickAssetsAddBtn()
    await devAssetMainPage.clickCreateAssetGroupBlankBtn()
    await expect(await devAssetMainPage.isAssetGroupNameFieldDisplayed()).true;
    await devAssetMainPage.setAssetGroupNameBlankFieldValue(assetGroupName + "1")
    await expect(await devAssetMainPage.isAssetGroupDescriptionFieldDisplayed()).true;
    await devAssetMainPage.setAssetGroupDescriptionBlankFieldValue('TestGroupDescription')
    await devAssetMainPage.clickAssetGroupBlankSaveBtn()
    await expect(await devAssetMainPage.isAssetGroupBlankAlertDisplayed()).true;
    await expect(await devAssetMainPage.isAssetCardSectionDisplayed()).true;
  });
});
