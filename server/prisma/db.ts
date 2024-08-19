import { faker } from "@faker-js/faker";

export const categories = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.product()
}));

export const products = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price({ min: 10, max: 250 })),
  quantity: faker.number.int({ min: 0, max: 50 }),
  photo: faker.image.urlLoremFlickr({ category: "nature" })
}));
