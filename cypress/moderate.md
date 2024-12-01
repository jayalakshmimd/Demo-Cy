### 1.How can I click the hidden element?
pass the option {force : true}
describe('Tutorialspoint Test', function () {
   // test case
   it('Scenario 1', function (){
      // launch URL
      cy.visit("https://www.amazon.com/");
      //click hidden element
      cy.contains('Sign').click({force:true});
   });
});
### 2.How to access shadow DOM in Cypress?
The Shadow DOM is a browser feature that allows developers to encapsulate a portion of the DOM (Document Object Model) and style it separately from the rest of the document.
cy.get("shadow-signup-form").shadow().find('input[name="password"]').type("lambdatest@123");
### 3.What is the trigger function in Cypress?How can I use mouseover in Cypress?
The trigger() method enables you to programmatically fire events on elements. This is particularly useful for testing scenarios where standard Cypress commands like click() or type() might not be sufficient, such as when testing custom event listeners, animations, or interactions that rely on specific event properties.
Common events include mouseover, mousedown, mouseup, keydown, keyup.
eg:-
 cy.get('#hoverButton').trigger('mouseover');
 ### 4.How can I perform dragNdrop in Cypress?
 A)Using plugins
    i)Install--->npm install --save-dev cypress-drag-drop
    ii)Import---> import 'cypress-drag-drop';
    iii)Interact
describe('Drag and Drop with Plugin', () => {
  it('should drag and drop using the plugin', () => {
    cy.visit('https://example.com'); // Replace with your URL
    // Drag the element and drop it in the target area
    cy.get('.draggable-element') // Replace with your draggable element's selector
      .drag('.droppable-area'); // Replace with your droppable area selector
  });
});
B)Basic Drag and Drop
cy.visit("/your-page");
    cy.get("yourSelector")
      .trigger("mousedown", { button: 0 }, { force: true })
      .trigger("mousemove", 200, -200, { force: true })
    cy.get("yourTargetForDrop").click()
      .trigger("mouseup", { force: true });

### 5.How to perform API testing in Cypress?
A)cy.request
describe('API Testing', () => {
  it('should successfully retrieve user data', () => {
    cy.request('GET', '/users')
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('users')
      })
  })
})    
//post
cy.request({
  method: 'POST',
  url: 'https://api.example.com/data',  // The URL for the request
  body: { key: 'value' },              // The request payload (data to send)
  headers: {                          // Optional: Custom headers if needed
    'Authorization': 'Bearer your-token-here',
    'Content-Type': 'application/json'
  }
});


### 6.Difference between Patch and put. mention other http methods.
Patch-->Partial update to a resorce.
Put-->Replace entire resouce with the new representation.
Post-->it will create new data on the sever but will not modify any existing data.
GET-->retrieves ino or data from a specified resource.
Delete-->deletes a specified resource.
Example:-
Cy.request(
{
Method:get/post
Url:”/////“
Payload:{}
}).then((res)=>{
Expect
})

### 7.what is after:run event in cypress?
The after:run event fires after a run is finished. When running cypress via cypress open, the event will fire when closing a project.

Cleaning up test data (e.g., clearing databases or resetting server states).
Sending a final notification (e.g., sending test results via email).
Triggering additional reporting or integration (e.g., sending results to an external system).
Example:-
In cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        // results will look something like this when run via `cypress run`:
        // {
        //   totalDuration: 81,
        //   totalSuites: 0,
        //   totalTests: 1,
        //   totalFailed: 0,
        //   totalPassed: 1,
        //   totalPending: 0,
        //   totalSkipped: 0,
        //   browserName: 'electron',
        //   browserVersion: '59.0.3071.115',
        //   osName: 'darwin',
        //   osVersion: '16.7.0',
        //   cypressVersion: '3.1.0',
        //   config: {
        //     projectId: '1qv3w7',
        //     baseUrl: 'http://example.com',
        //     viewportWidth: 1000,
        //     viewportHeight: 660,
        //     // ... more properties...
        //   }
        //   // ... more properties...
        //   }
        // }
        if (results) {
          // results will be undefined in interactive mode
          console.log(
            results.totalPassed,
            'out of',
            results.totalTests,
            'passed'
          )
        }
      })
    },
  },
})

