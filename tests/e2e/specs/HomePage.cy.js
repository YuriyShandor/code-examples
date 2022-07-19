// https://docs.cypress.io/api/table-of-contents

describe('Tests for Home Page', () => {
  it('Visits the app root url', () => {
    cy.viewport(1440, 900);
    cy.visit('/');
    cy.pause();
    cy.contains('.banner-ttl', 'Code Examples');
    cy.get('.global-menu-block').should('not.be.visible');
    cy.get('.global-menu-btn').should('exist');
    cy.get('.global-menu-btn').click();
    cy.get('.global-menu-block').should('be.visible');
    cy.get('.global-menu-btn').invoke('attr', 'class').should('contain', 'active');
    cy.get('.el-collapse-item__wrap').should('not.be.visible');
    cy.get('.global-menu-item div[role="tab"]').click({ multiple: true });
    cy.get('.el-collapse-item__wrap').should('be.visible');
  });
});
