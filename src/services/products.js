export async function searchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const json = await res.json();
  return json;
}

export async function searchProduct({ id }) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}
