import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';
import './Filters.css';
import Arrow from '../assets/arrow.svg';
import Filter from '../assets/filters.svg';

function Filters() {
  const { filters, handleChangeMinPrice, handleChangeCategory } = useFilters();
  const minPriceId = useId();
  const categoryId = useId();

  return (
    <div className='filters__container'>
      <label
        className='filters__label'
        htmlFor='filterId'
        title='show/hide filters'
      >
        Filters <img src={Filter} alt='filter icon' />
      </label>
      <input className='filters__check' type='checkbox' id='filterId' hidden />
      <section className='filters'>
        <div className='filter'>
          <label htmlFor={minPriceId}>Price: </label>
          <span>💲{filters.minPrice}</span>

          <input
            type='range'
            id={minPriceId}
            min='0'
            max='1000'
            onChange={(e) => handleChangeMinPrice(e)}
            value={filters.minPrice}
          />
        </div>

        <div className='filter select__container'>
          <label htmlFor={categoryId}>Category: </label>
          <select
            className='select__box'
            onChange={(e) => handleChangeCategory(e)}
            id={categoryId}
          >
            <option value='all'>All</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value="men's clothing">Men clothing</option>
            <option value="women's clothing">Women clothing</option>
          </select>
          <div className='icon__container'>
            <img src={Arrow} alt='arrow icon' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Filters;
