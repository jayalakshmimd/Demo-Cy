/// <refence type=cypress/>
//https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7

//iframe,dasboard

//1.checkbox
cy.get(`input[type="checkbox"]`).check("apple")//"apple" from value attributes 
//or,to check all
cy.get(`input[type="checkbox"]`).check()
//or, to check multiple item
cy.get(`input[type="checkbox"]`).check(["apple","mango"])
//assertion(positive)
cy.get('input[type="checkbox"]')
  .check('apple')
  .should('be.checked'); // Asserts that the checkbox with value "apple" is checked

  cy.get('input[type="checkbox"]')
  .check() // Checks all checkboxes
  .each($checkbox => {
    cy.wrap($checkbox).should('be.checked'); // Asserts each checkbox is checked
  });

  cy.get('input[type="checkbox"]')
  .check(['apple', 'mango'])
  .each($checkbox => {
    cy.wrap($checkbox).should('be.checked'); // Asserts that the checked checkboxes are actually checked
  });
//assertion(negative)
cy.get('input[type="checkbox"]')
  .should('not.be.checked'); // Asserts that no checkbox is checked (if you expect none to be checked)
  
  cy.get('input[type="checkbox"]')
  .not('[value="apple"], [value="mango"]') // Selects the checkboxes that are not 'apple' or 'mango'
  .should('not.be.checked'); // Asserts they are not checked
  //Check values
  cy.get('input[type="checkbox"]')
  .check(['apple', 'mango'])
  .each($checkbox => {
    cy.wrap($checkbox).should('be.checked'); // Check if it's checked
    cy.wrap($checkbox).should('have.value', 'apple').or('have.value', 'mango'); // Check values if needed
  });
//RADIO Button
cy.get('input[type="radio"]')
  .check('apple') // Selects the radio button
  .should('be.checked') // Confirms the "apple" radio button is checked
  .siblings('input[type="radio"]') // Checks the other radio buttons
  .should('not.be.checked'); // Asserts that no other radio button is selected

