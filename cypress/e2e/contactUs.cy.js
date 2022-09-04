const { HomePage } = require("./pages/homePage.cy");

const homePage = new HomePage()
describe("open contact page", function(){

    beforeEach(function(){
      
     // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.fixture('example').then(data =>{
            this.data=data;
          //  globalThis.data=data;
        })
    })
    it("contact page test", function(){
      homePage.visitUrl()
      homePage.clickOn_ContactUs_button()
      
      homePage.creatContactUsPage(this.data.first_name, this.data.last_name, this.data.email, this.data.body )
      homePage.click_submit()
      cy.screenshot()
      // cy.visit("http://webdriveruniversity.com")
      // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // cy.get('[name="first_name"]').type(this.data.first_name);
        // cy.get('input[name="last_name"]').type(this.data.last_name);
        // cy.get('[name="email"]').type(this.data.email)
        // cy.get('textarea.feedback-input').type("i am learning cypress")
        // cy.get('[type="submit"]').click()

    })
})