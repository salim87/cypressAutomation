describe('Handling dropdowns', ()=>{
    it('dropdowns handle', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true})
     
    cy.get('#dropdowm-menu-1').select("python").contains('Python')
       
    })
})