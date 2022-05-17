const devAssetMainPage = require('../pageobjects/devAssetMain.page')
const helper = require('../pageobjects/helper')
const { expect } = require('chai')
const baseUrl = require('../../data/baseURL')

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await helper.loginToAccountAssetGroup()
  })
  after('land to current register and delete created asset group', async () => {
    await helper.deleteAssetGroup()
    await helper.logout()
  })
  it('should create asset group from template if no groups have been created', async () => {
    await devAssetMainPage.clickFirstRegisterLink()
    await helper.createAssetGroupFromTemplate()
  });
});

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await helper.loginToAccountAssetGroup()
  })
  after('land to current register, delete created asset group and logout', async () => {
    await helper.deleteAssetGroup()
    await helper.logout()
  })
  it('should create asset group from template if no groups have been created', async () => {
    await devAssetMainPage.clickFirstRegisterLink()
    await helper.createAssetGroupFromTemplate()
  });
  it('should create asset group from template with existing group', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await devAssetMainPage.clickFirstRegisterLink()
    await devAssetMainPage.clickAssetsAddBtn()
    await devAssetMainPage.clickCreateAssetGroupTemplateBtn()
    await expect(await devAssetMainPage.isNewAssetGroupFromTemplateTitleDisplayed()).true
    await expect(await devAssetMainPage.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`)
    await expect(await devAssetMainPage.isAssetsGroupFromTemplateFormsDisplayed()).true
    await devAssetMainPage.clickCapitalWorksTemtplateCheckBox()
    await devAssetMainPage.clickTemplateSaveBtn()
    await expect(await devAssetMainPage.isSuccessfullySavedAlertMessageDisplayed()).true
    await expect(await devAssetMainPage.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`)
  });
});
