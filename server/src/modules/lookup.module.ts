import { Module } from "@nestjs/common";
import { DbService, PrismaService, LookupService } from "../services";
import { LookupController } from "../controllers";

@Module({
  controllers: [LookupController],
  providers: [LookupService, DbService, PrismaService]
})
export class LookupModule {}
