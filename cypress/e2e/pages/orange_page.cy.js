export class Orange_HP{

    enterUsername(locator, username){
        cy.get(locator).type(username)

    }
    enterPassword(locator, password){
        cy.get(locator).type(password)

    }

    clickLgnBtn(locator){
        cy.get(locator).click()
    }
}