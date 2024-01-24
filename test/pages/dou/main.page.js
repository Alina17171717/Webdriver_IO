// class LoginPage {

//     get username() { return $('#username') }
//     get password() { return $('#password') }
//     get loginButton() { return $('.radius') }

//     async setUsernameInput(value) {
//         await this.username.addValue(value)
//     }

//     async setPasswordInput(value) {
//         await this.password.addValue(value)
//     }

//     async clickOnLoginBtn() {
//         await this.loginButton.click()
//     }
// }

// export default new LoginPage()

class MainPage {

    get forumBtn() { return $('a[href="https://dou.ua/forums/"]') }
    get bandBtn() { return $('a[href="https://dou.ua/lenta/"]') }
    get salariestBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
    get searchInput() { return $('#txtGlobalSearch') }
    get gameDevBtn() { return $('.menu-site__gamedev') }
    get relocateBtn() { return $('.menu-site__relocate') }
    get workBtn() { return $('a[href="https://jobs.dou.ua/"]') }
    


    async clickOnForumBtn() {
        await this.forumBtn.click()
    }
    async clickOnBandBtn() {
        await this.bandBtn.click()
    }
    async clickOnGameDevBtn() {
        await this.gameDevBtn.click()
    }
    async setSearchInput(value) {
        await this.searchInput.addValue(value)
    }
    async clickOnSalaryBtn() {
        await this.salariestBtn.click()
    }
    async clickOnWorkBtn() {
    await this.workBtn.click()
    }
    async clickOnRelocateBtn() {
        await this.relocateBtn.click()
        }
}

export default new MainPage()