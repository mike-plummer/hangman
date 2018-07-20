describe('play', () => {
  beforeEach(() => {
    cy.server()
      .route('GET', '**/dictionary', 'fixture:dictionary.json').as('dictionary')
      .clock()
      .visit('/')
      .get('[data-cy=start]').as('startButton')
      .get('[data-cy=guesses]').as('guesses')
      .get('[data-cy=board]').as('board')
      .get('[data-cy=lives').as('lives');
  });

  it('should reject keypresses before game start', () => {
    cy.get('@board')
      .type('a')
      .get('@guesses')
      .should('be.empty');
  });

  it('should accept valid keypresses after game start', () => {
    cy.startGame()
      .get('@board')
      .type('a')
      .get('@guesses')
      .should('have.text', 'A');
  });

  it('should reject duplicate keypresses', () => {
    cy.startGame()
      .get('@lives')
      .should('have.text', '5')
      .get('@board')
      .type('a')
      .get('@lives')
      .should('have.text', '4')
      .get('@board')
      .type('a')
      .get('@lives')
      .should('have.text', '4');
  });

  it('should end game after too many lives', () => {
    cy.startGame()
      .get('@board')
      .type('a')
      .type('b')
      .type('c')
      .type('d')
      .type('f')
      .get('@lives')
      .should('have.text', '0')
      .get('[data-cy=status').as('status')
      .should('have.text', 'Boo, you lost!');
  });

  it('should end game after word is guessed', () => {
    cy.startGame()
      .get('@board')
      .type('t')
      .type('e')
      .type('s')
      .get('[data-cy=status').as('status')
      .should('have.text', 'Yay, you won!');
  });
});