export class BillingPage {
    
    getBillingFirstName(){
        return cy.get('#billing_first_name') 
    }
    getBillingLastName(){
        return cy.get('#billing_last_name') 
    }

    getCountrySearchbox(){
        return cy.get("input[role='combobox']")
    }

    getCountryDropdown(){
        return ct.get('#select2-billing_country-container')
    }
    getBillingAddress1(){
        return cy.get('#billing_address_1') 
    }

    getBillingAddress2(){
        return cy.get('#billing_address_2')
    }
    getStateDropdown(){
        return cy.get('#select2-billing_state-container') 
    }
    getStateSearchBox(){
        return cy.get('.select2-search__field') 
    }
    getBillingCity(){
        return cy.get('#billing_city') 
    }
    getBillingPostCode(){
        return cy.get('#billing_postcode') 
    }
    getBillingPhone(){
        return cy.get('#billing_phone') 
    }

    getBillingEmail(){
        return cy.get('#billing_email') 
    }
    getTermsCheckbox(){
        return cy.get('#terms') 
    }
    getPlaceOrderButton(){
        return cy.get('#place_order') 
    }
    getOrderPlacedText(){
        return cy.get('.woocommerce-thankyou-order-received') 
    }   
    
}

    
