describe('Los estudiantes login', function() {
	it('Visits los estudiantes and fails at login', function() {
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("9999jc")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo')
	})
})