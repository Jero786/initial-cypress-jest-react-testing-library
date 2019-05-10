describe('Home Page', () => {
  it('should display default title', () => {
    cy.visit('/').getByText(/HELLO BRISA/i);
  })
});
