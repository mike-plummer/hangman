import { range } from 'lodash';

describe('timer', () => {
  beforeEach(() => {
    cy.clock()
      .visit('/')
      .get('[data-cy=timer]').as('timer')
      .get('[data-cy=start]').as('startButton');
  });

  it('initializes and waits', () => {
    cy.get('@timer')
      .should('have.text', '00:30')
      .tick(1000)
      .wait(0)
      .get('@timer')
      .should('have.text', '00:30');
  });

  it('should activate on game start', () => {
    cy.startGame()
      .tick(1000)
      .wait(0)
      .get('@timer')
      .should('have.text', '00:29');
  });

  it('should end game on timeout with loss', () => {
    cy.startGame()
      .then(() =>
        range(29, -1).reduce((chain, time) => {
            return chain.log(time).then(() =>
              cy.tick(1000)
                .wait(0)
                .get('@timer')
                .should('contain', `${time}`)
            );
          }, cy
        )
      );
  });
});