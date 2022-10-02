/// <reference types="cypress" />

const Faker = require('faker')

/* global Then, When, Given */

let user = {email: Faker.internet.email(),
    name: {
        first: Faker.name.firstName(),
        last: Faker.name.lastName()
    }}

When('informo meu email para cadastro de usuario', () => {
    cy.get('#email_create').type(`${user.email}{enter}`)
})

And('finalizo o cadastro preenchendo todos os dados', () => {
    cy.url().should('include','#account-creation')
    cy.get('#email').should('have.value',user.email)
    cy.get('#id_gender1').check()
    cy.get('#customer_firstname').type(user.name.first)
    cy.get('#customer_lastname').type(user.name.last)
    cy.get('#passwd').type(Faker.internet.password())
    cy.get('#days').select(`${Faker.datatype.number({min:1,max:31})}`)
    cy.get('#months').select(`${Faker.datatype.number({min:1,max:12})}`)
    cy.get('#years').select(`${Faker.datatype.number({min:1900,max:2022})}`)
    cy.get('#address1').type(Faker.address.streetAddress())
    cy.get('#city').type(Faker.address.cityName())
    cy.get('#id_state').select(`${Faker.datatype.number({min:1,max:53})}`)
    cy.get('#postcode').type(Faker.datatype.number({min:10000,max:99999}))
    cy.get('#phone_mobile').type(Faker.phone.phoneNumberFormat())
    cy.get('#alias').type(Faker.address.streetAddress())
    cy.get('#submitAccount > span').click()
})

Then('O sistema realiza meu cadastro com sucesso me autenticando na pagina', () => {
    cy.get('.account > span').should('have.text',`${user.name.first} ${user.name.last}`)
})