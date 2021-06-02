describe('initial value', () => {
    beforeEach(() => {
      cy.visit('/javascript-racingcar/');
    });
    it('total value', () => {
      cy.get('.w-100[type=text]').type('holee')
      cy.get('.w-100[type=text]').should('have.value', 'holee');
      cy.get('.w-100[type=number]').type(1)
      cy.get('.w-100[type=number]').should('have.value', 1);
    });
  });
  