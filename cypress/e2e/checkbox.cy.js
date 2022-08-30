describe('Checking checkboxes', ()=>{
    it('checkbox handling', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true})
     
     cy.get('label >input').check()
       
    cy.get('label >input').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
    })
    
 })