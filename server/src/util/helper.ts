import { formatISO } from "date-fns";
import { IResponse } from "../models";

export const responseJson = <T>(success?: boolean, resource?: T) => {
  const response: IResponse<T> = { success, resource };
  return response;
};

export const formatDate = (d: Date | string) => formatISO(new Date(d), { representation: "date" });
