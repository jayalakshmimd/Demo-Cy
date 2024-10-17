describe('Add Puma T-shirts to cart', () => {
    it('finds Puma T-shirts and adds to cart', () => {
      // Visit the website
      cy.visit('https://www.shoppersstack.com');
  
      // Click on Puma (assuming it's a link or button)
      cy.contains('Puma').click();
  
      // Verify we are on the Puma T-shirt page (you can check for a unique element on the page)
      cy.url().should('include', '/puma');
  
      // Find and click the 'Add to Cart' button for a Puma T-shirt
      // You might need to inspect and modify the selector as per the actual site structure
      cy.get('button').contains('Add to Cart').first().click();
  
      // Verify if the item has been added to the cart
      cy.get('.cart-count').should('have.text', '1');  // Adjust based on the cart indicator
    });
  });
  