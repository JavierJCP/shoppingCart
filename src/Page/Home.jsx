import Products from '../components/Products';
import products from '../mocks/products.json';
import { useFilters } from '../hooks/useFilters';
import Navbar from '../components/Navbar';
import './Home.css';

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Navbar />

      <Products products={filteredProducts} />
    </>
  );
}

export default App;
