class GameDevPage {

    get companyGaveDevsRateLink() { return $('//*[text()="Рейтинг найбільших геймдев-компаній"]') }
    get topGamesRateLink() { return $('//*[text()="Топ ігор місяця"]') }
    
    async clickOnTopGamesRateLink() {
        await this.topGamesRateLink.click()
    }
}

export default new GameDevPage()