
import DevelopersPage from '../pageobjects/developers.page';
import LoginPage from '../pageobjects/login.page';
import SearchResultsPage from '../pageobjects/search.page';
const assert = require('assert');

/*
	This script tests the developers.salesforce.com site using webdriverIO and Jasmine
*/

describe('Salesforce page test', function () {
  it('1.  Login to developer.salesforce.com ', function () {
	// open salesforce development page, confirm that no user is logged in
    DevelopersPage.open('https://developer.salesforce.com/');
	DevelopersPage.waitForPageToLoad ('Salesforce Developers');
	expect (DevelopersPage.loginButton.getText()).toContain('Login ›');
	expect(browser.getTitle()).toContain('Salesforce Developers');

	// click Login button to go to Login page
	DevelopersPage.clickLoginButton ();
	LoginPage.waitForPageToLoad ('Login | Salesforce');
	expect(browser.getTitle()).toContain('Login | Salesforce');

	// login to site entering user name, password and submit the request
    LoginPage.login('sitetracker-test@sitetracker.com', 'paloalto94306'); 
	DevelopersPage.waitForPageToLoad ('Salesforce Developers')
	;
	// confirm that the user appears in the login button text
	expect (DevelopersPage.loginButton.getText()).toContain('Artie Alvidrez');
 	expect(browser.getTitle()).toContain('Salesforce Developers');
  });
 it('2.  Search for Writing Tests', function () {
	 // submit a search request for the string "Writing Tests"
	DevelopersPage.search ("Writing Tests");
    DevelopersPage.waitForPageToLoad ('Search');
	expect(browser.getTitle()).toContain('Search');
 });
 it ('3.  Assert Writing test page is listed', function () {
	 // check that the search results page contains the "Writing Tests" page
	expect(SearchResultsPage.writingTestsLink.isExisting().toBeTrue);
 });
 it ('4.  On the Writing Tests Page, Click Link Testing Apex', function () {
	// click the "Writing Tests" link returned in the search results and check that the page loads correctly 
	SearchResultsPage.clickWritingTestsLink ();
	SearchResultsPage.waitForPageToLoad ('Writing Tests');
	expect(browser.getTitle()).toContain('Writing Tests');
	
	// in the page, click on the link for "Testing Apex" in the text
	SearchResultsPage.clickTestingApexLink ();
	SearchResultsPage.waitForPageToLoad ('Testing Apex');
 });
it ('5.  Verify Testing Apex page is loaded', function () {
    expect(browser.getTitle()).toContain('Testing Apex');
	expect(SearchResultsPage.testingApexHeader.isExisting().toBeTrue);
  });
it ('6.  Logout', function () {
	// logout, and confirm that the username no longer appears in the login button
	DevelopersPage.clickLoginButton ();
	DevelopersPage.clickLogoutButton ();
	expect (DevelopersPage.loginButton.getText()).toContain('Login ›');
  });
});
