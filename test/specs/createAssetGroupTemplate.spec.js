const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const assert = require('assert');
const { expect } = require('chai');
const loginData = require('../../data/loginData')
const baseUrl = require('../../data/baseURL')

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
  after('land to current register and delete created asset group', async () => {
    await devAssetMainPage.clickExitBtn()
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
  })
  it('should create asset group from template if no groups have been created', async () => {
    await devAssetMainPage.clickFirstRegisterLink();
    await devAssetMainPage.clickCreateAssetGroupTemplateBtn();
    await expect(await devAssetMainPage.isNewAssetGroupFromTemplateTitleDisplayed()).true;
    await expect(await devAssetMainPage.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`);
    await expect(await devAssetMainPage.isAssetsGroupFromTemplateFormsDisplayed()).true;
    await devAssetMainPage.clickBuidlingsTemtplateCheckBox();
    await devAssetMainPage.clickTemplateSaveBtn()
    await expect(await devAssetMainPage.isSuccessfullySavedAlertMessageDisplayed()).true;
    await expect(await devAssetMainPage.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`);
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
  after('land to current register and delete created asset group', async () => {
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
  it('should create asset group from template if no groups have been created', async () => {
    await devAssetMainPage.clickFirstRegisterLink();
    await devAssetMainPage.clickCreateAssetGroupTemplateBtn();
    await expect(await devAssetMainPage.isNewAssetGroupFromTemplateTitleDisplayed()).true;
    await expect(await devAssetMainPage.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`);
    await expect(await devAssetMainPage.isAssetsGroupFromTemplateFormsDisplayed()).true;
    await devAssetMainPage.clickBuidlingsTemtplateCheckBox();
    await devAssetMainPage.clickTemplateSaveBtn()
    await expect(await devAssetMainPage.isSuccessfullySavedAlertMessageDisplayed()).true;
    await expect(await devAssetMainPage.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`);
  });
  it('should create asset group from template with existing group', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await devAssetMainPage.clickFirstRegisterLink()
    await devAssetMainPage.clickAssetsAddBtn()
    await devAssetMainPage.clickCreateAssetGroupTemplateBtn()
    await expect(await devAssetMainPage.isNewAssetGroupFromTemplateTitleDisplayed()).true;
    await expect(await devAssetMainPage.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`);
    await expect(await devAssetMainPage.isAssetsGroupFromTemplateFormsDisplayed()).true;
    await devAssetMainPage.clickCapitalWorksTemtplateCheckBox();
    await devAssetMainPage.clickTemplateSaveBtn()
    await expect(await devAssetMainPage.isSuccessfullySavedAlertMessageDisplayed()).true;
    await expect(await devAssetMainPage.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`);
  });
});
