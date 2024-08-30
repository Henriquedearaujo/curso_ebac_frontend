describe('Teste adicionar um novo contato à agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar contato', () => {
        cy.get('input[type="text"]').type('Henrique de Araujo')
        cy.get('input[type="email"]').type('rickel0106@gmail.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
    })
})