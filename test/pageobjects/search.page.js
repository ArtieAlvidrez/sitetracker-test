import Page from './page';

class SearchResultsPage extends Page {

    /**
    * define elements
    */

    get testingApexHeader()   { return $('h1=Testing Apex'); }
    get writingTestsLink()   { return $('/html/body/div[4]/div/div/div/div/div[2]/div[1]/div[1]/a[contains(., "Writing Tests")]'); }
    get testingApexLink()   { return $('a=Testing Apex'); }

    /**
     * override page methods
     */
    waitForPageToLoad (title) {
 		super.waitForPageToLoad (title)
    }
	
    /**
     *  page specific methods
     */
	
	clickWritingTestsLink () {
		this.writingTestsLink.click ();
	}
	clickTestingApexLink () {
		this.testingApexLink.scrollIntoView ();
		this.testingApexLink.click ();
	}
}

export default new SearchResultsPage()
