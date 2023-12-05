describe('login', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.visit('http://localhost:5173/')
    }) 

    it('an already existing user, should be able to login successfull', () => {
      cy.get('.chakra-stack > .chakra-button:nth-child(4)').click();
      cy.get('[name="email"]').type("cypress@mail.dk")
      cy.get('[name="password"]').type("test")

      cy.get('[name="email"]').should('have.value', "cypress@mail.dk");
      cy.get('[name="password"]').should('have.value', "test");

      cy.get('[type="submit"]').click();
    })
  })
  
  