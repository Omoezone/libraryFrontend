/*describe('deleteTestUser', () => {
    before(() => {
        cy.clearAllCookies()
    })
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    });

    it('deleteTestUser', () => {
        cy.get('.chakra-stack > .chakra-button:nth-child(4)').click();
        cy.get('[name="email"]').type("cypress@mail.dk")
        cy.get('[name="password"]').type("admin")

        cy.get('[name="email"]').should('have.value', "cypress@mail.dk");
        cy.get('[name="password"]').should('have.value', "admin");

        cy.get('[type="submit"]').click();
    });
});*/