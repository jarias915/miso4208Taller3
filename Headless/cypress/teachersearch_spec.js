describe('Los estudiantes login', function() {
    it('Visits los estudiantes and makes the teacher search', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.Select-input').find('input').type("Dario Correal", {force:true})
        cy.get('.Select-menu-outer').contains('Dario Correal').click()
        cy.contains('h1','Dario Correal')
    })
})