import { Locators } from "./pages/locators.cy";
import { Orange_HP } from "./pages/orange_page.cy";
import { AddEmployee } from "./pages/addEmployee.cy";

const orangeCRM= new Orange_HP();
const addEmplyee= new AddEmployee();

describe('test orangeCRM page', ()=>{ 
    
    before("open the url", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    beforeEach('open fixure files', ()=>{
        cy.fixture('users').as('data')
        cy.fixture('addEmployee').as('employeeData')
    })

    it('Testing OrangeCRM page', ()=>{
       // cy.fixture('users').as('data')
        cy.get('@data').then((user)=>{
            orangeCRM.enterUsername(Locators.userNameLoc, user.Username)
            orangeCRM.enterPassword(Locators.passwordLoc, user.Password)
            orangeCRM.clickLgnBtn(Locators.loginBtnLoc)
        })
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.--visited').click()
       //addEmplyee.clickAddEmplyBtn(Locators.addEmplBtn)
      // cy.once('uncaught:exception', () => false);

    })

    it('Add employee', ()=>{
       // cy.fixture('addEmployee').as('employeeData')
        cy.get('@employeeData').then((employee)=>{
             cy.once('uncaught:exception', () => false);
        //    addEmplyee.clickAddEmplyBtn(Locators.addEmplBtn)
            cy.wait(5000)

            addEmplyee.enterFirstName(Locators.firstnameLoc, employee.firstname, {timeout:10000})
            addEmplyee.enterMiddleName(Locators.middlenameLoc, employee.middlename)
            addEmplyee.enterLastName(Locators.lastnameLoc, employee.lastname)
            addEmplyee.enterEmpId(Locators.empIdLoc, employee.EmpId)
            addEmplyee.clickSavebtn(Locators.saveBtnLoc)
        })
    })
})