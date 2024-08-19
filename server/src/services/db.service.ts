import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { IProduct } from "../models";

@Injectable()
export class DbService {
  constructor(private prisma: PrismaService) {}

  async getPubProducts(page: number = 0, size: number = 10) {
    return await this.prisma.product.findMany({
      skip: page * size,
      take: size,
      where: { inactive: false },
      select: {
        name: true,
        price: true,
        photo: true
      },
      orderBy: { updatedAt: "desc" }
    });
  }

  async getProducts(page: number = 0, size: number = 10) {
    return await this.prisma.product.findMany({
      skip: page * size,
      take: size,
      where: { inactive: false },
      include: { category: true },
      orderBy: { updatedAt: "desc" }
    });
  }

  async getProduct(id: string) {
    return await this.prisma.product.findFirst({ where: { id } });
  }

  async deleteProduct(id: string) {
    return await this.prisma.product.update({ where: { id }, data: { inactive: true } });
  }

  async createProduct(product: IProduct) {
    return await this.prisma.product.create({
      data: {
        name: product.name || String.empty,
        price: product.price || 0,
        quantity: product.quantity || 0,
        categoryId: product.categoryId
      }
    });
  }

  async updateProduct(product: IProduct) {
    return await this.prisma.product.update({
      where: { id: product.id },
      data: {
        name: product.name || String.empty,
        price: product.price || 0,
        quantity: product.quantity || 0,
        categoryId: product.categoryId
      }
    });
  }

  async getCategories() {
    return await this.prisma.category.findMany({
      where: { inactive: false }
    });
  }
}
