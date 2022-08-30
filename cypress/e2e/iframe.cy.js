describe('Handling iframe', ()=>{
    it('iframe handle', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#iframe").invoke('removeAttr', 'target').click({force:true})
     
     cy.get('#frame').then($iframe =>{
       const bodyContent = $iframe.contents().find('body')
       cy.wrap(bodyContent).as('iframe')
     })
    cy.get('@iframe').find('#button-find-out-more').click()
    })
    
 })