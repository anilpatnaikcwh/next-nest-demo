import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NavType, TagType } from "../util";
import { LookupService } from "../services";

@Controller()
@ApiTags(TagType.Lookup)
export class LookupController {
  constructor(private readonly lookupService: LookupService) {}

  @Get(NavType.Categories)
  async getCategoriesAsync() {
    return await this.lookupService.getCategoriesAsync();
  }
}
