/// <reference types="cypress" />
describe('funcionalidade: produtos', () => {
    before('', () => {
        cy.visit('produtos')
    });
    it('deve selecionar produtos em lista', () => {
        cy.get(' .product-block > ')
        //.first()
        //.last()
        .contains ('Aether Gym Pant')
        .click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
       
        
    });
    
});