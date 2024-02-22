class ProdutosPage {
    visitarUrl() {
        cy.visit('produtos')
    }
   
   
    
    buscarProdutoLista() {
        cy.get(' .product-block > ')
        . contains('Aether Gym Pant')
        .click()
        
       
        
    }
    
   
    visitarProduto() {
        cy.visit('produto/ariel-roll-sleeve-sweatshirt/')
    }

    addProdutoCarrinho() {

    }
     buscarProduto(nomeProduto) {
        cy.get ('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()

    }

    }
    export default new ProdutosPage()