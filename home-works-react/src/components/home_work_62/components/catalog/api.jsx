export async function getProductList() {
  const dataFetch = await fetch(
    "https://61f5558a62f1e300173c40f3.mockapi.io/products"
  );
  const status = dataFetch.status;

  if (status === 200) {
    return await dataFetch.json();
  }
  const errorText = await dataFetch.text();

  throw new Error(errorText);
}

export async function getCategoriesList() {
  const dataFetch = await fetch(
    "https://61f5558a62f1e300173c40f3.mockapi.io/categories"
  );
  const status = dataFetch.status;

  if (status === 200) {
    return await dataFetch.json();
  }
  const errorText = await dataFetch.text();

  throw new Error(errorText);
}
