import Page from './page';

class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return $('#username'); }
    get passwordInput()   { return $('#password'); }
    get rememberMe ()     { return $('#rememberUn'); }
    get loginButton()     { return $('#Login'); }
 
    /**
     * override page methods
     */

    waitForPageToLoad (title) {
 		super.waitForPageToLoad (title)
    }

	 /**
     * page specific methods
     */

    login (username, password) {
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.rememberMe.click();
      this.loginButton.click();
    }
}

export default new LoginPage()
