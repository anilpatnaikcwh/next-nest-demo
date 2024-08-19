import { Controller, Get } from "@nestjs/common";
import { NavType } from "../util";
import { AppService } from "../services";

@Controller(NavType.Health)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }
}
