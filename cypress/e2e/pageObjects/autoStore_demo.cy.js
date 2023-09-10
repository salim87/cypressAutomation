class autoStore_demo{

    visit_HomePage(){
        cy.visit('https://www.webdriveruniversity.com/')
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    }
}
export default autoStore_demo;