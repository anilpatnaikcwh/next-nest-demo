import { Module } from "@nestjs/common";
import { DbService, PrismaService, ProductService } from "../services";
import { ProductController } from "../controllers";

@Module({
  controllers: [ProductController],
  providers: [ProductService, DbService, PrismaService]
})
export class ProductModule {}
