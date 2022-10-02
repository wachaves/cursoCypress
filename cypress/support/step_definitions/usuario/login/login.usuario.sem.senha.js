/// <reference types="cypress" />

/* global Then, When, Given */

When('preencho os dados de login com um usuario valido sem informar senha', () => {
    global.usuario.email = 'teste@testew.com'
    let backupsenha = global.usuario.senha
    global.usuario.senha = ' '
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha).then(()=> {global.usuario.senha = backupsenha})
})

Then('O sistema notifica usuario que houve falta uma senha', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
    .find('ol > li').should('have.text','Password is required.')
})