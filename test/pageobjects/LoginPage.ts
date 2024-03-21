import AbstractPage from "./AbstractPage"

class LoginPage extends AbstractPage{
    //Selectors
    public get loginForm(){
        return $('#login_form')
    }

    public get usernameInput(){
        return $('#user_login')
    }

    public get passwordInput(){

        return $('#user_password')
    }

    public get submitButton(){
        return $('input[type="submit"]')
    }

    public get errorMessage(){
        return $('.alert-error')
    }
    //Functions

    public async assertLoginPageIsVisible(){
        (await this.loginForm).waitForDisplayed()
    }

    public async asserLoginPageErrorMessage(){
        await expect(this.errorMessage).toHaveText('Login and/or password are wrong.')

    }

    public async login(username: string, password: string){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.submitButton.click()

    }
}

export default new LoginPage()