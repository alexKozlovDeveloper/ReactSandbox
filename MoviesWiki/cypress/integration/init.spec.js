describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('test custom option list switching', () => {
    cy.get('.Search__search___3KHHb .CustomOptionList__container___3wRV4 .CustomOptionList__item___Mtoga:eq(0)').should('have.class', 'CustomOptionList__isactive___2mdRy');
    cy.get('.Search__search___3KHHb .CustomOptionList__container___3wRV4 .CustomOptionList__item___Mtoga:eq(1)').should('not.have.class', 'CustomOptionList__isactive___2mdRy');

    cy.get('.Search__search___3KHHb .CustomOptionList__container___3wRV4 .CustomOptionList__item___Mtoga:eq(1)').click();

    cy.get('.Search__search___3KHHb .CustomOptionList__container___3wRV4 .CustomOptionList__item___Mtoga:eq(0)').should('not.have.class', 'CustomOptionList__isactive___2mdRy');
    cy.get('.Search__search___3KHHb .CustomOptionList__container___3wRV4 .CustomOptionList__item___Mtoga:eq(1)').should('have.class', 'CustomOptionList__isactive___2mdRy');
  });
});
