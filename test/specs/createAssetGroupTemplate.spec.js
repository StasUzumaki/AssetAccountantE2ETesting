const devAssetMainPage = require('../pageobjects/devAssetMain.page')
const helper = require('../pageobjects/helper')
const { expect } = require('chai')
const dashboardPage = require('../pageobjects/dashboard.page')
const assetsPage = require('../pageobjects/assets.page')
const assetGroups = require('../pageobjects/assetGroups.page')

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await helper.platformLink()
    await helper.loginToAccountAssetGroup()
  })
  after('land to current register and delete created asset group', async () => {
    await helper.deleteAssetGroup()
    await helper.logout()
  })
  it('should create asset group from template if no groups have been created', async () => {
    await dashboardPage.clickFirstRegisterLink()
    await helper.createAssetGroupFromTemplate()
  });
});

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await helper.platformLink()
    await helper.loginToAccountAssetGroup()
  })
  after('land to current register, delete created asset group and logout', async () => {
    await helper.deleteAssetGroup()
    await helper.logout()
  })
  it('should create asset group from template if no groups have been created', async () => {
    await dashboardPage.clickFirstRegisterLink()
    await helper.createAssetGroupFromTemplate()
  });
  it('should create asset group from template with existing group', async () => {
    await helper.platformLink()
    await dashboardPage.clickFirstRegisterLink()
    await assetsPage.clickAssetsAddBtn()
    await assetsPage.clickCreateAssetGroupTemplateBtn()
    await expect(await assetGroups.isNewAssetGroupFromTemplateTitleDisplayed()).true
    await expect(await assetGroups.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`)
    await expect(await assetGroups.isAssetsGroupFromTemplateFormsDisplayed()).true
    await assetGroups.clickCapitalWorksTemtplateCheckBox()
    await assetGroups.clickTemplateSaveBtn()
    await expect(await assetGroups.isSuccessfullySavedAlertMessageDisplayed()).true
    await expect(await assetGroups.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`)
  });
});
