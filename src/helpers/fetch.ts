export const fetchData = async (url: string, method: string = "GET"): Promise<unknown> => {
  try {
    const response = await fetch(url, {
      method
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.error(e); // some error handling
    throw new Error('Something went wrong');
  }
};