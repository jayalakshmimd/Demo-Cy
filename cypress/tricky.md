### 1.File upload in cypress.
### 2.Navigating through table.
### 3.What is the purpose of the cy.clearCookies() and cy.clearLocalStorage() commands in cy?
### 4.How to preserve cookies in cypress?
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
1.Install the plugin npm install -D cypress-iframe
2.Inside spec file
A)Import it
import "cypress-iframe"
B)load the frame using class or id or attribute
cy.frameLoaded("[name='myframe']")//line 1,attribute of a iframe
cy.iframe().contains("About").click()//line 2,locator inside the iframe
