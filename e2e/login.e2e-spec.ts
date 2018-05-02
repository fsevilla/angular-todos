import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

let { sleepTime, username, password } = browser.params;

describe('Login page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('load the login page', () => {
    page.navigateTo();

    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should display an error with wrong credentials', () => {
  	element(by.name('username')).sendKeys('random@dude.com');
	element(by.name('password')).sendKeys('loremipsum');
  	element(by.tagName('button')).click();

  	browser.sleep(sleepTime);
  	expect(element(by.css('.error')).getText()).toEqual('The user credentials were incorrect.');
  });

  it('should login', () => {
  	element(by.name('username')).clear().sendKeys(username);
	element(by.name('password')).clear().sendKeys(password);
  	element(by.tagName('button')).click();

  	browser.sleep(sleepTime);


  	expect(browser.getCurrentUrl()).toContain('/todos');
  	// expect(element(by.css('.error')).getText()).toEqual('The user credentials were incorrect.');
  });
});
