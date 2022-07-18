describe('Tests for Pixabay API Page', () => {
  it('Visits the Pixabay API Page', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:8080/#/other/pixabay');
    cy.pause();
    cy.contains('.page-title', 'Pixabay Images');
    cy.get('.pixabay-page-heading__tab').should(($lis) => {
      expect($lis).to.have.length(2);
      expect($lis.eq(0)).to.contain('Selected Images');
      expect($lis.eq(1)).to.contain('Find New Images');
      expect($lis.eq(1)).to.have.class('selected');
    });
    cy.get('.pixabay-search__input').should('be.visible');
    cy.get('.pixabay-search__input').should('have.value', '');
    cy.get('.pixabay-page-images-block').should('be.empty');
    cy.get('.pixabay-page-heading__tab:first').click();
    cy.get('.pixabay-search__input').should('not.exist');
    cy.contains('.pixabay-page-images-block__empty-text', 'For now, you have no selected images, please find some images and select them.');
    cy.get('.pixabay-page-heading__tab:last').click();
    cy.get('.pixabay-search__input').should('exist');
    cy.get('.pixabay-search__input').type('catfish');
    cy.get('.pixabay-search__input').should('have.value', 'catfish');
    cy.get('.pixabay-search__input').blur();
    cy.get('.pixabay-image-block').should('exist');
    cy.get('.pixabay-image-block__actions').should('not.be.visible');
    cy.pause();
    cy.get('.pixabay-image-block').each(($el, index, $list) => {
      if (index % 3 === 0) {
        // cy.wrap($el).trigger('mouseover');
        cy.wrap($el).find('.pixabay-image-block__actions').invoke('css', 'opacity', '1');
        cy.wrap($el).find('.pixabay-image-block__actions').should('be.visible');
        cy.wrap($el).find('.pixabay-image-block__button').should('contain.text', 'Add to Selected');
        cy.wrap($el).find('.pixabay-image-block__button').click();
        cy.wrap($el).find('.pixabay-image-block__button').should('contain.text', 'Remove from Selected');
        cy.wrap($el).find('.pixabay-image-block__actions').invoke('css', 'opacity', '0');
      }
    });
    cy.pause();
    cy.get('.pixabay-page-heading__tab:first').click();
    cy.get('.pixabay-search__input').should('not.exist');
    cy.get('.pixabay-page-images-block__empty-text').should('not.exist');
    cy.get('.pixabay-image-block').should('exist');
    // let selectedImagesQuantity = 0;
    // cy.get('.pixabay-image-block').then(($elements) => {
    //   selectedImagesQuantity = $elements.length;
    // });
    // console.log('selectedImagesQuantity', selectedImagesQuantity);
    cy.get('.pixabay-image-block').each(($el, index, $list) => {
      if (index % 2 === 0) {
        // cy.wrap($el).trigger('mouseover');
        cy.wrap($el).find('.pixabay-image-block__actions').invoke('css', 'opacity', '1');
        cy.wrap($el).find('.pixabay-image-block__actions').should('be.visible');
        cy.wrap($el).find('.pixabay-image-block__button').should('contain.text', 'Remove from Selected');
        cy.wrap($el).find('.pixabay-image-block__button').click();
      }
    });
    cy.get('.pixabay-image-block').its('length').should('be.lessThan', 11);
    cy.pause();
    cy.get('.pixabay-page-heading__tab:last').click();
    cy.get('.pixabay-search__input').should('exist');
    cy.get('.pixabay-page-images-block').should('be.empty');
    cy.get('.pixabay-search__input').type('kjdgkjghfkdjhgkdfjhgfdkhgd');
    cy.get('.pixabay-search__input').should('have.value', 'kjdgkjghfkdjhgkdfjhgfdkhgd');
    cy.get('.pixabay-search__input').blur();
    cy.contains('.pixabay-page-images-block__empty-text', 'Please, enter the correct search text.');
    cy.get('.pixabay-image-block').should('not.exist');
  });
});
