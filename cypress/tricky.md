### 1.File upload in cypress.
### 2.Navigating through table.(nth-child)
### 3.What is the purpose of the cy.clearCookies() and cy.clearLocalStorage() commands in cy?
 The clearLocalStorage() method is used to clear all items from the local storage. This method is useful when you want to reset the local storage to its initial state, typically before running a test or when you want to remove all stored data.

### 4.How to preserve cookies in cypress?
1.you can disable testIsolation at the suite or e2e configuration-level to prevent the clearing of browser state.
To preserve cookies or localStorage sessions across tests, you can use the cy.session() command. This command enables you to save and restore the state of the browser, including cookies and localStorage data.
1.session cookies
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/login')
    cy.get('[data-test=name]').type(username)
    cy.get('[data-test=password]').type(password)
    cy.get('form').contains('Log In').click()
    cy.url().should('contain', '/login-successful')
  })
})

### 5.How to achieve parallel run with cypress.
split spec file into different threads
1.npm i cypress-parallel
2.go to package.json file and inside script obj add "cy:parallel":"cypress-parallel -d Automation/cypress/e2e -t 2 -s test" 
>>d stands for directory and then specify test folder name.t stands for thread. s stands for script.
### 6.Handling alerts in cy
### 7.Error handling in cy
Below are the most common types of exceptions in Cypress:

1.Exception due to unexpected status code//503 service unavailable, expecting 2XX status code
cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login/1", { failOnStatusCode: false } ) 
}) 
2.Exception due to the failure of the test
cypress>e2e.js
 Cypress.on("fail", (err, runnable) => {
    cy.log(err.message);
    return false;
  });
  inside spec file
   cy.get(".error-message").should("be.visible")
3.Exception due to an uncaught exception in the application
cypress>e2e.js
Cypress.on("uncaught:exception", (e, runnable) => {
console.log("error", e);
console.log("runnable", runnable);
if (e.message.includes("Things went bad")) {
return false;
}
});
### 8. promise in cy
cy.get('button').then(($button) => {
  return new Cypress.Promise((resolve, reject) => {
    // do something custom here
  })
})
### 9.iframes
An iframe, or inline frame, is an HTML element that allows you to embed another HTML document within a web page
(TURNOFF CHROMEWEBSECURITY first)
1.Install the plugin npm install -D cypress-iframe
2.Inside spec file
A)Import it
import "cypress-iframe"
B)load the frame using class or id or attribute
cy.frameLoaded("[name='myframe']")//line 1,attribute of a iframe
cy.iframe().contains("About").click()//line 2,locator inside the iframe
### 10.how to get and set cookies 
1.cy.getCookies()
  .should('have.length', 1)
  .then((cookies) => {
    expect(cookies[0]).to.have.property('name', 'session_id')
  })

  2.cy.getCookie('fakeCookie1').should('have.property', 'value', '123ABC')

  3.cy.setCookie('session_id', '189jd09sufh33aaiidhf99d09')

  4.cy.clearCookies()

  5.cy.clearCookie('session_id')
  ### 11.test isolation
  Cypress automatically clears all cookies before each test to prevent state from being shared across tests when test isolation is enabled.

  ### 12.Report configs.

  ### 13.commands
1.npx cypress run --browser chrome --headed --spec "cypress\e2e\qualitest.cy.js"
  ### 14.task() and override()--->command.js and cypress.configs.js(Eg:-console.log/cy.log)
