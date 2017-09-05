module.exports = { // adapted from: https://git.io/vodU0
	
	'Los estudiantes failed login': function(browser) {
	browser
	.url('https://losestudiantes.co/')
	.waitForElementVisible('.botonCerrar', 2000)
	.click('.botonCerrar')
	.pause(2000)
	.waitForElementVisible('.botonIngresar', 2000)
	.click('.botonIngresar')
	.pause(2000)
	.waitForElementVisible('.cajaLogIn input[name="correo"]', 2000)
	.setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
	.waitForElementVisible('.cajaLogIn input[name="password"]', 2000)
	.setValue('.cajaLogIn input[name="password"]', '9999jc')
	.waitForElementVisible('.cajaLogIn .logInButton', 2000)
	.click('.cajaLogIn .logInButton')
	.pause(2000)
	.waitForElementVisible('.aviso.alert.alert-danger', 2000)
	.assert.containsText('.aviso.alert.alert-danger', 'Upss!')
	//.assert.containsText('.aviso.alert.alert-danger', 'Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
	.end();
	},
	
	'Los estudiantes correct login': function(browser) {
	browser
	.url('https://losestudiantes.co/')
	.waitForElementVisible('.botonCerrar', 2000)
	.click('.botonCerrar')
	.pause(2000)
	.waitForElementVisible('.botonIngresar', 2000)
	.click('.botonIngresar')
	.pause(2000)
	.waitForElementVisible('.cajaLogIn input[name="correo"]', 2000)
	.setValue('.cajaLogIn input[name="correo"]', 'j.arias915@uniandes.edu.co')
	.waitForElementVisible('.cajaLogIn input[name="password"]', 2000)
	.setValue('.cajaLogIn input[name="password"]', 'j2017cext')
	.waitForElementVisible('.cajaLogIn .logInButton', 2000)
	.click('.cajaLogIn .logInButton')
	.pause(2000)
	.assert.containsText('.titulo', 'Los Estudiantes')
	.end();
	},
	
	'Los estudiantes existing account': function(browser) {
	browser
	.url('https://losestudiantes.co/')
	.waitForElementVisible('.botonCerrar', 2000)
	.click('.botonCerrar')
	.pause(2000)
	.waitForElementVisible('.botonIngresar', 4000)
	.click('.botonIngresar')
	.pause(2000)
	.waitForElementVisible('.cajaSignUp input[name="nombre"]', 2000)
	.setValue('.cajaSignUp input[name="nombre"]', 'carlos')
	.waitForElementVisible('.cajaSignUp input[name="apellido"]', 2000)
	.setValue('.cajaSignUp input[name="apellido"]', 'ramirez')
	.waitForElementVisible('.cajaSignUp input[name="correo"]', 2000)
	.setValue('.cajaSignUp input[name="correo"]', 'j.arias915@uniandes.edu.co')
	.waitForElementVisible('.cajaSignUp input[name="password"]', 2000)
	.setValue('.cajaSignUp input[name="password"]', 'pwd2017')
	.click('.cajaSignUp .logInButton')
	.pause(2000)
	.assert.containsText('.sweet-alert', 'Ya existe un usuario registrado')
	.end();
	},
	
	'Los estudiantes teacher search': function(browser) {
	browser
	 .url('https://losestudiantes.co/')
	 .waitForElementVisible('.botonCerrar', 2000)
	 .click('.botonCerrar')
	 .pause(2000)
     .waitForElementVisible("input", 2000)
     .setValue("input", "Dario Correal")
	 .pause(2000)
	 .waitForElementVisible(".Select-menu-outer", 2000)
	 .click('.Select-menu-outer')
	 .pause(2000)
	 .assert.containsText('.nombreProfesor', 'Dario Correal')
     .end();
	},
	
	'Los estudiantes navigate to a teacher page': function(browser) {
	browser
	 .url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/dario-correal')
	 .waitForElementVisible('.nombreProfesor', 2000)
	 .assert.containsText('.nombreProfesor', 'Dario Correal')
     .end();
	}
	
};