import { Injectable } from "@nestjs/common";
import { ILookup } from "../models";
import { helper } from "../util";
import { DbService } from "./db.service";

@Injectable()
export class LookupService {
  constructor(private db: DbService) {}

  async getCategoriesAsync() {
    const dbCategories = await this.db.getCategories();
    const categories: ILookup[] = dbCategories?.map(x => {
      return {
        id: x?.id,
        name: x?.name
      };
    });
    return helper.responseJson<ILookup[]>(true, categories);
  }
}
