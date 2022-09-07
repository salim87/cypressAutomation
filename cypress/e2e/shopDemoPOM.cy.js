const { Homepage } = require("./pages/shopDemoPO/homepage")

describe('shopDemoPAgObjectTest', ()=>{
    before('opening tools qa url', ()=>{
        cy.visit('https://shop.demoqa.com/my-account/')
        
    })

    beforeEach('data getting via fixure', ()=>{
        cy.fixture('toolsQa').as('toolsQaData')
    })

    it('executing tools qa register page', ()=>{
        const homePage = new Homepage();
        cy.get('@toolsQaData').then((user)=>{

            homePage.getUserName().type(user.Username)
            homePage.getPassword().type(user.Password)
            homePage.getClickLgnBtn().click()

            //Checking whetther the new URL 
            // which include /my-account
            cy.url().should('include', '/my-account');
        
        })
    })
})