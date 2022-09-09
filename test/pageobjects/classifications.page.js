const page = require('./page')

const addClassificationBtn = '//*[contains(text(), "Add Classification")]'
const classificationNameField = '[formcontrolname="name"]'
const firstOptionField = '//div[2]/div/div[1]/div/input'
const secondOptionField = '//div[2]/div/div[2]/div/input'
const thirdOptionField = '//div[2]/div/div[3]/div/input'
const fourthOptionField = '//div[2]/div/div[4]/div/input'
const fifthOptionField = '//div[2]/div/div[5]/div/input'
const firstClassification = '//app-standard-page-content-grid/div/ul/li[1]'
const secondClassification = '//app-standard-page-content-grid/div/ul/li[2]'
const firstClassificationAddedCell = '//div[4]//child-cell/div[1]/div'
const secondClassificationAddedCell = '//div[5]//child-cell/div[1]/div'

class ClassificationsPage {
    
    async isSecondClassificationAddedCellDisplayed(){
        return await page.isElementDisplayed(secondClassificationAddedCell)
    }
    
    async isFirstClassificationAddedCellDisplayed(){
        return await page.isElementDisplayed(firstClassificationAddedCell)
    }
    
    async isSecondClassificationDisplayed(){
        return await page.isElementDisplayed(secondClassification)
    }
    
    async isFirstClassificationDisplayed(){
        return await page.isElementDisplayed(firstClassification)
    }
    
    async setFifthOptionFieldValue(fifthOptionFieldValue){
        return await page.setValue(fifthOptionField, fifthOptionFieldValue)
    }
    
    async setFourthOptionFieldValue(fourthOptionFieldValue){
        return await page.setValue(fourthOptionField, fourthOptionFieldValue)
    }
    
    async setThirdOptionFieldValue(thirdOptionFieldValue){
        return await page.setValue(thirdOptionField, thirdOptionFieldValue)
    }
    
    async setSecondOptionFieldValue(secondOptionFieldValue){
        return await page.setValue(secondOptionField, secondOptionFieldValue)
    }
    
    async setFirstOptionFieldValue(firstOptionFieldValue){
        return await page.setValue(firstOptionField, firstOptionFieldValue)
    }

    async clickAddClassificationBtn(){
        return await page.click(addClassificationBtn)
    }
    
    async setClassificationNameFieldValue(classificationNameFieldValue){
        return await page.setValue(classificationNameField, classificationNameFieldValue)
    }
}

module.exports = new ClassificationsPage();