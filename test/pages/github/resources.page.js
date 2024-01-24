class ResourcesPage {

    get title() { return $('#hero-section-brand-heading') }
    get workEmailInput() { return $('#\\:R8d76\\:') }
    get country() { return $('#country')}   
    get checkbox() { return $('#gated-agree-marketingEmailOptin1')}
    get subscribeBtn() { return $('.Primer_Brand__Button-module__Button--primary___xIC7G')}
    get information() {return $('#hero-section-brand-heading')}

    async setWorkEmailInput(value) {
        await this.workEmailInput.addValue(value)
    }
    async selectCountry() {
        await this.country.selectByAttribute("value", "CG")
    }
    async clickOnCheckBoxBtn() {
        await this.checkbox.click()
    }
    async clickOnSubscribeBtn() {
        await this.subscribeBtn.click()
    
    }
}

export default new ResourcesPage()