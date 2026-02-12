describe('Gerenciamento de Perfis no GitHub', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve poder cadastrar um novo perfil do GitHub', () => {
        cy.get('#name').type('Rafael Felipe')
        cy.get('#username').type('rafarfelipe')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Rafael Felipe')
        cy.get('#username').type('rafarfelipedev')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'rafarfelipedev')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('td', 'Rafael Felipe')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible')

    })

    it('Deve poder remover um perfil do GitHub', () => {

        const profile = {
            name: 'Rafael Felipe',
            username: 'rafarfelipe123',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.username)
            // Essa propriedade (target com valor _blank) garante que ao clicar no link, ele será aberto em uma nova aba ou nova janela do navegador
            .and('have.attr', 'target', '_blank')

    })
})