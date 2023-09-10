describe('Open unidriver page', ()=>{
    it('Open the conact page', ()=>{
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get("[name='first_name']").type('Tas');
    cy.get("[name='last_name']").type('Prio');
    cy.get("[name='email']").type('info@email.com');
    cy.get("[name='message']").type('this is web portfolio');
    cy.get("input[value='SUBMIT']").click();
    })

})