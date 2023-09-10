describe('Handle multiple tab', ()=>{
    it('Multiple handle tabs', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
    
 
    })
        
 })