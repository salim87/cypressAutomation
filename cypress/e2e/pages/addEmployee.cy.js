export class AddEmployee{

    clickAddEmplyBtn(locator){
        cy.get(locator).click()
    }
    enterFirstName(locator, firstname){
        cy.get(locator).type(firstname)
    }

    enterMiddleName(locator, middlename){
        cy.get(locator).type(middlename)
    }

    enterLastName(locator,lastname){
        cy.get(locator).type(lastname)
    }

    enterEmpId(locator,empid){
        cy.get(locator).type(empid)
    }

    clickSavebtn(locator){
        cy.get(locator).click()
    }
}