describe('Opening a webpage demoShop', ()=>{
    it('Visiting Toolsqa demo page', ()=>{

        cy.visit('https://demoqa.com/');
        cy.get('div:nth-of-type(4) > div > .avatar.mx-auto.white > svg').click();

        //get the links count of widget
        cy.get(':nth-child(4) > .element-list > .menu-list >li').should('have.length',9);
    })
})