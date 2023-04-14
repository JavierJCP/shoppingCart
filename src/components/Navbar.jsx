import { Link } from 'react-router-dom';
import MenuLogo from '../assets/menuIcon.svg';
import './Navbar.css';
import { useCart } from '../hooks/useCart';
import Home from '../assets/home.svg';
import Logo from '../assets/cartLogo.svg';
import { CartIcon } from './icons.jsx';

function Navbar() {
  const { cart } = useCart();

  return (
    <>
      <div className='nav'>
        <div className='nav__container'>
          <h1 className='nav__logo'>
            Shopping Cart <img src={Logo} alt='cart logo' />
          </h1>

          <label htmlFor='menu' className='nav__label'>
            <img src={MenuLogo} alt='menu icon' className='nav__img' />
          </label>
          <input className='nav__input' type='checkbox' id='menu' hidden />

          <div className='nav__menu'>
            <Link className='nav__item' to='/'>
              <img src={Home} alt='home icon' />
            </Link>
            <Link className='nav__item icon' to='/cart'>
              <div className='cart__icon'>
                <CartIcon />
                <span>{cart?.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
