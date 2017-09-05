describe('Los estudiantes login', function() {
    it('Visits los estudiantes and the login is successful', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("j.arias915@uniandes.edu.co")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("j2017cext")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.contains('Los Estudiantes')
    })
})