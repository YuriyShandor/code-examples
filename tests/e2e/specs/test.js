// https://docs.cypress.io/api/table-of-contents

describe('Tests for Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('.banner-ttl', 'Code Examples');
    cy.pause();
    cy.get('.global-menu-block').should('not.be.visible');
    cy.get('.global-menu-btn').should('exist');
    cy.get('.global-menu-btn').click();
    cy.get('.global-menu-block').should('be.visible');
    cy.get('.global-menu-btn').invoke('attr', 'class').should('contain', 'active');
  });
});
