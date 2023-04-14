import Products from '../components/Products';
import { useFilters } from '../hooks/useFilters';
import Navbar from '../components/Navbar';
import { useProducts } from '../hooks/useProducts';
import Loader from '../components/Loader';

function App() {
  const { products, loading } = useProducts();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : <Products products={filteredProducts} />}
    </>
  );
}

export default App;
