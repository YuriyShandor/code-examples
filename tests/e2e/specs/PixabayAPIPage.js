describe('Tests for Pixabay API Page', () => {
  it('Visits the Pixabay API Page', () => {
    cy.visit('/other/pixabay');
    cy.pause();
    cy.contains('.page-title', 'Pixabay Images');
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
