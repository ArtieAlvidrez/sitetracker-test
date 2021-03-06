import Page from './page';

class DevelopersPage extends Page {

    /**
    * define elements
    */

    get searchInput()   { return $('#st-search-input'); }
    get searchButton()   { return $('.header-st-search-button'); }
    get loginButton()   { return $('#login-button'); }
    get logoutButton()   { return $('#user-info-logout'); }

	 /**
     * override page methods
     */

    open (path) {
        super.open(path)       
    }

	waitForPageToLoad (title) {
		super.waitForPageToLoad (title)
	}

    /**
     * page specific methods
     */

     search (searchString) {
      this.searchInput.setValue(searchString);
      this.searchButton.click();
    }
	
	clickLoginButton () {
		this.loginButton.click ();
	}
	clickLogoutButton () {
		this.logoutButton.click ();
	}
	
}

export default new DevelopersPage()
