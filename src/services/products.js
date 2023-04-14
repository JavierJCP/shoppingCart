export async function searchProduct({ id }) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}
