describe("open contact page", function(){

    beforeEach(function(){
      cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.fixture('example').then(data =>{
            this.data=data;
          //  globalThis.data=data;
        })
    })
    it("contact page test", function(){
        
      // cy.visit("http://webdriveruniversity.com")
      // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type(this.data.first_name);
        cy.get('input[name="last_name"]').type(this.data.last_name);
        cy.get('[name="email"]').type(this.data.email)
        cy.get('textarea.feedback-input').type("i am learning cypress")
        cy.get('[type="submit"]').click()

    })
})