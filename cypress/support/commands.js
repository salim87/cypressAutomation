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
    })
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const { ProductPage } = require("../e2e/pages/shopDemoPO/productPage");

Cypress.Commands.add('selectProductNames', (productName, size, color)=>{

    const productPage = new ProductPage()

    //Searching the product
    productPage.getSearchClick().click()
    productPage.getSearchTextBox().type('shirt')
    productPage.getSearchTextBox.type('{enter}')

    //Iterating the products
    productPage.getProductsName.each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.get($el).click()
        }
        });
    //select the size and color
    //adding the products to cart
    productPage.getSelectSize().select(size)   
    productPage.getSelectColor().select(color)
    productPage.getAddToCartButton().click()
})