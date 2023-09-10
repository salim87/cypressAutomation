describe("Testing tools qa demo", ()=>{
    before('opening tools qa url', ()=>{
        cy.visit('https://shop.demoqa.com/my-account/')
        
    })

    beforeEach('data getting via fixure', ()=>{
        cy.fixture('toolsQa').as('toolsQaData')
    })

    it('executing tools qa register page', ()=>{
        cy.get('@toolsQaData').then((user)=>{
            cy.get('#username').type(user.Username);
          //  cy.get('#reg_email').type(user.Email);
            cy.get('#password').type(user.Password)
           // cy.get('.woocommerce-Button').should('have.attr
          //  cy.get('.woocommerce-Button').should('be.disabl
          //  cy.get('#reg_password').type(user.NewPassword)
            cy.get("button[value='Log in']").click();
            //Checking whetther the new URL 
            // which include /my-account
            cy.url().should('include', '/my-account');
        
        })
})

})