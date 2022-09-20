describe('CodenBox E2E', ()=>{
    it('codenBox page automation', () =>{
     cy.visit('https://codenboxautomationlab.com/')
     //cy.get('#menu-item-202 > .sf-with-ul').invoke('show')
     cy.get('#menu-item-202 > .sf-with-ul').trigger('mouseover')
     cy.contains('Registration Form').click({force:true})

    cy.get('#nf-field-17').type('Md')
    cy.get('#nf-field-18').type('Haque')
    cy.get('#nf-field-19').type('info@email.com')
    cy.get('#nf-field-20').type('11111111111')
    cy.get('#nf-field-22').select('selenium-automation')
    cy.get('#nf-field-24').select('april')
    cy.get("#nf-label-class-field-23-1").click()
    cy.get('#nf-field-15').click()
    
    })
    
 })