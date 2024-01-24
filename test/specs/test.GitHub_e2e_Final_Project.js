import MainPage from "../pages/github/main.page.js"
import SignUpPage from "../pages/github/signUp.page.js"
import OrganizationsPage from "../pages/github/organizations.page.js";
import ResourcesPage from "../pages/github/resources.page.js"
import ResourcesConfirmationPage from "../pages/github/resourcesConfirmation.page.js";
import SearchPage from "../pages/github/search.page.js"
import PricingPage from "../pages/github/pricing.page.js";
import pricingCompareFeaturesPage from "../pages/github/pricingCompareFeatures.page.js";


describe("Webdriverio main page", () => {


    it("homework_GitHub_testcase1", async () => {
       await browser.url('https://github.com/');
   
       await MainPage.clickOnSignUpBtn()
       await browser.pause(4000) 
       await expect(SignUpPage.title).toHaveText("Welcome to GitHub! Let's begin the adventure")

       await SignUpPage.setEmailInput('alinka_2210@ukr.net')
       await browser.pause(2000)
       await SignUpPage.clickOnEmailContinueBtn()
       await browser.pause(2000)

       await SignUpPage.setPasswordInput('Alina2210.')
       await browser.pause(2000)
       await SignUpPage.clickOnPasswordContinueBtn()
       await browser.pause(2000)

       await SignUpPage.setUsernameInput('Alina221022')
       await SignUpPage.clickOnNameContinueBtn()
    })

    it("homework_GitHub_testcase2", async () => {
        await browser.url('https://github.com/');

        await MainPage.header.scrollIntoView()
        await MainPage.startAfreeBtn.isDisplayedInViewport()
        await MainPage.clickOnStartAfreeBtn()

        await expect(OrganizationsPage.title).toHaveText('Pick your trial plan')

        await OrganizationsPage.clickOnEnterpriseCloudBtn()
    })

    it("homework_GitHub_testcase3", async () => {
        await browser.url('https://github.com/');

        await (MainPage.subscribeBtn).scrollIntoView()
        await (MainPage.subscribeBtn).isDisplayedInViewport()
        await MainPage.clickOnSubscribeBtn()
    
        await expect(ResourcesPage.title).toHaveText('Subscribe to our developer newsletter')

        await ResourcesPage.setWorkEmailInput('alinka_2210@ukr.net')
        await ResourcesPage.selectCountry()
        await ResourcesPage.clickOnCheckBoxBtn()
        await ResourcesPage.clickOnSubscribeBtn()

        await expect(ResourcesConfirmationPage.information).toHaveText('Thanks for subscribing!')
    })


    it("homework_GitHub_testcase4", async () => {
        await browser.url('https://github.com/');

        await MainPage.clickOnSearchInputBtn()
        
        await MainPage.setSearchInput('act')
        await browser.keys('Enter')
       
        await expect(SearchPage.resultItem).toHaveAttrContaining('href', 'act')

    })    


    it("homework_GitHub_testcase5", async () => {
        await browser.url('https://github.com/');

        await MainPage.clickOnPricingBtn()
        await PricingPage.section.isDisplayed()
        await PricingPage.scrollLink.scrollIntoView()
        await PricingPage.clickOnScrollLink()

        await expect(pricingCompareFeaturesPage.sectionTitle).toHaveText('Compare features')
    })

})