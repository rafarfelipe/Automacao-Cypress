describe('iFrame', () => {

    it('Deve poder tocar o vídeo de exemplo', () => {
        cy.login()
        cy.contains('Video').click()

        // Aguarda o carregamento do iframe e do vídeo
        cy.wait(3000)

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer')

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
    })
})