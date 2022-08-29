describe('Calculate total number of sales items', ()=>{
    it('validate total number of sales', () =>{
        cy.visit('https://automationteststore.com/')

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('ItemSalePrice')

        var itemstotal=0;
        cy.get('@itemPrice').then($linkText =>{
            var itemPriceTotal=0;
            var itemPrice = $linkText.split('$')
            var i;

            for(i=0; i < itemPrice.length; i++ ){
                cy.log("ItemPrice " + itemPrice[i])
                itemPriceTotal+=Number(itemPrice[i])
            }
            itemstotal+=itemPriceTotal;
            cy.log('Non sale items total price '  + itemPriceTotal)
            
        })
        cy.get('@ItemSalePrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log('Sale items price '+ saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemstotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice)
        })
        .then(() => {
            cy.log("The total price of Non Sale and Sale products: " + itemstotal)
            expect(itemstotal).to.equal(662)
        })
    })
})