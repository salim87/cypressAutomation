describe('data-driven test', ()=>{
  before('open the contact page', ()=>{
    cy.visit('/')
    cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
  })

  beforeEach('fixture file open', ()=>{
    cy.fixture('testData').as('dataDriven')
  })

  it('data driven testing', ()=>{
    cy.get('@dataDriven').then((user)=>{
        cy.get('[name="first_name"]').type(user.first_name)
        cy.get('[name="last_name"]').type(user.last_name)
        cy.get('[name="email"]').type(user.email)
        cy.get('textarea.feedback-input').type(user.body)
    })
    cy.get('[type="submit"]').click()
    cy.get('h1').should('have.text', 'Thank You for your Message!')

    cy.log("Test has completed!");
  })
})