import { TProduct } from "../models";

enum LS_KEYS {
  products = "products"
}

export const getProductsFromLs = (): TProduct[] | null => {
  const products = localStorage.getItem(LS_KEYS.products)

  if (!products) return null;

  return JSON.parse(products) as TProduct[];
}

export const setProductsToLs = (products: TProduct[]): void => {
  localStorage.setItem(LS_KEYS.products, JSON.stringify(products));
}