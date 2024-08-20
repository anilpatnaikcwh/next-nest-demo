import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Put
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NavType, TagType } from "../util";
import { IProduct } from "../models";
import { ProductService } from "../services";

@Controller()
@ApiTags(TagType.Product)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(`${NavType.Public}${NavType.Products}`)
  async getPubProductsAsync(
    @Query("page", ParseIntPipe) page?: number,
    @Query("size", ParseIntPipe) size?: number
  ) {
    return await this.productService.getPubProductsAsync(page, size);
  }

  @Get(NavType.Products)
  async getProductsAsync(
    @Query("page", ParseIntPipe) page?: number,
    @Query("size", ParseIntPipe) size?: number
  ) {
    return await this.productService.getProductsAsync(page, size);
  }

  @Get(`${NavType.Products}/:id`)
  async getProductAsync(@Param("id") id: string) {
    return await this.productService.getProductAsync(id);
  }

  @Post(NavType.Product)
  async createProductAsync(@Body() payload: IProduct) {
    return await this.productService.createProductAsync(payload);
  }

  @Put(NavType.Product)
  async updateProductAsync(@Body() payload: IProduct) {
    return await this.productService.updateProductAsync(payload);
  }

  @Delete(`${NavType.Products}/:id`)
  async deleteProductAsync(@Param("id") id: string) {
    return await this.productService.deleteProductAsync(id);
  }
}
