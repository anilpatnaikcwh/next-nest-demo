import { forwardRef, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "../controllers";
import { AppService } from "../services";
import { LookupModule, ProductModule } from "../modules";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    forwardRef(() => LookupModule),
    forwardRef(() => ProductModule)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
