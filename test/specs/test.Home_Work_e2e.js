import MainPage from "./../pages/dou/main.page.js"
import SalaryPage from "../pages/dou/salary.page.js"
import WorkPage from "./../pages/dou/work.page.js"
import WorkVacanciespage from "./../pages/dou/workVacanciespage.js"
import RelocatePage from "./../pages/dou/relocate.page.js"

describe("Webdriverio main page", () => {


     it("homework", async () => {
        await browser.url('https://dou.ua');
    
        await MainPage.clickOnSalaryBtn()
        await browser.pause(2000)

        await expect (SalaryPage.subtitle).toHaveText('I КВАРТИЛЬ')

        await MainPage.clickOnWorkBtn()
        await browser.pause(2000)

        await WorkPage.searchBtn.isDisplayed()

        await WorkPage.clickOnSearchBtn()

        await expect (WorkVacanciespage.subtitle).toHaveTextContaining('Швидкий перехід:')

        await MainPage.clickOnRelocateBtn()
       
        await expect (RelocatePage.news).toHaveText('Новини')
        await expect (RelocatePage.blogs).toHaveText('Блоги')
        await expect (RelocatePage.PopularOnTheForum).toHaveText('Популярне на форумі')



    })
});