import { NestFactory } from "@nestjs/core";
import { RequestMethod } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as fs from "fs";
import { constants, NavType, TagType } from "./util";
import { AppModule, LookupModule, ProductModule } from "./modules";

async function bootstrap() {
  // api config
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: fs.readFileSync("certificates/localhost-key.pem"),
      cert: fs.readFileSync("certificates/localhost.pem")
    }
  });
  // ignore routes from api prefix
  app.setGlobalPrefix(constants.API_PREFIX, {
    exclude: [
      { path: NavType.Health, method: RequestMethod.GET },
      { path: NavType.Swagger, method: RequestMethod.GET }
    ]
  });
  app.enableCors();
  // #region swagger config
  const config = new DocumentBuilder()
    .setTitle(constants.API_PREFIX.toUpperCase())
    .setVersion("1.0.0")
    .addServer(`https://localhost:${constants.API_PORT}/${constants.API_PREFIX}`)
    .addTag(TagType.Lookup)
    .addTag(TagType.Product)
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true,
    include: [LookupModule, ProductModule]
  });
  SwaggerModule.setup(NavType.Swagger, app, document);
  // #endregion
  await app.listen(constants.API_PORT);
}
bootstrap();
