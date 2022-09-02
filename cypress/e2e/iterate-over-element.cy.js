describe('iterate over element', ()=>{
   it('Add hair cut products to the basket', () =>{
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //   if($el.text().includes('Curls to straight Shampoo')) {
    //       cy.wrap($el).click()
    //   }
    //   });
    cy.selectProduct('Curls to straight Shampoo')
   })

   it('to add cart via alias', () =>{
       cy.visit('https://automationteststore.com/')
       cy.get(".thumbnail").as("productThumbnail")
      
       cy.get('@productThumbnail').should('have.length', 16)
       cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
      
      })
   

   
})