Cypress.Commands.add('startGame', () => {
  cy.get('[data-cy=start]').as('startButton')
    .click();
});
