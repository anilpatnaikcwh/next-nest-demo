/// <reference types="cypress" />
describe("Categories API", () => {
  it("Get Categories", () => {
    cy.request({
      method: "GET",
      url: "/categories"
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.success).equals(true);
      expect(response.body.resource).length(10);
    });
  });
});
