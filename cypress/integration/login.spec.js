describe("Login", function() {
  it("clicking '1-week bootcamp' navigates to a correct url", function() {
    cy.visit("/login");

    cy.get('input[type="email"]').type("clone@facebook.com");
    cy.get('input[type="password"]').type("123");

    cy.get("button").click();
  });
});
