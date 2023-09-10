export class AddEmployeeList{


    clickAddEmplyBtn(locator){
        cy.wait(5000)
        cy.get(locator).click({forece:true})
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