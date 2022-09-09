const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const helper = require('../pageobjects/helper');
const baseUrl = require('../../data/baseURL')
const dashboardPage =require('../pageobjects/dashboard.page');
const assetsPage = require('../pageobjects/assets.page');

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await helper.platformLink()
    await helper.loginToAccountAssetGroup()
  });
  after('land to assets and delete created asset group (Blank)', async () => {
    await helper.deleteAssetGroup()
    await helper.logout()
  });
  it('should create asset group (Blank) if no groups have been created', async () => {
    await dashboardPage.clickFirstRegisterLink()
    await helper.createAssetGroupBlank()
  });
});

describe('dev asset page', () => {
  before('land to dev asset page and login', async () => {
    await helper.platformLink()
    await helper.loginToAccountAssetGroup()
  })
  after('land to current register, delete all created asset groups (Blank) and logout', async () => {
    await helper.deleteAssetGroup()
    await helper.logout()
  })
  it('should create asset group (Blank) if no groups have been created', async () => {
    await dashboardPage.clickFirstRegisterLink()
    await helper.createAssetGroupBlank()
  });
  it('should create asset group (Blank) with existing group', async () => {
    await devAssetMainPage.clickAssetsLink()
    await assetsPage.clickAssetsAddBtn()
    await helper.createAssetGroupBlank()
  });
});
