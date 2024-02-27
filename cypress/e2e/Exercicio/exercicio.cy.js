/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json');
import produtosPage from '../../support/page-objects/produtos.page';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    
    before(() => {
        // Entrar em conta usando URL Base e Fixture
        cy.visit('minha-conta');
        cy.login(perfil.usuario, perfil.senha);
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // Escolher produto 'Apollo Running Short' usando lista
        cy.addProduto('Apollo Running Short', '32', 'Black', '2');
        cy.get('.woocommerce-message').should('contain', '2 × “Apollo Running Short” foram adicionados no seu carrinho.');

        // Escolher produto 'Aether Gym Pant' com Page Objects
        produtosPage.buscarProduto('Aether Gym Pant');
        cy.addProduto('Aether Gym Pant', '33', 'Blue', '2');
        cy.get('.woocommerce-message').should('contain', '2 × “Aether Gym Pant” foram adicionados no seu carrinho.');

        // Escolher produto 'Augusta Pullover Jacket' com Page Objects e variáveis
        produtosPage.visitarProduto('Augusta Pullover Jacket');
        var qnt = '5';
        var tamanho = 'M';
        var cor = 'Blue';

        cy.addProduto('Augusta Pullover Jacket', tamanho, cor, qnt);
        cy.get('.woocommerce-message').should('contain', qnt + ' × “Augusta Pullover Jacket” foram adicionados no seu carrinho.');

        // Escolher produto 'Circe Hooded Ice Fleece' com Comandos Customizados
        cy.addProduto('Circe Hooded Ice Fleece', 'L', 'Purple', '3');
        cy.get('.woocommerce-message').should('contain', '3 × “Circe Hooded Ice Fleece” foram adicionados no seu carrinho.');
        
        // Preencher informações de checkout com Comandos Customizados
        cy.get('[class="mini-cart-items"]').click();
        cy.get('[class="button checkout wc-forward"]').eq(1).click();
        cy.preencherCheckout('fabio', 'Carvalho', 'Brasil', 'R. Capitao', 'Sao Paulo', 'São Paulo', '02442050', '011995051284');

        // Finalizar a compra
        cy.get('#terms').click();
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido');
    });
});
