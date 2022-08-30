describe('Autocomlete suggetions', ()=>{
    it('verify autocomplete scenarios', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({force:true})

     cy.get('#myInput').type('A')

     cy.get('#myInputautocomplete-list >*').each(($el, index, $list) =>{
        const productname= $el.text()
        const productToSelect = "Avacado"

        if(productname == productToSelect){
           // $el.click()
            $el.trigger('click')

            cy.get('#submit-button').click()
            cy.url().should('include', productToSelect)
        }
     }) 

     
     
    
    })
    
 })