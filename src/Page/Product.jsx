import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useProduct } from '../hooks/useProduct';
import { useEffect, useState } from 'react';
import './Product.css';
import { AddCart, RemoveCart } from '../components/icons.jsx';
import { useCart } from '../hooks/useCart';

function Product() {
  const { id } = useParams();
  const { product } = useProduct({ id });
  const [similar, setSimilar] = useState([]);
  const { addToCart, cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const isProductInCart = checkProductInCart(product);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((json) => setSimilar(json));
  }, [product]);

  return (
    <div>
      <Navbar />
      <h1 style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>Description</h1>
      <div className='product__container'>
        <div className='product__title'>
          <h4 style={{ padding: '.5rem 0 2rem 0' }}>{product.title}</h4>
          <img src={product.image} alt={product.title} />
        </div>

        <div className='product__description'>
          <div>
            <p>{product.description}</p>
          </div>
          <div>
            <p>
              <strong>Price: 💲</strong> {product.price}
            </p>
          </div>
          <div className='product__btn'>
            <strong>
              {isProductInCart ? 'Remove from cart: ' : 'Add To Cart: '}
            </strong>
            <button
              className={isProductInCart ? 'product__remove' : 'product__add'}
              onClick={() =>
                isProductInCart ? removeFromCart(product) : addToCart(product)
              }
            >
              {isProductInCart ? <RemoveCart /> : <AddCart />}
            </button>
          </div>
        </div>
      </div>

      <h1 style={{ padding: '2rem 0' }}>Relative Products</h1>

      <div className='similar__container'>
        {similar?.length > 0 ? (
          <ul className='similar__list'>
            {similar?.map((item) => (
              <li key={item.id} className='similar__item'>
                <img
                  title={item.title}
                  src={item.image}
                  alt={item.title}
                  onClick={() => navigate(`/product/${item.id}`)}
                />
                <br />
              </li>
            ))}
          </ul>
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </div>
  );
}

export default Product;
