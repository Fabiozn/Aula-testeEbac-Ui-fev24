/// <reference types="cypress" />

describe('Funcionalidade: login', () => {

it('Deve fazer login com sucesso', () => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type ('fabiospzn@outlook.com')
    cy.get('#password').type ('Up_330919*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fabiospzn')
    
});
})