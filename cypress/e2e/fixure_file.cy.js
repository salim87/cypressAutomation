describe('Fixures test', ()=>{
    before('opening the url', ()=>{
        cy.visit('/')
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
    })
    beforeEach(()=>{
        cy.fixture('example').as('user')
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.get('@user').then((userFixure)=>{
            cy.get("input[placeholder='First Name']").type(userFixure.first_name)
            cy.get("input[placeholder='Last Name']").type(userFixure.last_name)
            cy.get("input[name='email']").type(userFixure.email)
            cy.get("textarea[placeholder='Comments']").type(userFixure.body)

        })
       
        cy.get("input[value='SUBMIT']").click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')

        cy.log("Test has completed!");
    
        })
   
    })