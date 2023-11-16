describe('Hospitals', () => {
    it('Should be able to do these tasks', () => {
        
        // visit homepage
        cy.visit('/')
        cy.get('video').should('be.visible')
        cy.get('video').should('have.prop', 'paused', false)
        cy.wait(5000)

        // click on video
        cy.get('button').contains('Pause').click()
        cy.get('video').should('have.prop', 'paused', true)

        // click on hospitals button
        cy.get('button').contains('hospital').click()
        cy.wait(5000)
        // check if there are at least 3 hospitals
        cy.get('img').should('have.length.greaterThan', 2)
    })
})