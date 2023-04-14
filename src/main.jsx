import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FilterProvider } from './context/filters';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FilterProvider>
);
