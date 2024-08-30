describe('Teste excluir um novo contato à agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve permitir excluir um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();
    });
})