import { useContext } from 'react';
import { CartContext } from '../context/cart';

export function useCart() {
  const cartContext = useContext(CartContext);

  if (cartContext === undefined) {
    throw new Error('you need a provider to use cart context');
  }

  return cartContext;
}
