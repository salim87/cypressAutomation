describe('alias practice', ()=>{
    it('to add cart via alias', () =>{
     cy.visit('https://automationteststore.com/')
     cy.get(".thumbnail").as("productThumbnail")
    
     cy.get('@productThumbnail').should('have.length', 16)
     cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    
    })
 })