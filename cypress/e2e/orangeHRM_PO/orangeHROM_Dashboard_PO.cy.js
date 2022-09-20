const { Dashboard } = require("../pages/orangeHrm/Dashboard");
const { Login } = require("../pages/orangeHrm/Login");

const dashboard = new Dashboard
const login = new Login()

describe('dashboard page validation', () => {
    before("navigate to dashboard page",() => {
        login.navigate()
        login.login('Admin', 'admin123')
    });
    it('should be able to navigate to admin module', () => {
        dashboard.naviagateToAdmin()
        dashboard.validateTheTextSystemUsersPresence('System Users')
        dashboard.clickSpecificEmployeeCheckBox('Dominic.Chase')
        dashboard.clickAddUser()
    });

    
});