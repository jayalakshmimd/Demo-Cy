// cypress/support/LoginPage.js

class LoginPage {
    visit() {
      cy.visit('/login'); // Change the URL to your login page
    }
  
    fillUsername(username) {
      cy.get('input[name="username"]').type(username); // Adjust selector as needed
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password); // Adjust selector as needed
    }
  
    submit() {
      cy.get('button[type="submit"]').click(); // Adjust selector as needed
    }
  
    getErrorMessage() {
      return cy.get('.error'); // Adjust selector for error message
    }
  
    login(username, password) {
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
    }
  }
  
  export default new LoginPage();
  