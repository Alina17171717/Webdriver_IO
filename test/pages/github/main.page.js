class MainPage {

    get signUpBtn() { return $('.HeaderMenu-link--sign-up') }
    get header() { return $('.h2-mktg')}
    get startAfreeBtn() { return $('.home-campaign-enterprise')}
    get subscribeBtn() { return $('a[href="https://resources.github.com/newsletter/"]') }
    get searchInput() { return $('.header-search-button')}
    get search() { return $('#query-builder-test')}
    get choiceSearch() { return $('.ActionListItem-label')}
    get pricingBtn() { return $('a[href="/pricing"]')}
   
    async clickOnSignUpBtn() {
        await this.signUpBtn.click()
    }

    async clickOnStartAfreeBtn() {
        await this.startAfreeBtn.click()
    }

    async clickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    }

    async clickOnSearchInputBtn() {
        await this.searchInput.click()
    }
    async setSearchInput(value) {
        await this.search.addValue(value)
    }
    
    async clickOnPricingBtn() {
        await this.pricingBtn.click()
    }
}

export default new MainPage()