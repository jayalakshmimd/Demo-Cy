//https://docs.cypress.io/guides/references/assertions
/*1. DOM Element Assertions
Common Assertions:
should('be.visible'): Asserts that an element is visible on the page.
should('exist'): Asserts that an element exists in the DOM.
should('have.text', 'Some Text'): Asserts that an element has specific text.
should('have.attr', 'attribute', 'value'): Asserts that an element has a specific attribute with the given value.
should('have.class', 'class-name'): Asserts that an element has a specific class.
should('contain.text', 'Some Text'): Asserts that an element contains specific text, even if the element has more text content.
should('be.enabled'): Asserts that an input element is enabled.
should('have.value', 'some value'): Asserts that an input element has the correct value.

2.String Assertions
Common Assertions:
should('eq', 'expected string'): Asserts that the string is exactly equal to the expected string.
should('include', 'part of string'): Asserts that the string includes a substring.
should('match', /regex/): Asserts that the string matches a regular expression.



3.Number Assertions
Common Assertions:
should('eq', 42): Asserts that the number is exactly equal to 42.
should('be.gt', 50): Asserts that the number is greater than 50.
should('be.lt', 100): Asserts that the number is less than 100.
should('be.gte', 20): Asserts that the number is greater than or equal to 20.
should('be.lte', 75): Asserts that the number is less than or equal to 75.

4. Array Assertions
should('have.length', 3): Asserts that an array has a specific length.
should('include', 'element'): Asserts that an array contains a specific element.

5. Object Assertions
Common Assertions:
should('have.property', 'key', 'value'): Asserts that the object has a specific property with a given value.
should('include', { key: 'value' }): Asserts that the object includes a specific key-value pair.

6. Custom Command Assertions
Cypress.Commands.add('customAssertion', (selector) => {
  cy.get(selector).should('be.visible');
});


cy.customAssertion('#my-element');

7. Chaining Assertions
cy.get('button')
  .should('be.visible')
  .and('have.class', 'active')
  .and('have.text', 'Submit');

  8. Other Common Assertions
  should('not.exist'): Asserts that an element does not exist in the DOM.
should('not.be.visible'): Asserts that an element is not visible on the page.
should('have.length.greaterThan', 1): Asserts that an array or a set of elements has a length greater than 1.

*/