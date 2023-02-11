import { getWoofsFromCookies, saveWoofsToCookies } from "../helpers/cookies";
import { TProduct, TWoof } from "../models";
import { urlContainImage } from "../helpers/regexp";
import {fetchData} from "../helpers/fetch";
import { setProductsToLs } from "../helpers/localStorage";

const API_PRODUCTS_URL = "https://dummyjson.com/products";
const API_WOOF_URL = "https://random.dog/woof.json";
const DEFAULT_WOOF_SLIDES = 10;



interface IProductResponse {
  limit: number;
  products: TProduct[];
  skip: 0;
  total: number;
}

interface IWoofResponse {
  fileSizeBytes: number;
  url: string;
}

const fetchProducts = async (productsCount?: number): Promise<TProduct[]> => {
  const extraParams = productsCount ? `?limit=${productsCount}` : "";
  const url = API_PRODUCTS_URL + extraParams;

  const data = await fetchData(url) as IProductResponse;
  setProductsToLs(data.products)

  return data.products;
};

const fetchWoof = async (): Promise<TWoof> => {
  const data = await fetchData(API_WOOF_URL) as IWoofResponse;

  return data.url;
}


const fetchWoofs = async (count = DEFAULT_WOOF_SLIDES): Promise<TWoof[]> => {
  const arrFromCookies = getWoofsFromCookies();

  if (arrFromCookies) return arrFromCookies;

  const woofsData: string[] = [];

  while (woofsData.length < count) {
    const woofUrl = await fetchWoof();

    if (urlContainImage(woofUrl)) {
      woofsData.push(woofUrl);
    }
  }

  saveWoofsToCookies(woofsData)

  return woofsData;
}

export { fetchWoofs, fetchProducts }
