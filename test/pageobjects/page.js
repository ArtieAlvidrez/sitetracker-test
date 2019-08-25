export default class Page {
  open (path) {
    browser.url(path)
  }
  waitForPageToLoad (title) {
		browser.waitUntil(() => {
			return browser.getTitle().includes(title)}, 30000);	 
  }
 }
