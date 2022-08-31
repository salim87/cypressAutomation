describe('Mouse Action', ()=>{
    it('drag and drop', () =>{
     cy.visit('https://webdriveruniversity.com/')
     cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})

    cy.get('#draggable').trigger('mousedown', {button:1})

    cy.get('#droppable >p >b').trigger('mousemove').trigger('mouseup', {force:true})
     }) 
     it('double click', () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})
   
       cy.get('#double-click').dblclick()
   
       
        })

    it('double click', () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true})
       
        cy.get('#click-box').trigger('mousedown', {button:1})
       
           
        })
    })