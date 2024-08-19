import { ServiceType } from "@/utils";
import { IProduct } from "@/models";
import { openApi } from "./index";

export const getPubProductsAsync = async (
  pageNum: number = 0,
  pageSize: number = 10
): Promise<IProduct[]> => {
  const url = `${ServiceType.Public}${ServiceType.Products}?page=${pageNum}&size=${pageSize}`;
  const response = await openApi.get(url);
  const { success, resource } = response.data;
  return resource ?? [];
};

export const getProductsAsync = async (
  pageNum: number = 0,
  pageSize: number = 10
): Promise<IProduct[]> => {
  const url = `${ServiceType.Products}?page=${pageNum}&size=${pageSize}`;
  const response = await openApi.get(url);
  const { success, resource } = response.data;
  return resource ?? [];
};

export const getProductAsync = async (id: string): Promise<IProduct> => {
  const url = `${ServiceType.Products}/${id}`;
  const response = await openApi.get(url);
  const { success, resource } = response.data;
  return resource ?? {};
};

export const deleteProductAsync = async (id: string) => {
  try {
    const url = `${ServiceType.Products}/${id}`;
    const response = await openApi.delete(url);
    const { success, resource } = response.data;
    return { success, resource };
  } catch (error) {
    const err = error as Error;
    return { success: false, resource: err.message };
  }
};

export const upsertProductAsync = async (payload: IProduct) => {
  try {
    const response = await openApi.post(ServiceType.Product, payload);
    const { success, resource } = response.data;
    return { success, resource };
  } catch (error) {
    const err = error as Error;
    return { success: false, resource: err.message };
  }
};
