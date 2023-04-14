import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import { useCart } from '../hooks/useCart';
import Filters from './Filters';
import Search from '../assets/search.svg';
import { AddCart, RemoveCart } from './icons.jsx';

function Products({ products }) {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleChangeSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className='product__filters'>
        <form className='products__form' onSubmit={handleSubmit}>
          <input
            className='products__input'
            type='text'
            onChange={handleChangeSearch}
            placeholder='Search...'
          />
          <div className='search__icon'>
            <img src={Search} alt='' />
          </div>
        </form>

        <Filters />
      </div>
      {products?.length > 0 ? (
        <ul className='products'>
          {products
            .filter((item) => {
              return search.toLocaleLowerCase() === ''
                ? item
                : item.title.toLocaleLowerCase().includes(search);
            })
            .map((product) => {
              const isProductInCart = checkProductInCart(product);
              return (
                <li className='product' key={product.id}>
                  <div onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.image} alt={product.title} />
                    <div>
                      <strong>{product.title}</strong>{' '}
                      <span>💲{product.price}</span>
                    </div>
                  </div>

                  <div
                    title='add/remove from cart'
                    onClick={() =>
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }
                  >
                    <button
                      className={
                        isProductInCart ? 'btn__removeCart' : 'btn__addCart'
                      }
                    >
                      {isProductInCart ? <RemoveCart /> : <AddCart />}
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      ) : (
        <h3>No products found</h3>
      )}
    </main>
  );
}

export default Products;
