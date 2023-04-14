import { useEffect, useState } from 'react';
import { searchProducts } from '../services/products';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const newProducts = await searchProducts();
      setProducts(newProducts);
    } catch (error) {
      throw new Error('get products error!!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading };
}
