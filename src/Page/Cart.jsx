import Navbar from '../components/Navbar';
import { useCart } from '../hooks/useCart';
import { ClearCart } from '../components/icons.jsx';

function Cart() {
  const { cart, clearCart, addToCart, subtractFromCart } = useCart();

  let total = 0;

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '100px' }} className='cart_container'>
        {cart?.length > 0 ? (
          <ul className='cart__list'>
            {cart?.map((cart) => {
              total += cart.quantity * cart.price * 100;
              return (
                <li key={cart.id} className='cart__item'>
                  <img src={cart.image} alt={cart.title} />
                  <div>
                    <div>
                      <strong>{cart.title}</strong> <br />
                      <small className='quantity'>
                        <div>
                          <p>Quantity:</p>
                        </div>
                        <div>
                          <button title='add' onClick={() => addToCart(cart)}>
                            +
                          </button>
                          <span>{cart.quantity}</span>
                          <button
                            title='subtract'
                            onClick={() => subtractFromCart(cart)}
                          >
                            -
                          </button>
                        </div>
                      </small>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>No products in cart</h3>
        )}

        <aside className='summary__container'>
          <div className='list__products'>
            <h1 className='summary__title'>Order Summary</h1>
            <ul className='summary'>
              {cart?.map((item) => (
                <li key={item.id} className='item'>
                  <strong>{item.title}</strong> <br />
                  <span>SubTotal: 💰 {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='total'>
            <h2>Total: 💲 {total / 100}</h2>
          </div>

          <button
            className='cart__clear'
            onClick={() => clearCart()}
            title='clear cart'
          >
            Clear Cart: <ClearCart />
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
