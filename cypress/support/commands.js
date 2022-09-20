// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

const { ProductPage } = require("../e2e/pages/shopDemoPO/productPage");

    Cypress.Commands.add('productInfo', (productCatalogue, size, color)=>{
        const product = new ProductPage()

        //searching the product
        product.getSearchClick().click()
        product.getSearchTextBox().type('shirt')
        product.getSearchTextBox().type('{enter}')
        
        //iterating the product
        product.getProductsName().each(($el, index, $list)=>{
            if($el.text().includes(productCatalogue)){
                cy.wrap($el).click()
            }
        })
       //select the size and color
//     //adding the products to cart
        product.getSelectColor().select(color)
        product.getSelectSize().select(size) 
        product.getAddToCartButton().click()

    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

//
    Cypress.Commands.add('selectProduct', (productName)=>{
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text().includes(productName)) {
                cy.wrap($el).click()
            }
            });

    });
    
    

   
    
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
   
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// const { ProductPage } = require("../e2e/pages/shopDemoPO/productPage");

// 