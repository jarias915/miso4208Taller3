var assert = require('assert');
describe('los estudiantes login', function() {
	
	it('should visit los estudiantes and failed at log in', function () {
		browser.url('https://losestudiantes.co');
		browser.waitForVisible('button=Cerrar', 5000);
		browser.click('button=Cerrar');
		browser.pause(2000);
		browser.waitForVisible('button=Ingresar', 5000);
		browser.click('button=Ingresar');
		browser.pause(2000);
		var cajaLogIn = browser.element('.cajaLogIn');
		var mailInput = cajaLogIn.element('input[name="correo"]');
		mailInput.click();
		browser.pause(2000);
		browser.waitForVisible('button=Ingresar', 2000);
		mailInput.keys('wrongemail@example.com');
		var passwordInput = cajaLogIn.element('input[name="password"]');
		passwordInput.click();
		browser.pause(2000);
		passwordInput.keys('9999xy');
		cajaLogIn.element('button=Ingresar').click();
		browser.pause(2000);
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
		var alertText = browser.element('.aviso.alert.alert-danger').getText();
		expect(alertText).toContain('Upss!');
	});
	
	it('should visit los estudiantes and navigate to a teacher page', function () {
		browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/dario-correal');
		browser.waitForVisible('.nombreProfesor', 4000);
		var alertText = browser.element('.nombreProfesor').getText();
		expect(alertText).toBe('Dario Correal');
	});
	
	it('should visit los estudiantes and navigate to a teacher page and make the filter', function () {
		browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/dario-correal');
		browser.waitForVisible('.nombreProfesor', 4000);
		var materias = browser.element('.materias');
		materias.waitForExist(4000);
		browser.waitForExist('input[name="ISIS1206"]', 4000);
	});
	
});