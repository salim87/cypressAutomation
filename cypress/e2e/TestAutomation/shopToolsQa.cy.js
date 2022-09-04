describe('Testing tools qa demo', ()=>{
    before('opening tools qa url', ()=>{
        cy.visit('https://shop.demoqa.com/my-account/')
        
    })

    beforeEach('data getting via fixure', ()=>{
        cy.fixture('toolsQa').as('toolsQaData')
    })

    it('executing tools qa register page', ()=>{
        cy.get('@toolsQaData').then((user)=>{
            cy.get('#reg_username').type(user.Username);
            cy.get('#reg_email').type(user.Email);
            cy.get('#reg_password').type(user.Password)

            cy.get('.woocommerce-Button').should('have.attr','disabled', 'disabled') 
            cy.get('.woocommerce-Button').should('be.disabled')

            cy.get('#reg_password').type(user.NewPassword)

            cy.get('.woocommerce-Button').click();

            //Checking whether the Registration is successful and whether UserName is populated under login section
            cy.get('#username').should('have.value', user.Username);
        
        })
    })
})