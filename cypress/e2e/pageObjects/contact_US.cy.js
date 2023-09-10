///<reference types="cypress"/
import autoStore_demo from '../pageObjects/autoStore_demo'

describe("opening the Uni page", ()=>{
    it('opening the page', ()=>{
        const autoStore_Page= new autoStore_demo();
        autoStore_Page.visit_HomePage();
        autoStore_Page.clickOn_ContactUs_Button();
    })
})