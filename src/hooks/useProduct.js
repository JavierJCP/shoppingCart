import { useEffect, useState } from 'react';
import { searchProduct } from '../services/products';

export function useProduct({ id }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    searchProduct({ id }).then((newProduct) => setProduct(newProduct));
  }, [id]);

  return { product };
}
