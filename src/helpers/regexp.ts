const CONTAINS_IMAGE = /http.+\.(jpg|png|jpeg)$/;

export const urlContainImage = (url: string): boolean => {
  return CONTAINS_IMAGE.test(url);
}