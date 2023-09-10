export class HomePage{
    visitUrl(){
        cy.visit('/')
    }
    clickOn_ContactUs_button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }

    creatContactUsPage(firstName, lastName, email, comments){
        cy.get('[name="first_name"]').type(firstName);
        cy.get('input[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comments)
        
    }
    click_submit(){
        cy.get('[type="submit"]').click()
    }
}
