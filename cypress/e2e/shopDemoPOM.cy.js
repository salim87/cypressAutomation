/// <reference types="cypress" />
const { BillingPage } = require("./pages/shopDemoPO/billingPage")
const { Checkout } = require("./pages/shopDemoPO/checkout")
const { Homepage } = require("./pages/shopDemoPO/homepage")

describe('shopDemoPAgObjectTest', ()=>{
    before('opening tools qa url', ()=>{
        cy.visit('https://shop.demoqa.com/my-account/')
        
    })

    beforeEach('data getting via fixure', function(){
        cy.fixture('toolsQa').then(function(user){
            this.user=user;
        })
    })

    it('executing tools qa register page', function(){
        const homePage = new Homepage();
        const checkoutPage = new Checkout();
        const billingPage = new BillingPage();

            homePage.getUserName().type(this.user.Username)
            homePage.getPassword().type(this.user.Password)
            homePage.getClickLgnBtn().click()

            //Checking whetther the new URL 
            // which include /my-account
            cy.url().should('include', '/my-account');

        //Accessing custom commands
        //For loop for accessing product names for fixture file
        this.user.productName.forEach(function(element){
            cy.productInfo(element[0], element[1], element[2])
    
        })
        
        
        //End to End Test Completion including Checkout and Placing Order
        checkoutPage.getCartBtn().click()

        //Validate if the items we added are successfully 
        //there in the cart using should and expect together.
        checkoutPage.getProducts().should(($p)=>{
          //  expect($p).to.have.length(2)// there should be 2 items in cart
          //  expect($p.first()).to.contain(this.user.productName[0][0])
          //  expect($p).to.contain(this.user.productName[1][0])
        })

        checkoutPage.getCheckOutButton().click()

        //entering the billing data
        billingPage.getBillingFirstName().clear().type(this.user.BillingFirstName)
        billingPage.getBillingLastName().clear().type(this.user.BillingLastName)

        // billingPage.getCountryDropdown().click().then(function(){
        //     billingPage.getCountrySearchbox().clear().type(this.user.BillingCountry).type('{enter}')
        // })

        billingPage.getBillingAddress1().clear().type(this.user.StreetAddress)
        billingPage.getBillingCity().clear().type(this.user.City)

         //Changing the timeout from 4 seconds to 10 seconds
        //Cypress.config('defaultCommandTimeout',10000)

        billingPage.getStateDropdown().click().then(function(){
            billingPage.getStateSearchBox().clear().type(this.user.state)
        })
        billingPage.getBillingPostCode().clear().type(this.user.PostalCode)
        billingPage.getBillingPhone().clear().type(this.user.Phone)
        billingPage.getBillingEmail().clear().type(this.user.Email)

        billingPage.getTermsCheckbox().click()
        billingPage.getPlaceOrderButton().click()

        billingPage.getOrderPlacedText().then(function(element){
            expect(element.text().includes("Thank you. Your order has been received")).to.be.true
        })

        //Mostly Used for TearDown Part
        // after(function(){
        //     })
    })
        
})
