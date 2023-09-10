describe('alias-invoke-salePrice', ()=>{
    it('validate product thumbnail', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include', 'Add to Cart')
    })

    it('Calculate the price total', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')
       // cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include', 'Add to Cart')

       cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
       cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

       var itemTotal=0
       cy.get('@itemPrice').then($linkText =>{
           var itemPriceTotal=0;
           var itemPrice=$linkText.split('$');
           var i;
           for(i=0; i< itemPrice.length ; i++){
               cy.log(itemPrice[i]);
               itemPriceTotal+=Number(itemPrice[i]);
           }

           itemTotal+=itemPriceTotal;
           cy.log("Non sale price items total: " + itemPriceTotal)
       })
    })
})