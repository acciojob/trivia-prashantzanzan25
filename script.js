//your code here
it('blockquote should have the correct quotation.', () => {
  cy.visit(baseUrl + "/main.html");
  cy.get('blockquote').contains('New Delhi is the capital of India and an administrative district of NCT Delhi');
});

