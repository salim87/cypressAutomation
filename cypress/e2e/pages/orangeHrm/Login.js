export class Login{
    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    login(username, password){
        cy.get("[name='username']").type(username);
        cy.get("[name='password']").type(password)
        cy.get("button[type='submit']").click()
        return this;
    }

    validateInvalidCredentials(expectedText){
        cy.get("div[role='alert'] div p").should('have.text',expectedText )
        return this;
    }

    validateTheLoginPage(){
        cy.get("button[type='submit']").should('have.value', ' Login ')
        cy.get("form[method='post'] div p").should('have.text', 'Forgot your password? ')
        return this;
    }
}