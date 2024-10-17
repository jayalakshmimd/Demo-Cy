describe("Orange App",()=>{
   it("Test Case 01",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get(".orangehrm-login-error>div>p").eq(0).then(($ele)=>{//instead of nth child
    let userName=$ele.text().split(" ")[2]
    cy.get(`input[name="username"]`).type(userName) 
})
cy.get(".orangehrm-login-error>div>p").eq(1).then(($ele)=>{  
    let password=$ele.text().split(" ")[2] 
    cy.get(`input[name="password"]`).type(password)
})
   })
})
//first,last,parent,sibling
/*
<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
*/

it('should select first, last, and sibling elements', () => {
    // First element
    cy.get('.list li')
      .first()
      .should('have.text', 'Item 1');  // Assert first element has the correct text
  
    // Last element
    cy.get('.list li')
      .last()
      .should('have.text', 'Item 4');  // Assert last element has the correct text
  
    // Sibling elements
    cy.get('.list li').eq(1)  // Select the second <li> element (Item 2)
      .siblings()              // Get all siblings of Item 2 (Item 1, Item 3, Item 4)
      .should('have.length', 3);  // Assert that there are 3 siblings
  });
  