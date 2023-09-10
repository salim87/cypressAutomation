const { Login } = require("../pages/orangeHrm/Login");

const login= new Login();
describe('orangeHRM page PO', () => {

    beforeEach('landing to the login page',() => {
        login.navigate()
    });
    it('should not use valid credentials', () => {
        
        login.login('Admin', 'admin')
        login.validateInvalidCredentials('Invalid credentials')
    });

    it('should use valid credentials', () => {
        
        login.login('Admin', 'admin123')
    });
});