export {};
describe('template spec', () => {
  before(() => {
    cy.clearAllCookies()
    cy.visit('http://localhost:5173/')
  });
  
  it('a new user is created successfully', () => {
    cy.get('.chakra-stack > .chakra-button:nth-child(5)').click();

    cy.get('[name="first_name"]').type("cypress_first")
    cy.get('[name="last_name"]').type("cypress_last")
    cy.get('[name="email"]').type("cypress@mail.dk")
    cy.get('[name="password"]').type("admin")
    
    cy.get('[name="first_name"]').should('have.value', "cypress_first");
    cy.get('[name="last_name"]').should('have.value', "cypress_last");
    cy.get('[name="email"]').should('have.value', "cypress@mail.dk");
    cy.get('[name="password"]').should('have.value', "admin");

    // cy.get('[type="submit"]').click();
  })
})

// etc, etc
