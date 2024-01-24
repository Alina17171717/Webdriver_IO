class PricingPage {

    get section() { return $('.font-mktg') }
    get scrollLink() { return $('a[href="#compare-features"]') }


    async clickOnScrollLink() {
        await this.scrollLink.click()
    }
   
}



export default new PricingPage()