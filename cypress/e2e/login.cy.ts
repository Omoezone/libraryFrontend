export {};

describe('login', () => {
  before(() => {
    cy.clearAllCookies()
    }) 
  beforeEach(() => {
    cy.visit('https://icy-grass-099c31603.4.azurestaticapps.net')
  });
    
    it('an already existing user, should be able to login successfull', () => {
      cy.get('.chakra-stack > .chakra-button:nth-child(4)').click();
      cy.get('[name="email"]').type("cypress@mail.dk")
      cy.get('[name="password"]').type("admin123")

      cy.get('[name="email"]').should('have.value', "cypress@mail.dk");
      cy.get('[name="password"]').should('have.value', "admin123");

      cy.get('[type="submit"]').click();
      cy.wait(2000)

      cy.get('#slider2 > .inline-block:nth-child(2) .chakra-image').click();
      cy.get('.css-1q7jsje:nth-child(2)').click();
      cy.get('.css-1eekzu2:nth-child(4) > path').click();
      cy.wait(2000)
    })

    it('favour an author', () => {
      cy.get('.chakra-stack > .chakra-button:nth-child(4)').click();
      cy.get('[name="email"]').type("cypress@mail.dk")
      cy.get('[name="password"]').type("admin123")
      cy.get('[name="email"]').should('have.value', "cypress@mail.dk");
      cy.get('[name="password"]').should('have.value', "admin123");
      cy.get('[type="submit"]').click();
      cy.wait(2000)
      cy.get('#slider2 > .inline-block:nth-child(3) .chakra-image').click();
      cy.get('.css-1q7jsje:nth-child(2)').click();
      cy.get('.chakra-link').click();
      cy.wait(2000)
    })

    it("borrow a book", () => {
      cy.get('.chakra-stack > .chakra-button:nth-child(4)').click();
      cy.get('[name="email"]').type("cypress@mail.dk")
      cy.get('[name="password"]').type("admin123")
      cy.get('[name="email"]').should('have.value', "cypress@mail.dk");
      cy.get('[name="password"]').should('have.value', "admin123");
      cy.get('[type="submit"]').click();
      cy.wait(2000)
      cy.get('#slider2 > .inline-block:nth-child(4) .chakra-image').click();
      cy.get('.css-rq5im').click();
      cy.get('.css-rq5im').click();
      cy.wait(2000)
    });

    it('the tags are used to find a specific book correctly', () => {
      cy.contains('.chakra-button', 'Fantasy').click();
      cy.wait(1000)
      cy.contains('.chakra-button', 'Non-Fiction').click();
      cy.wait(1000)
      cy.contains('.chakra-button', 'All').click();
    })
  })

