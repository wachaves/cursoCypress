/// <reference types="cypress" />

/* global Then, When, Given */

When('preencho os dados de login com um usuario valido pressionando enter', () => {
    global.usuario.email = 'testeenter@testew.com'
    global.usuario.nome = 'Teste enter'
    
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(`${global.usuario.senha}{enter}`)
})