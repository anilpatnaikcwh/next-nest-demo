/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const mockProduct = () => ({
  name: "Test Product 1001",
  price: 100,
  quantity: 10,
  photo: faker.image.urlLoremFlickr({ category: "nature" })
});

describe("Products API", () => {
  let id: string;
  const product = mockProduct();

  it("Get Products", () => {
    cy.request({
      method: "GET",
      url: "/products?page=0&size=10"
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.success).equals(true);
      expect(response.body.resource).length(10);
    });
  });

  it("Get Products Unsuccess", () => {
    cy.request({
      method: "GET",
      url: "/products?page=0&size=0"
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.success).equals(true);
      expect(response.body.resource).length(0);
    });
  });

  it("Create Product Unsuccess", () => {
    cy.request({
      method: "POST",
      url: "/product",
      body: {}
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body.success).equals(false);
      expect(response.body.resource).is.not.null;
    });
  });

  it("Create Product Success", () => {
    cy.request({
      method: "POST",
      url: "/product",
      body: product
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body.success).equals(true);
      expect(response.body.resource.id).not.null;
      id = response.body.resource.id;
    });
  });

  it("Get Product By ID", () => {
    cy.request({
      method: "GET",
      url: `/products/${id}`
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.success).equals(true);
      expect(response.body.resource.name).equals(product.name);
    });
  });

  it("Update Product By ID", () => {
    const updatedProduct = {
      ...mockProduct,
      id,
      name: faker.commerce.productName()
    };
    cy.request({
      method: "PUT",
      url: "/product",
      body: updatedProduct
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.success).equals(true);
      expect(response.body.resource.id).not.null;
    });
  });

  it("Delete Product By ID", () => {
    cy.request({
      method: "DELETE",
      url: `/products/${id}`
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.success).equals(true);
    });
  });
});
