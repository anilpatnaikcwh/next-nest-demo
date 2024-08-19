import { PrismaClient } from "@prisma/client";
import { categories, products } from "./db";

const prisma = new PrismaClient();

async function main() {
  // delete
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  // create
  await prisma.category.createMany({ data: categories });
  await prisma.product.createMany({ data: products });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
  });
