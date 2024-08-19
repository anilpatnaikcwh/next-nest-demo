import { Injectable } from "@nestjs/common";
import { IProduct } from "../models";
import { helper } from "../util";
import { DbService } from "./db.service";

@Injectable()
export class ProductService {
  constructor(private db: DbService) {}

  async getPubProductsAsync(page: number = 0, size: number = 10) {
    const dbProducts = await this.db.getPubProducts(page, size);
    const products: IProduct[] = dbProducts?.map(x => {
      return {
        name: x?.name,
        price: x?.price,
        photo: x?.photo || String.empty
      };
    });
    return helper.responseJson<IProduct[]>(true, products);
  }

  async getProductsAsync(page: number = 0, size: number = 10) {
    const dbProducts = await this.db.getProducts(page, size);
    const products: IProduct[] = dbProducts?.map(x => {
      return {
        id: x?.id,
        name: x?.name,
        price: x?.price,
        quantity: x?.quantity,
        photo: x?.photo || String.empty,
        categoryId: x?.categoryId || String.empty,
        lastUpdated: x?.updatedAt ? helper.formatDate(x?.updatedAt) : String.empty
      };
    });
    return helper.responseJson<IProduct[]>(true, products);
  }

  async getProductAsync(id: string) {
    const dbProduct = await this.db.getProduct(id);
    const product: IProduct = {
      id: dbProduct?.id,
      name: dbProduct?.name,
      price: dbProduct?.price,
      quantity: dbProduct?.quantity,
      photo: dbProduct?.photo || String.empty,
      categoryId: dbProduct?.categoryId || String.empty,
      lastUpdated: dbProduct?.updatedAt ? helper.formatDate(dbProduct?.updatedAt) : String.empty
    };
    return helper.responseJson<IProduct>(true, product);
  }

  async createProductAsync(product: IProduct) {
    const dbProduct = await this.db.createProduct(product);
    return helper.responseJson<IProduct>(true, { id: dbProduct.id });
  }

  async updateProductAsync(product: IProduct) {
    const dbProduct = await this.db.updateProduct(product);
    return helper.responseJson<IProduct>(true, { id: dbProduct.id });
  }

  async deleteProductAsync(id: string) {
    await this.db.deleteProduct(id);
    return helper.responseJson<string>(true, "Product has been deleted!");
  }
}
