/// <reference types="cypress" />

const Faker = require('faker')


describe('Desafio Qazando Udemy - Cadastro do Usuário', () => {
    let user /*esse trabalha junto com */

    before(() => {
        user = {email: Faker.internet.email(), /*com esse para validar o email cadastrado no campo de cadastro*/
                    name: {
                        first: Faker.name.firstName(),
                        last: Faker.name.lastName()
    }}
        cy.visit('?controller=authentication&back=my-account')
    })

    it ("Informar email novo", () => {
        cy.get('#email_create')
            //.type(`${Faker.internet.email()}{enter}`) //cria um novo email de cadastro
            .type(`${user.email}{enter}`) //combina com var usuario para que se cria um novo e mail e retorna o mesmo na pagina de cadastro
    })
    it('Preencher campos obrigatórios', () => {
            cy.url().should('include','#account-creation') //para garantir que a pagina foi carregada antes do preenchimento
            //cy.get('#account-creation_form > :nth-child(1) > .clearfix').should('be.visible') //para garantir que o conjunto foi carregado
            cy.get('#email').should('have.value',user.email)
            //cy.get('#email').should('include.value',user.email) //alternativa
            //cy.get('#email').invoke('val').then((element) => {
            //    expect(element).eq(user.email)
            //}) alternativa para codigo acima
            cy.get('#id_gender1').check() //clicar no Mr. ou Mrs.
            cy.get('#customer_firstname').type(user.name.first) //preenchimento do nome
            cy.get('#customer_lastname').type(user.name.last) //preenchimento do sobrenome
            cy.get('#passwd').type(Faker.internet.password()) //preenchimento da senha
            cy.get('#days').select(`${Faker.datatype.number({min:1,max:31})}`) //escolhe dia
            cy.get('#months').select(`${Faker.datatype.number({min:1,max:12})}`) //escolhe mês
            cy.get('#years').select(`${Faker.datatype.number({min:1900,max:2022})}`) //escolhe ano
            cy.get('#address1').type(Faker.address.streetAddress()) //preenchimento do endereço
            cy.get('#city').type(Faker.address.cityName()) //preenchimento da cidade
            cy.get('#id_state').select(`${Faker.datatype.number({min:1,max:53})}`) //escolhe a cidade
            cy.get('#postcode').type(Faker.datatype.number({min:10000,max:99999})) //preenchimento no cep
            cy.get('#phone_mobile').type(Faker.phone.phoneNumberFormat()) //preenchimento do celular
            cy.get('#alias').type(Faker.address.streetAddress())

    })
    it('Finalizar Cadastro', () => {
        cy.get('#submitAccount > span').click()
        cy.get('.account > span').should('have.text',`${user.name.first} ${user.name.last}`)

})

})