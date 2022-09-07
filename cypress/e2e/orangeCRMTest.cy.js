import { Locators } from "./pages/locators.cy";
import { Orange_HP } from "./pages/orange_page.cy";
import { AddEmplyeeList } from "./pages/addEmployeeList.cy";

const orangeCRM= new Orange_HP();
const addEmployeeList = new AddEmplyeeList();

describe('test orangeCRM page', ()=>{ 
    
    before("open the url", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    beforeEach('open fixure files', ()=>{
        cy.fixture('users').as('data')
        cy.fixture('addEmployee').as('employeeData')
    })

    it('Testing OrangeCRM page', ()=>{
       // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //  cy.fixture('users').as('data')
        cy.get('@data').then((user)=>{
            orangeCRM.enterUsername(Locators.userNameLoc, user.Username)
            orangeCRM.enterPassword(Locators.passwordLoc, user.Password)
            orangeCRM.clickLgnBtn(Locators.loginBtnLoc)
           cy.log('completed the login the url')
        })
        
       // addEmplyee.clickAddEmplyBtn(Locators.addEmplBtn)
        //cy.once('uncaught:exception', () => false);
        //cy.wait(5000)
       cy.log('landed to the new page')
    })

    it('Add employee', ()=>{
        cy.fixture('addEmployeeList').as('employmentData')
        // addEmplyee.clickAddEmplyBtn(Locators.addEmplBtn)
        // cy.wait(5000)
        cy.get('@employmentData').then((employeeList)=>{
            Cypress. on('uncaught:exception', (err, runnable) => { return false; });


            addEmployeeList.enterEmployeeName(Locators.employeenameLoc, employeeList.EmployeeName)
            cy.wait(3000)
            addEmployeeList.enterEmployeeId(Locators.employeeidLoc, employeeList.EmployeeId)
            cy.wait(3000)
            addEmployeeList.selectEmploymentStatus(Locators.selectEmploymentStatusLoc)
            cy.wait(3000)
            addEmployeeList.selectCurrentOrPastEmploymentStatus(Locators.currenOrPastEmployeeLoc)
            cy.wait(3000)
            addEmployeeList.enterSupervisorname(Locators.superVisorNameLoc, employeeList.supervisorName)
            cy.wait(3000)
            addEmployeeList.selectJobTitle(Locators.jobTitleLoc)
            cy.wait(3000)
            addEmployeeList.selectSubUnitName(Locators.subUnitLoc)
            cy.wait(3000)
            addEmployeeList.clickSerceBtn(Locators.searchBtnLoc)

        })
    })
})