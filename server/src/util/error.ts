import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError
} from "@prisma/client/runtime/library";
import { responseJson } from "./helper";

export const responseError = (err: any) => {
  let errMessage = String.empty;
  let errStack = String.empty;
  if (
    err instanceof PrismaClientKnownRequestError ||
    err instanceof PrismaClientUnknownRequestError ||
    err instanceof PrismaClientRustPanicError ||
    err instanceof PrismaClientInitializationError
  ) {
    // Prisma Exception
    errMessage = err.message;
    errStack = err.stack?.replace(":", String.empty) || err.message;
  } else {
    // Default Exception
    const error = err as Error;
    errMessage = error.message;
    errStack = error.stack?.replace(":", String.empty) || error.message;
  }
  console.error(`[${Date.now()}] ${errStack}`);
  return responseJson<string>(false, errMessage);
};
