import LoginPage from "./../pages/dou/main.page.js"
import MainPage from "./../pages/dou/main.page.js"
import GameDevPage from "./../pages/dou/gamedev.page.js"
import GameDevTopRatesPage from "./../pages/dou/gamedevToprates.js";


describe("Webdriverio main page", () => {


    it("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await LoginPage.setUsernameInput(123)
        await browser.pause(2000)

        await LoginPage.username.addValue("hello")
        await browser.pause(2000)

        await LoginPage.setPasswordInput("superpassword!")
        await browser.pause(2000)

        await LoginPage.clickOnLoginBtn()

        // await expect(LoginPage.username).toHaveValue("123hello")
       
    })
});


describe("Webdriverio main page", () => {


     it("done", async () => {
        await browser.url('https://dou.ua');
    
        await MainPage.clickOnBandBtn()
        await browser.pause(2000)

        await MainPage.clickOnForumBtn()
        await browser.pause(2000)

        await MainPage.clickOnGameDevBtn()
        await browser.pause(2000)

        //expect(GameDevPage.companyGameDevsRateLink).toBeClickable()

        await GameDevPage.clickOnTopGamesRateLink()

        expect(GameDevTopRatesPage.title).toHaveValue("Матеріали на тему «топ ігор місяця»")
    })
});