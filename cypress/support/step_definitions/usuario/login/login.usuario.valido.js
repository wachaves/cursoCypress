/// <reference types="cypress" />

/* global Then, When, Given */

When('preencho os dados de login com um usuario valido', () => {
    global.usuario.email = 'teste@testew.com'
    global.usuario.nome = 'teste teste'
    
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha)
})