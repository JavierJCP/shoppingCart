import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useProduct } from '../hooks/useProduct';
import { useEffect, useState } from 'react';
import { AddCart, RemoveCart } from '../components/icons.jsx';
import { useCart } from '../hooks/useCart';
import Loader from '../components/Loader';

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
    <div className='product'>
      <Navbar />

      <div className='product__container'>
        <div className='product__image'>
          <img src={product.image} alt={product.title} />
        </div>

        <div className='product__description'>
          <h2>{product.title}: </h2>

          <div>
            <p>{product.description}</p>
          </div>
          <div>
            <p>
              <strong>Price: 💲</strong> {product.price}
            </p>
          </div>
          <div>
            <button
              className={isProductInCart ? 'btn__removeCart' : 'btn__addCart'}
              onClick={() =>
                isProductInCart ? removeFromCart(product) : addToCart(product)
              }
            >
              {isProductInCart ? (
                <div className='product_btn'>
                  <h4>Remove From Cart</h4> <RemoveCart />
                </div>
              ) : (
                <div className='product_btn'>
                  <h4>Add To Cart </h4> <AddCart />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <h3 className='relative__title'>Relative Products</h3>

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

                <div>
                  <small>{item.title}</small>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Product;
