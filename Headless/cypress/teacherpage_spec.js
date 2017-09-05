describe('Los estudiantes login', function() {
    it('Visits los estudiantes and navigates to a teacher page', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Alfabético').click()
		cy.contains('Dario Correal').click()
		cy.contains('h1','Dario Correal')
    })
})