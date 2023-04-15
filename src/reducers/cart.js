export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  SUBTRACT_FROM_CART: 'SUBTRACT_FROM_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

export function cartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SUBTRACT_FROM_CART: {
      const { id } = payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      const newState = structuredClone(state);
      if (newState[productInCartIndex].quantity > 1) {
        newState[productInCartIndex].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      } else {
        const newState = state.filter((item) => item.id !== id);
        updateLocalStorage(newState);
        return newState;
      }
    }
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      } else {
        const newState = [
          ...state,
          {
            ...payload,
            quantity: 1,
          },
        ];
        updateLocalStorage(newState);
        return newState;
      }
    }
    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = payload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }
  }
}
