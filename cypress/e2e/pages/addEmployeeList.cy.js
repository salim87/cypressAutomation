export class AddEmplyeeList{
    enterEmployeeName(locator, employeename){
        cy.get(locator).type(employeename)
    }

    enterEmployeeId(locator, employeeId){
        cy.get(locator).fill(employeeId)
    }
    selectEmploymentStatus(locator){
        cy.get(locator).select('Full-Time Permanent').contains('Full-Time Permanent')
    }
    selectCurrentOrPastEmploymentStatus(locator){
        cy.get(locator).select('Current Employees Only').contains('Current Employees Only')
    }

    enterSupervisorname(locator, supervisorName){
        cy.get(locator).type(supervisorName)
    }

    selectJobTitle(locator){
        cy.get(locator).select('QA Lead').contains('QA Lead')
    }

    selectSubUnitName(locator){
        cy.get(locator).select('OrangeHRM').contains('OrangeHRM')
    }

    clickSerceBtn(locator){
        cy.get(locator).click()
    }
}