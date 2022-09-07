export class Checkout{

    getCartBtn(){
        return cy.get('.cart-item')
    }

    getProducts(){
        return cy.get('td.product-name')
    }

    getCheckOutButton(){
        return cy.get('.wc-proceed-to-checkout > .checkout-button')
    }
}