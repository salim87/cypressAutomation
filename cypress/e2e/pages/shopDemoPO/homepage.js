export class Homepage{
getUserName(){
    return cy.get('#username')
}

getPassword(){
    return cy.get('#password')
}

getClickLgnBtn(){
   return cy.get("button[value='Log in']")
}

}