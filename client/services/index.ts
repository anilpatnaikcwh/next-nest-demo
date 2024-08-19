import axios from "axios";
import { API } from "@/utils";

const openApi = axios.create({ baseURL: API });

export * from "./lookup.service";
export * from "./product.service";
export { openApi };
