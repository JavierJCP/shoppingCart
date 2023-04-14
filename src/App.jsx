import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home.jsx';
import Product from './Page/Product.jsx';
import Cart from './Page/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
