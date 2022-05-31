const page = require('./page')

const primaryRoleDropDown = '#idsDropdownTextField2'
const otherPrimaryRoleValue = '//div/div/ul[5]'
const planningDropDown = '#idsDropdownTextField5'
const otherPlanningValue = '//div/div/ul[5]'
const devExperienceDropDown = '#idsDropdownTextField8'
const advancedExperienceValue = '//div/div/ul[3]'
const doneBtn = '[class="Step-mainButtons-f3aa5c1"]'


class IntuitMainPage {

    async clickPrimaryRoleDropDown(){
        return await page.click(primaryRoleDropDown)
    }

    async clickOtherPrimaryRoleValue(){
        return await page.click(otherPrimaryRoleValue)
    }

    async clickPlanningDropDown(){
        return await page.click(planningDropDown)
    }

    async clickOtherPlanningValue(){
        return await page.click(otherPlanningValue)
    }

    async clickDevExperienceDropDown(){
        return await page.click(devExperienceDropDown)
    }

    async clickAdvancedExperienceValue(){
        return await page.click(advancedExperienceValue)
    }

    async clickDoneBtn(){
        return await page.click(doneBtn)
    }

}
module.exports = new IntuitMainPage()