### 8.What is cy.task() functions in cypress?
Execute code in Node via the task plugin event.
Example:-
In cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },
})
In test file
// in test
cy.task('log', 'This will be output to the terminal')

### 9.What is cy.exec() functions in cypress?
Execute a system command.
Example:-
cy.intercept('POST', '/comments').as('postComment')
cy.get('.add-comment').click()
cy.wait('@postComment').then(({ response }) => {
  cy.exec(
    `echo ${JSON.stringify(response.body)} >cypress/fixtures/comment.json`
  )
  cy.fixture('comment.json').should('deep.eq', response.body)
})
### 10.multiple tab handling.
  cy.get('a[title="TutorialsPoint - Home"]')
      .invoke('removeAttr', 'target').click();
      // assertion to verify the current Url
          cy.url().should('include','https://www.tutorialspoint.com/index.htm');

### 11. Browser navigation
cy.go(-1); // Go back 1 step in history
cy.go(1);  // Go forward 1 step in history
or
cy.go('back');  // Equivalent to hitting the browser's back button
cy.go('forward');  // Equivalent to hitting the browser's forward button
cy.reload();
### 12.Table navigation
https://sahithigundu.medium.com/how-to-handle-webtable-in-cypress-automation-e843b7e0cc07
### 13.uploading a file
use selectFile
example 1:Uploading 1 file
cy.get('input[type=file]').selectFile('path/to/file.png')
>>>>>>>>>
example 2:Upload multiple file
cy.get('input[type=file]').selectFile([
  'file1.json',
  'file2.json',
  'file3.json',
])
>>>
example 3:upload along with drop down available like "upload from device","upload from icloud"
cy.get('button>input[type=file]').selectFile('file.json', { force: true })//selector is dropdown 
>>>>
example 4:uploadfile stored in fixture
cy.fixture('file.json', null).as('myFixture')
cy.get('input[type=file]').selectFile('@myFixture')
### 14.How to check url
  // Check if the URL is correct
    cy.url().should('eq', 'https://example.com/page/123');
    
    // Or check if it contains a part of the URL
    cy.url().should('include', '/page');
### 15.How to inspect disappearing elements
go to website, inspect the search box.(Red Bus app)
press ctrl+shift+p
type "focus", select "emulate a focused page"
type on search,click on select a ele
### 16.How to Override
use to override an existing built-in Cypress command or reserved internal function. Caution: this overrides it for Cypress as well and could impact how Cypress behaves.
cypress/support/commands.js
Cypress.Commands.overwrite('visit', (orig, url, options) => {})
### 17.url pattern matching-www.login/jaya/details/1234
cy.url().should("include", '/details').then(($url: string) => {
  let jobId = $url.match(/\w+$/); // Match the last word in the URL
  jobId = jobId.toString(); // Convert jobId array to string==>"1234"
})
### 18.a variety of exceptions or errors 
1.cy.click() failed because this element is not visible 
  cy.get('.submit-button').should('be.visible').click();
2.Uncaught Error: Cannot read property 'something' of undefined  
cy.get('.some-element').then((el) => {
  if (el) {
    // Safely access properties
    console.log(el.text());
  }
});
3.Timed out after waiting for 4000ms: expected to find element
cy.get('.my-element', { timeout: 10000 }).should('be.visible');
4.cy.type() failed because the input is disabled
cy.get('.my-input').should('not.be.disabled').type('Some text');
5.cy.visit() failed because the page could not be loaded
cy.visit('https://example.com');  // Check URL
6.cy.contains() failed because the element was not found
cy.contains('Submit').click();  // Ensure "Submit" text is available
7.Uncaught ReferenceError: cy is not defined
Ensure that Cypress commands are only executed within the test block (it() or beforeEach())




