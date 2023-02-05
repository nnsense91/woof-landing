const API_PRODUCTS_URL = "https://dummyjson.com/products";
const API_WOOF_URL = "https://random.dog/woof.json";
const CONTAINS_IMAGE = /http.+\.(gif|jpg|png|jpeg)$/;

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  price: number
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface IProductResponse {
  limit: number;
  products: IProduct[];
  skip: 0;
  total: number;
}

interface IWoofResponse {
  fileSizeBytes: number;
  url: string;
}

export const fetchProducts = async (productsCount?: number): Promise<IProduct[]> => {
  const extraParams = productsCount ? `?limit=${productsCount}` : "";
  const url = API_PRODUCTS_URL + extraParams;

  const response = await fetch(url, {
    method: "GET"
  });

  const data = await response.json() as IProductResponse;

  return data.products;
};


export const requestWoofs = async (count = 10): Promise<string[]> => {
  const woofsData: string[] = [];

  while (woofsData.length < count) {
    const woofUrl = await fetchWoof();

    if (CONTAINS_IMAGE.test(woofUrl)) {
      woofsData.push(woofUrl);
    }
  }



  return woofsData;
}

export const fetchWoof = async () => {

  const response = await fetch(API_WOOF_URL, {
    method: "GET"
  });

  const data = await response.json() as IWoofResponse;
  return data.url;
}
