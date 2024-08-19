export interface IResponse<T> {
  success?: boolean;
  resource?: T;
}

export interface ILookup {
  id?: string;
  name?: string;
  code?: string;
}

export interface IProduct {
  id?: string;
  name?: string;
  price?: number;
  quantity?: number;
  photo?: string;
  categoryId?: string;
  lastUpdated?: string;
}
