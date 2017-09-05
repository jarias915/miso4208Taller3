import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {

	navigateTo() {
		return browser.get('/');
	}

	getTop4Heroes() {
		return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
	}

	navigateToHeroes() {
		element(by.linkText('Heroes')).click();
	}

	getAllHeroes() {
		return element(by.tagName('my-heroes')).all(by.tagName('li'));
	}

	enterNewHeroInInput(newHero: string) {
		element(by.tagName('input')).sendKeys(newHero);
		element(by.buttonText('Add')).click();
	}

	//JC Heroes search
	searchHeroes() {
		element(by.css("*[id='search-box']")).click();
		element(by.css("*[id='search-box']")).sendKeys('as');
		return element(by.css("*[id='search-component'] > div > div:nth-of-type(1)")).getText();
	}

	//JC Heroes removal
	removeHeroes() {
		element(by.css("html > body > my-app > my-heroes > ul > li:nth-of-type(1) > button")).click();
		return element(by.css("html > body > my-app > my-heroes")).getText();
	}

	//JC Heroes Edition
	editHeroes() {
		element(by.css("html > body > my-app > nav > a:nth-of-type(2)")).click();
		element(by.css("html > body > my-app > my-heroes > ul > li:nth-of-type(1) > span:nth-of-type(2)")).click();
		element(by.css("html > body > my-app > my-heroes > div:nth-of-type(2) > button")).click();
		element(by.css("html > body > my-app > hero-detail > div > div:nth-of-type(2) > input")).clear();
		element(by.css("html > body > my-app > hero-detail > div > div:nth-of-type(2) > input")).sendKeys('Zero123');
		element(by.css("html > body > my-app > hero-detail > div > button:nth-of-type(2)")).click();
		return element(by.css("html > body > my-app > my-heroes")).getText();
	}

	//JC Navigate heroe from the dashboard
	navigateHeroesDashboard() {
		element(by.css("html > body > my-app > my-dashboard > div > div:nth-of-type(1) > div > h4")).click();
		return element(by.css("html > body > my-app > hero-detail > div > h2")).getText();
		//element(by.tagName('h4')).click();
		//return element(by.tagName('h2')).getText();
	}

	//JC Navigate heroe from the list of Heroes
	navigateHeroesList() {
		element(by.css("html > body > my-app > my-heroes > ul > li:nth-of-type(3) > span:nth-of-type(2)")).click();
		element(by.css("html > body > my-app > my-heroes > div:nth-of-type(2) > button")).click();
		return element(by.css("html > body > my-app > hero-detail > div > h2")).getText();
	}

	//JC Navigate heroe from the search
	navigateHeroesSearch() {
		element(by.css("*[id='search-box']")).click();
		element(by.css("*[id='search-box']")).sendKeys('na');
		element(by.css("*[id='search-component'] > div > div:nth-of-type(1)")).click();
		return element(by.css("html > body > my-app > hero-detail > div > h2")).getText();
	}
	
}
