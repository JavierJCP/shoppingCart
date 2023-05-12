import { Link, useNavigate } from 'react-router-dom';
import MenuLogo from '../assets/menuIcon.svg';
import { useCart } from '../hooks/useCart';
import Home from '../assets/home.svg';
import { CartIcon } from './icons.jsx';
import Logo from '../assets/logo.png';

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className='nav'>
        <div className='nav__container'>
          <h1 className='nav__logo' onClick={() => navigate('/')}>
            Shopping Cart{' '}
            <img src={Logo} alt="branch's mark" style={{ width: '50px' }} />
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
