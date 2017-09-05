import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
	let page: TourOfHeroesPage;

	beforeEach(() => {
		page = new TourOfHeroesPage();
	});

	it('should display top 4 heroes', () => {
		page.navigateTo();
		expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
	});

	it('should navigate to heroes', () => {
		page.navigateToHeroes();
		expect(page.getAllHeroes().count()).toBe(11);
	});

	//JC Heroes search
	it('should searh for heroes', () => {
		page.navigateTo();
		expect(page.searchHeroes()).toBe('Bombasto');
	});

	//JC Heroes navigation from the dashboard
	it('should navigate heroe from the dashboard', () => {
		page.navigateTo();
		expect(page.navigateHeroesDashboard()).toBe('Mr. Nice details!');
	});

	//JC Heroes navigation from the search
	it('should navigate heroe from the search', () => {
		page.navigateTo();
		expect(page.navigateHeroesSearch()).toBe('Narco details!');
	});

});


describe('Tour of heroes, heroes page', () => {
	let page: TourOfHeroesPage;

	beforeEach(() => {
		page = new TourOfHeroesPage;
		page.navigateToHeroes();
	});

	it('should add a new hero', () => {
		const currentHeroes = page.getAllHeroes().count();
		page.enterNewHeroInInput('My new Hero');
		expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
	});

	//JC Heroes removal
	it('should remove heroes', () => {
		expect(page.removeHeroes()).not.toContain('Zero');
	});

	//JC Heroes Edition
	it('should edit heroes', () => {
		page.navigateToHeroes();
		expect(page.editHeroes()).toContain('My Heroes');
	});

	//JC Heroes navigation from the list of heroes
	it('should navigate heroe from the list of heroes', () => {
		page.navigateToHeroes();
		expect(page.navigateHeroesList()).toBe('Bombasto details!');
	});

});
