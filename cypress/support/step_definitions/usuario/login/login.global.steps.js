/// <reference types="cypress" />

/* global Then, When, Given */

Then('O sistema realiza meu login com sucesso me autenticando na pagina', () => {
    cy.get('.account > span')
        .should('be.visible')
        .should('have.text',global.usuario.nome)
})

Then('O sistema notifica usuario que houve problema com a autenticacao', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
        .find('ol > li').should('have.text','Authentication failed.')
})

And('clico para realizar login', () => {
    cy.get('#SubmitLogin').click()
})