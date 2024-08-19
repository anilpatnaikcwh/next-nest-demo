import { ServiceType } from "@/utils";
import { ILookup } from "@/models";
import { openApi } from "./index";

export const getCategoriesAsync = async (): Promise<ILookup[]> => {
  const response = await openApi.get(ServiceType.Categories);
  return response?.data?.resource?.map((item: any) => {
    return {
      id: item.id,
      name: item.name
    };
  });
};
