export {};

describe('deleteTestUser', () => {
    before(() => {
        cy.clearAllCookies()
    })
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    });

    it('deleteTestUser', () => {
        cy.get('.chakra-stack > .chakra-button:nth-child(4)').click();
        cy.get('[name="email"]').type("cypress@mail.dk")
        cy.get('[name="password"]').type("admin123")
        cy.get('[name="email"]').should('have.value', "cypress@mail.dk");
        cy.get('[name="password"]').should('have.value', "admin123");
        cy.get('[type="submit"]').click();

        cy.get('[src="assets/userLogo.svg"]').click();
    });
}); 