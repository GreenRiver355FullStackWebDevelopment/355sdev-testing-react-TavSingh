describe('Submit a Rating!', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Creates a booking", () => {
    cy.get('[data-cy="input-name"]').type('Pizza House');
    cy.get('[data-cy="input-address"]').type('123r PL NE, Seattle, USA');
    cy.get('[data-cy="input-phone"]').type('111-123-1234');
    cy.get('[data-cy="input-cuisine"]').type('Italian');
    cy.get('[data-cy="input-rating"]').type('5');
    
    cy.get('[data-cy="form-submit"]').submit();

    cy.get('[data-cy').contains('h2', 'Pizza House').parent().within(() => {
      cy.contains('li', '123r PL NE, Seattle, USA').should('be.visible');
      cy.contains('li', '111-123-1234').should('be.visible');
      cy.contains('li', 'Italian').should('be.visible');
      cy.contains('li', '5').should('be.visible');
    });
  });
  

});