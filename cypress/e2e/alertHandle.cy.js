describe('Handle JS alert', ()=>{
    it('Alert handling', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true})
    cy.get('#button4').click()
    cy.on('window:alert', (str) =>{
        expect(str).to.equal('I am an alert box!')
    })
    })
    
    
    it('Validate JS alert confirm box', () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true})
       cy.get('#button4').click()
       cy.on('window:alert', (str) =>{
           return true;
       })
       cy.get('#confirm-alert-text').contains('You pressed OK!')
       })
 })