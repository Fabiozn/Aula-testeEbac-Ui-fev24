/// <reference types="cypress" />
const perfil = require ('../../fixtures/perfil.json')

describe('Funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit ('minha-conta')
        
    });
    afterEach(() => {
        cy.screenshot()
    });
it('Deve fazer login com sucesso', () => {
    cy.get('#username').type ('fabiospzn@outlook.com')
    cy.get('#password').type ('Up_330919*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fabiospzn')
    
});
it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
     cy.get('#username').type ('fabio@outlook.com')
    cy.get('#password').type ('Up_330919*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should ('contain' , 'Endereço de e-mail desconhecido')

});
it('deve exibir uma mensagem de erro ao inserir senha  invalida', () => {
    cy.get('#username').type ('fabiospzn@outlook.com')
    cy.get('#password').type ('Up_330919')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should ('contain' , 'Erro: A senha fornecida para o e-mail fabiospzn@outlook.com está incorreta')
    cy.get('.woocommerce-error > li').should('exist')

});
it('Deve fazer login com sucesso usando massa de dados', () => {
    cy.get('#username').type (perfil.usuario)
    cy.get('#password').type (perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fabiospzn')

});
it('Deve fazer login com sucesso usando fixture', () => {
    cy.fixture ('perfil').then(dados =>{
        cy.get('#username').type (dados.usuario)
        cy.get('#password').type (dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fabiospzn')
    })
    
    
    

    
});
it('Deve fazer login com sucesso usando comandos customizados', () => {
    cy.login ('fabiospzn@outlook.com', 'Up_330919*')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, fabiospzn')
    
});


})