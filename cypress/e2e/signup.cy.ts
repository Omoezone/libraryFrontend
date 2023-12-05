
describe('template spec', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.visit('http://localhost:5173/')
  })
  it('a new user is created successfully', () => {

    cy.get('#hero_container').click();
    cy.get('.chakra-stack > .chakra-button:nth-child(5)').click();
    cy.get('.css-1kfnfg8').click();
    cy.get('.css-onkibi > path').click();
    cy.get('.css-1hx9me4:nth-child(4)').click();
    cy.get('.css-1kfnfg8').click();
    
  })
})

// etc, etc
