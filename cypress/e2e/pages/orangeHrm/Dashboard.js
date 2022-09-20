export class Dashboard{
    naviagateToAdmin(){
        cy.get("li:nth-of-type(1) > .oxd-main-menu-item").click()
    }

    validateTheTextSystemUsersPresence(){
        cy.get(".oxd-table-filter-title.oxd-text.oxd-text--h5").should('have.text', 'System Users')
    }

    logout(){
        cy.get(".bi-caret-down-fill.oxd-icon.oxd-userdropdown-icon").click()
        cy.contains('Logout').click()
        return this;
    }

    clickSpecificEmployeeCheckBox(employeeName){
        cy.get("div[role='rowgroup']>div").contains(employeeName).should('not.be.checked')
        cy.get("div[role='rowgroup']>div").contains(employeeName).should('have.text', employeeName)
    }

    clickAddUser(){
        cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click({force:true})
    }
}