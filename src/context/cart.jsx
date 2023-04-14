import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    } else {
      return setCart((prevState) => [
        ...prevState,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const subtractFromCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    const newCart = structuredClone(cart);
    if (newCart[productInCartIndex].quantity > 1) {
      newCart[productInCartIndex].quantity -= 1;
      return setCart(newCart);
    } else removeFromCart(product);
  };

  const removeFromCart = (product) => {
    return setCart((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        subtractFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
