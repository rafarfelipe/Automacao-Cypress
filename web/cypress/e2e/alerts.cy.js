describe('Validações de Alertas em JavaScript', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Deve validar a mensagem do alerta', () => {
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()
    })

    it('Deve confirmar um diálogo e validar a resposta positiva', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true // Simula o clique no botão "OK" do diálogo de confirmação
        })

        cy.on('window:alert', (msg) => {
            return expect(msg).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve cancelar um diálogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false // Simula o clique no botão "Cancelar" do diálogo de confirmação
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve interagir com um prompt e inserir um texto e validar a mensagem', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Teste') // Simula a entrada de texto no prompt
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá Teste! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt').click()
    })


})