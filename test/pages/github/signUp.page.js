class SignUpPage {

    get title() { return $('h1') }
    get email() { return $('#email') }
    get password() { return $('#password') }
    get username() { return $('#login') }
    get emailContinueButton() { return $('#email-container .signup-continue-button') }
    get passwordContinueButton() { return $('#password-container .signup-continue-button') }
    get nameContinueButton() { return $('#username-container .signup-continue-button') }

    async setEmailInput(value) {
        await this.email.addValue(value)
    }

    async setPasswordInput(value) {
        await this.password.addValue(value)
    }

    async setUsernameInput(value) {
        await this.username.addValue(value)
    }

    async clickOnEmailContinueBtn() {
        await this.emailContinueButton.click()
    }

    async clickOnPasswordContinueBtn() {
        await this.passwordContinueButton.click()
    }

    async clickOnNameContinueBtn() {
        await this.nameContinueButton.click()
    }
}

export default new SignUpPage()

