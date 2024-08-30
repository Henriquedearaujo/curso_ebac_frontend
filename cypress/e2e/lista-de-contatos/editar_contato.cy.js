describe('Teste de edição das informações de um contato existente.', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar primeiro contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Israel de Araujo');
        cy.get('input[type="email"]').clear().type('Israel0106@gmail.com');
        cy.get('input[type="tel"]').clear().type('11 87654321');
        cy.get('.alterar ').click();
    })
})