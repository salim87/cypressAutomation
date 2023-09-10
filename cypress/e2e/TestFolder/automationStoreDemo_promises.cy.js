describe("test contact page for automation demo store page", ()=>{

    it.only("contact us page for demo automation with promises", ()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.wait(1000)
        cy.get("div[id='footer'] li:nth-child(5) a:nth-child(1)").click().then(function(linkText){
            cy.log("Clicked on linked text  "+ linkText.text())
        
            
        })

        cy.get("#ContactUsFrm_first_name").type("Prionti")
        cy.get("#ContactUsFrm_email").type("tas@info.com")
        cy.get("#ContactUsFrm_enquiry").type("I am trying to send ")
        cy.get("button[title='Submit']").click()

        
    })

})