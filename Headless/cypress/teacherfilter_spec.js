describe('Los estudiantes login', function() {
    it('Visits los estudiantes and navigates to a teacher page and makes the filter', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Alfabético').click()
		cy.contains('Dario Correal').click()
		cy.get('.materias').find('input[name="ISIS1206"]').click()
		cy.get('.sobreCalificacion').contains('Estructuras De Datos')
    })
})