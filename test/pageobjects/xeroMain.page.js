const page = require('./page')

const welcomeBannerImg = '//div[2]/div[1]/img'
const welcomeBannerText = '//div/div/div[2]/div[2]/h2'
const profileMenuBtn = '//header/div/ol[2]/li[6]/button'
const logoutBtn = '//ol[2]/li[6]/div/div[2]/div/ol/li[5]/a'
const journalFromAssetAccountant = 'table[class="standard items"]'

class XeroMainPage{
    async isJournalFromAssetAccountantDisplayed(){
        return await page.isElementDisplayed(journalFromAssetAccountant)
    }

    async getWelcomeBannerText(){
        return await page.getElementText(welcomeBannerText)
    }

    async isWelcomeBannerImgDisplayed(){
        return await page.isElementDisplayed(welcomeBannerImg)
    }

    async clickProfileMenuBtn(){
        return await page.click(profileMenuBtn)
    }

    async clickLogoutBtn(){
        return await page.click(logoutBtn)
    }


}
module.exports = new XeroMainPage()